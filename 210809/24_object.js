//object라는 이름을 가진 Object(객체)
//자바스크립트에서 값을 저장하는 기본적인 단위 > 그래서 전에 많이 봤지?
//따라서 object의 prototype은 모든 객체의 prototype이 된다
//즉 모든 객체의 원형이자 모든 객체가 갖고 있는 기능
//object의 prototype을 추가하면 모든 객체의 기능을 추가할 수 있다

/*
.keys() 와 .prototype.toString()의 차이
prototype의 소속인지 아닌지

.keys() : object라는 생성자 자체에 할당된(?) 함수
.prototype.~~ : 상속받은 구체적인 객체 변수의 메서드로 사용
*/


/*
object 객체를 확장할 경우 for문을 돌릴 때 name에 추가가 되는 등 생각하지 못한 오류가 나올 수 있음 주의
!!!hasOwnProperty()!!! > 상속이 아니라 직접적으로 정의된 애들만
*/
