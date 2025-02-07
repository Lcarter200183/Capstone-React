import { display } from "../utils/display.js";

export function numberForm(event) {
  event.preventDefault();
  const numberform = event.target;
  const numberInput = numberform[0];
  const numberValue = numberInput.value;
  output("Your appointment was submitted successfully.");
}
