//crie uma classe chamada launcher (lançador) com o mesmo código da classe estilingue da aula 28
//lembre-se de adicionar o arquivo da classe ao index.html

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;

//Declare a variável launcherObject (objeto lançador)
var launcherObject;
//Declare a variavel launchForce (força do lançamento) aqui e dê valor 100
var launchForce = 100;
function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

  //este é o objeto pedra (stoneObj), você terá que usá-lo algumas vezes durate a escrita do código
	stoneObj=new stone(235,420,30); 

	mango1=new mango(1100,100,30);
  mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,40);
	mango8=new mango(1140,150,40);
	mango9=new mango(1100,230,40);
	mango10=new mango(1200,200,40);
	mango11=new mango(1120,50,40);
	mango12=new mango(900,160,40);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

  //crie o objeto lançador aqui, entre a pedra (stoneObj) e a mão do menino (x 235 e y 420)
  launcherObject = new Launcher(stoneObj.body,{x:235, y:420});

	Engine.run(engine);
}

function draw() {

  background(230);
  textSize(25);
  text("Pressione ESPAÇO para mais uma chance de jogar!!",50 ,50);
  image(boy ,200,340,200,300);
  
  //faça o display do lançador
 

  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  launcherObject.display();
  stoneObj.display();
  groundObject.display();
  


  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
  detectollision(stoneObj,mango11);
  detectollision(stoneObj,mango12);
}

//crie a função mouseDragged aqui
function mouseDragged(){
  Body.setPosition(stoneObj.body,{x: mouseX, y: mouseY})
}
//queremos que a pedra siga o mouse quando o mouse for arrastado. Use a função Body.setPosition() para isso


//crie a função mouseReleased aqui
function mouseReleased(){
  launcherObject.voar();
}
// use a função .voar() da classe estilingue para fazer com que a pedra seja lançada ao soltarmos o mouse


//crie a função keyPressed aqui
function keyPressed(){
 if(keyDown===("SPACE")){
  Body.setPosition(stoneObj.body,{x: 235, y:420})
 }
}
/*queremos que o jogo recomece ao clicarmos em espaço, que possui keyCode 32
Recomeçar o jogo significa: 
1. voltar a pedra para a posição inicial, usando Body.setPosition()
2. "grudar" a pera novamente ao lançador, crie uma função na classe launcher, que faz o bodyA do estiingue ser igual ao corpo que você quiser (quando você for usar a função, escolha o corpo do objeto pedra)
*/


function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.body.position;
    
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance<=lmango.r+lstone.r) {
    Matter.Body.setStatic(lmango.body,false);
  }
}