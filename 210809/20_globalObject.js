//모든 객체는 전역 객체의 property

function func() {
  alert('hello');
}

func();
//==
window.func();

//모든 함수, 모든 변수는 window(or global)라는 객체의 property