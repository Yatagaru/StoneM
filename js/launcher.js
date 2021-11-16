class Launcher{
  constructor(bodyA,pointB){
   var options = {
       bodyA: bodyA,
       pointB: pointB,
       length: 2,
       stiffness: 0.02,
    };
    this.launcher = Constraint.create(options);
    World.add(world,this.launcher);
    this.bodyA = bodyA;
    this.pointB = pointB;
  }

voar(){
 this.launcher.bodyA = null;
}

  display(){
  if (this.launcher.bodyA){
  var B = this.pointB;
  var A = this.bodyA.position;
  push();
  strokeWeight(3);
  line(A.x, A.y, B.x, B.y);
  pop();
  }

}

}