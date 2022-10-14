var canvas = new fabric.canvas('myCanvas');

ballY = 0;
ballX = 0;
holeY = 400;
holeX = 800;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function (Img){
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeght(50);
		hole.obj.set({
			top:hole_y,
		left:hole_x
	});
	canvas.add(hole_obj);
});
	new_image(gold-history.png);

}

function new_image()
{
	fabric.Image.fromURL("ball.png", function (Img){
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeght(50);
		ball.obj.set({
			top:ball_y,
		left:ball_x
	});
	canvas.add(ball_obj);
});
	

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="You Have hit the goal!!!"
		document.getElementById("myCanvas").style.borderColor="red";
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ballY >=0)
		{
               ballY = ballY - block_image_height;
			   canvas.remove(ball_obj);
			new_image();
		}
	}

	function down()
	{
		if(ballY <=500)
		{
               ballY = ballY + block_image_height;
			   canvas.remove(ball_obj);
			new_image();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			ballX = ballX - block_image_width;
			canvas.remove(ball_obj);
		 new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ballX = ballX + block_image_wdith;
			canvas.remove(ball_obj);
		 new_image();
		}
	}
	
}

