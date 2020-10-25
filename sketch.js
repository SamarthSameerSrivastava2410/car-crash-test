var car, wall;

var speed, weight

var Deform, status;
function setup() {
  createCanvas(1600,400);
  wall = createSprite(1500, 200, 50, height/2);
  car = createSprite(50, 200, 20, 20);

  speed = Math.round(random(55, 90));
  weight = Math.round(random(400, 1500));

  status = "N/A";
}

function draw() {
  
  car.velocityX = speed;
  
  

  background(0,0,0);
  drawSprites();
  deforming();
  
  fill("white");
  textSize(20);
  text("car status: " + status, 800, 100);

}

function deforming() {
  
  deform = 0.5 * weight * speed * speed / 22500;

  if (wall.x - car.x < (wall.width + car.width) / 2) {
    
    car.velocityX  = 0;
    
    if (deform > 180){
      car.shapeColor = color(255, 0, 0);
      status = "Lethal";

    }

    if (deform < 180 && deform > 100){
      car.shapeColor = color(230, 230, 0);
      status = "Average";

    }
    
    if (deform < 100){
      car.shapeColor = color(0, 255, 0);
      status = "Good";

    }

  }

}