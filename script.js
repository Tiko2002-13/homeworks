let container = document.getElementById("container");
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let newdiv = document.getElementById("newdiv");
let line = document.createElement("u");
console.log(btn);
btn.addEventListener("click",(event) => {
    if(input.value !== "") {
        let newbtn = document.createElement("button");
        newbtn.classList.add("newbtn");
        newbtn.innerHTML = input.value
        let newclose = document.createElement("button");
        newclose.classList.add("newclose");
        newclose.innerHTML = "X";
        input.value = "";
        let newdi = document.createElement("div");
        newdi.classList.add("newdi");
        document.body.append(newdi);
        newdi.append(newbtn);
        newdi.append(newclose);
        newbtn.addEventListener("click", event => {
            if(newbtn.style.backgroundColor === "white" || newbtn.style.backgroundColor === "aquamarine"  ) {
                newbtn.style.backgroundColor = "grey";
                newbtn.classList.add("txt");
            } else if(newbtn.style.backgroundColor === "grey" || newbtn.style.backgroundColor === "aquamarine" ){
                newbtn.style.backgroundColor = "white";
                newbtn.classList.remove("txt");
            }
        })
        newclose.addEventListener("click",(event) => {
            newbtn.remove();
            newclose.remove();
        })
        newbtn.addEventListener("mouseover",(event) => {
            newbtn.style.backgroundColor = "aquamarine";
        })
        newclose.addEventListener("mouseover",(event) => {
            newclose.style.backgroundColor = "blue";
        })
        newbtn.addEventListener("mouseout",(event) => {
            newbtn.style.backgroundColor = "white";
        })
        newclose.addEventListener("mouseout",(event) => {
            newclose.style.backgroundColor = "purple";
        })
    }
})

