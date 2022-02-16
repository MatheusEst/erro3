class boladecanhao{
    constructor(x,y,raio){
    this.raio = raio;
    this.speed = 0.005
    this.quebrado = false
    this.bola = Bodies.circle(x,y,this.raio);
    this.bolaI = loadImage("assets/cannonball.png");
    this.animation = [this.bolaI]
    World.add(world,this.bola)
    this.matri = []
    

}

remove(i){
    console.log(this.animation)
    this.quebrado = true
    this.animation = quinze  
   // this.raio = 130 
     Matter.Body.setVelocity(this.bola,{x:0,y:0});
     this.speed = 0.005
    setTimeout(() => {
    Matter.World.remove(world,this.bola)
    delete matri[i]
    },1000)
}
anima(){
    this.speed += 0.05;
}
atirar(){
    Matter.Body.setStatic(this.bola,false);
    var angulo = canhao.angulo- 26 ;
    angulo = angulo * (3.14/180);
    var velocidade = p5.Vector.fromAngle(angulo);
    velocidade.mult(0.5); 
    Matter.Body.setVelocity(this.bola,{x:velocidade.x * 40,y:velocidade.y * 40});

}
    display(){
        var  indice = floor(this.speed % this.animation.length)
        push()
        imageMode(CENTER)
        image(this.animation[indice],this.bola.position.x,this.bola.position.y,this.raio,this.raio);
        pop()
        if(this.bola.velocity.x > 0 && this.bola.position.x >= 240 && this.quebrado == false){
            var xy = [this.bola.position.x,this.bola.position.y];
            this.matri.push(xy);

        }
        for(var i = 0; i < this.matri.length;i++){
            image(this.bolaI,this.matri[i][0],this.matri[i][1],5,5)
        }
    }
}