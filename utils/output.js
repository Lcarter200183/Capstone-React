import { output } from "./utility-function.js";

export function output(message) {
    window.outputTag.innerHTML += message;
}