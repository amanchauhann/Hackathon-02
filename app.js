let ques = document.getElementById("question")
let options = document.querySelectorAll(".options")
let option1 = document.getElementById("opt1")
let inputs = document.querySelectorAll(".input")
let confirmBtn = document.getElementById("confirm")
let form = document.getElementById("form")

// console.log(inputs);
// console.log(options[0].textContent)

fetch("https://opentdb.com/api.php?amount=10&type=multiple")
    .then(res => res.json())
    .then(data => {
        // console.log(data)

        // getting questions from api
        ques.innerText = data.results[0].question
        let allOpt = [];

        // putting all options in new array
        allOpt.push(data.results[0].correct_answer)
        allOpt.push(data.results[0].incorrect_answers)
        // console.log(allOpt.flat());

        // flatting the above array
        let finalAllOpt = allOpt.flat();

        //setting the textcontent for options
        for (let i = 0; i < options.length; i++) {
            options[i].textContent = finalAllOpt[i]
        }

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].setAttribute("value", `${finalAllOpt[i]}`);
            console.log(inputs[i].value)
        }
        // console.log(inputs[0]);

        // submitting the answers
        confirmBtn.addEventListener("click", (event) => {
            event.preventDefault();
            const answer = document.querySelector('input[name="fav_language"]:checked').value;
            console.log(answer)
        })
    })


