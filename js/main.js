var NUMBER_OF_LINES = 5;
var NUMBER_OF_COLUMNS = 5;

$(document).ready(function(){ 
    generateGameBoard();
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function generateGameBoard() {

    var boardHtml = "";

    for (var i = 0; i < NUMBER_OF_LINES; i++) {
        boardHtml += "<div class='board-line'>";

        for (var j = 0; j < NUMBER_OF_COLUMNS; j++) {
            var diamondsCount = 1 + getRandomInt(4);
            boardHtml += "<div class='square diamonds-count-" + diamondsCount + "'></div>";
        }

        boardHtml += "</div>";
    };

    $('.game-square').append(boardHtml);

};