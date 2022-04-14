


player1Score=0;
player2Score=0;
player_1 = localStorage.getItem("player_1");
player_2 = localStorage.getItem("player_2");
answer_turn=player_2;
question_turn=player_1;
    
document.getElementById("player1_name").innerHTML=player_1;
document.getElementById("player2_name").innerHTML=player_2;
document.getElementById("player_question").innerHTML="Question Turn: "+player_1;
document.getElementById("player_answer").innerHTML="Answer Turn: "+player_2;


function send(){

    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
actual_answer = parseInt(number1) * parseInt(number2);

question_number = "<h4>"+ number1 + "X"+ number2 +"</h4>"

input_box="<br> Answer : <input type='text' id='input_check_box'>";
check_button="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
row=question_number+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("number1").value="";
document.getElementById("number2").value="";
}



function check(){

get_answer = document.getElementById("input_check_box").value;
if(get_answer == actual_answer)
{
if(answer_turn == player_1)
{
    player1Score = player1Score +1;
}

else
{
    player2Score= player2Score+1;
    
}
}
document.getElementById("player1_score").innerHTML= player1Score;
document.getElementById("player2_score").innerHTML=player2Score;


if(question_turn==player_1){
    question_turn=player_2;
    answer_turn=player_1;
    document.getElementById("player_question").innerHTML="Question Turn: "+player_2;
document.getElementById("player_answer").innerHTML="Answer Turn: "+player_1;
    
    }
    else{
    question_turn=player_1;
    document.getElementById("player_question").innerHTML="Question Turn: "+player_1;
    document.getElementById("player_answer").innerHTML="Answer Turn: "+player_2;
    }
    Reset();


}
function Reset(){
    
    document.getElementById("output").innerHTML="";
}
