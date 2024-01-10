$(document).ready(function() {//문서가 준비되면 매개변수로 넣은 콜백 함수를 실행하라는 의미
    $(".slider_page").not(".active").hide();//slider_page class에서 active class를 가지고 있지 않은 나머지는 숨김
    //slide_page : 각각의 이미지 요소
    //setInterval은 어떤 코드를 일정한 시간 간격을 두고 반복해서 실행하고 싶을 때 사용
    setInterval(nextSlide, 6000);//4초마다 다음 슬라이드로 넘어감
})

//이전 슬라이드
function prevSlide() {
    $(".slider_page").hide();//이전 슬라이드로 이동하기 전에 슬라이드 안 보이게
    var all_slide = $(".slider_page");//모든 슬라이드 저장

    var current_index = $(".slider_page").index($(".slider_page.active"));
    //현재 active class를 가진 슬라이드 찾아서 인덱스 저장
    if(current_index>0){
        var new_index = current_index -1;//현재 인덱스가 0보다 크면 현재 인덱스 -1
    }else {
        var new_index = all_slide.length - 1;//현재 인덱스가 0보다 작거나 같으면 전체 슬라이드 개수 -1
    }

    $(".slider_page").removeClass("active");//모든 슬라이드에서 active class 제거

    //new_index번째 슬라이드에 active 클래스 부여 후 보여주기
    //eq() 선택한 인덱스에 해당하는 요소 찾음
    $(".slider_page").eq(new_index).addClass("active");
    $(".slider_page").eq(new_index).show();
}

//다음 슬라이드
function nextSlide(){
    $(".slider_page").hide();//이전 슬라이드로 이동하기 전에 슬라이드 안 보이게
    var all_slide = $(".slider_page");//모든 슬라이드 저장

    var current_index = $(".slider_page").index($(".slider_page.active"));
    //현재 active class를 가진 슬라이드 찾아서 인덱스 저장
    if(current_index>=all_slide.length-1){
        var new_index = 0;//현재 인덱스가 모든 슬라이드 수보다 크거나 같으면 새 인덱스 = 0
    }else {
        var new_index = current_index + 1;//현재 인덱스가 모든 슬라이드 수보다 작으면 현재 인덱스 개수 + 1
    }

    $(".slider_page").removeClass("active");//모든 슬라이드에서 active class 제거

    //new_index번째 슬라이드에 active 클래스 부여 후 보여주기
    //eq() 선택한 인덱스에 해당하는 요소 찾음
    $(".slider_page").eq(new_index).addClass("active");
    $(".slider_page").eq(new_index).show();
}
