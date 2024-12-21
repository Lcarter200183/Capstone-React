export class Card {
    openingTag = "<div class='card'>";
    imgTag = "<img class='card-img-top'> src=`${cardObject.src}`>";
    closingTag = "</div>";
    innerHTML = "";

    addContainer(column = newCardBody) {

    }

    toString() {
        return `${this.openingTag}${this.imgTag}${this.innerHTML}${this.closingTag}`
    }

}