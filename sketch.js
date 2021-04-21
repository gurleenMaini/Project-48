var waiter, chef, manager;
var backgroundImg, waiterImg, chefImg, managerImg, tableImg, customerImg;
var block1, block2, block3, block4, block5, block6;
var block7,block8,block9;
var block10, block11, block12, block13, block14, block15, block16, block17, block18;
var line1,line2,line3,line4,line5,line6,line7,line8,line9,line10,line11,line12,line13,line14,line15,line16,line17;
var line18,line19,line20,line21,line22,line23,line24,line25,line26,line27,line28;
var line29,line30,line31,lin32,line33,line34,line35,line36,line37,line38,line39,line40,line41,line42,line43,line44,line45,line46,line47,line48;
var table1, table2, table3, table4;
var customer1,customer2,customer3,customer4,customer5,customer6,customer7,customer8,customer9,customer10,customer11,customer12,customer13,customer14,customer15,customer16;
var edges;
var gameState= 0;
var score= 0;
var lineGroup;

function preload(){
  waiterImg= loadImage("waiter.png");
  chefImg= loadImage("chefhat.jpeg");
  managerImg= loadImage("manager.png");
  customerImg= loadImage("customer.png");
}

function setup(){
  createCanvas(1600,950);
  edges= createEdgeSprites();
  
  waiter= createSprite(400,300,40,40);
  waiter.addImage(waiterImg);
  waiter.scale= 0.2;

  chef= createSprite(70,300,40,40);
  chef.addImage(chefImg);
  chef.scale= 0.1;

  manager= createSprite(50,800,40,40);
  manager.addImage(managerImg);
  manager.scale= 0.1;

  block1= createSprite(100,900,200,20);
  block1.shapeColor= color("brown");
  block2= createSprite(200,800,20,200);
  block2.shapeColor= color("brown");
  block3= createSprite(100,700,200,20);
  block3.shapeColor= color("brown");

  block4= createSprite(100,550,200,20);
  block4.shapeColor= color("brown");
  block5= createSprite(200,350,20,400);
  block5.shapeColor= color("brown");
  block6= createSprite(100,150,200,20);
  block6.shapeColor= color("brown");

  block7= createSprite(1500,70,20,150);
  block7.shapeColor= color("brown");
  block8= createSprite(1400,100,20,100);
  block8.shapeColor= color("brown");
  block9= createSprite(1450,150,100,20);
  block9.shapeColor= color("brown");

  block10= createSprite(600,940,80,20);
  block10.shapeColor= color("yellow");
  block11= createSprite(720,940,80,20);
  block11.shapeColor= color("blue");
  block12= createSprite(840,940,80,20);
  block12.shapeColor= color("yellow");
  block13= createSprite(960,940,80,20);
  block13.shapeColor= color("blue");
  block14= createSprite(1080,940,80,20);
  block14.shapeColor= color("yellow");
  block15= createSprite(1200,940,80,20);
  block15.shapeColor= color("yellow");
  block16= createSprite(1320,940,80,20);
  block16.shapeColor= color("yellow");
  block17= createSprite(1440,940,80,20);
  block17.shapeColor= color("blue");
  block18= createSprite(1560,940,80,20);
  block18.shapeColor= color("blue");

  line1= createSprite(550,200,20,400);
  line1.shapeColor= color("blue");
  line2= createSprite(550,750,20,400);
  line2.shapeColor= color("blue");

  line3= createSprite(670,400,260,20);
  line3.shapeColor= color("yellow");
  line4= createSprite(670,550,260,20);
  line4.shapeColor= color("yellow");
  line5= createSprite(800,360,20,100);
  line5.shapeColor= color("yellow");
  line6= createSprite(880,360,20,150);
  line6.shapeColor= color("yellow");
  line7= createSprite(960,280,180,20);
  line7.shapeColor= color("yellow");
  line8= createSprite(940,260,20,120);
  line8.shapeColor= color("blue");
  line9= createSprite(900,200,100,20);
  line9.shapeColor= color("yellow");
//  line10= createSprite(850,210,20,60);
  //line10.shapeColor= color("black");
  line11= createSprite(900,150,20,120);
  line11.shapeColor= color("yellow");
  line12= createSprite(960,160,150,20);
  line12.shapeColor= color("blue");
  line13= createSprite(960,200,150,20);
  line13.shapeColor= color("blue");
  line14= createSprite(960,350,80,20);
  line14.shapeColor= color("blue");
  line15= createSprite(910,380,20,80);
  line15.shapeColor= color("blue");
  line16= createSprite(1000,380,20,80);
  line16.shapeColor= color("blue");
  line17= createSprite(1050,340,20,150);
  line17.shapeColor= color("yellow"); 
  line18= createSprite(930,70,400,20);
  line18.shapeColor= color("blue");
  line19= createSprite(1220,380,200,20);
  line19.shapeColor= color("yellow");
  line20= createSprite(1250,400,20,80);
  line20.shapeColor= color("blue");
  line21= createSprite(1290,450,100,20);
  line21.shapeColor= color("blue");
  line22= createSprite(1360,380,20,160);
  line22.shapeColor= color("blue");
  line23= createSprite(1380,350,60,20);
  line23.shapeColor= color("yellow");
  line24= createSprite(1530,250,150,20);
  line24.shapeColor= color("blue");
  line25= createSprite(1500,290,20,150);
  line25.shapeColor= color("blue");
  line26= createSprite(1530,420,180,20);
  line26.shapeColor= color("blue");
  line27= createSprite(1455,210,110,20);
  line27.shapeColor= color("yellow");
  line28= createSprite(1160,420,20,100);
  line28.shapeColor= color("yellow");
  
  line29= createSprite(800,590,20,100);
  line29.shapeColor= color("yellow");
  line30= createSprite(880,650,20,200);
  line30.shapeColor= color("yellow");
  line31= createSprite(960,760,180,20);
  line31.shapeColor= color("blue");
  line32= createSprite(1050,645,20,250);
  line32.shapeColor= color("yellow");
  line33= createSprite(910,650,20,80);
  line33.shapeColor= color("blue");
  line34= createSprite(960,680,80,20);
  line34.shapeColor= color("blue");
  line35= createSprite(1000,650,20,80);
  line35.shapeColor= color("blue");
  line36= createSprite(850,790,20,80);
  line36.shapeColor= color("yellow");
  line37= createSprite(950,820,180,20);
  line37.shapeColor= color("blue");
  line38= createSprite(1150,580,200,20);
  line38.shapeColor= color("yellow");
  line39= createSprite(1320,480,20,70);
  line39.shapeColor= color("yellow");
  line40= createSprite(1590,700,20,400);
  line40.shapeColor= color("blue");
  line41= createSprite(1450,520,20,200);
  line41.shapeColor= color("blue");
  line42= createSprite(1540,550,80,20);
  line42.shapeColor= color("blue");
  line43= createSprite(1500,680,160,20);
  line43.shapeColor= color("blue");
  line44= createSprite(1480,880,220,20);
  line44.shapeColor= color("yellow");
  line45= createSprite(1400,850,20,80);
  line45.shapeColor= color("yellow");
  line46= createSprite(1500,800,20,150);
  line46.shapeColor= color("blue");
  line47= createSprite(1450,750,180,20);
  line47.shapeColor= color("yellow");
  line48= createSprite(1440,600,100,20);
  line48.shapeColor= color("yellow");

  table1= createSprite(650,220,180,70);
  table1.shapeColor= color("brown");
  customer1= createSprite(700,150,50,50);
  customer1.addImage(customerImg);
  customer1.scale= 0.1;
  customer2= createSprite(600,150,50,50);
  customer2.addImage(customerImg);
  customer2.scale= 0.1;
  customer3= createSprite(700,290,50,50);
  customer3.addImage(customerImg);
  customer3.scale= 0.1;
  customer4= createSprite(600,290,50,50);
  customer4.addImage(customerImg);
  customer4.scale= 0.1;

  table2= createSprite(650,750,180,70);
  table2.shapeColor= color("brown");
  customer5= createSprite(700,680,50,50);
  customer5.addImage(customerImg);
  customer5.scale= 0.1;
  customer6= createSprite(600,680,50,50);
  customer6.addImage(customerImg);
  customer6.scale= 0.1;
  customer7= createSprite(700,820,50,50);
  customer7.addImage(customerImg);
  customer7.scale= 0.1;
  customer8= createSprite(600,820,50,50);
  customer8.addImage(customerImg);
  customer8.scale= 0.1;

  table3= createSprite(1200,220,180,70);
  table3.shapeColor= color("brown");
  customer9= createSprite(1250,150,50,50);
  customer9.addImage(customerImg);
  customer9.scale= 0.1;
  customer10= createSprite(1150,150,50,50);
  customer10.addImage(customerImg);
  customer10.scale= 0.1;
  customer11= createSprite(1250,290,50,50);
  customer11.addImage(customerImg);
  customer11.scale= 0.1;
  customer12= createSprite(1150,290,50,50);
  customer12.addImage(customerImg);
  customer12.scale= 0.1;

  table4= createSprite(1200,750,180,70);
  table4.shapeColor= color("brown");
  customer13= createSprite(1250,680,50,50);
  customer13.addImage(customerImg);
  customer13.scale= 0.1;
  customer14= createSprite(1150,680,50,50);
  customer14.addImage(customerImg);
  customer14.scale= 0.1;
  customer15= createSprite(1250,820,50,50);
  customer15.addImage(customerImg);
  customer15.scale= 0.1;
  customer16= createSprite(1150,820,50,50);
  customer16.addImage(customerImg);
  customer16.scale= 0.1;
  
  lineGroup= createGroup();

  score= 0;
}

function draw() {
  background("magenta");  

  lineGroup.add(line3,line17,line19,line23,line27,line28,line29,line30,line32,line36,line38,line39,line44,line45,line47,line48);
  lineGroup.add(line4);
  lineGroup.add(line5);
  lineGroup.add(line6);
  lineGroup.add(line7);
  lineGroup.add(line9);
  lineGroup.add(line11);
  lineGroup.add(line17);
  lineGroup.add(line19);
  lineGroup.add(line23);
  lineGroup.add(line27);
  lineGroup.add(line28);
  lineGroup.add(line29);
  lineGroup.add(line30);
  lineGroup.add(line32);
  lineGroup.add(line36);
  lineGroup.add(line38);
  lineGroup.add(line39);
  lineGroup.add(line44);
  lineGroup.add(line45);
  lineGroup.add(line47);
  lineGroup.add(line48);
  waiter.bounceOff(edges);
  //customer.bounceOff(edges);

  textSize(40);
  fill("black");
  text("Death:"+ score, 50,80);

  if(gameState=== 0){
    waiter.setVelocity(0,0);
    if(keyIsDown(UP_ARROW)){
      waiter.velocityY= -2;
    }
    if(keyIsDown(DOWN_ARROW)){
      waiter.velocityY= 2;
    }
    if(keyIsDown(LEFT_ARROW)){
      waiter.velocityX= -2;
    }
    if(keyIsDown(RIGHT_ARROW)){
      waiter.velocityX= 2;
    }
  
    if (waiter.isTouching(lineGroup)){
      if(score>=9){
        gameState= 1;
      }
      waiter.x=400;
    waiter.y=300;
    score++;
    }
  }
 // if((customer.isTouching(table1) || customer.isTouching(table2)|| customer.isTouching(table2)|| customer.isTouching(table2))){
 //   customer.setVelocity(0,0);
 //}

  if(gameState===1){
    waiter.x=400;
    waiter.y=300;

    stroke("white");
    textSize(60);
    fill("black");
    text("GAMEOVER", 500,500);
  }

  textSize(40);
  text("1", 750,250);

  textSize(40);
  text("2", 750,750);
  
  textSize(40);
  text("3", 1300,250);
  
  textSize(40);
  text("4", 1300,750);
  
  drawSprites();
  waiter.bounceOff(line1);
  waiter.bounceOff(line2);
  waiter.bounceOff(line3);
  waiter.bounceOff(line4);
  waiter.bounceOff(line5);
  waiter.bounceOff(line6);
  waiter.bounceOff(line7);
  waiter.bounceOff(line8);
  waiter.bounceOff(line9);
 // waiter.bounceOff(line10);
  waiter.bounceOff(line11);
  waiter.bounceOff(line12);
  waiter.bounceOff(line13);
  waiter.bounceOff(line14);
  waiter.bounceOff(line15);
  waiter.bounceOff(line16);
  waiter.bounceOff(line17);
  waiter.bounceOff(line18);
  waiter.bounceOff(line19);
  waiter.bounceOff(line20);
  waiter.bounceOff(line21);
  waiter.bounceOff(line22);
  waiter.bounceOff(line23);
  waiter.bounceOff(line24);
  waiter.bounceOff(line25);
  waiter.bounceOff(line26);
  waiter.bounceOff(line27);
  waiter.bounceOff(line28);
  waiter.bounceOff(line29);
  waiter.bounceOff(line30);
  waiter.bounceOff(line31);
  waiter.bounceOff(line32);
  waiter.bounceOff(line33);
  waiter.bounceOff(line34);
  waiter.bounceOff(line35);
  waiter.bounceOff(line36);
  waiter.bounceOff(line37);
  waiter.bounceOff(line38);
  waiter.bounceOff(line39);
  waiter.bounceOff(line40);
  waiter.bounceOff(line41);
  waiter.bounceOff(line42);
  waiter.bounceOff(line43);
  waiter.bounceOff(line44);
  waiter.bounceOff(line45);
  waiter.bounceOff(line46);
  waiter.bounceOff(line47);
  waiter.bounceOff(line48);

  waiter.bounceOff(block1);
  waiter.bounceOff(block2);
  waiter.bounceOff(block3);
  waiter.bounceOff(block4);
  waiter.bounceOff(block5);
  waiter.bounceOff(block6);
  waiter.bounceOff(block7);
  waiter.bounceOff(block8);
  waiter.bounceOff(block9);
  waiter.bounceOff(block10);
  waiter.bounceOff(block11);
  waiter.bounceOff(block12);
  waiter.bounceOff(block13);
  waiter.bounceOff(block14);
  waiter.bounceOff(block15);
  waiter.bounceOff(block16);
  waiter.bounceOff(block17);
  waiter.bounceOff(block18);

  waiter.bounceOff(table1);
  waiter.bounceOff(table2);
  waiter.bounceOff(table3);
  waiter.bounceOff(table4);

  //costumer.bounceOff(canvas);
 /* customer.bounceOff(line1);
  customer.bounceOff(line2);
  customer.bounceOff(line3);
  customer.bounceOff(line4);
  customer.bounceOff(line5);
  customer.bounceOff(line6);
  customer.bounceOff(line7);
  customer.bounceOff(line8);
  customer.bounceOff(line9);
  customer.bounceOff(line11);
  customer.bounceOff(line12);
  customer.bounceOff(line13);
  customer.bounceOff(line14);
  customer.bounceOff(line15);
  customer.bounceOff(line16);
  customer.bounceOff(line17);
  customer.bounceOff(line18);
  customer.bounceOff(line19);
  customer.bounceOff(line20);
  customer.bounceOff(line21);
  customer.bounceOff(line22);
  customer.bounceOff(line23);
  customer.bounceOff(line24);
  customer.bounceOff(line25);
  customer.bounceOff(line26);
  customer.bounceOff(line27);
  customer.bounceOff(line28);
 
  customer.bounceOff(line29);
  customer.bounceOff(line30);
  customer.bounceOff(line31);
  customer.bounceOff(line32);
  customer.bounceOff(line33);
  customer.bounceOff(line34);
  customer.bounceOff(line35);
  customer.bounceOff(line36);
  customer.bounceOff(line37);
  customer.bounceOff(line38);
  customer.bounceOff(line39);
  customer.bounceOff(line40);
  customer.bounceOff(line41);
  customer.bounceOff(line42);
  customer.bounceOff(line43);
  customer.bounceOff(line44);
  customer.bounceOff(line45);
  customer.bounceOff(line46);
  customer.bounceOff(line47);
  customer.bounceOff(line48);

  customer.bounceOff(block1);
  customer.bounceOff(block2);
  customer.bounceOff(block3);
  customer.bounceOff(block4);
  customer.bounceOff(block5);
  customer.bounceOff(block6);
  customer.bounceOff(block7);
  customer.bounceOff(block8);
  customer.bounceOff(block9);
  customer.bounceOff(block10);
  customer.bounceOff(block11);
  customer.bounceOff(block12);
  customer.bounceOff(block13);
  customer.bounceOff(block14);
  customer.bounceOff(block15);
  customer.bounceOff(block16);
  customer.bounceOff(block17);
  customer.bounceOff(block18);

  customer.bounceOff(table1);
 // customer.bounceOff(chair1);
  //customer.bounceOff(chair2);
  //customer.bounceOff(chair3);
  //customer.bounceOff(chair4);

  customer.bounceOff(table2);
//  customer.bounceOff(chair5);
 // customer.bounceOff(chair6);
  //customer.bounceOff(chair7);
  //customer.bounceOff(chair8);

 customer.bounceOff(table3);
  //customer.bounceOff(chair9);
  //customer.bounceOff(chair10);
//  customer.bounceOff(chair11);
 // customer.bounceOff(chair12);

 customer.bounceOff(table4);
//  customer.bounceOff(chair13);
//  customer.bounceOff(chair14);
  //customer.bounceOff(chair15);
 // customer.bounceOff(chair16);
*/  
}
