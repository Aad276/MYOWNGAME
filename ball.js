class Ball {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution: 0.7
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x= mouseX
      pos.y= mouseY
      ellipseMode(RADIUS);
      fill("lightblack");
      ellipse(pos.x, pos.y, this.radius,this.radius)
    }
  };