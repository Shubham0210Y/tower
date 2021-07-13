const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint









function preload(){
    polygonImg= loadImage("polygon.png")
    
}










function setup(){
    createCanvas(1200,700)
    engine= Engine.create()
    world= engine.world
    Engine.run(engine)
    ground= new Ground(600,680,1200,20)
    stand1= new Ground(525,614,320,10)
    stand2= new Ground(900,320,250,10)
    fill("skyblue");
    box1=new Box(410,570,40,50)
    box2=new Box(450,570,40,50)
    box3=new Box(490,570,40,50)
    box4=new Box(530,570,40,50)
    box5=new Box(570,570,40,50)
    box6=new Box(610,570,40,50)
    box7=new Box(650,570,40,50)
    box8=new Box(450,520,40,50)
    box9=new Box(490,520,40,50)
    box10=new Box(530,520,40,50)
    box11=new Box(570,520,40,50)
    box12=new Box(610,520,40,50)
    box13=new Box(490,470,40,50)
    box14=new Box(530,470,40,50)
    box15=new Box(570,470,40,50)
    box16=new Box(530,420,40,50)
    box17=new Box(820,280,40,50)
    box18=new Box(860,280,40,50)
    box19=new Box(900,280,40,50)
    box20=new Box(940,280,40,50)
    box21=new Box(980,280,40,50)
    box22=new Box(860,230,40,50)
    box23=new Box(900,230,40,50)
    box24=new Box(940,230,40,50)
    box25=new Box(900,180,40,50)
    polygon= Bodies.circle(155,300,20)
    World.add(world,polygon)
    sling1=new Sling(polygon,{x:160,y:384})
    


}








function draw(){
background("black")
textSize(40);
text(mouseX+":"+ mouseY, 200,200)
imageMode(CENTER)
ground.display();
image(polygonImg,polygon.position.x,polygon.position.y,50,50)
stand1.display();
stand2.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
fill("pink")
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
fill("red")
box13.display();
box14.display();
box15.display();
fill("green")
box16.display();
fill("pink")
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
fill("red")
box22.display();
box23.display();
box24.display();
fill("green")
box25.display();
sling1.display();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    sling1.fly()
}