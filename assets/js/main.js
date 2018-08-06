var keyData = [{
    details: {title:"Jazzybeat", bgcolor:"#222222"},
    q: {sound: new Howl({  src: ['sounds/1/bubbles.mp3']}),       color: '#1abc9c'},
    w: {sound: new Howl({  src: ['sounds/1/clay.mp3']}),          color: '#2ecc71'},
    e: {sound: new Howl({  src: ['sounds/1/confetti.mp3']}),      color: '#3498db'},
    r: {sound: new Howl({  src: ['sounds/1/corona.mp3']}),        color: '#9b59b6'},
    t: {sound: new Howl({  src: ['sounds/1/dotted-spiral.mp3']}), color: '#34495e'},
    y: {sound: new Howl({  src: ['sounds/1/flash-1.mp3']}),       color: '#16a085'},
    u: {sound: new Howl({  src: ['sounds/1/flash-2.mp3']}),       color: '#27ae60'},
    i: {sound: new Howl({  src: ['sounds/1/flash-3.mp3']}),       color: '#2980b9'},
    o: {sound: new Howl({  src: ['sounds/1/glimmer.mp3']}),       color: '#8e44ad'},
    p: {sound: new Howl({  src: ['sounds/1/moon.mp3']}),          color: '#2c3e50'},
    a: {sound: new Howl({  src: ['sounds/1/pinwheel.mp3']}),      color: '#f1c40f'},
    s: {sound: new Howl({  src: ['sounds/1/piston-1.mp3']}),      color: '#e67e22'},
    d: {sound: new Howl({  src: ['sounds/1/piston-2.mp3']}),      color: '#e74c3c'},
    f: {sound: new Howl({  src: ['sounds/1/prism-1.mp3']}),       color: '#95a5a6'},
    g: {sound: new Howl({  src: ['sounds/1/prism-2.mp3']}),       color: '#f39c12'},
    h: {sound: new Howl({  src: ['sounds/1/prism-3.mp3']}),       color: '#d35400'},
    j: {sound: new Howl({  src: ['sounds/1/splits.mp3']}),        color: '#1abc9c'},
    k: {sound: new Howl({  src: ['sounds/1/squiggle.mp3']}),      color: '#2ecc71'},
    l: {sound: new Howl({  src: ['sounds/1/strike.mp3']}),        color: '#3498db'},
    z: {sound: new Howl({  src: ['sounds/1/suspension.mp3']}),    color: '#9b59b6'},
    x: {sound: new Howl({  src: ['sounds/1/timer.mp3']}),         color: '#34495e'},
    c: {sound: new Howl({  src: ['sounds/1/ufo.mp3']}),           color: '#16a085'},
    v: {sound: new Howl({  src: ['sounds/1/veil.mp3']}),          color: '#27ae60'},
    b: {sound: new Howl({  src: ['sounds/1/wipe.mp3']}),          color: '#2980b9'},
    n: {sound: new Howl({  src: ['sounds/1/zig-zag.mp3']}),       color: '#8e44ad'},
    m: {sound: new Howl({  src: ['sounds/1/moon.mp3']}),          color: '#2c3e50'}},
  {
    details: {title:"Beatabox", bgcolor:"rgb(80,40,80"},
    q: {sound: new Howl({  src: ['sounds/2/ahh1.wav']}),       color: '#1abc9c'},
    w: {sound: new Howl({  src: ['sounds/2/ahh2.wav']}),          color: '#2ecc71'},
    e: {sound: new Howl({  src: ['sounds/2/ahh3.wav']}),      color: '#3498db'},
    r: {sound: new Howl({  src: ['sounds/2/boom1.wav']}),        color: '#9b59b6'},
    t: {sound: new Howl({  src: ['sounds/2/boom2.wav']}), color: '#34495e'},
    y: {sound: new Howl({  src: ['sounds/2/boom3.wav']}),       color: '#16a085'},
    u: {sound: new Howl({  src: ['sounds/2/boom4.wav']}),       color: '#27ae60'},
    i: {sound: new Howl({  src: ['sounds/2/boomba.wav']}),       color: '#2980b9'},
    o: {sound: new Howl({  src: ['sounds/2/boomboom.wav']}),       color: '#8e44ad'},
    p: {sound: new Howl({  src: ['sounds/2/boomhaa.wav']}),          color: '#2c3e50'},
    a: {sound: new Howl({  src: ['sounds/2/breath1.wav']}),      color: '#f1c40f'},
    s: {sound: new Howl({  src: ['sounds/2/buff.wav']}),      color: '#e67e22'},
    d: {sound: new Howl({  src: ['sounds/2/catchit.wav']}),      color: '#e74c3c'},
    f: {sound: new Howl({  src: ['sounds/2/chick1.wav']}),       color: '#95a5a6'},
    g: {sound: new Howl({  src: ['sounds/2/chick2.wav']}),       color: '#f39c12'},
    h: {sound: new Howl({  src: ['sounds/2/chick3.wav']}),       color: '#d35400'},
    j: {sound: new Howl({  src: ['sounds/2/chick4.wav']}),        color: '#1abc9c'},
    k: {sound: new Howl({  src: ['sounds/2/clap.wav']}),      color: '#2ecc71'},
    l: {sound: new Howl({  src: ['sounds/2/click1.wav']}),        color: '#3498db'},
    z: {sound: new Howl({  src: ['sounds/2/click2.wav']}),    color: '#9b59b6'},
    x: {sound: new Howl({  src: ['sounds/2/ha.wav']}),         color: '#34495e'},
    c: {sound: new Howl({  src: ['sounds/2/hat1.wav']}),           color: '#16a085'},
    v: {sound: new Howl({  src: ['sounds/2/kick1.wav']}),          color: '#27ae60'},
    b: {sound: new Howl({  src: ['sounds/2/kick3.wav']}),          color: '#2980b9'},
    n: {sound: new Howl({  src: ['sounds/2/kick4.wav']}),       color: '#8e44ad'},
    m: {sound: new Howl({  src: ['sounds/2/longboom.wav']}),          color: '#2c3e50'}}
]
var currentKeyData=keyData[0]

var circlesarr  = []
var maxPoint    = new Point(view.size.width,view.size.height)
var appDiv      = document.querySelector('div#app')
var overlayDiv  = document.querySelector('div#overlay')
var overlayTime = 0;

//  SHOW TITLE FOR CURRENT SOUNDBOARD
var showTitle = function (){
                  document.getElementById('soundboardTitle').innerHTML="<h1>"+currentKeyData.details.title+"</h1>"
                  document.querySelector('#mainCanvas').style.display="none";
                  setTimeout(function() {
                    document.querySelector('#mainCanvas').style.display="block";
                  },1000)
                }

//  SHOW HELP PANE 
var showHelp =  function() {
                  if (appDiv.style.zIndex=="1") {
                    appDiv.style.zIndex="0"
                    overlayDiv.style.zIndex="1"
                  }
                  else if (overlayDiv.style.zIndex=="1") {
                    appDiv.style.zIndex="1"
                    overlayDiv.style.zIndex="0"
                    showTitle();
                  }
                  window.clearTimeout(overlayTime)
                  overlayTime=window.setTimeout(function() {
                    appDiv.style.zIndex="1"
                    overlayDiv.style.zIndex="0"
                    // showTitle();
                  },10000);
                }
document.body.addEventListener('click', showHelp);

//  RESIZE ANIMATION PANE SIZE WITH WINDOW RESIZE
window.addEventListener('resize', function() {
  maxPoint= new Point(view.size.width,view.size.height)
});


//  KEY SPECIFIC ANIMATION COLOR/SOUND AND OPERATION
function onKeyDown(event) {
  console.log(view.size.width,view.size.height)
  console.log(event.key);
  // GO TO PREVIOUS SOUNDBOARD (LEFT ARROW)
  if (event.key=="left")
  { // console.log("previous");
    for (var i = 0; i < keyData.length; i++)
    {
      if (currentKeyData==keyData[i])
      {
        if (i==0)
        {
          i=keyData.length-1;
        }
        else
        {
          i--
        }
        currentKeyData=keyData[i]
        break
      }
    }
  }
  // GO TO NEXT SOUNDBOARD (RIGHT ARROW)
  else if (event.key=="right")
  { // console.log("next");
    for (var i = 0; i < keyData.length; i++)
    {
      if (currentKeyData==keyData[i])
      {
        if (i==keyData.length-1)
        {
          i=0;
        }
        else
        {
          i++
        }
        currentKeyData=keyData[i]
        break
      }
    }
  }
  // UPDATE BACKGROUND AND SHOW TEXT
  if (event.key=="left" || event.key=="right") {
    document.querySelector('#mainCanvas').style.background=currentKeyData.details.bgcolor
    showTitle()
  }
  // CHECK KEY AND PLAY SOUND
  else if (currentKeyData[event.key])
  {
    currentKeyData[event.key].sound.play()
    var centerPoint= maxPoint * Point.random()
    circlesarr.push(new Path.Circle(centerPoint,Math.random()*300))
    circlesarr[circlesarr.length-1].fillColor=currentKeyData[event.key].color
    // circlesarr[circlesarr.length-1].fillColor="rgb("+Math.random()*200+", "+Math.random()*200+", "+Math.random()*200+")"
  }
  else
  {
    showHelp()
    console.log("The following key has no function whatsoever in the app!!")
  }
}

//  SHRINKING CIRCLE WITH HUE TRANSITION ANIMATION
function onFrame(event) {
  for (var i = 0; i < circlesarr.length; i++) {
    if(circlesarr[i].area<5){
      circlesarr[i].remove()
      circlesarr.splice(i,1)
      // console.log(circlesarr);
    }
    else {
      circlesarr[i].fillColor.hue += 1;
      circlesarr[i].scale(0.95)
    }
  }
}

//  FUNCTION TO ENABLE FULLSCREEN
function GoInFullscreen(element) {
	if(element.requestFullscreen)
		element.requestFullscreen();
	else if(element.mozRequestFullScreen)
		element.mozRequestFullScreen();
	else if(element.webkitRequestFullscreen)
		element.webkitRequestFullscreen();
	else if(element.msRequestFullscreen)
		element.msRequestFullscreen();
}

//  FUNCTION TO DISABLE FULLSCREEN
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

$("body").dblclick(function() {
  if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
    GoOutFullscreen()
  }
  else {
    GoInFullscreen(document.body);
  }
})

//  START THE APP
document.querySelector('#startButton').addEventListener('click', function() {
  document.querySelector('div#start').style.display="none"
  appDiv.style.zIndex="1"
});
