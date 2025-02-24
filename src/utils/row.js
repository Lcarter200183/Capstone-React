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


export class Row {
    openingTag = "<div class='row'>";
    closingTag = "</div>";
    innerHTML = "";

    addColumn(column = new Column()) {
        debugger;
        this.innerHTML += column;
    }

    toString() {
        return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
    }
}
>>>>>>> setupReact
