﻿<h1>EasyJS</h1><br>
<h3>By Bleart Emini</h3>
<h3>Protected by the Creative Commons Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0) License</h3>
<br><br>

<h2>What is EasyJS?</h2>
<p>EasyJS is a libray that extends JavaScript and HTML interfaces and APIs.</p>

<br><br>
<h2>Extended Interfaces</h2>
<ol>
  <li>Array</li>
  <li>Math</li>
  <li>CanvasRenderingContext2D</li>
  <li>HTMLDocument</li>
</ol>

<h2>Getting Started</h2>
<p>First, clone this repository <i>or</i> use the CDN.</p>
<p>For CDN, Place the following in between the head tags: <script src='https://cdn.jsdelivr.net/gh/BuzzDevDev/EasyJS@1.1.0/EasyJS.min.js'></script>
</p>
<br><br>

<h2>How to</h2>
<h3>Array</h3>
<h4>Array.delMove(elem)</h4>
<p>Searchs for any data type in an array and delete and move it to a new array. If an array does not have the element that is being searched, it will return undefined.</p>
<h5>Usage</h5>
<p>
var myArray = ["a", "b", "c"];

// searches for "a" and removes it and returns a new array <br>
var myNewArray = myArray.delMove("a");
</p>
<br>
<h3>Math</h3>
<h4>Math.fromTo(min, max)</h4>
<p>Generates a random number between a min and a max.</p>
<h5>Usage</h5>
<p>
var magicBallAnswers = ["Yes", "No", "Maybe"];

console.log(magicBallAnswers[Math.fromTo(0, 2)]);
</p>
<br>
<h3>CanvasRenderingContext2D</h3>
<h4>CanvasRenderingContext2D.colorShape(shape, w, h, x, y, color)</h4>
<p>Easy way to make basic shapes with solid a color **MAKE SURE YOUR CANVAS CONTEXT IS NAMED CTX**.</p>
<h5>Usage</h5>
<p>
  
var canvas = document.getElementById('myCanvas'); <br>

// name the variable ctx to get the context NEEDED <br>

var ctx = canvas.getContext('2d'); <br>

// two possible shapes: circle, and rectangle <br>

// draws a blue rectangle with dimensions of 30 x 30 and position of x0, and y0 <br>
ctx.colorShape('rectangle', 30, 30, 0, 0, 'blue'); <br>
<br>
// draws a red circle with radius of 10 (w property is radius) and position of x45, and y45 <br>
ctx.colorShape('circle', 10, 10, 45, 45, 'red'); <br>
</p>
<h4>CanvasRenderingContext2D.loadSprite(path, x, y)</h4>
<p>Easy way to make basic shapes with solid a color **MAKE SURE YOUR CANVAS CONTEXT IS NAMED CTX**.</p>
<h5>Usage</h5>
<p>
  
var canvas = document.getElementById('myCanvas'); <br>

// name the variable ctx to get the context NEEDED <br>

var ctx = canvas.getContext('2d'); <br>

// draws my image with a position of x30, and y30 <br>
ctx.loadSprite('images/mySprite', 30, 30); <br>
</p>
<h3>HTMLDocument</h3>
<h4>HTMLDocument.insertJquery()</h4>
<h5>Usage</h5>
<p>

// inserts jquery in the head of our page <br>
document.insertJquery(); <br>

</p>
<h4>HTMLDocument.insertScript(script, tagName, top)</h4>
<h5>Usage</h5>
<p>

// inserts a script in the body tag of our page at the top <br>
document.insertScript('js/myFile.js', 'body', true); <br>
<h4>HTMLDocument.getParent()</h4>
<h5>Usage</h5>
<p>

// An optional but easy way to get the parent element's id of a child. <br>
var myElem = document.getElementById('demo'); <br>

var myElementsParent = document.getParent(); <br>

</p>
<h4>HTMLDocument.getChild()</h4>
<h5>Usage</h5>
<p>  

// An optional but easy way to get the child element's id of a parent. <br>
var myElem = document.getElementById('demo'); <br>

var myElementsChild = document.getChild(); <br>

</p>
<h4>HTMLDocument.animateElem(elem, speed, animation)</h4>
<h5>Usage</h5>
<p>  

// Adds an animation to an element that happens when the document is loaded. Notice: This requires Jquery! <br>
// speed is in milliseconds, how long the animation lasts <br>
// animations that is currently accepted is fade-in, and fade-out <br>
document.animateElem('myElement', 2500, 'fade-in'); <br>

</p>
