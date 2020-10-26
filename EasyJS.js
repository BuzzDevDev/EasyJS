/* 
    Bleart Emini

    Date Started: October 9, 2020

    Last Updated: October 14, 2020

    Version: v2.0.0

    Protected by the Creative Commons Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0) License
    https://creativecommons.org/licenses/by-nd/4.0/legalcode

*/

const EasyJSData = {
    since_date: 'October 9, 2020',
    version: 'v2.0.0',
    git: 'https://github.com/BuzzDevDev/EasyJS.git'
}

var onStartMSG =  `
    ⚡ EasyJS ${EasyJSData.version} ⚡
    💻 Github: ${EasyJSData.git} 💻
    👩‍💻 Since ${EasyJSData.since_date} 👩‍💻
`


var selfEasyJS;

const errors = {
    not_found: "EasyJS: 404 not found.",
    switch_defualt: "EasyJS, on switch statement, defualt occured. Check if everything that you typed is right. (case sensitve)",
    non_ctx: "EasyJS: Could not find 'ctx' for canvas context, please name your canvas context as 'ctx'.",
    internal_err: "EasyJS: Internal Error occured."
};

function EasyJS () {
    this.onStart = () => {
        
    }
};

function initEasyJS() {
    selfEasyJS = new EasyJS();
    console.log(onStartMSG);
};

initEasyJS();





/**
 * 
 * @param {any} elem Element to search for and delete and move.
 * @description Searchs for any data type in an array and delete and move it to a new array. If an array does not have the element that is being searched, it will return undefined.
 */

Array.prototype.delMove = (elem) => {
    var index = this.indexOf(elem);
    var myElem = this[index];
    var newArr = [];
    newArr.push(myElem)
    this.splice(index, 1);
    return newArr;
    
};






/**
 * 
 * @param {number} min A number, minimum
 * @param {number} max A number, maximum
 * @description Generates a random number between a min and a max.
 */

Math.fromTo = (min, max) => {return Math.floor(Math.random() * (max - min + 1) + min)};

/**
 * 
 * @param {number} num1 A number
 * @param {number} num2 A number
 * @description Multiplies both numbers then adds to it by a random number from 2 to 5.
 */

Math.dupe = (num1, num2) => {return (num1 * num2) + Math.floor(Math.random() * (2 - 5 + 1) + 2)}

/**
 * 
 * @param {number} degrees The degrees
 * @description Converts degrees to radius
 */

Math.degToRad = (degrees) => {return degrees * (Math.PI / 180);}

/**
 * 
 * @param {number} rad The radius
 * @description Converts radius to degrees
 */

Math.radToDeg = (rad) => {return rad / (Math.PI / 180);};

/**
 * 
 * @param {number} num Number
 * @description Returns true of false if a number is odd.
 */

Math.isOdd = (num) => {
    if(num % 2 == 0) {
        return false;
    }
    else {
        return true;
    }
}

/**
 * 
 * @param {number} num Number
 * @description Returns true of false if a number is even.
 */

Math.isEven = (num) => {
    if(num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

/**
 * 
 * @param {number} n Number
 * @description Returns true of false if a number is a float.
 */

Math.isFloat = (n) => {
    return n === +n && n !== (n|0);
}

/**
 * 
 * @param {number} n Number
 * @description Returns true of false if a number is an integer.
 */

Math.isInteger = (n) => {
    return n === +n && n === (n|0);
}



/**
 * 
 * @param {string} shape The shape, supports circle, square, and rectangles.
 * @param {number} w Width of the shape. 
 * @param {number} h Height of the shape.
 * @param {number} y Y position of the shape.
 * @param {number} x X postion of the shape.
 * @description Easy way to make basic shapes with solid a color **MAKE SURE YOUR CANVAS CONTEXT IS NAMED CTX**.
 */


CanvasRenderingContext2D.prototype.colorShape = (shape, w, h, y, x, color) => {
    switch(shape) {
        case "circle":
            ctx.beginPath();
            ctx.arc(x, y, w || h, 0, 2 * Math.PI, false);
            ctx.fillStyle = color;
            ctx.fill();
        break;

        case "rectangle":
            ctx.fillStyle = color;
            ctx.fillRect(x, y, w, h);
        break;

        default:
            console.error(errors.switch_defualt);
        break;
    }
};

/**
 * 
 * @param {string} path The file path of the image.
 * @param {number} y The y position of your sprite.
 * @param {number} x The x position of your sprite.
 * @description Easy way to load in a sprite **MAKE SURE YOUR CANVAS CONTEXT IS NAMED CTX**!
 */

CanvasRenderingContext2D.prototype.loadSprite = (path, x, y) => {
    var imageObj = new Image();

    imageObj.onload = function() {
        ctx.drawImage(imageObj, x, y);
    };
    imageObj.src = path;
};

/**
 * 
 * @param {string} path The file path of the first frame.
 * @param {number} y The y position of your sprite.
 * @param {number} x The x position of your sprite.
 * @param {number} speed How long each frame of the animation os displayed.
 * @param {number} frames The number of frames in your animation.
 * @param {boolean} loopBool Set true if you want the animation to loop and false if not.
 * @param {string} fileType The file type of your frames, excepts png, jpeg, jpg, and more. Does not except gif.
 * @description Loads and replaces the before image to make an animation. Label each frame image as follows: mySprite-1 (change the 1 for each image). Must be a png!
 */

CanvasRenderingContext2D.prototype.loadSequence = (path, x, y, speed, frames, loopBool, fileType) => {
    var imageObj = new Image();
    var frameCount = 1;
    var myPath = `${path}-${frameCount}.${fileType}`;
    var baseInt;
    baseInt = setInterval(function () {
        ctx.clearRect(0,0,100,100);
        imageObj.src = myPath;
        imageObj.onload = () => {
            ctx.drawImage(imageObj, x, y);
        };
        frameCount++;
        myPath = `${path}-${frameCount}.${fileType}`;
        if(frameCount > frames && loopBool == false) {
            clearInterval(baseInt);
        };
        if(frameCount >= frames && loopBool == true) {
            frameCount = 1;
        };
        
    }, speed);
    
};




/**
 * @description An optional but easy way to add the jquery tag to your html document.
 */

HTMLDocument.prototype.insertJquery = () => {
    let script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
}

/**
 * 
 * @param {string} script Link or path your script.
 * @param {string} tagName Where you want to insert your script, takes head or body.
 * @param {boolean} top A boolean to insert a script at the very top of the element or at the bottom.
 * @description Inserts a script element.
 */

HTMLDocument.prototype.insertScript = (script, tagName, top) => {
    let myScript = document.createElement('script');
    myScript.src = script;
    myScript.type = 'text/javascript';
    if(top == true) {
        document.getElementsByTagName(tagName)[0].appendChild(myScript);
    }else{
        document.getElementsByTagName(tagName).appendChild(myScript);
    }
}

/**
 * 
 * @param {string} elem The ID of the child element.
 * @description An optional but easy way to get the parent element's id of a child.
 */

HTMLDocument.prototype.getParent = (elem) => {
    return document.getElementById(elem).parentElement.id;
};

/**
 * 
 * @param {string} elem The ID of the parent element.
 * @description An optional but easy way to get the first child element's id of a parent.
 */

HTMLDocument.prototype.getChild = (elem) => {
    var child = (document.getElementById(elem).firstElementChild.id);
    return child;
};

/**
 * 
 * @param {string} elem The ID or Class (specify by placing a . or # before the name) of the element you would like to animate.
 * @param {string} speed The amount of time it takes to finish an animation, in milliseconds.
 * @param {string} animation The type of animations you would like to add to an element. Currently accepts fade-in, and fade-out.
 * @description Adds an animation to an element that happens when the document is loaded. **Notice: This requires Jquery!**
 */

HTMLDocument.prototype.animateElem = (elem, speed, animation) => {
    switch(animation) {
        case "fade-in":
            $(document).ready(function(){
                $(elem).fadeIn(speed);
            });
        break;

        case "fade-out":
            $(document).ready(function(){
                $(elem).fadeOut(speed);
            });
        break;
    
        default:
            console.error(errors.switch_defualt);
        break;
    };
};
