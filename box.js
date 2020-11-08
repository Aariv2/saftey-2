class Box {
    constructor(x,y,w,h){
        var opt = {
            isStatic: true
        }
        this.body=Bodies.rectangle (x,y,w,h,opt)
        World.add(world,this.body)
        this.w=w 
        this.h=h
    }
    display(){
        rectMode (CENTER)
        fill("red")
        rect(this.body.position.x,this.body.position.y,this.w,this.h)
    }
}