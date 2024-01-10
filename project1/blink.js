var target = document.querySelector("#dynamic");

function randomString(){
    let stringArr = ["Learn to HTML","Learn to CSS","Learn to JavaScript"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];//곱하기 한 숫자 미만의 랜덤값
    let selectStringArr = selectString.split("");//문자열 배열로 변환

    return selectStringArr;
}

//타이핑 리셋
function resetTyping(){
    target.textContent = "";
    dynamic(randomString());//랜덤 돌리기
}

//한글자식 텍스트 출력 함수
function dynamic(randomArr){
    if(randomArr.length>0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic (randomArr);
        },80);
    }else{
        setTimeout(resetTyping,3000);
    }
}
dynamic(randomString());

function blink(){
    target.classList.toggle('active');//클래스 유무 확인해서 껐다켰다 자동으로 
}
setInterval(blink,500);//반복해서 실행하는 함수의 지연을 설정
//500 => 0.5초