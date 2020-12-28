   class Tree { 
    constructor(x,y,width,height) { 
    var options = { 
      isStatic: true 
    } 
    this.image = loadImage("sprite/tree.png"); 
    this.body = Bodies.rectangle(x,y,this.width,this.height,options); 
    this.width = width; 
    this.height = height; 
    
    World.add(world, this.body); } 
    
    display(){ 
      var pos =this.body.position; 
     
      push(); 
      rectMode(CENTER); 
      fill("white"); 
      imageMode(CENTER); 
      image(this.image, pos.x, pos.y, this.width, this.height); 
      pop(); 
    } 
  }; 