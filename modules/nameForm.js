import { display } from "../utils/display";



export function nameForm(event) {
    debugger;
    event.preventDefault();
    const form = event.target;
    const firstnameInput = form[0];
    const lastnameInput = form[1];
    const firstnamevalue = firstnameInput.value;
    output("Your appointment was submitted successfully.");

}