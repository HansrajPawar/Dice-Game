function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fun() {
    var sound = new Audio("./Sound/dice.mp3");
    sound.play();

    var player1Image = document.querySelector("#player1");
    var player2Image = document.querySelector("#player2");

    for (let i = 0; i < 10; i++) {
        var randomVar1 = Math.floor((Math.random() * 6) + 1);
        var randomVar2 = Math.floor((Math.random() * 6) + 1);

        player1Image.setAttribute("src", `./images/dice${randomVar1}.png`);
        player2Image.setAttribute("src", `./images/dice${randomVar2}.png`);

        await sleep(100); // Adjust the delay based on your preference
    }

    var result = (randomVar1 > randomVar2) ? "Player 1" : (randomVar1 < randomVar2) ? "Player 2" : "Match tie";
    document.querySelector("h1").innerHTML = `${result} won the match`;
}


// // you can make it more simpler , just try create img name & source as variable 
// // whole if__else is not need by  that 
// function fun()
// {
//     var sound = new Audio("./Sound/dice.mp3");
//     sound.play();

//     var randomVar1 = Math.floor((Math.random() * 6) + 1);
//     var randomVar2 = Math.floor((Math.random() * 6) + 1);

//     if (randomVar1 > randomVar2) {
//         document.querySelector("h1").innerHTML = "Player 1 won the match";
//     }
//     else if (randomVar1 < randomVar2) {
//         document.querySelector("h1").innerHTML = "Player 2 won the match";
//     }
//     else {
//         document.querySelector("h1").innerHTML = "Match tie";
//     }


//     if (randomVar1 === 1) {
//         document.querySelector("#player1").setAttribute("src","./images/dice1.png") 
//     }
//     else if (randomVar1 === 2) {
//         document.querySelector("#player1").setAttribute("src","./images/dice2.png") 
//     }
//     else if (randomVar1 === 3) {
//         document.querySelector("#player1").setAttribute("src","./images/dice3.png") 
//     }
//     else if (randomVar1 === 4) {
//         document.querySelector("#player1").setAttribute("src","./images/dice4.png") 
//     }
//     else if (randomVar1 === 5) {
//         document.querySelector("#player1").setAttribute("src","./images/dice5.png")
//     }
//     else{
//         document.querySelector("#player1").setAttribute("src","./images/dice6.png")
//     }

//     if (randomVar1 === 1) {
//         document.querySelector("#player2").setAttribute("src","./images/dice1.png")
//     }
//     else if (randomVar2 === 2) {
//         document.querySelector("#player2").setAttribute("src","./images/dice2.png")
//     }
//     else if (randomVar3 === 3) {
//         document.querySelector("#player2").setAttribute("src","./images/dice3.png")
//     }
//     else if (randomVar4 === 4) {
//         document.querySelector("#player2").setAttribute("src","./images/dice4.png") 
//     }
//     else if (randomVar5 === 5) {
//         document.querySelector("#player2").setAttribute("src","./images/dice5.png")
//     }
//     else{
//         document.querySelector("#player2").setAttribute("src","./images/dice6.png") 
//     }


// }