class barquinhos{
    constructor(x,y,a,l,position,treze){
        this.a = a
        this.l = l
        this.speed = 0.05;
        this.pos = position
        this.quebrado = false
        this.animation = treze

        this.body = Bodies.rectangle(x,y,a,l)
        this.barcoI = loadImage("barco.png");
        World.add(world,this.body);
        


    }
    remove(i){
         this.quebrado = true
        this.animation = catorze;
        this.a = 180 + 80
        this.l = 175 + 80 
        setTimeout(() => {
           
        Matter.World.remove(world,boats[i].body)
        
        delete boats[i]
        },2000)
    }
    
anima(){
    this.speed += 0.05;
}

    display(){
        var  indice = floor(this.speed % this.animation.length)
        push()

        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER)
        image(this.animation[indice],0,this.pos,this.a,this.l);
        pop()
        
    }

}