import { display } from "../utils/display.js";

export function handleCustomerService(event) {
  event.preventDefault();
  const emailForm = event.target;
  const emailInput = emailForm[0];
  const emailvalue = emailInput.value;
  output("Your message was submitted. ");
  const promise = makeRequest("https://myServer.com");
  promise.then(parseResponse);
}

function delayedGreeting() {
  setTimeout(greeting, 5000);
}
