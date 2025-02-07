import { display } from "../utils/display.js";


export function datetimeForm(event) {
    event.preventDefault();
    const datetimeform = event.target;
    const datetimeInput = datetimeform[0];
    const datetimevalue = datetimeInput.value;
    output("Your appointment was submitted successfully.");
}