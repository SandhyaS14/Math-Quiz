player1name = localStorage.getItem("player1name");
player2name = localStorage.getItem("player2name");
player1score = 0;
player2score = 0;
questionturn = "player1";
answerturn = "player2";

document.getElementById("player1name").innerHTML = player1name + ": ";
document.getElementById("player2name").innerHTML = player2name + ": ";
document.getElementById("player1score").innerHTML = player1score;
document.getElementById("player2score").innerHTML = player2score;
document.getElementById("player_question").innerHTML = "Question Turn - " + player1name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2name;

function send() {
    getword = document.getElementById("word").value;
    word = getword.toLowerCase();

    char1 = word.charAt(1);
    x = Math.floor(word.length/2);
    char2 = word.charAt(x);
    y = word.length - 1;
    char3 = word.charAt(y);

    replace1 = word.replace(char1, "_");
    replace2 = replace1.replace(char2, "_");
    replace3 = replace2.replace(char3, "_");
    console.log(replace3);
    
    question = "<h4 id='displayword'> Q." + replace3 + "</h4>";
    input = "<br> Answer: <input id='input_check_box'>";
    buttoncheck = "<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>"
    row = question + input + buttoncheck;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

function check() {
    getanswer = document.getElementById("input_check_box").value;
    answer = getanswer.toLowerCase();
    if (answer == word) {
        if (answerturn == "player2"){
            player2score += 1;
            document.getElementById("player2score").innerHTML = player2score;
        }
        else {
            player1score += 1;
            document.getElementById("player1score").innerHTML = player1score;
        }
    }
    if (questionturn == "player1") {
        questionturn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2name;
    }
    else {
        questionturn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1name;
    }
    if(answerturn == "player1") {
        answerturn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2name;
    }
    else {
        answerturn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1name;
    }

    document.getElementById("output").innerHTML = "";
}