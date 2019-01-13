var car;
function setup(){
	createCanvas(450, 900);
	car = new Car();
	frameRate(25);
}

function draw(){
	background(150);
	if(keyIsDown(RIGHT_ARROW)) car.move(1);
	else if(keyIsDown(LEFT_ARROW)) car.move(-1);
	car.show();
}

function Car(){
	this.x = width/2;
	this.y = height - 100;
	this.show = function(){
		renderPoint(this.x, this.y)
		renderPoint(this.x-20, this.y+20);
		renderPoint(this.x, this.y+20);
		renderPoint(this.x+20, this.y+20);
		renderPoint(this.x, this.y+40);
		renderPoint(this.x-20, this.y+60);
		renderPoint(this.x+20, this.y+60);
	}
	this.move = function(dir){
		this.x += dir*10;
	}
}

function renderPoint(x,y){
	strokeWeight(2);
	noFill();
	rect(x, y, 20, 20);
	fill(0);
	rect(x+4, y+4, 12, 12);
}