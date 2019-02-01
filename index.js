const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let the_button = querySelector('a');
the_button.addEventListener("click", appendQuestion)
// Math.floor(Math.random() * 3) + 1;
let question;
let q = document.querySelector('div.question-container');

function appendQuestion() {
  h4 = document.createElement('h4');
  h4.innerHTML = questions[number].questionText;
  q.append(h4);
}