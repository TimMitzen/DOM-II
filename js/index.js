// Your code goes here
// animation 
TweenMax.to(".logo-heading", 2 ,{
left:300, backgroundColor: "yellow", x:0, borderRadius: 100
});

const home = document.querySelector(".main-navigation a:first-child");

const makeColor = (event) => {
   event.currentTarget.style.color = "green";
}
const changeBack = (event) => {
   event.currentTarget.style.color = "black";
}

home.addEventListener("mouseover", makeColor);
home.addEventListener("click" , changeBack);

// document.addEventListener("keydown", (event) => {
// if(event.key === "t"){
//    alert("you hit the Tim key")
// }else{
//    alert("you hit the wrong key")
// }
// });

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



const stopReload = document.querySelectorAll(".nav-link");


   
stopReload.forEach((stopReload, index) =>{ 
   stopReload.addEventListener("click",(event)=>{
      alert("out of order");
      event.preventDefault();
   })
}
)

const textGreen = document.querySelectorAll(".text-content .text-green");

 textGreen.forEach((textGreen) =>{
   document.addEventListener("keypress", (event)=> {
   textGreen.style.color = "green";
   })
})

const redBackground = document.querySelectorAll(".content-destination");

redBackground.forEach((redBackground) =>{ 
   redBackground.addEventListener("click", (event) => {
      event.currentTarget.style.backgroundColor = "red";
});

});

const blueText = document.querySelectorAll(".btn");

blueText.forEach((blueText)=>{
   blueText.addEventListener("click", (event) =>{
      event.target.style.color = "blue";
   });
});