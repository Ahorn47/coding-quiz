var quiz_box = document.querySelector(".quiz_box");
var info_box = document.querySelector(".info_box");
var result_box = document.querySelector(".result_box");
var start_btn = document.querySelector(".start_btn button");
var continue_btn = info_box.querySelector(".buttons .continue");
var exit_btn = info_box.querySelector(".buttons .quit");
var next_btn = document.querySelector(".next_btn");
var option_list = document.querySelector(".option_list");
var timeCount = quiz_box.querySelector(".timer .timer_sec");
var timeLine = quiz_box.querySelector("header .time_line");
var timeText = document.querySelector(".timer .timer_left_text");

// if startQuiz button clicked
  start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
  }
    

  continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuestions(0);
    queCounter(1); 
    startTimer(30); 
    startTimerLine(0); 
  }
let que_count = 0;
let timeValue = 30;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

var restart_quiz = result_box.querySelector(".buttons .restart");
var quit_quiz = result_box.querySelector(".buttons .quit");

restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); 
    result_box.classList.remove("activeResult"); 
    timeValue = 30;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuestions(que_count); 
    queCounter(que_numb); 
    clearInterval(counter);
    clearInterval(counterLine);
    startTimer(timeValue); 
    startTimerLine(widthValue); 
    timeText.textContent = "Time Left"; 
    next_btn.classList.remove("show"); 
}

  exit_btn.onclick = ()=>{
    window.location.reload(); //reload the current window
  }
var next_btn = document.querySelector("footer .next_btn");
var bottom_ques_counter = document.querySelector("footer .total_que");

next_btn.onclick = ()=>{
if (que_count < questions.length - 1){ 
  que_count++;
  que_numb++;
  showQuestions(que_count);
  queCounter(que_numb);
  clearInterval(counter);
  clearInterval(counterLine);
  startTimer(timeValue);
  startTimerLine(widthValue);
  timeText.textContent = "Time Left";
  next_btn.classList.remove("show");
}else{
  clearInterval(counter);
  clearInterval(counterLine);
  showResult();


  }
}
    function showQuestions(index){
        var que_text = document.querySelector(".que_text");


        let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
        let option_tag = '<div class="option">'+ questions[index].options[0] +'<span></span></div>'
                        + '<div class="option">'+ questions[index].options[1] +'<span></span></div>'
                        + '<div class="option">'+ questions[index].options[2] +'<span></span></div>'
                        + '<div class="option">'+ questions[index].options[3] +'<span></span></div>';
        que_text.innerHTML = que_tag; 
        option_list.innerHTML = option_tag;

        

        var option = option_list.querySelectorAll(".option");

        for(i=0; i < option.length; i++){
          option[i].setAttribute("onclick", "optionSelected(this)");
        }
    }

    let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
    let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function showResult(){
  info_box.classList.remove("activeInfo");
  quiz_box.classList.remove("activeQuiz");
  result_box.classList.add("activeResult");
  var scoreText = result_box.querySelector(".score_text");
  if (userScore > 3){ 
    let scoreTag = '<span> '
}
}