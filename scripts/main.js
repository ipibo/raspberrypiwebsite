let img 
let textData
let data
let counter = 0 
let allowedToLoop = true
let dataLength = 0
let imgUrl 
let onPhone = false
let pixFromLeft = 0;

let goToLeft = true
const scrollSpeed = 5

let timer = 0
let timePassed = 0


function preload() {
  data = loadJSON('images.json');
}

function setup(){
  noCanvas()
  background(0)
  dataLength = getDataLength(data) 
  selectNextImage()
}

function draw(){
  const theImage = document.getElementById("image")
  theImage.setAttribute("src",imgUrl)

  const discription = document.getElementById("discription")
  discription.innerHTML = textData
  

  if(allowedToLoop) {
    discription.setAttribute("style","display:none")  
    pixFromLeft = 0
  }
  
  if(!allowedToLoop){
    discription.setAttribute("style","display:block")  
    
    if(goToLeft)pixFromLeft -= scrollSpeed
    if(!goToLeft)pixFromLeft += scrollSpeed

    if(pixFromLeft < -(theImage.width - displayWidth) || pixFromLeft > 40) goToLeft = !goToLeft

  }

  theImage.setAttribute("style","left:"+pixFromLeft+"px")

  timer = int(millis()) - timePassed

  if(timer > 250 ){
    timePassed = int(millis())
    if(allowedToLoop) selectNextImage()
  }
}

function selectNextImage(){
  counter++
  
  img = loadImage("media/" + data[counter].image)
  imgUrl = "media/" + data[counter].image
  textData = data[counter].description
  if(checkCounter(counter,dataLength)) counter = 0
}

function mousePressed(){
  if(!onPhone){
    allowedToLoop = !allowedToLoop
  }
}

function touchStarted() {
  if(onPhone){
    allowedToLoop = !allowedToLoop
  }
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

//check if it's on a phone or not
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  console.log("android")
  onPhone = true
 }
 