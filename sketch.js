var bullet, speed, wall, weight,deformation,thickness;

function setup() {
  createCanvas(1600,400);
  
  speed=Math.round(random(50,90));
  weight=Math.round(random(400,1500))

  bullet=createSprite(20, 200, 60, 5);
  bullet.shapeColor="white"
  bullet.velocityX=speed

  thickness=Math.round(random(22,83))

  wall=createSprite(1550,200,thickness,height/2)
  
}

function draw() {
  background("black");  
  
  bullet.collide(wall)

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage<10){
      wall.shapeColor=color(0,255,0)
    }

    if(damage>10){
      wall.shapeColor=color(255,0,0)
    }
  }

  drawSprites();
}

function hasCollided(bullet,wall){

bulletRightEdge=bullet.x+bullet.width
wallLeftEdge=wall.x

if(bulletRightEdge>=wallLeftEdge){
  return true;
}

return false;

}

