// Your code goes here
const home = document.querySelector(".main-navigation a:first-child");

const makeColor = (event) => {
   event.currentTarget.style.color = "green";
}
const changeBack = (event) => {
   event.currentTarget.style.color = "black";
}

home.addEventListener("mouseover", makeColor);
home.addEventListener("click" , changeBack);

document.addEventListener("keydown", (event) => {
if(event.key === "t"){
   alert("you hit the Tim key")
}else{
   alert("you hit the wrong key")
}
});

window.onload = (event) => {
   alert("Who's page? Tim's Page!")
}

const intro = document.querySelector(".intro h2");

intro.addEventListener("dblclick", (event) => {
   event.currentTarget.style.color = "red";
});

const changeBtn = document.querySelector(".btn");
changeBtn.textContent = "Move over me";
changeBtn.addEventListener("mouseout",(event) =>{
   event.currentTarget.style.backgroundColor = "yellow";
});

changeBtn.addEventListener("click",(event)=>{
   event.currentTarget.style.backgroundColor = "#17A2B8";
   
});

const removeBtn = document.querySelector("#last");
removeBtn.textContent = "Right Click";
removeBtn.addEventListener("contextmenu", (event) => {
   event.currentTarget.style.display = "none";
});

const mouseLeave = document.querySelector(".mouseLeave");

mouseLeave.addEventListener("mouseleave",(event) =>{
   event.currentTarget.style.width.stopPropagation = "20%";
   
   event.currentTarget.style.color = "yellow";
});

const mouseClick = document.querySelector(".mouseLeave");

mouseLeave.addEventListener("click",(event)=>{
   event.currentTarget.style.width = "100%";
});

const copy = document.querySelector(".footer")
copy.addEventListener("copy",(event) =>{
  alert("You copied me")
})



const stopReload = document.querySelector("#stop");

stopReload.addEventListener("click" ,(event) =>{
   alert("Out of order")
   event.preventDefault();
});