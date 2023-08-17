var nose_x=0;
var nose_y=0;
var difference=0;
var leftWrist_x=0;
var rigthWrist_x=0;

function setup(){
    var video=createCapture(VIDEO);
    video.size(600, 600);
    video.position(180, 60);
    canvas=createCanvas(600, 600);
    canvas.position(800, 100);

    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}
function modelLoaded(){
    console.log("Model Loaded");
}
function draw(){
    background("rgb(255, 50, 50)");
    fill("purple");
    textSize(difference);
    text("texto manipulável", nose_x, nose_y);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        rigthWrist_x=results[0].pose.rightWrist.x;
        leftWrist_x=results[0].pose.leftWrist.x;
        difference=floor(leftWrist_x-rigthWrist_x);
        document.getElementById("square").innerHTML="Largura e Altura serão: "+difference+"pixels.";
    }
}