player_1_name=""
player_2_name=""

function login(){
    player_1_name=document.getElementById("player_1_name_input").value
    player_2_name=document.getElementById("player_2_name_input").value

    localStorage.setItem("player_1", player_1_name)
    localStorage.setItem("player_2", player_2_name)

    window.location = "game_page.html"
}