export class CardBody {
  openingTag = "<div class='card-body'>";
  closingTag = "</div>";
  innerHTML = "";

  addBody(cardBody = new cardBody()) {
    this.innerHTML += cardBody;
  }

  toString() {
    return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
  }
}
