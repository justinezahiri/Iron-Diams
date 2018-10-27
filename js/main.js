$(document).ready(function(){ 

    // GENERAL ELEMENTS
    var diamOne = $(".diam-one");//always visible
    var diamTwo =  $(".diam-two");
    var diamThree = $(".diam-three");
    var diamFour = $(".diam-four");

    var diamsArray = [
        diamOne,
        diamTwo,
        diamThree,
        diamFour,
    ];

function showRandomDiams() {
    var randomDiam = Math.floor(Math.random() * 2);
    //show or hide if 0 or 1
    if (randomDiam = 0) {
        false;
    }
    if (randomDiam = 1) {
        true;
    }
    
}

})