class Box{
    constructor(x,y){
        var options = { restitution: 0.5,
                        friction: 0.5,
                        density: 0.0005
                     }

    this.width = 30;
    this.height = 40;
    this.body = Bodies.rectangle(x,y,this.width,this.height,options);
    this.rcolor = random(0,255)
    this.gcolor = random(0,255)
    this.bcolor = random(0,255)
    

    World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(angle);
        fill(this.rcolor,this.gcolor, this.bcolor);
        strokeWeight(2);
        stroke("black");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}