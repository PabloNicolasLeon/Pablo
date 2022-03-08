let colors = ["red", "blue", "purple"]

function btnChanger() {
    let random = math.floor(Math.random() * colors.length);
    console.log("Random valus: " + random);
    let x = document.getElementById("btn-color").style.background = colors[random];
    
}