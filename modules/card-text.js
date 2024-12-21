export class cardText {
    openingTag = "<div class='card-text'>";
    closingTag = "<div>";
    innerHTML = "";

    addText(cardText = new cardText()) {
        this.innerHTML += cardText;
    }

    toString() {
        return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
    }
}