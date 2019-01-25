let img 
let textData
let data
let counter = 0 
let allowedToLoop = true
let dataLength = 0
let imgUrl 

function preload() {
  data = loadJSON('images.json');
}

function setup(){
  // createCanvas(displayWidth,displayHeight);
  noCanvas()
  background(0)
  dataLength = getDataLength(data) 
  frameRate(10)
  img = loadImage("media/" + data[0].image)
}



function draw(){

  const theImage = document.getElementById("image")
  theImage.setAttribute("width", "304");
  theImage.setAttribute("height", "228");
  theImage.setAttribute("src",imgUrl)

  const theText = document.getElementById("text")
  theText.innerHTML = textData

  if(allowedToLoop) selectNextImage()

}

function selectNextImage(){
  counter++
  img = loadImage("media/" + data[counter].image)
  imgUrl = "media/" + data[counter].image
  textData = data[counter].description
  if(checkCounter(counter,dataLength)) counter = 0
}

function mousePressed(){
  allowedToLoop = !allowedToLoop
}


function getDataLength(theData){
  let dL = 0 
  for (let a in theData)dL = a
  return dL
}

function checkCounter(c,length){
  if(c >= length){
    return true
  }else{
    return false
  }
}