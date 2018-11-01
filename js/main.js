var NUMBER_OF_LINES = 5;
var NUMBER_OF_COLUMNS = 5;

var playerOnePoints = 0;


$(document).ready(function(){ 
    //The game starts when button START clicked 
    $('#start-game-btn').click(function() {
        generateGameBoard();
        bindBoardEventHandlers();
    });    
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
    $('.game-square').html(boardHtml);
}

function bindBoardEventHandlers() {
    $("div.square").click(function() {
        $(this).addClass("selectedCell");

        var numberOfDiamonds = getDiamondsCount($(this));
        addPointsToCurrentPlayer(numberOfDiamonds);

        //TODO: parse number diamonds from className
        $(this).removeClass("diamonds-count-1 diamonds-count-2 diamonds-count-3 diamonds-count-4");
    });
}

function addPointsToCurrentPlayer(numberOfDiamonds) {
    playerOnePoints += numberOfDiamonds;
    //TODO: add points to the right player 
    $('.player-one-score').html(playerOnePoints);
} 

function getDiamondsCount(jQueryElement) {
    if (jQueryElement.hasClass("diamonds-count-1")) {
        return 1;
    } 
    else if (jQueryElement.hasClass("diamonds-count-2")){
        return 2;
    }            
    else if (jQueryElement.hasClass("diamonds-count-3")){
        return 3;
    }
    else if (jQueryElement.hasClass("diamonds-count-4")){
        return 4;
    }
    return 0;
}





