function myProcessForm(event) {
    debugger;
    event.preventDefault();
    const form = event.target;
    const input = form[0];
    const value = input.value;
    output("Your info was submitted. ");
    const promise = makeRequest(getServerResponse);
    promise.then(parseResponse);
}



function handleCustomerService(event) {
    debugger;
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



function nameForm(event) {
    debugger;
    event.preventDefault();
    const form = event.target;
    const firstnameInput = form[0];
    const lastnameInput = form[1];
    const firstnamevalue = firstnameInput.value;
    output("Your appointment was submitted successfully.");

}

function numberForm(event) {
    event.preventDefault();
    const numberform = event.target;
    const numberInput = numberform[0];
    const numberValue = numberInput.value;
    output("Your appointment was submitted successfully.");

}

function datetimeForm(event) {
    event.preventDefault();
    const datetimeform = event.target;
    const datetimeInput = datetimeform[0];
    const datetimevalue = datetimeInput.value;
    output("Your appointment was submitted successfully.");
}