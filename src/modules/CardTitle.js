export class cardTitle {
  openingTag = "<div class='card-title'>";
  closingTag = "</div>";
  innerHTML = "";

  addTitle(cardTitle = new cardTitle()) {
    this.innerHTML += cardTitle;
  }

  toString() {
    return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
  }
}
