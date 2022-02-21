status = "";
img3 = "";

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);

    document.getElementById("detect").innerHTML = "status : detecting object";
}

function modelLoaded(){
    console.log("modelloaded")
    status = true;
    objectDetector.detect(img3, gotResult);

}

function gotResult(error, result){
if(error){
    console.log("error");
}
console.log(result);
}

function preload() {
    img3 = loadImage('football.jpeg');
}

