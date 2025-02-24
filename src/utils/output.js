<<<<<<< HEAD
export function output(
  message = "",
  outputTag = "outputTag",
  shouldAppend = true
) {
  const outputElement = document.getElementById(outputTag);
  if (shouldAppend) outputElement.innerHTML += message;
  else outputElement.innerHTML = message;
}
=======
export function output(message) {
    window.outputTag.innerHTML += message;
}
>>>>>>> setupReact
