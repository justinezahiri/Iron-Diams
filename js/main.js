var NUMBER_OF_LINES = 5;
var NUMBER_OF_COLUMNS = 5;
var diamondsCount = 1 + getRandomInt(4);

$(document).ready(function(){ 
    //The game starts when button START clicked 
    $('#btn').click(function() {
        generateGameBoard();
    })
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
}
var points;


function numberOfPoints(diamondsCount) {
    if (diamondsCount === 1) {
        return points = 1;
    } 
    if (diamondsCount === 2) {
        return points = 2;
    }            
    if (diamondsCount === 3) {
        return points = 3;
    }
    if (diamondsCount === 4) {
        return points = 4;
    }
}

//TODO:highlight the cell selected by player onclick
//$("body").children()
//$(".selector").addClass(className)
//.click()

$("div.square diamonds-count-1").click(function() {
    this.addClass(".selectedCell");
})


