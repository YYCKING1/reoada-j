Webcam.set({
width:310,
height:310,
image_format: "png",
png_quality: 90,

constraints: 
{
    facingMode: "enviroment" //thi will check for the rear camera atomatically so that we can use this app on a modile phone and if the rear camera is not there it will go top the front camera
}

});

camera = document.getElementById("camera");

Webcam.attach("#camera");//you can either the variable camera or you cna have the div element camera they both refer tot he div element

function take_snapshot()
{
    Webcam.snap(function(data_uri)  {
        document.getElementById("result").innerHTML = "<img id='captured_image' src='" +data_uri+ "'/>";
    });   //this is the function to put the captured image in the result area

}

console.log("ml5 version:", ml5.version);// this is to just check if the ml5 library has loaded
classifier = ml5.imageClassifier("MobileNet",modelLoaded);// the variable classifier is going to hold the model
             //imageClassifier() is to trigger the image classification progress and the second parameter modelloaded is a function that will start the classification prosess
function modelLoaded()
{
    console.log("Model Loaded")// this will trigger the image classification process
}
function Check()
{
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult); // .classify is the pre defined function of the ml5 library wich will compare the images and load the results
}
function gotResult(error, results)//this function wich will display the results
{
if (error)//this is an if for when there is an error
{
console.error(error)// this is a command to present the error on the console screen
} else 
{
    console.log(results);// this is a command to present the results array in the console
    document.getElementById("object_name").innerHTML = results[0].label; //your taking the value of the label formt eh zeroth position of the results array
}
}



