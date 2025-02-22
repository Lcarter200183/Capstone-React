import React from "react";

export function SignInContent(props) {
  const errorMessage = props.errorMessage;
  return (
    <>
      Email: <input type="email" required /> <br />
      Password: <input type="password" required /> <br />
      <div style={{ color: "red" }}>{errorMessage}</div>
    </>
  );
}
