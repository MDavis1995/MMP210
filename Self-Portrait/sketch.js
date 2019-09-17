function setup() {
    createCanvas(600, 400);
}

function draw() {
    background("#AFC2D5");
    
    fill("#759AAB");
    noStroke();
    circle(300, 200, 400);
    
    fill("#EEF0F2");//
    
    ellipse(400, 200, 100, 100);
    ellipse(200, 200, 100, 100);//
    
    fill("#E6C229");
    rect(100,100,100,30);
    rect(400,100,100,30);//
    
    
    fill("#433A3F");
    circle(200, 200, 40);
    circle(400, 200, 40);//
    
    fill("#EEF0F2")
    circle(420, 180, 30)
    circle(220, 180, 30)
    circle(200, 200, 10)
    circle(400, 200, 10)//
    
    fill("#E36414");
    rect(280,200,40,50);
    
    fill("#433A3F");
    arc(300, 300, 200, 200, 0, PI, OPEN);//
    
    fill("#EEF0F2");
    triangle(
        300,300,
        200,400,
        200,300,
    );//
    
   
}

function foo() {
    console.log ("banana");
}

foo();