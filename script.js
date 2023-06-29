const startbtn = document.querySelector(".start-btn button");
const info_box = document.querySelector(".info_box");
const quitbtn = info_box.querySelector(".buttons .quit");
const continuebtn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
// start button clicked
startbtn.onclick = function(){
    info_box.classList.add("activeInfo");
}
quitbtn.onclick = function(){
    info_box.classList.remove("activeInfo");
}
// continue button clicked
continuebtn.onclick = function(){
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0)
}
let que_count = 0;
let que_numb = 1;


const next_btn = quiz_box.querySelector(".next-btn");
const bottom_ques_counter = quiz_box.querySelector(".total_que");
addEventListener("click", function(){
    if (que_count < questions.length - 1){
        que_count++;
        que_numb++;
        showQuestions(0)
        queCounter=(que_numb);
    }else{ console.log("Questions completed");
    }
});

// Path: script.js
function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    let que_tag = '<span>'+ questions[index].numb + "."+ questions [index].question +'</span>';
    let option_tag = '<div class="option">'+ questions[index].options[0] +'<span></span></div>'
    + '<div class="option">'+ questions[index].options[1] +'<span></span></div>'
    + '<div class="option">'+ questions[index].options[2] +'<span></span></div>'
    + '<div class="option">'+ questions[index].options[3] +'<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option_list.length; i++){
        option_list[i].setAttribute("onclick", "optionSelected(this)");
    }


// Path: script.js
  function queCounter(index){
  const bottom_ques_counter = quiz_box.querySelector(".total_que");
  let totalQuestionCountTag = '<span><p>'+ que_count + '</p>of<p>'+ questions.length +'</p>Questions</span>';
  bottom_ques_counter.innerHTML = totalQuestionCountTag; 
}
}
function optionSelected(answer){
    let userAns = answer.textContent;
    let correctAns = questions[index].answer
    console.log(userAns);
}