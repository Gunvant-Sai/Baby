img = "";
baby = "";
alaram = "";

function setup()
{
    canvas = createCanvas(380,380);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();

    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("model loaded");
    status_=true;
}

function gotresult(error,result)
{
  if(error)
  {
      console.log(error);
  }
    console.log(result);
    baby= result;
}

function preload()
{
    alaram = loadSound("iphone_alaram.mp3");
}

function draw()
{
    image(video,0,0,380,380);
    
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    objectDetector.detect(video,gotresult);
    if(status_ != "")
    {
      for(i= 0; i < object.length; i++)
      {
          r = random(255);
          g = random(255);
          b = random(255);

          document.getElementById("status").innerHTML = "Status: Detecting Objects";
          document.getElementById("Number_of_Objects").innerHTML = "Number of Objects:" + object.length;

          fill(r,g,b);
          percent = floor(object[i].confidence*100);
          text(object[i].label, object[i].x +15,object[i].y +15);
          noFill();
          stroke(r,g,b);
          rect(object[i].x , object[i].y , object[i].width , object[i].height);
          if(objects[i].label == "person")
          {
           document.getElementById("BABY").innerHTML = "Baby Found";
          }
          else{
            document.getElementById("BABY").innerHTML = "Baby Not Found"; 
            Song.play;
          }
      }
    }
}