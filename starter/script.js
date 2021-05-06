"use strict";

const pollButton = document.querySelector(".poll");

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(prompt(
      `${this.question}\n${this.options.join("\n")}\n(Write option number)`
    ));
    typeof answer === "number" && answer >= 0 && answer < this.options.length ?
      this.answers[answer]++ : this.registerNewAnswer();
    this.displayResults();
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this)
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  }
};

const addPoll = function (answerNum) {
  this.answers[answerNum]++;
}

pollButton.addEventListener("click", poll.registerNewAnswer.bind(poll));

const obj1 = { answers: [1, 5, 3, 9, 6, 1] };
poll.displayResults.call(obj1);
poll.displayResults.call(obj1, "string");


