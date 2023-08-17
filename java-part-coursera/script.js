//DOM manipulation
//****************lecture 53 part 1*************************//
//you can get any element as 

// document.getElementById("title");

//now to print it in console

// console.log(document.getElementById("title"));

//surprised? you get null why?
//this because script.js file is not in the body tag but title id is in the body tag so our script is executing outside the body tag so we must write the script tag inside the body tag at the very last so do this in html file
// see now the id title is reached by script
// reason we are able to use document.getelementbyid because document is a very special object and object name of document is html document there are whole bunch of methods that u can call on document we can actually check this by 

// console.log(document instanceof HTMLDocument);

// this gives u true and instanceof operator is a test to check whether or not the document is the insatnce of html
//***************lecture 53 part2***********************//
//as no behaviour is assigned to button so on clicking on it it do nothing uptill now
//we are going to give it a behaviour by using ONCLICK in the button tag and want to call a function which make soure that onclick it shows sayHello!
//so we have given a function onclick="sayHello();" inside the button tag and we are going to define that function

/* function sayHello () {
    console.log(
        document.getElementById("name").value
    );  
}
*/

// after function there is name of function that we named in the button
//now if we only write console.log(document.getElementById("name"));
//then on clicking the say it button we get the element whose id is name but we dont want that
// we want that anythin is typed in the input that should we get in the console when we click on say it button 
//for this we use value property as                         console.log(document.getElementById("name").value);

// now if we save the value of input in a variable and then want some message whwn we type the name in the input so what we do we use div which have id content in html and want to print the message in it

/* 
function sayHello () {
    var name = document.getElementById("name").value;  
    var message = "Hello" + name + "!";
    document
    .getElementById("content")
    .textContent=message;
}
*/ 

// see the var message which says hello to name which we get from input and thats why we stored it in name  now how do we insert it in div for this we use document.getelementbyid("content")
// and to display it or to get its value we dont use .value this time instead  we use .textcontent=message 
// but if we want that message must be an h2 element we can do that by using .innerHTML=message; instead of .textcontent=message.

/*
function sayHello () {
    var name = document.getElementById("name").value;  
    var message = "<h2>Hello" + name + "!</h2>";
    document
    .getElementById("content")
    .innerHTML=message;
}
*/

//so now if u inspect the element you will see that it is an h2 as a part of html document
// now we can paly something for example we want that when  we write student in the input the h1 changes   

/* 
function sayHello () {
    var name = document.getElementById("name").value;  
    var message = "<h2>Hello" +"  "+ name + "!</h2>";
    document
    .getElementById("content")
    .innerHTML=message;

    if (name==="student"){
        var title=
        document
        .querySelector("#title") //this is same as id selector 
        .textContent;
        title+="& lovin it!";
        document
        .querySelector("h1")
        .textContent=title;
    }
}
*/
//*********************lecture54****************************//
//********event handler***********//
// are specific for something like 
// page loading
// or when user clicked something
// simple method to us event handlers is 
// onsomthing for example onload, onclick ,onfocus, onblur
//onblur means when something loses focus
// let we assign onblur to our input in html with the same function name then see what happen
/*
function sayHello () {
    this.textContent="said it!"
    var name = document.getElementById("name").value;  
    var message = "<h2>Hello" +"  "+ name + "!</h2>";
    document
    .getElementById("content")
    .innerHTML=message;

    if (name==="student"){
        var title=
        document
        .querySelector("#title") //this is same as id selector 
        .textContent;
        title+="& lovin it!";
        document
        .querySelector("h1")
        .textContent=title;
    }
}
*/

// so the second the input feel loses focus the typed text will printed by the dive content  so onblur works 
//lets remove it from the input for now 
//other ways of doing the things are
//******unobstrusive event binding
//why this is called so 
// the html does not need to know enything about the javascript
// so if we remove onclic function from the button then html does not know anything about click handeling
// now how the cick things will be handeled see
/*
document.querySelector("button")
.addEventListener("click", sayHello);

*/
// now this select the button and add it with event listener that when someone click the button say it then sayHello function will work that is defined above  this is because we are passing the value of  function into addeventlistener  so
// button gets a call from addeventlistener and inside of that call we have assigned the sayhello  to its event 
// another simple way of doing the same is 
/*
document.querySelector("button")
.onclick=sayHello;
*/

//here we are selecting value of function onclick by sayhello and not calling the function by sayhello() 
//now if i want that when i click on the button the name of button changes this we can do that by adding this.textcontent="said it"; inside the above function  this is very easy way instead of again selecting the button or onclick behaviour by queryselector 
// now again call the button as above 
/*
document.querySelector("button")
.addEventListener("click", sayHello);
*/

//now 
//********life cycle event of the page ***************//
//that will let us to assign the events to the the element of the page once they load before anything else is loaded means before any css or image is loaded 
// since we are going to be listening this event so we dont need the script.js inside the body of html at bottom we can place it anywhere in the head tag 
//now we need to listen the particular event in the life cycle of page and that event is DOMContentLoaded
//and we want to assign a function and every event handler function gets this event object that we rite in () and inside this function we can start assigning different events
// we input it with the whole function that we made above
//and pass the argument (event)in every single java script event handler
/*
document.addEventListener("DOMContentLoaded" ,
function (event) {

    function sayHello (event) {
        this.textContent="said it!"
        var name = document.getElementById("name").value;  
        var message = "<h2>Hello" +"  "+ name + "!</h2>";
        document
        .getElementById("content")
        .innerHTML=message;
    
        if (name==="student"){
            var title=
            document
            .querySelector("#title") //this is same as id selector 
            .textContent;
            title+="& lovin it!";
            document
            .querySelector("h1")
            .textContent=title;
        }
    }
    document.querySelector("button")
.addEventListener("click", sayHello);
}
);

*/
// this work same as we have done it before but this time we dont  have to put script.js inside the body tag 
//************************lecture 55************************//
//*******the event argument*******
//if u console the event as console.log(event)
// the console tells u that it is a mouse event and gives u the whole bunch of properties that is associated with it such as its coordinates and so on 
// if u go on web and see the  event page or event web apis on mozzilla developer tools  it gives u all kind of events that happen
// such as keypress , mousemove, mousepress, 
//if want the x and y coordinates  of mouse when we move it on screen and when shift key is pressed only for this we add another function in the above code as you se below

document.addEventListener("DOMContentLoaded" ,
function (event) {

    function sayHello (event) {
        console.log(event);
        this.textContent="said it!"
        var name = document.getElementById("name").value;  
        var message = "<h2>Hello" +"  "+ name + "!</h2>";
        document
        .getElementById("content")
        .innerHTML=message;
    
        if (name==="student"){
            var title=
            document
            .querySelector("#title") //this is same as id selector 
            .textContent;
            title+="& lovin it!";
            document
            .querySelector("h1")
            .textContent=title;
        }
    }
    // Unobstrusive event binding
    document.querySelector("button")
.addEventListener("click", sayHello);
//for the mouse movement on screen and coordinates when shiftkey is pressed
document.querySelector("body")
.addEventListener("mousemove",
function (event) {
    if(event.shiftKey===true){
    console.log("x: "+event.clientX);
    console.log("y: "+event.clientY);
    }  
}
);
}
);