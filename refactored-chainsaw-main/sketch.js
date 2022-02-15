const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var bg,torre,torreimg,base,base2
var canhao,basecanhao, bola, solo
var anguloi
var matri = []
var boats = []
var barco
//barco
var jason,sexta,feira
var treze = []
//quebrado
var jason2,sabado,feira2
var catorze = []
//bola
var jason3,domingo,feira3
var quinze = []
function preload() {
  bg = loadImage("./assets/background.gif");
  torreimg = loadImage("./assets/tower.png");
  base2 = loadImage("./assets/cannonBase.png");
  jason = loadJSON("ship-sailing.json");
  sexta = loadImage("ship-sailing.png");
  jason2 = loadJSON("quebrado.json");
  sabado = loadImage("F.png");
  jason3 = loadJSON("Watersplash.json");
  domingo = loadImage("waterSplash.png");
}

function setup() {
  
  canvas = createCanvas(windowWidth - 20,windowHeight- 20);
  engine = Engine.create();

  world = engine.world;
    angleMode(DEGREES);
  
    var configtorre = {
    isStatic:true
  }

  console.log(feira)
  anguloi = 10;
  torre = Bodies.rectangle(125,350,200,400,configtorre);
  solo = Bodies.rectangle(width/2,height + 10,width,200,configtorre);
  World.add(world,torre);
  World.add(world,solo);
  canhao = new Canhao(145,100,175,175,anguloi);
 
   feira = jason.frames
   feira2 = jason2.frames
   feira3 = jason3.frames
 
  for(var i=0; i <feira.length; i++){
    var positionz = feira[i].position;
    var img = sexta.get(positionz.x,positionz.y,positionz.w,positionz.h);
    treze.push(img);
  }
  for(var i=0; i <feira2.length; i++){
    var positionz = feira2[i].position;
    var img = sabado.get(positionz.x,positionz.y,positionz.w,positionz.h);
    catorze.push(img);
  }
  for(var i=0; i <feira3.length; i++){
    var positionz = feira3[i].position;
    var img = domingo.get(positionz.x,positionz.y,positionz.w,positionz.h);
    quinze.push(img);
  }

}

function keyPressed(){
if(keyCode == 32){
  bola = new boladecanhao(canhao.x,canhao.y,50);
  bola.matri = []
  matri.push(bola)
  matri[matri.length - 1].atirar();
  }
}

function mostrra(bola,indic){
  if(bola){
    console.log("x: "+bola.bola.position.x+",y: "+bola.bola.position.y);
    console.log("width: "+width+",height: "+height)
    if (bola.bola.position.x >= width || bola.bola.position.y >= 485 ){
      bola.remove(indic)
    }
bola.display();
bola.anima();
  }
}

function criarB(){
  if(boats.length > 0){
    if( boats[boats.length - 1] === undefined || boats[boats.length - 1].body.position.x < width/2 ){
      var positions = [-40, -60, -70, -20];
      var position = random(positions);
     
      barco = new barquinhos(
        width - 70,
        height - 180,
        175,
        175,
        position,
        treze); 
      boats.push(barco);
  }
    for(var i = 0; i < boats.length; i++){
      if(boats[i]){
      Matter.Body.setVelocity(boats[i].body,{x:-1,y:0});
      boats[i].display();
      boats[i].anima();
      }
    }
    
  }else{
    
    barco = new barquinhos(width - 70,height - 180,175,175,-60,treze); 
    boats.push(barco);
  }
  
}

function colis(i){
    for(var i = 0; i < boats.length; i++){
     // console.log(i)
        if(matri[i] !== undefined && boats[i] !== undefined){
          var col = Matter.SAT.collides(matri[i].bola,boats[i].body);
          console.log(col)      
          
          if(col.collided){
            console.log("oi")
            Matter.World.remove(world,matri[i].bola)
            boats[i].remove(i)
            delete matri[i]
          }
        }
    }
}

function draw(){
   Engine.update(engine);
    image(bg,0,0,width,height);
 
  
  push()
  imageMode(CENTER)
  image(torreimg,torre.position.x,torre.position.y,200,400);
 rectMode(CENTER);
  rect(solo.position.x,solo.position.y,999,10);
  pop()

 canhao.display();
  criarB();


  for(var  i = 0; i < matri.length; i++){
    mostrra(matri[i],i);  
    colis(i);
  }

}
