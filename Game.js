
var sword;
var playing = false;
var score;
var life;
var fruits = ['apple','banana','cherry','grapes','orange','peach','pear','greenapple','pineapple','watermelon','strawberry'];
var step;
var action;

$(function(){
$("#startreset").click(function(){
if(playing == true)
{
location.reload();
}
else{
$("#GameOver").fadeOut();
score = 0;
playing = true;
$("#logo").hide();
$("#scorevalue").html(score);
$("#startreset").html("Reset");
$("#life").show();
life = 3;
Addlife();
SendFruits();

}
}); 
    
$("#fruit").mouseover(function()
{    score++;
    $("#scorevalue").html(score);
//    document.getElementById("sound").play();
   $("#sound")[0].play();
     clearInterval(action);
    $("#fruit").hide("explode",200);
    setTimeout(SendFruits,300);
    
});
    function Addlife()
{    
$("#life").empty();
for(i=0;i<life;i++)
{
$("#life").append('<img src="img/heart.gif" class="heart">');
}
}
 
function SendFruits()
{
$("#fruit").show();
ChooseFruits();
$("#fruit").css({'left':Math.round(550*Math.random()),'top':-90});
step = 1 + Math.round(5*Math.random());

action = setInterval(function(){

$("#fruit").css('top',$("#fruit").position().top + step);
if($("#fruit").position().top>$("#GameBox").height()){
if(life>1)
{
$("#fruit").show();
ChooseFruits();
$("#fruit").css({'left':Math.round(600*Math.random()),'top':-90});
step = 1 + Math.round(1*Math.random());
life--;
Addlife(); 
}
else
{ 
playing = false;
$("#startreset").html("Start Game");
$("#GameOver").fadeIn();
$("#GameOver").html('<p> Game Over ! </p><p>you scor is ' + score + '</p>');
$("#life").hide();
stopGame();

}
}
},10);
}

function ChooseFruits()
{
$("#fruit").attr('src','img/'+fruits[Math.round(10*Math.random())] +'.gif');
}

function stopGame()
{
clearInterval(action);    
$("#fruit").hide();
}    
});



