function sum(x, y) {return x+y;}
//일반적인 함수 정의

/*리터럴 : 값을 만들 수 있는 문법적인 체계
ex : 객체 리터럴, 배열 리터럴, 변수 리터럴 등등*/

var sum2 = new Function('x', 'y', 'return x+y;') ;
//함수 리터럴

var o = {}
var p = {}
function func(){
    switch(this){
    //switch 용법
        case o:
            document.write('o<br />');
            break;
        case p:
            document.write('p<br />');
            break;
        case window:
            document.write('window<br />');
            break;          
    }
}
func();
//window
func.apply(o);
//apply의 첫 번째 인자 : 함수 호출 context
func.apply(p);

//일반적인 master-slave 관계가 아니라 독립적임