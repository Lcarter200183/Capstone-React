import React from "react";

export function domain() {
  const domain = window.location.hostname;
  return (
    <main>
      <h1>Domain</h1>
      <p>{domain}</p>
      <p>port</p>
    </main>
  );
}
