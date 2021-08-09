/*원시 데이터 타입 vs 객체 데이터 타입*/

/*원시 데이터 타입
숫자
불리언
문자열
null
undefined*/

// . : 객체 접근 연산자



/*wrapper object*/
var str = 'cdd';
document.write(str.length);

//원시 데이터 타입이 마치 객체인 것처럼 동작
//왜? 임시로 객체인 것처럼 작업해서 동작하기 때문에
//동작이 끝나면 원래대로 원시 데이터 타입으로 돌려준다

//증거
str.prop = 'dd';
document.write(str.prop); //undefined

/*래퍼객체
Number
Boolean
String
_
_*/
