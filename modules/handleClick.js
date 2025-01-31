import { output } from "../utils/output.js";


export function handleClick(event) {
    debugger;
    const promise = fetch("https://opentdb.com/api.php?amount=1&category=12&difficulty=hard&type=multiple");
    promise.then(parseResponse);
}