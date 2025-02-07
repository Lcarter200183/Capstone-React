import { display } from "../utils/display.js";



export function viewResponse(resolveValue) {

    //THE RESOLVE VALUE WILL BE A STRINGIFIED OBJECT
    //THE PARSE METHOD GENERATES AN OBJECT FROM THE STRING
    const response = JSON.parse(resolveValue);
    const results = response.results;
    const item = results[0];
    const question = item.question;
    const answer = item.correct_answer;
    const incorrects = item.incorrect_answers;

    const trivia = `<div>${question}</div>
   <ol type="a">
      <li>${incorrects[0]}</li>
      <li>${incorrects[1]}</li>
      <li>${incorrects[2]}</li>
      <li>${answer}</li>
   </ol>`;
    output(trivia);
}