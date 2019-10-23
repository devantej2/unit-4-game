$(document).ready(function () {

    let wins = 0;
    let losses = 0;
    let userScore = 0;
    let targetNumber = Math.floor(Math.random() * (101) + 19); //target number calculated

    let red = "../unit-4-game/assets/images/crystal_red.png";
    let blue = "../unit-4-game/assets/images/crystal_blue.png";
    let green = "../unit-4-game/assets/images/crystal_green.png";
    let purple = "../unit-4-game/assets/images/crystal_purple.png";


    $("#targetNumber").text(targetNumber);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#user-score").text(userScore);


    //create the crystal values
    let crystalImages = [red, blue, green, purple];
    for (let i = 0; i < 4; i++) {
        let randNum = Math.floor(Math.random() * 12) + 1;
        const crystalPic = $("<img>");
        crystalPic.addClass("crystal-color");
        crystalPic.attr("src", crystalImages[i]);
        crystalPic.attr("data-crystalValue", randNum);
        $("#crystal").append(crystalPic);
    }




    $(".crystal-color").on("click", function () {
        let value = ($(this).attr("data-crystalValue"));
        value = parseInt(value);
        userScore += value;
        $("#user-score").text(userScore);
        if (userScore === targetNumber) {
            alert("You win!");
            wins++;
            $("#wins").text(wins);
            reset();
        }

        else if (userScore >= targetNumber) {
            alert("You lose!!");
            losses++;
            $("#losses").text(losses);
            reset();
        }
    });
    function reset() {
        userScore = 0;
        targetNumber = Math.floor(Math.random() * (101) + 19);
        $(".crystal-color").each(function () {
            let randNum = Math.floor(Math.random() * 12) + 1;
            $(this).attr("data-crystalValue", randNum);
        });
        $("#user-score").text(userScore);
        $("#targetNumber").text(targetNumber);

    }


});