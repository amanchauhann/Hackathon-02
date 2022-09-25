let ques = document.getElementById("question")
let options = document.querySelectorAll(".options")
let optionContainer = document.querySelectorAll(".option")
let inputs = document.querySelectorAll(".input")
let confirmBtn = document.getElementById("confirm")
let form = document.getElementById("form")



let money = document.querySelector(".money")
let win = document.querySelector(".win")
let contain = document.querySelector(".contain");
let circle = document.querySelector(".circle");
let on = document.querySelector(".cssbuttons-io-button");
let btn = document.querySelector(".btn");


money.style.display = "none";
win.style.display = "none";
circle.style.display = "none";
contain.style.display = "none";

let loadingScreen = document.querySelector(".loading");

let initialValue = 0;


// loading screen
on.addEventListener('click', () => {
    money.style.display = "flex";
    win.style.display = "flex";
    circle.style.display = "flex";
    contain.style.display = "flex";
    on.style.display = "none";
    loadingScreen.style.display = "none";
})


fetch("https://opentdb.com/api.php?amount=10&type=multiple")
    .then(res => res.json())
    .then(data => render(data))



function render(data) {

    // getting questions from api
    ques.innerText = data.results[initialValue].question
    let allOpt = [];

    // putting all options in new array
    allOpt.push(data.results[initialValue].correct_answer)
    allOpt.push(data.results[initialValue].incorrect_answers)



    // flatting the above array
    let finalAllOpt = allOpt.flat();


    optionContainer[0].style.backgroundColor = "#2d035e"



    //setting the textcontent for options
    for (let i = 0; i < options.length; i++) {
        options[i].textContent = finalAllOpt[i]
    }


    // setting value attributes for the input element
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].setAttribute("value", `${finalAllOpt[i]}`);
    }


    // submitting the answers
    confirmBtn.addEventListener("click", (event) => {
        event.preventDefault();
        let answer = document.querySelector('input[name="fav_language"]:checked').value;

        // checking the answer
        if (answer == finalAllOpt[0]) {
            optionContainer[0].style.backgroundColor = "green"

            setTimeout(() => {
                initialValue++;
                allOpt = [];
                finalAllOpt = [];
                render(data)

            }, 1000);
            inputs[0].checked = false;
        }

        else {
            setTimeout(() => {
                optionContainer[0].style.backgroundColor = "green"

            }, 200)
            setTimeout(() => {
                // show();
            }, 1000);
        }


        // added a timer
        setTimeout(() => {
            circle.innerHTML = 30;
            timer = 30;
            clearInterval(interval);

        }, 1000);
    })
}

let timer = 30;
function time() {
    circle.innerHTML = 30;
    let interval = setInterval(function () {
        timer--;
        circle.innerHTML = timer;
        if (timer === 0) {
            clearInterval(interval);
        }
    }, 1000);
}

time();




// show();

// function show() {
//     contain.innerHTML = `<h2>Congratulations</h2>
//     <p><h1>You won :${score}</h1></p>
//     <p><button class="btn" onclick="location.reload()" style="width:174px; margin:15px;cursor:pointer;font-size:26px; border-radius:4px;"> Play Again </button></p>`;
//     contain.style.backgroundColor = "blue";
//     contain.style.height = "400px";
//     contain.style.width = "600px";
//     contain.style.color = "black";
//     contain.style.fontSize = "30px";
//     contain.style.margin = "10px";
//     audio.muted = true;
//     money.style.display = "none";
//     win.style.display = "none";
//     circle.style.display = "none";
// }


