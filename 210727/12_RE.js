//compile     :패턴을 찾는것
//exacution   :어떤 실행을 하는 것

var pattern = /a/;              //찾고자 하는 대상이 /여기/
var pattern2 = new RegExp('a.'); //이렇게 선언해줘도 됨 : 정규표현식 객체의 선언, a+어떤 문자든 문자 하나


//url만 추출해서 뽑아내고 싶다 등 정보의 추출
//치환
document.write(pattern.exec('ajdksd'));   //a
document.write(pattern2.exec('ajdksd'));  //aj
document.write(pattern.exec('jdksd'));    //null
document.write(pattern.test('ajdksd'));   //true (return 값이 Bool)


//문자열에 사용
var str = "aldjfkkf";
document.write(str.match(pattern)); //a
document.write(str.replace(pattern, 'A'));  //Aldjfkkf
document.write(str.replace(pattern));       //undefinedldjfkkf


//옵션 xi : i옵션을 사용하지 않는다 == 대소문자를 구분한다
//옵션 oi : i옵션을 사용한다 == 대소문자 구분을 하지 않는다

//옵션 xg : i옵션을 사용하지 않는다 == 여러개 있어도 하나만 리턴 (하나만 찾는다)
//옵션 og : i옵션을 사용한다 == 여러개 있으면 여러개 모두 리턴


//캡쳐

/*

()  그룹
\w  A to Z, a to z, 0 to 9
+   수양자, 앞에 있는 문자가 한 개 이상이면 패턴에 해당

\s  공백

cf. (\w+)\s(\w+)    문자 공백 문자

 */

var patt = /(\w+)\s(\w+)/;
var strrr = 'coding everday';
document.write(strrr.replace(patt, "$2, $1"));  //everday, coding
//$ 두 번째 () (group)
//""안에 있는 내용으로 통채로 치환된 것
document.write(strrr.replace(patt, "$2 $1"));   //everday coding