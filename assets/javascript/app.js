var questions = [{
    ques: "In which Episode did Lando betray Han Solo?",
    ans: ["Episode III", "Episode V", "Episode VIII", "Episode VI"],
    name: "landoBetrayal",
    correct: "Episode V",
    divClass: ".landoBetrayal"
},
{
    ques: "What color is Mace-Windu's Lightsaber?",
    ans: ["Blue", "Green", "Red", "Purple"],
    name: "winduColor",
    correct: "Purple",
    divClass: ".winduColor"
},
{
    ques: "Who is the pilot of the Slave I?",
    ans: ["Boba Fett", "Darth Vader", "General Grevious", "Obi-Wan"],
    name: "ship",
    correct: "Boba Fett",
    divClass: ".ship"
},
{
    ques: "Did you ever hear the tragedy of Darth Plagueis the Wise?",
    ans: ["Oh totally, Obi-Wan told me", "Is that Jar Jar-Binks", "Not from a Jedi", "Yes..."],
    name: "notfromajedi",
    correct: "Not from a Jedi",
    divClass: ".notfromajedi"
},
{
    ques: "Who is the most annoying character in the whole Star Wars universe?",
    ans: ["Jar-Jar Binks", "Jar-Jar Binks", "Jar-Jar Binks", "Jar-Jar Binks"],
    name: "annoying",
    correct: "Jar-Jar Binks",
    divClass: ".annoying"
},

] 

var labels = ["first", "second", "third", "forth"];


var Start = $("#startbutton").on('click', function() {
$(this).parent().hide();
$('.container').show();
countdown(30);
questionDisplay();
});


var questionDisplay = function() {
$(".questions :not('#submit')").empty();

 
for (var j = 0; j < 10; j++) {
$('.questions').prepend('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');


// loops through answers for each radio button
for (var i = 0; i <= 3; i++) {
    $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
}
$('.questions').prepend('<hr />');
}
}


// function for countdown timer
var countdown = function(seconds) {

var timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
    $('.container').fadeOut(500);
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unAnswered = 0;

    
    for (var i = 0; i < 5; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {
            correctAnswers++;   
        } else {
            incorrectAnswers++;
        };
    }
    $('#correctTimesUp').append(correctAnswers);

    // display incorrectAnswers
    $('#wrongTimesUp').append(incorrectAnswers);
    $('#timesUp').fadeIn(1000).show();

    // alert("Times Up!");
    clearInterval(timer);
    return;
}
}, 1000);

//submit button doesn't work for some reason
$('#submit').on('click', function() {
clearInterval(timer);
})
}; 


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#submit').on('click', function() {

var correctAnswers = 0;
var incorrectAnswers = 0;

for (var i = 0; i < 10; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

    correctAnswers++;
} else {
    incorrectAnswers++;
};
};


countdown();
}); 
