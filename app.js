console.log("connected!");
let sign = prompt("What's your favvorite number?");
if(favNum >= 1000){
    console.log("Woah, that's a big number!")
}else if(favNum >= 0){
    console.log("That's a cool number.")
}else if (favNum <= 0) {
    console.log("Negative numbers?! That's just bananas.")
}else if (typeof favNum === "string"){
    alert("Enter a valid intege")
}