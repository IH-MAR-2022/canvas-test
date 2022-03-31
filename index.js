console.log("hi");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.height = 500;
canvas.width = 500;

const h = canvas.height;
const w = canvas.width;

// x ,y ,width, height
// ctx.fillRect(300, 300, 40, 40);

// //change color
// ctx.fillStyle = "red";
// ctx.fillRect(100, 100, 40, 40);
// ctx.fillStyle = "blue";
// ctx.fillRect(100, 400, 40, 40);

// ctx.fillStyle = "yellow";

// //draw an outline
// ctx.strokeRect(25, 25, 25, 25);

// ctx.strokeStyle = "black";
// //How to draw with lines
// ctx.beginPath();
// ctx.moveTo(200, 200);
// ctx.lineTo(230, 230);
// ctx.lineTo(230, 180);
// ctx.lineTo(260, 160);
// ctx.lineTo(210, 150);
// ctx.lineTo(190, 100);
// ctx.lineTo(170, 150);
// ctx.lineTo(120, 160);
// ctx.lineTo(150, 180);
// ctx.lineTo(150, 230);
// ctx.lineTo(200, 200);
// ctx.stroke(); //draws the outline
// ctx.fill(); //fills in drawing
// ctx.closePath();

// //draw circles/arcs
// ctx.beginPath();
// //x, y, radius, startAngle, endAnge
// // ctx.arc(400, 100, 30, 0, Math.PI * 2);
// // ctx.stroke();
// // ctx.fillStyle = "purple";
// // ctx.fill();
// // ctx.closePath();

// ctx.arc(400, 100, 30, 0, Math.PI * 2);
// ctx.stroke();
// ctx.fillStyle = "purple";
// ctx.fill();
// ctx.closePath();

let square = {
  x: 435,
  y: 447,
  w: 25,
  h: 25,
  xReverse: false,
  yReverse: false,
  speed: 1,
};

//SCREEN SAVER

// ctx.fillRect(square.x, square.y, square.w, square.h);

// function animate() {
//   window.requestAnimationFrame(animate);
//   ctx.clearRect(0, 0, w, h);
//   ctx.fillRect(square.x, square.y, square.w, square.h);

//   //Collision Detection
//   //left wall
//   if (square.x + square.w >= w) {
//     square.speed++;
//     square.xReverse = true;
//   }
//   //bottom wall
//   if (square.y + square.h >= h) {
//     square.speed++;
//     square.yReverse = true;
//   }
//   //Right wall
//   if (square.x <= 0) {
//     square.speed++;
//     square.xReverse = false;
//   }
//   //Top wall
//   if (square.y <= 0) {
//     square.speed++;
//     square.yReverse = false;
//   }

//   if (square.yReverse === false) {
//     square.y += square.speed * 0.75;
//   } else {
//     square.y -= square.speed * 0.75;
//   }
//   if (square.xReverse === false) {
//     square.x += square.speed;
//   } else {
//     square.x -= square.speed;
//   }
// }

//This is how many pixels our character will move
let movementSpeed = 10;

//EVENT LISTENER

function move(e) {
  switch (e.key) {
    case "ArrowUp":
      if (square.y - movementSpeed < 0) {
        square.y = 0;
      } else {
        square.y -= movementSpeed;
      }
      break;
    case "ArrowDown":
      if (square.y + square.h + movementSpeed > h) {
        square.y = h - square.h;
      } else {
        square.y += movementSpeed;
      }
      break;
    case "ArrowLeft":
      if (square.x - movementSpeed < 0) {
        square.x = 0;
      } else {
        square.x -= movementSpeed;
      }
      break;
    case "ArrowRight":
      if (square.x + square.w + movementSpeed > w) {
        square.x = w - square.w;
      } else {
        square.x += movementSpeed;
      }
      break;
  }
}

document.addEventListener("keydown", move);

function animate() {
  window.requestAnimationFrame(animate);
  ctx.clearRect(0, 0, w, h);
  ctx.fillRect(square.x, square.y, square.w, square.h);

  // //Collision Detection
  // //left wall
  // if (square.x + square.w >= w) {
  //   square.speed++;
  //   square.xReverse = true;
  // }
  // //bottom wall
  // if (square.y + square.h >= h) {
  //   square.speed++;
  //   square.yReverse = true;
  // }
  // //Right wall
  // if (square.x <= 0) {
  //   square.speed++;
  //   square.xReverse = false;
  // }
  // //Top wall
  // if (square.y <= 0) {
  //   square.speed++;
  //   square.yReverse = false;
  // }

  // if (square.yReverse === false) {
  //   square.y += square.speed * 0.75;
  // } else {
  //   square.y -= square.speed * 0.75;
  // }
  // if (square.xReverse === false) {
  //   square.x += square.speed;
  // } else {
  //   square.x -= square.speed;
  // }
}

animate();
