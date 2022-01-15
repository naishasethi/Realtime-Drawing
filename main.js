noseX=0;
noseY=0;
difference=0;
leftWristX=0;
rightWristX=0;


  function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(550, 400);
  canvas.position(560,120);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("Nose X= " +noseX+ ", Nose Y= "+noseY);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
    console.log("right Wrist X= " +rightWristX+ ", left Wrist X= "+leftWristX+",Diference = "+difference);
    
  }
}

function draw() {
background("#bff542");
document.getElementById("square_side").innerHTML="The width and height of the square=  " + difference +"px"; 
fill("#623df5");
stroke("#623df5");
square(noseX, noseY, difference);
}
