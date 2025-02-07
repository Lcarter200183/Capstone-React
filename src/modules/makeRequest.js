import { output } from "../utils/output.js";

export function makeRequest() {
  const promise = new Promise(getServerResponse);
  return promise;
}
