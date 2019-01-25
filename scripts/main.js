let img 
let textData
let data
let counter = 0 
let allowedToLoop = true

function preload() {
  data = loadJSON('images.json');
}

function setup(){
  createCanvas(displayWidth,displayHeight);
  background(0)
  frameRate(10)
  img = loadImage("media/" + data[0].image)
}

function draw(){
  image(img,0,0,displayWidth,displayHeight)
  textSize(35)
  fill(255,0,0)
  stroke(255,0,0)
  text(textData,30,500)

  if(allowedToLoop){
    selectNextImage()
  }

}

function selectNextImage(){
  counter++

  img = loadImage("media/" + data[counter].image)

  textData = data[counter].description
  textData.toString()

  if(counter > 25){counter = 0}

}

function mousePressed(){
  allowedToLoop = !allowedToLoop
}