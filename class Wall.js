class Wall{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
        }
        this.body = Bodies.rectangle(x, y, 20, 100, options);
        World.add(world, this.body);
      }
      display(){
        push();
        Wall.fill("red");
        translate(this.body.position.x, this.body.position.y);
        Wall.display();
        pop();
      }
}