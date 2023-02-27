const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;
var fondoImg;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  
 // player = new ( 340, playerBase.position.y - 112, 120, 120);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 // player =  Player( 340, playerBase.position.y - 112, 120, 120);
 // player= new Player( )

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );

  fondoImg = loadImage("./assets/fondo.png");

  
}

function draw() {
  background(fondoImg);


  Engine.update(engine);

  // Título
  fill("red");
  textAlign("center");
  textSize(30);
  text("TIRO CON ARCO ÉPICO", width / 2, 50);

 
  playerBase.display();
  
  //display();
  //playerdisplay();
  //player();
  player.display();
  

  computerBase.display();
  computer.display();
  
}
