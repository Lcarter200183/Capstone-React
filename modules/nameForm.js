import { display } from "../utils/display.js";

export function nameForm(event) {
  event.preventDefault();
  const form = event.target;
  const firstnameInput = form[0];
  const lastnameInput = form[1];
  const firstnamevalue = firstnameInput.value;
  output("Your appointment was submitted successfully.");
}
