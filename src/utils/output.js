export function output(
  message = "",
  outputTag = "outputTag",
  shouldAppend = true
) {
  const outputElement = document.getElementById(output);
  if (shouldAppend) outputElement.innerHTML += message;
  else outputElement.innerHTML = message;
}
