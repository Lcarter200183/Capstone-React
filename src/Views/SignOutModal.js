import React from "react";

export function SignOutModal() {
  return (
    <>
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-toggle="modal"
        data-bs-target="#SignOutModal"
      >
        Sign Out
      </button>

      <form
        onSubmit={handleSubmit}
        className="modal fade"
        id="SignOutModal"
        tabIndex="-1"
        aria-labelledby="SignOutModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="SignOutModalLabel">
                Sign Out
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Are you sure you want to sign out?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
function handleSubmit(event = new Event()) {
  event.preventDefault();
  const inputs = event.targrt;
  const closeButton = inputs[1];
  closeButton.click();
}
