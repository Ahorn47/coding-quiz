const quiz_box = document.querySelector(".quiz_box");
const info_box = document.querySelector(".info_box");
const result_box = document.querySelector(".result_box");
const start_btn = document.querySelector(".start_btn button");
const continue_btn = info_box.querySelector(".buttons .continue");
const exit_quiz = info_box.querySelector(".buttons .quit");
const next_btn = document.querySelector(".next_btn");


// if startQuiz button clicked
  start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
  }
    

  exit_quiz.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    window.location.reload(); //reload the current window
  }
    

continue_btn.onclick = function () {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box


}

next_btn.onclick = ()=>{
    que_count++;
    showQuestions(que_count);
    queCounter(que_count);
    clearInterval(counter);
    clearInterval(counterLine);
}

    function showQuestions(index){
        const que_text = document.querySelector(".que_text");
        const option_list = document.querySelector(".option_list");
        let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
        let option_tag = '<div class="option">'+ questions[index].options[0] +'<span></span></div>'
        + '<div class="option">'+ questions[index].options[1] +'<span></span></div>'
        + '<div class= "option">'+ questions[index].options[2] +'<span></span></div>'
        + '<div class="option">'+ questions[index].options[3] +'<span></span></div>';
        que_text.innerHTML = que_tag;
        option_list.innerHTML = option_tag;
    }