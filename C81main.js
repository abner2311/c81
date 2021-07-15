canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
colour="red";

canvas.getContext("2d").beginPath();

canvas.getContext("2d").strokeStyle=colour;
canvas.getContext("2d").lineWidth=2;
canvas.getContext("2d").arc(200,200,40,0,2*Math.PI);
canvas.stroke();
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
colour=document.getElementById("colour").Value;
console.log(colour);


mouse_x= e.cliemtX - canvas.offsetLeft;
mouse_y= e.cliemtY - canvas.offsetTop;
console.log("x="+mouse_x+ ,"y="+mouse_y +);
circle(mouse_x , mouse_y);

}