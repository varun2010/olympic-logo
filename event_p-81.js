var canvas=document.getElementById("my_canvas");
var ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=20;
ctx.arc(230,250,130,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=20;
ctx.arc(580,250,130,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=20;
ctx.arc(930,250,130,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=20;
ctx.arc(750,380,130,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="gold";
ctx.lineWidth=20;
ctx.arc(400,380,130,0,2*Math.PI);
ctx.stroke();