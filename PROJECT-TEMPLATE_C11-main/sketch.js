var ship, ship_moving;
var sea, seaImage;

function preload() {
  // Load the animation for moving the ship up and down
  ship_moving = loadAnimation(
    'ship-1.png',
    'ship-2.png',
    'ship-3.png',
    'ship-4.png'
  );
  ship1 = loadImage('ship-1.png');
  ship2 = loadImage('ship-2.png');
  ship3 = loadImage('ship-3.png');
  ship4 = loadImage('ship-4.png');

  // Load the image of the sea
  seaImage = loadImage('sea.png');
}

function setup() {
  createCanvas(400, 400);

  // Create a sprite for the sea and add an image to it so that the background looks like the open sea
  sea = createSprite(200, 200);
  sea.addImage(seaImage);
  sea.scale = 0.3;

  // Assign movement to the background by giving it X velocity
  sea.velocityX = -5;

  // Create a sprite for the ship and add the ship animation to it
  ship = createSprite(130, 200, 30, 30);
  ship.addAnimation('moving', ship_moving);
  ship.scale = 0.25;
}
function draw() {
  background('blue');
  if (sea.x < -200) {
    sea.x = sea.width / 2;
  }
  drawSprites();
}
