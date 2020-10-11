/* 
    Bleart Emini

    Date Started: October 9, 2020

    Last Updated: October 11, 2020

    Version: 1.0.1

    Protected by the Creative Commons Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0) License
    https://creativecommons.org/licenses/by-nd/4.0/legalcode

*/

var selfEasyJS;

const errors = {
    not_found: "EasyJS: 404 not found.",
    switch_defualt: "EasyJS, on switch statement, defualt occured. Check if everything that you typed is right. (case sensitve)",
    non_ctx: "EasyJS: Could not find 'ctx' for canvas context, please name your canvas context as 'ctx'.",
    internal_err: "EasyJS: Internal Error occured."
};

function EasyJS () {
    this.check = () => {
        
    };
};

function initEasyJS() {
    selfEasyJS = new EasyJS();
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
 * @description An optional but easy way to add the jquery tag to your html document.
 */

HTMLDocument.prototype.insertJquery = () => {
    if (typeof jQuery == 'undefined') {
        let script = document.createElement('script');
        script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
        script.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(script);
    }
}

/**
 * 
 * @param {string} script Link or path your script.
 * @param {string} tagName Where you want to insert your script, takes head or body.
 * @param {boolean} top A boolean to insert a script at the very top of the element or at the bottom.
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