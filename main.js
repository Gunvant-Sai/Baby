img = "";

function setup()
{
    canvas = createCanvas(380,380);
    canvas.center();
}

function preload()
{
    img = loadImage("Baby.jpg");
}

function draw()
{
    image(img,0,0,380,380);
}