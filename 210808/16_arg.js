//유사 배열
//cf) 매개변수 : 값이 저장되는 변수 이름, 값 자체 : 인자

function sum(){
  var i, _sum = 0;    
  for(i = 0; i < arguments.length; i++){
                  //arguments : 미리 약속된 이름, 사용자가 전달한 인자에 접근할 수 있다. 배열과 유사하게 사용 및 접근 가능
      document.write(i+' : '+arguments[i]+'<br />');
      _sum += arguments[i];
  }   
  return _sum;
}
document.write('result : ' + sum(1,2,3,4)); //함수 정의시에 매개변수를 정의하지 않았는데도 인자 전달 가능

/* sum에 몇 개의 인자가 올 지 모르므로 (몇 개의 숫자가 더해질지 모르므로)
매개변수 자리를 비워두고 arguments로 접근하고 있는 것

.length
indexing

이렇게 두 가지를 할 수 있다*/

/*함수의 매개변수 개수를 호출하는 법 : 함수이름.length
  인자의 개수를 호출하는 법 : argumets.length */

/*자바스크립트는 매우 관대한 언어이기 때문에 매개변수와 인자의 개수가 달라도 오류가 나지 않는다.*/