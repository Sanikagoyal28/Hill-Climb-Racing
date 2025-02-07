let canvas = document.getElementById("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let c = canvas.getContext("2d");

/*TRACK*/

c.fillStyle = "#6495ED";

const trigno = (a, b, c) => {
  return a + b + (a - b) * Math.cos(Math.PI * c);
};
let layers = [];

function land(x) {
  x = x / 100;
  layers.push(Math.random() * 40);
  return trigno(layers[Math.floor(x)], layers[Math.ceil(x)], x - Math.floor(x));
}

/*CAR*/
let cx = canvas.getContext("2d");
let img = new Image();
let carMove = new (function () {
  this.car = new Image();
  this.car.src = "images/car.png";
  let x = 0;
  let y = 0;
  let ys = 0;
  this.cdraw = function () {
    let d = canvas.height + 65 - img.height - land(this.x + position);
    if (d > y)
      // else y += ys;
      cx.translate(x, y);
    cx.drawImage(this.car, 50, 5);
  };
})();

let position = 0;
function animate() {
  c.fillRect(0, 0, canvas.width, canvas.height);

  carMove.cdraw();

  img.src = "images/track.png";
  position++;
  for (let i = 0; i < canvas.width; i++)
    c.drawImage(img, i, canvas.height + 65 - img.height - land(i + position));
  requestAnimationFrame(animate);
}

animate();

/*PETROL*/

let petrol = document.getElementById("petrol");
let pLine = document.getElementById("petrol-line");

let start = 210;

let PBar = setInterval(petrolWork, 500);
function petrolWork() {
  if (start < 0) clearInterval(PBar, 500);
  if (start < 150 && start > 80) {
    pLine.style.backgroundColor = "#FFFF00";
    pLine.style.transition = "0.1s linear";
  }
  if (start < 80) {
    pLine.style.backgroundColor = "#FF0000";
    pLine.style.transition = "0.2s ease";
  }
  start = start - 2;
  pLine.style.width = start + "px";
}
petrolWork();

/*CAR*/

// let car = document.getElementById("car");
// function carDown () {
//   let carSpeed=5;
//   let carP =+ carSpeed;
//   // if(carP)
//   car.style.top=carP +'px';
// }
// carDown();
//let x = window.innerHeight;
/*
function carMove() {
  let carStart = 0;
  let x = 10;
  const CarMoving = setInterval(carAnimate, 100);
  function carAnimate() {
    carStart += x;
    if (carStart > 900) carStart = 0;
    car.style.left = carStart + "px";
    if (carStart > 200 && carStart < 300) {
      car.style.left = carStart + "px";
      car.style.bottom = carStart - 200 + "px";
    }
    if (carStart > 300 && carStart < 400) {
      car.style.left = carStart + "px";
      car.style.top = carStart + "px";
    }

    //if (carStart > 200 && carStart < 400) car.style.top = 0 + "px";
  }
}
carMove();
*/
