<<<<<<< HEAD
export class UnorderedList {
  openingTag = "<ul='list-group-flush'>";
  closingTag = "</ul>";
  innerHTML = "";

  toString() {
    return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
  }
=======
import { listGroupExample } from "../controllers/listGroupexample.js";

export class unorderedList {
    openingTag = "<ul='list-group-flush>";
    closingTag = "</ul>";
    innerHTML = "";

    toString() {
        return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
    }
>>>>>>> setupReact
}
