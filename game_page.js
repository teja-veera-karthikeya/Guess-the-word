player_1_name = localStorage.getItem("player_1")
player_2_name = localStorage.getItem("player_2")

player_1_score = 0;
player_2_score = 0;

document.getElementById("player_1_name").innerHTML = player_1_name + " : ";
document.getElementById("player_2_name").innerHTML = player_2_name + " : ";

document.getElementById("player_1_score").innerHTML = player_1_score;
document.getElementById("player_2_score").innerHTML = player_2_score;

document.getElementById("question_turn").innerHTML = "Question turn :" + player_1_name;
document.getElementById("answer_turn").innerHTML = "Answer turn :" + player_2_name;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase()

    second_letter = word.charAt(1)

    middle_letter_index = Math.floor(word.length / 2)

    middle_letter = word.charAt(middle_letter_index)

    last_letter_index = word.length - 1

    last_letter = word.charAt(last_letter_index)

    remove_second_letter = word.replace(second_letter, "_")
    remove_middle_letter = remove_second_letter.replace(middle_letter, "_")
    remove_last_letter = remove_middle_letter.replace(last_letter, "_")
    console.log(remove_last_letter)

    question = "<h4 id='word_display'> Q." + remove_last_letter + "</h4>"
    answer = "<br>  Answer : <input type='text' id='input_check_box'>"
    button = "<br> <br> <button class='btn btn-info' onclick='check()'>check</button>"
    row = question + answer + button
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = ""
}

question_turn = "player1"
answer_turn = "player2"

function check() {
    get_answer = document.getElementById("input_check_box").value
    answer = get_answer.toLowerCase()
    if (word == answer) {
        if (answer_turn == "player1") {
            player_1_score = player_1_score + 1
            document.getElementById("player_1_score").innerHTML = player_1_score
        }
        else {
            player_2_score = player_2_score + 1
            document.getElementById("player_2_score").innerHTML = player_2_score
        }
    }

    if (question_turn == "player1") {
        question_turn = "player2"
        document.getElementById("question_turn").innerHTML = "Question turn : " + player_2_name
    }
    else {
        question_turn = "player1"
        document.getElementById("question_turn").innerHTML = "Question turn  : " + player_1_name
    }

    if (answer_turn == "player1") {
        answer_turn = "player2"
        document.getElementById("answer_turn").innerHTML = "Answer turn  : " + player_2_name
    }

    else {
        answer_turn = "player1"
        document.getElementById("answer_turn").innerHTML = "Answer turn  : " + player_1_name
    }
    document.getElementById("output").innerHTML=""
}



