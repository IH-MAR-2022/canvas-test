console.log("hi");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.height = 500;
canvas.width = 500;

// x ,y ,width, height
ctx.fillRect(300, 300, 40, 40);

//change color
ctx.fillStyle = "red";
ctx.fillRect(100, 100, 40, 40);
ctx.fillStyle = "blue";
ctx.fillRect(100, 400, 40, 40);

ctx.fillStyle = "yellow";

//draw an outline
ctx.strokeRect(25, 25, 25, 25);

ctx.strokeStyle = "black";
//How to draw with lines
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(230, 230);
ctx.lineTo(230, 180);
ctx.lineTo(260, 160);
ctx.lineTo(210, 150);
ctx.lineTo(190, 100);
ctx.lineTo(170, 150);
ctx.lineTo(120, 160);
ctx.lineTo(150, 180);
ctx.lineTo(150, 230);
ctx.lineTo(200, 200);
ctx.stroke(); //draws the outline
ctx.fill(); //fills in drawing
ctx.closePath();

//draw circles/arcs
ctx.beginPath();
//x, y, radius, startAngle, endAnge
// ctx.arc(400, 100, 30, 0, Math.PI * 2);
// ctx.stroke();
// ctx.fillStyle = "purple";
// ctx.fill();
// ctx.closePath();

ctx.arc(400, 100, 30, 0, Math.PI * 2);
ctx.stroke();
ctx.fillStyle = "purple";
ctx.fill();
ctx.closePath();
