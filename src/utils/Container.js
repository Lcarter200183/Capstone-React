import { Row } from "./row.js";

export class container {
  openingTag = "<div class='container'>";
  closingTag = "</div>";
  innerHTML = "";

  addRow(row = new row()) {
    debugger;
    this.innerHTML += row;
  }
  toString() {
    return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
  }
}
