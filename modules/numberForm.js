import { display } from "../utils/display";


export function numberForm(event) {
    event.preventDefault();
    const numberform = event.target;
    const numberInput = numberform[0];
    const numberValue = numberInput.value;
    output("Your appointment was submitted successfully.");

}