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
let heading = document.querySelector(".heading");
let loadHead = document.querySelector(".loading-heading")


loadHead.style.display = "block"
heading.style.display = "none"
circle.style.display = "none";
contain.style.display = "none";

let loadingScreen = document.querySelector(".loading");

let initialValue = 0;
let timer;

// loading screen
on.addEventListener('click', () => {
    heading.style.display = "block"
    circle.style.display = "flex";
    contain.style.display = "flex";
    on.style.display = "none";
    loadingScreen.style.display = "none";
    loadHead.style.display = "none"
    timer = 30;
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
            }, 800)
        }
    })
    // added a timer   
    circle.innerHTML = 30;
    timer = 30;
    clearInterval(interval);
}

timer = 30;
function time() {
    circle.innerHTML = 30;
    let interval = setInterval(function () {
        timer--;
        circle.innerHTML = timer;
        if (timer === 0) {
            clearInterval(interval);
            // show();
        }
    }, 1000);
}
time();
