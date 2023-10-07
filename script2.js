
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let leftbtn = "<";
let rigthbtn = ">";
btn1.innerHTML = leftbtn;
btn2.innerHTML = rigthbtn;
btn3.innerHTML = leftbtn;
btn4.innerHTML = rigthbtn;
btn5.innerHTML = leftbtn;
btn6.innerHTML = rigthbtn;
btn7.innerHTML = leftbtn;
btn8.innerHTML = rigthbtn;
let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let fourth = document.getElementById("fourth");
second.style.display = "none";
third.style.display = "none";
fourth.style.display = "none";
function firstdiv() {
    first.style.display = "none";
    fourth.style.display = "flex";
}
function seconddiv() {
    first.style.display = "none";
    second.style.display = "flex";
}
function thirddiv() {
    first.style.display = "flex";
    second.style.display = "none";
}
function fourthdiv() {
    second.style.display = "none";
    third.style.display = "flex";
}
function firstdivoff() {
    third.style.display = "none";
    second.style.display = "flex";
}
function seconddivoff() {
    third.style.display = "none";
    fourth.style.display = "flex";
}
function thirddivoff() {
    fourth.style.display = "none";
    third.style.display = "flex";
}
function fourthdivoff() {
    fourth.style.display = "none";
    first.style.display = "flex";
}

btn1.addEventListener("click",(event) => {
    firstdiv();
})
btn2.addEventListener("click",(event) => {
    seconddiv();
})
btn3.addEventListener("click",(event) => {
    thirddiv();
})
btn4.addEventListener("click",(event) => {
    fourthdiv();
})
btn5.addEventListener("click",(event) => {
    firstdivoff();
})
btn6.addEventListener("click",(event) => {
    seconddivoff();
})
btn7.addEventListener("click",(event) => {
    thirddivoff();
})
btn8.addEventListener("click",(event) => {
   fourthdivoff();
});

let i = 0;
let arr = [seconddiv, fourthdiv, seconddivoff, fourthdivoff];
   
function slide() {
    arr[i]();
    i++;
    if (i >= arr.length) {
        i = 0;
    }
}
   
setInterval(slide, 2000);