/*함수 안에서 사용하는 변수고,
약속되어있는 변수고,
변수 안에 담겨있는 값은 함수를 어떻게 호출하느냐에 따라 달라진다.*/

/*함수 안에서 this : 그 함수가 소속되어있는 객체를 가르킨다.*/

function func() {
  if (window === this) {
    alert('===');
  }
}

func();
//뜬다!
//함수가 어떤 객체에 소속되어 있지 않은 상태에서 this === window

var o = {
  funco : function() {
    if (o===this) {
      alert('ok');
    }
  }
}
o.funco();
//소속되어있으면 그 객체 === this

//사실 모든 객체는 다 window의 property이기 때문에 같은 말임

var funcThis = null; 
 
function Func(){
    funcThis = this;
}
var o1 = Func();
if(funcThis === window){
    document.write('window <br />');
}
 
var o2 = new Func();
if(funcThis === o2){
    document.write('o2 <br />');
}