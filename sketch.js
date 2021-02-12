
var engine, world;
var ground;
var ball
var gameState=1

function setup(){
    var canvas = createCanvas(400,405);
    movingboard1= createSprite(100,280,80,20)
   movingboard1.velocityX= -2



    ground = createSprite(600,700,1200,20);
    border1 = createSprite(10, 200, 2, 379);
    border2 = createSprite(222, 10, 335, 2); 
    border3 = createSprite(390, 200, 2, 379);
    border4 = createSprite(200, 390, 379, 2);

     l1 = createSprite(100, 50, 100, 2);
     l2 = createSprite(51, 85, 2, 70);
    l3 = createSprite(90, 120, 80, 2);
     l4 = createSprite(130, 131, 2, 23);
    l5 = createSprite(150, 142, 40, 2);
     l6 = createSprite(170, 115, 2, 55);
     l7 = createSprite(145, 85, 105, 2);
     l8 = createSprite(270, 50, 160, 2);
     l9 = createSprite(349, 67, 2, 35);
     l10 = createSprite(310, 94, 2, 85);
    l11 = createSprite(273, 130, 2, 90);
    l12 = createSprite(235, 95, 2, 90);
     l13 = createSprite(220, 140, 30, 2);
     l14 = createSprite(265, 147, 2, 53);
     l15 = createSprite(223, 175, 255, 2);
    l16 = createSprite(96, 182, 2, 56);
    l17 = createSprite(74, 155, 46, 2);
    l18 = createSprite(33, 190, 45, 2);
     l19 = createSprite(55, 257, 2, 135);
    l20 = createSprite(117, 210, 45, 2);
    l21 = createSprite(170, 213, 2, 75);
    l22 = createSprite(200, 250, 210, 2);
    l23 = createSprite(95, 269, 2, 40);
    l24 = createSprite(155, 288, 120, 2);
    l25 = createSprite(215, 322, 2, 70);
    l26 = createSprite(116, 323, 123, 2);
    l27 = createSprite(177, 340, 2, 35);
    l28 = createSprite(115, 356, 123, 2);
    l29 = createSprite(255, 338, 2, 40);
    l30 = createSprite(353, 373, 2, 35);
    l31 = createSprite(325, 357, 6, 2);
    l32 = createSprite(295, 338, 2, 36);
    l33 = createSprite(342, 320, 95, 2);
    l34 = createSprite(302, 287, 95, 2);
    l35 = createSprite(305, 231, 2, 39);
    l36 = createSprite(272, 213, 65, 2);
    l37 = createSprite(350, 205, 2, 165);
    l38 = createSprite(370, 230, 40, 2);
    l39 = createSprite(384, 356, 10, 69);
    ball= createSprite(30,30,20,20)

  
}

function draw(){
  if (keyDown("RIGHT_ARROW")) {
    ball.x= ball.x+5;
    
  } 
   
     
  if(keyDown("UP_ARROW")) {
    
    ball.y=ball.y-5;

  }
  if (keyDown("DOWN_ARROW")) {
    
    ball.y=ball.y+5;
  }
 
    if (keyDown("LEFT_ARROW")) {
      ball.x=ball.x-5;
     
    }

    movingboard1.bounceOff(border1)
    movingboard1.bounceOff(border3)
  if (gameState==1){
  
    
   background(0);
   movingboard1.visible=true
   // ball.x= mouseX
   // ball.y= mouseY


 

  
    if (ball.isTouching(l1) ||ball.isTouching(l2)||ball.isTouching(l3)||ball.isTouching(l4)||ball.isTouching(l5)
    ||ball.isTouching(l6)||ball.isTouching(l7)||ball.isTouching(l8)||ball.isTouching(l9)||ball.isTouching(l10)
    ||ball.isTouching(l11)||ball.isTouching(l12)||ball.isTouching(l13)||ball.isTouching(l14)||ball.isTouching(l15)
    ||ball.isTouching(l16)||ball.isTouching(l17)||ball.isTouching(l18)||ball.isTouching(l19)||ball.isTouching(l20)
    ||ball.isTouching(l21)||ball.isTouching(l22)||ball.isTouching(l23)||ball.isTouching(l24)||ball.isTouching(l25)
    ||ball.isTouching(l26)||ball.isTouching(l27)||ball.isTouching(l28)||ball.isTouching(l29)||ball.isTouching(l30)
    ||ball.isTouching(l31)||ball.isTouching(l32)||ball.isTouching(l33)||ball.isTouching(border1)||ball.isTouching(border2)
    ||ball.isTouching(border3)||ball.isTouching(border4)||ball.isTouching(l34)||ball.isTouching(l35)||ball.isTouching(l36)
    ||ball.isTouching(l37)||ball.isTouching(l38)){
    ball.x= 30
    ball.y= 60
    }

  if (ball.isTouching(l39)){
  background("white")
  l1.destroy()
  l2.destroy()
  l3.destroy()
  l4.destroy()
  l5.destroy()
  l6.destroy()
  l7.destroy()
  l8.destroy()
  l9.destroy()
  l10.destroy()
  l11.destroy()
  l12.destroy()
  l13.destroy()
  l14.destroy()
  l15.destroy()
  l16.destroy()
  l17.destroy()
  l18.destroy()
  l19.destroy()
  l20.destroy()
  l21.destroy()
  l22.destroy()
  l23.destroy()
  l24.destroy()
  l25.destroy()
  l26.destroy()
  l27.destroy()
  l28.destroy()
  l29.destroy()
  l30.destroy()
  l31.destroy()
  l32.destroy()
  l33.destroy()
  l34.destroy()
  l35.destroy()
  l36.destroy()
  l37.destroy()
  l38.destroy()
 border1.destroy()
 border2.destroy()
 border3.destroy()
 border4.destroy()

  gameState=2
  ball.x= 30
  ball.y= 30
  }
  }

  if (gameState===2){
  background("orange")

  movingboard1.x=100
  movingboard1.y=280
 

// ob1 = createSprite(150,100,10,70);
// ob2 = createSprite(0,90,80,10);
// ob3 = createSprite(95,10,100,10);
//  ob4 = createSprite(115,112,60,10);
// ob5 = createSprite(190,10,90,10);
//  ob6 = createSprite(208,56,10,100);
//  ob7 = createSprite(35,120,10,50);
//  ob8 = createSprite(90,140,10,50);
//  ob9 = createSprite(36,166,120,10);
//  ob10 = createSprite(258,100,100,10);
// ob11 = createSprite(30,246,10,150);
//  ob12 = createSprite(250,150,10,90);
// ob13 = createSprite(198,188,100,10);
//  ob14 = createSprite(150,220,10,70);
//  ob15 = createSprite(230,250,150,10);
//  ob16 = createSprite(302,38,196,10);
//  ob17 = createSprite(350,120,10,160);
//  ob18 = createSprite(350,120,10,160);
//  ob19 = createSprite(148,314,230,10);
//  ob20 = createSprite(88,220,10,100);
//  ob21 = createSprite(304,180,10,150);
//  ob22 = createSprite(134,335,10,45); 
//  ob23 = createSprite(174,360,250,10);
// ob24 = createSprite(372,200,50,10);
//  ob25 = createSprite(372,250,10,90);
//  ob26 = createSprite(312,278,10,60);
//  ob27 = createSprite(84,36,10,50);

board1 = createSprite(50,200,80,20);
board2 = createSprite(200, 50, 20, 75);
board3 = createSprite(200, 200, 20, 0);
board4 = createSprite(200, 200, 100, 20);
board5 = createSprite(200, 300, 20, 100);
  board6 = createSprite(150, 300, 100, 20);
board7 = createSprite(100, 330, 20, 80);
 board8 = createSprite(135, 100, 150, 20);
board9 = createSprite(125, 125, 20, 50);
 board10 = createSprite(250, 100, 100, 20);
  board11 = createSprite(280, 350, 20, 100);
 board12 = createSprite(375, 310, 90, 20);
  board13 = createSprite(50, 375, 20, 70);
 board14 = createSprite(100, 250, 80, 20);
  board15 = createSprite(260, 130, 20, 160);
   board16 = createSprite(325, 260, 100, 20);
   board17 = createSprite(325, 200, 20, 100);
 board18 = createSprite(150, 370, 20, 60);
 board19 = createSprite(365, 200, 30, 20);
 board20 = createSprite(125, 80, 20, 60);
 board21 = createSprite(50, 165, 20, 55);
 board22 = createSprite(350, 50, 60, 20);
 border1 = createSprite(10, 235, 5, 445);
    border2 = createSprite(222, 10, 335, 5); 
    border3 = createSprite(390, 235, 5, 446);
    border4 = createSprite(200, 400, 379, 5);
    movingboard1.visible=true
var b1= createSprite(200,200,100,20)
b1.velocityX= -5
b1.shapeColor= "red"

   /* movingboard1.velocityX= -2

movingboard1.bounceOff(border1)

movingboard1.bounceOff(board5)
*/

  }
  drawSprites()
 
   

}
