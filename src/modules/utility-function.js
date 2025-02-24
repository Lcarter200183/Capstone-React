function convertCard(cardObject) {
    let cardString = '<div class="card">';
    cardString = cardString + '<img class="card-img-top" src="' + cardObject.src + '" />';
    cardString = cardString + '<div class="card body">';
    cardString = cardString + '<h3 class="card-title">' + cardObject.title + '</h3>';
    cardString = cardString + cardObject.description;
    cardString = cardString + '</div>';
    cardString = cardString + '</div>';
    return cardString;
}

function display(message) {
    document.write(message);
}


function output(message) {
    window.outputTag.innerHTML += message;
}