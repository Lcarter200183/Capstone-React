<<<<<<< HEAD
import { Column } from "./column.js";

<<<<<<< HEAD
export class Row {
  openingTag = "<div class='row'>";
  closingTag = "</div>";
  innerHTML = "";

  addColumn(column = new Column()) {
    this.innerHTML += column;
  }

  toString() {
    return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
  }
}
=======

=======
import { Column } from "../Column.js";
>>>>>>> homephasePage

export class Row {
  openingTag = "<div class='row'>";
  closingTag = "</div>";
  innerHTML = "";

  addColumn(column = new Column()) {
    debugger;
    this.innerHTML += column;
  }

<<<<<<< HEAD
    toString() {
        return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
    }
}
>>>>>>> setupReact
=======
  toString() {
    return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
  }
}
>>>>>>> homephasePage
