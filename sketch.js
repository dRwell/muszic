//var xcolor=0;
function preload(){
  bg=loadImage("music logo.webp")
  song1=loadSound("Taylor Swift - Delicate.mp3")
  song2=loadSound("Taylor Swift - willow (Official Music Video) (1).mp3")
  song3=loadSound("Taylor Swift - Message In A Bottle (Taylor's Version) (From The Vault) (Lyric Video).mp3")
  song4=loadSound("Taylor Swift - The Man (Official Video).mp3")
}
function setup() {
  createCanvas(600,800);
  slider=createSlider(0,1,0.3,0.02)
  x=createButton("song1")
  x2=createButton("song2")
  b1=createButton("song3")
  b2=createButton("song4")
  s=createButton("stop")
  b1.mousePressed(zz)
  b2.mousePressed(muzzzic)
  s.mousePressed(stop)
  b1.position(10,110)
  b2.position(10,130)
  s.position(10,90)
  x2.position(10,70)
  x2.mousePressed(muzic)
  x.position(10,50)
  x.mousePressed(muzzic)
  
  
  
}

function draw() {
  background(bg);
  song1.setVolume(slider.value())
  song2.setVolume(slider.value())
  song3.setVolume(slider.value())
  song4.setVolume(slider.value())
  slider.position(10,10)
  //if(mouseIsPressed){
   // song2.play()



//function color(){
//  xcolor=xcolor+30
}
function muzic(){
  song1.stop()
  song3.stop()
  song4.stop()
  song2.play()
}
function muzzic(){
  song2.stop()
  song3.stop()
  song4.stop()
  song1.play()
}
function muzzzic(){
  song1.stop()
  song2.stop()
  song3.stop()
  song4.play()
}
function zz(){
  song1.stop()
  song2.stop()
  song4.stop()
  song3.play()
}
function stop(){
  song1.stop()
  song2.stop()
  song3.stop()
  song4.stop()

}     


  
