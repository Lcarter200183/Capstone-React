import React, { useState } from "react";
import { SignInContent } from "./SignInContent";

export function SignInModal() {
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <>
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-toggle="modal"
        data-bs-target="#SignInModal"
      >
        Sign In
      </button>

      <form
        onSubmit={handleSubmit}
        className="modal fade"
        id="SignInModal"
        tabIndex="-1"
        aria-labelledby="SignInModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="SignInModalLabel">
                Sign In
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <SignInContent errorMessage={errorMessage} />
            </div>
            <div className="modal-footer">
              <button
                id="signInCloseButton"
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
  function handleSubmit(event = new Event()) {
    event.preventDefault();
    const inputs = event.target;
    const emailInput = inputs[1];
    const passwordInput = inputs[2];

    const email = emailInput.value;
    const password = passwordInput.vale;

    const isAuthenticated = true;
    if (isAuthenticated) {
      const closeButton = document.getElementById("SignIncloseButton");
      closeButton.click();
      inputs.reset();
    } else setErrorMessage("The email and password don't match");
  }
}
hello;
