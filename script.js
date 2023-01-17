var cards = document.querySelectorAll(".card");
var p = document.querySelector("p");
var color = [];
var random = Math.floor(Math.random() * 9) // 0 to <9
var randomColor = [];


// rgb(255,255,255)
var randomColor1 = Math.floor(Math.random() * 256);
var randomColor2 = Math.floor(Math.random() * 256);
var randomColor3 = Math.floor(Math.random() * 256);
var randomColor4 = Math.floor(Math.random() * 256);
var randomColor5 = Math.floor(Math.random() * 256);
var randomColor6 = Math.floor(Math.random() * 256);
var randomColor7 = Math.floor(Math.random() * 256);
var randomColor8 = Math.floor(Math.random() * 256);
var randomColor9 = Math.floor(Math.random() * 256);
var randomColor10 = Math.floor(Math.random() * 256);
var randomColor11 = Math.floor(Math.random() * 256);


randomColor.push(
    randomColor1, randomColor2, randomColor3,
    randomColor4, randomColor5, randomColor6,
    randomColor7, randomColor8, randomColor9,
    randomColor10, randomColor11
)
// console.log(randomColor)

for (var i = 0; i < cards.length; i++) {
    // console.log("rgb(" + randomColor[i] + "," + randomColor[i + 1] + ',' + randomColor3)
    cards[i].style.backgroundColor =
        "rgb(" + randomColor[i] + "," + randomColor[i + 1] + ',' + randomColor3

    color.push(cards[i].style.backgroundColor)
}

// console.log(color)
p.textContent = color[random];
p.style.backgroundColor = color[random];
const checkanswer = (cardindex) => {
    // alert(cardindex);
    if(color[cardindex] == p.textContent){
        alert("Correct Answer")
        window.location.reload();
    }
    else{
        alert("Wrong Answer")
    }
}