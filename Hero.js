class Hero{
    constructor(x,y,r){
      var options ={ 
          density:1,
          frictionAir:1
        }
      this.x = x;
      this.y = y;
      this.r=r;
      this.image=loadImage("image/SUPERHERO.png");
      this.body =  Bodies.circle(this.x,this.y,(this.r)/2,options);
      World.add(myWorld,this.body);
      
    }
    display()
    {
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y,300,300);
    }
  
  
  }