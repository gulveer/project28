class Stone {
    constructor(x, y,radius) {
      var options = {
          'isStatic':false,
          'restitution':0,
          'friction':1,
          'density':1.2
      }
      
      this.width = width/20;
      this.height = height/20;
      this.radius = radius;
      this.image2 = loadImage("sprite/boy.png");
      this.image = loadImage("sprite/stone.png");
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
      image(this.image2, 200,530,300,300);
      image(this.image, pos.x, pos.y, 60, 60);
      pop();
    }
  }