var NUMBER_OF_LINES = 5;
var NUMBER_OF_COLUMNS = 5;

// Variables to store the state of the game
var players = [
    {   // player 1
        score: 0,
        position: {
            x: null,
            y: null
        }
    },
    {   // player 2
        score: 0,
        position: {
            x: null,
            y: null
        }
    }
];

var currentPlayerId = 0;


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

        //TODO: create a variable to store players tentative position 
        var tentativePosition = getPosition($(this));

        //TODO: test if tentative position valid 
        if (isTentativePositionValid(tentativePosition)) {
            updateCurrentPlayerPosition(tentativePosition);
            $(this).addClass("selectedCell");
        
            var numberOfDiamonds = getDiamondsCount($(this));
            addPointsToCurrentPlayer(numberOfDiamonds);

            //TODO: parse number diamonds from className
            $(this).removeClass("diamonds-count-1 diamonds-count-2 diamonds-count-3 diamonds-count-4");

            changeCurrentPlayer();
        }
        else { 
            //TODO: buzzer sound 
        } 
        
    });
}

function changeCurrentPlayer() {
    // Update game state    
    if (currentPlayerId === 0) {
        currentPlayerId = 1;
    }
    else {
        currentPlayerId = 0;
    }
}

function addPointsToCurrentPlayer(numberOfDiamonds) {
    players[currentPlayerId]["score"] += numberOfDiamonds;

    if (currentPlayerId === 0) {
        $('.player-one-score').html(players[0]["score"]);
    }
    else {
        $('.player-two-score').html(players[1]["score"]);
    }    
} 

function getDiamondsCount(jQueryObject) {
    if (jQueryObject.hasClass("diamonds-count-1")) {
        return 1;
    } 
    else if (jQueryObject.hasClass("diamonds-count-2")){
        return 2;
    }            
    else if (jQueryObject.hasClass("diamonds-count-3")){
        return 3;
    }
    else if (jQueryObject.hasClass("diamonds-count-4")){
        return 4;
    }
    return 0;
}

function getPosition(jQueryObject) {
    // x: rank of the containing line
    // y: rank within a line

    var line = $(jQueryObject).parent();
    var x = line.parent().children().index(line);

    var y = line.children().index(jQueryObject);
    return {x : x, y : y};
}

function updateCurrentPlayerPosition(position) {
    players[currentPlayerId]["position"]["x"] = position["x"];
    players[currentPlayerId]["position"]["y"] = position["y"];
}

function isTentativePositionValid(tentativePosition) {
    //valid position : not further than 1 cell x & 1 cell y from current position
    var xCurrentPlayer = players[currentPlayerId]["position"]["x"];
    var yCurrentPlayer = players[currentPlayerId]["position"]["y"];

    // Starting position is always valid 
    if (xCurrentPlayer === null || yCurrentPlayer === null) {
        return true;
    }

    var xDistance = Math.abs(tentativePosition["x"] - xCurrentPlayer);
    var yDistance = Math.abs(tentativePosition["y"] - yCurrentPlayer);

    if (xDistance <= 1 && yDistance <= 1) {
        return true;
    }
    return false;
}




