var drops = []
var letters = "AaRrNnVvGgUuPpTt";
// other sample characters : !@#$%^&*()<>?/`~{}[]\|,.
//  "也 池 驰 馳 弛"
// 
function setup()
{   
    createCanvas(1500,600);
    frameRate(15);
    
    for(var i=0;i<100;i++)
    {
        drops.push(new Drop());
    }
}

function draw()
{

    background(0,100);
    for(var i=0;i<drops.length;i++)
    {
        drops[i].draw();
        drops[i].update();
    }
    fill("White");
    textSize(20);
    textFont("CASTELLAR")
    text("MY NAME, ONLY MY NAME",5,300);
}
