var case1 = document.getElementById("case1");
var case2 = document.getElementById("case2");
var case3 = document.getElementById("case3");
var case4 = document.getElementById("case4");
var case5 = document.getElementById("case5");
var case6 = document.getElementById("case6");
var case7 = document.getElementById("case7");
var case8 = document.getElementById("case8");
var case9 = document.getElementById("case9");
var case10 = document.getElementById("case10");
var case11 = document.getElementById("case11");
var case12 = document.getElementById("case12");
var case13 = document.getElementById("case13");
var case14 = document.getElementById("case14");

case1.addEventListener("click",changeColor,false);
case2.addEventListener("click",changeColor,false);
case3.addEventListener("click",changeColor,false);
case4.addEventListener("click",changeColor,false);
case5.addEventListener("click",changeColor,false);
case6.addEventListener("click",changeColor,false);
case7.addEventListener("click",changeColor,false);
case8.addEventListener("click",changeColor,false);
case9.addEventListener("click",changeColor,false);
case10.addEventListener("click",changeColor,false);
case11.addEventListener("click",changeColor,false);
case12.addEventListener("click",changeColor,false);
case13.addEventListener("click",changeColor,false);
case14.addEventListener("click",changeColor,false);


function changeColor(){
  if (this.classList.contains("bg-white")) {
    this.classList.remove("bg-white");
    this.classList.add("bg-yellow");
  } else if (this.classList.contains("bg-yellow")) {
    this.classList.remove("bg-yellow");
    this.classList.add("bg-red");
  } else if(this.classList.contains("bg-red")) {
    this.classList.remove("bg-red");
    this.classList.add("bg-blue");
  } else if(this.classList.contains("bg-blue")) {
    this.classList.remove("bg-blue");
    this.classList.add("bg-yellow");
  }
  }
