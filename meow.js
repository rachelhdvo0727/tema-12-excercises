"use strict";

window.addEventListener("DOMContentLoaded", start);

function start(){
    console.log("start");
    getSVG();
}
async function getSVG(){
    console.log("getSVG");
    const response = await fetch("tiger.svg");
    const mySVG = await response.text();
    document.querySelector("section").innerHTML = mySVG;
    startManipulatingTiger();
}
function startManipulatingTiger(){
console.log("startManipulatingTiger");
//click event + fill for each eyes (short-hand)
// document.querySelectorAll("#g302, #g350, #g306, #g474").forEach((element) =>
//     element.addEventListener("click", function (){
//         console.log("click eyes");
//     element.style.fill = "red";
//     }
// ));

document.querySelectorAll("#g302, #g350, #g306, #g474").forEach((elm) => {
    elm.addEventListener("click", clickAlleyes);
});

document.querySelector("#path56").addEventListener("click", clickBottom);
}

function clickAlleyes(){
    document.querySelectorAll("#g302, #g350, #g306, #g474").forEach((elm) =>{
            elm.style.fill="red";
    });
}

function clickBottom(event){
    console.log(event.target);
    document.querySelector("#path56").style.fill ="black";
}
// function clickEyes(){
//     document.querySelectorAll("#g302, #g350, #g306, #g474").style.fill="red";
// function clickRightEyes(evt){
//     console.log(evt.target);
//     document.querySelector("#g302").style.fill = "red";
// }
