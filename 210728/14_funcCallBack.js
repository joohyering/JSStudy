var numbers = [3,1,4,51,32,346,2];
numbers.sort();
//numbers : 객체, sort() : 메서드
//sort(sortfunc);
//sortfunc : 콜백함수, 인자로 전달됨으로써 원래 함수의 동작을 바꿀 수 있다.

document.write(numbers);


//비동기처리 : 글 작성 > 이메일 발송 예약 > 작성 완료 >(백그라운드에서 실행, todo)
//AJAX : Asynchronous Javascript ~~
//웹 전체를 로드하지 않고 (ex:drop down) 서버와 브라우저가 조용히,,
//아리까리.. 어렵다 .....