// dynamic 아이디 문서를 가져와서 
let target = document.querySelector("#dynamic");    

function randomString() {
    // 배열선언
    let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to JAVASCRIPT", "Learn to PYTHON", "Learn to RUBY"];
    // []길이만큼 반복한다
    // math.floor 는 소수점 버리는것
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)]; 
    // .split("")은 단어 하나하나가 쪼개져서 배열로 바뀜
    let selectStringArr = selectString.split("");

    return selectStringArr;
}

// 타이핑 리셋(3초 뒤에 리셋됨)
function resetTyping() {
    target.textContent = " ";
    dynamic(randomString());
}


// 한글자씩 텍스트 출력 함수
function dynamic(randomArr){
    if(randomArr.length > 0) {
        // 맨 앞의 한글자씩 사라짐
        target.textContent += randomArr.shift(); 
        setTimeout(function(){
            dynamic(randomArr);
        },80);
    }else {
        setTimeout(resetTyping, 3000);
    }
}
dynamic(randomString());

// 커서 깜빡임 효과
function blink(){
    target.classList.toggle("active"); 
}

// blink라는 함수를 0.5초마다 실행
setInterval(blink, 500);   


