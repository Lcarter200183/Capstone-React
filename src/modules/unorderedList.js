export class UnorderedList {
  openingTag = "<ul='list-group-flush'>";
  closingTag = "</ul>";
  innerHTML = "";

  toString() {
    return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
  }
}
