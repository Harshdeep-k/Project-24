class paper
{
    constructor()
    {
        //in matter.js the circle object has radius=20
        this.body=Bodies.circle(100,300,25,{
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        });
        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
        fill("pink");
        ellipseMode(CENTER);
        //the circle object has d=40 corresponding to 20 radius
        circle(pos.x,pos.y,50);

    }

}