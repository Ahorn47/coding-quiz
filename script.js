var startbtn = document.querySelector(".start-btn button");
const infobox = document.querySelector(".info_box");
const quitbtn = info-box.querySelector(".buttons .quit");
const continuebtn = document.querySelector(".buttons .restart");
// start button clicked
startbtn.onclick = function(){
    infobox.classList.add("activeInfo");
}
quitbtn.onclick = function(){
    infobox.classList.remove("activeInfo");
}//quit button clicked
quitbtn.onclick = function(){
    infobox.classList.add("activeInfo");
}