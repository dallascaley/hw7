/* 
  Homework 7 Question 1
*/

// List of questions (statement + answer)
const questions = [
  {
    statement: "2+2?",
    answer: "2+2 = 4"
  },
  {
    statement: "In which year did Christopher Columbus discover America?",
    answer: "1492"
  },
  {
    statement:
      "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
    answer: "The E letter"
  }
];

const content = document.getElementById('content');

questions.forEach((question, index) => {
  let listItem = document.createElement('div');

  let label = document.createElement('label');
  label.innerHTML = 'Question ' + (index + 1);

  listItem.appendChild(label);
  listItem.innerHTML += question.statement;

  let button = document.createElement('button');
  button.innerHTML = 'Show Answer';

  button.addEventListener('click', () => {
    let answer = document.createElement('div');
    answer.classList.add('answer');
    answer.innerHTML = question.answer;
    button.replaceWith(answer);
  });

  listItem.appendChild(button);

  content.appendChild(listItem);
});
