// Define Constants
const container = document.querySelector(".container");
const card = document.querySelector(".card");
const shoes = document.querySelector(".shoes img");
const title = document.querySelector("h1");
const description = document.querySelector(".info-sec h3");
const sizes = document.querySelector(".sizes");
const purchase = document.querySelector(".Purchase");


// Mouse move Events

container.addEventListener("mousemove", (e)=> {
  let xAxis = (window.innerWidth/2 - e.pageX)/25 ;
  let yAxis = (window.innerHeight/2 -e.pageY)/25 ;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
} )


// Animate In
container.addEventListener("mouseenter", (e)=> {
  card.style.transition ="none";
  title.style.transform = "translateZ(200px)";
  shoes.style.transform = "translateZ(150px) rotateZ(-45deg)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
})




// Animate Out
container.addEventListener("mouseleave", (e)=> {
  card.style.transition ="all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateZ(0deg)`;
  title.style.transform = "translateZ(0px)";
  shoes.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(10px)";
})
