var bulb = document.getElementById("bulbpng");
var cat = document.getElementById("catpng");
var on = document.getElementById("ON")
var off = document.getElementById("OFF");


on.addEventListener("click",()=>{
    bulb.src="./assets/bulbon.png";
    cat.src="./assets/cat.png";
})
off.addEventListener("click",()=>{
    bulb.src="./assets/bulboff.png";
    cat.src="./assets/cateye.png";
})
// console.dir(bulb);
// console.dir(cat);