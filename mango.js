class Mango {
    constructor(x, y,radius) {
      var options = {
          'isStatic':true,
          'restitution':0,
          'friction':1
          }
      
      this.width = width/20;
      this.height = height/20;
      this.radius = radius;
      this.image = loadImage("sprite/mango.png");
      this.body = Bodies.circle(x, y, radius/2, options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      //ellipseMode(CENTER);
      //fill("red");
      //ellipse(pos.x, pos.y, this.width, this.height);
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, 60, 60);
      pop();
    }
  }