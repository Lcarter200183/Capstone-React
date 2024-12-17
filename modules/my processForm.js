import { display } from "../utils/display";


export function myProcessForm(event) {
    debugger;
    event.preventDefault();
    const form = event.target;
    const input = form[0];
    const value = input.value;
    output("Your info was submitted. ");
    const promise = makeRequest(getServerResponse);
    promise.then(parseResponse);
}