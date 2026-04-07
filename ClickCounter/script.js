var count = document.getElementById("count");
var decrease = document.getElementById("decrease");
var reset = document.getElementById("reset");
var increase = document.getElementById("increase");

console.dir(count);
function updateColor(){
    var value = parseInt(count.textContent);
    if(value<0){
        count.style.color = "red";
    }else if(value >0){
        count.style.color = "green";
    }else{
        count.style.color = "white";
        // alert("Count is reset");
    }
}

increase.addEventListener("click",()=>{
    count.textContent = parseInt(count.textContent) + 1;
    updateColor()
})
decrease.addEventListener("click",()=>{
    count.textContent = parseInt(count.textContent) - 1;
    updateColor()
})
reset.addEventListener("click",()=>{
    count.textContent = 0;
    updateColor()
    // alert("Count is reset");
})