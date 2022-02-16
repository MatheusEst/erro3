class Canhao{
    constructor(x,y,altura,largura,angulo){
    this.x = x
    this.y = y
    this.altura = altura
    this.largura = largura
    this.angulo = angulo
    this.canhao = loadImage("assets/canon.png");
    this.canhao2 = loadImage("assets/cannonBase.png");
    }
display(){ 
    if(keyIsDown(LEFT_ARROW)){
        if(this.angulo >= -10){
            this.angulo -= 1
        }
        

    }
    if(keyIsDown(RIGHT_ARROW)){

        if(this.angulo <= 25){
            this.angulo += 1
        }
    }
    
    push();
    translate(this.x,this.y);
    rotate(this.angulo);
    imageMode(CENTER);
    image(this.canhao,0,0,this.altura,this.largura);
    pop();
    image(this.canhao2,30,20,200,200);
}
}