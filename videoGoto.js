
let myVideo = document.querySelector('#myVideo');

let time = 5; // 정해진 시간 뒤 이동할 타이밍

myVideo.ontimeupdate = function() {myFunction()};

function myFunction() {

    console.log();
    if(myVideo.currentTime > time)
    {
        location.href="index4.html"; // 이동하고픈 자신의 패키지 경로를 넣으세요. 예) page.hmtl 
    }
}