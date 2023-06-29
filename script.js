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
}