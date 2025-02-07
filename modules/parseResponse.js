import { display } from "../utils/display.js";

export function parseResponse(resolveValue) {
  //THE RESOLVE VALUE WILL BE A FETCH OBJECT
  //THE TEXT METHOD EXTRACTS THE STRINGIFIED OBJECT
  const promise = resolveValue.text(); //fetch object
  promise.then(viewResponse);
}
