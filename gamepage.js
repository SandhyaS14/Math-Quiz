player1name = localStorage.getItem("player1name");
player2name = localStorage.getItem("player2name");
player1score = 0;
player2score = 0;

document.getElementById("player1name").innerHTML = player1name + ": ";
document.getElementById("player2name").innerHTML = player2name + ": ";
document.getElementById("player1score").innerHTML = player1score;
document.getElementById("player2score").innerHTML = player2score;
document.getElementById("playerquestion").innerHTML = "Question Turn - " + player1name;
document.getElementById("playeranswer").innerHTML = "Answer Turn - " + player2name;

function send() {
    number1 = document.getElementById("number1input").value;
    number2 = document.getElementById("number2input").value;
    actualanswer = parseInt(number1) * parseInt(number2);

    question = "<h4>" + number1 + " * " + number2 + "</h4>";
    inputbox = "<br> Answer: <input type='number' id='inputcheckbox'>";
    checkbutton = "<br><br> <button class='btn btn-info' onclick='check()'> Check</button>";
    row = question + inputbox + checkbutton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1input").value = "";
    document.getElementById("number2input").value = "";
}