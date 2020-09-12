class Boy{
    constructor(){
        var options ={
            isStatic:true,
        }
        //this.body = Bodies.rectangle(230, 300, 50, 120, options);
        this.image = loadImage("sprites/boy.jpg");
        //World.add(world, this.body);
    }
    display(){
        image(this.image, 200, 260, 50, 120);
    }
}