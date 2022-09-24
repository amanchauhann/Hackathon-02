let ques = document.getElementById("question")
let options = document.querySelectorAll(".options")
let optionContainer = document.querySelectorAll(".option")
let inputs = document.querySelectorAll(".input")
let confirmBtn = document.getElementById("confirm")
let form = document.getElementById("form")

// console.log(inputs);
// console.log(options[0].textContent)

let initialValue = 0;
let data1;
let answer;

fetch("https://opentdb.com/api.php?amount=10&type=multiple")
    .then(res => res.json())
    .then(data => {
        data1 = data
        render(data1)
    })


function render(data1) {
    // console.log(data)

    // getting questions from api
    ques.innerText = data1.results[initialValue].question
    let allOpt = [];

    // putting all options in new array
    allOpt.push(data1.results[initialValue].correct_answer)
    allOpt.push(data1.results[initialValue].incorrect_answers)

    // console.log(allOpt);

    // flatting the above array
    let finalAllOpt = allOpt.flat();

    // console.log(finalAllOpt)
    // console.log(data.results[initialValue].correct_answer)


    optionContainer[0].style.backgroundColor = "#2d035e"

    // console.log(data.results[initialValue].correct_answer);

    //setting the textcontent for options
    for (let i = 0; i < options.length; i++) {
        options[i].textContent = finalAllOpt[i]
    }


    // setting value attributes for the input element
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].setAttribute("value", `${finalAllOpt[i]}`);
        // console.log(inputs[i].value)
    }
    // console.log(inputs[0]);
  

    // submitting the answers
    confirmBtn.addEventListener("click", (event) => {
        event.preventDefault();
        answer = document.querySelector('input[name="fav_language"]:checked').value;
        console.log(answer == finalAllOpt[0])

        // allOpt = [];
        // finalAllOpt = [];
        // initialValue++;

        if (answer == finalAllOpt[0]) {
            console.log("correct answer")
            setTimeout(() => {
                initialValue++;
                render(data1);
            }, 1000);
        }
        else {
            console.log("incorrect answer");
        }

        // render(data1);
        // checking the answer
        //     if (answer == finalAllOpt[0]) {
        //         // console.log("correct answer");
        //         optionContainer[0].style.backgroundColor = "green"

        //         setTimeout(() => {
        //             initialValue++;
        //             // optionContainer[initialValue].style.backgroundColor = ""
        //             allOpt = [];
        //             finalAllOpt = [];                              
        //             render(data)

        //         }, 1000);

        //     }

        //     else {
        //         alert("Incorrect Answer")
        //         // console.log("wrong answer");
        //         optionContainer[0].style.backgroundColor = "green"
        //     }

    })
}
