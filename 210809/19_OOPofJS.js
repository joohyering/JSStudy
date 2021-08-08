//자바스크립트는 어떻게 oop에 접근하고 있는가? >> 객체라는 체계로 !
//prototype-based programming


//1
var person = {} ; //빈 객체 생성
person.name = 'e';  //속성, property 생성
person.introduce = function() {
  return 'My name is '+this.name;
}                   //메서드 생성

//2
var personNew = {
  'name' : 'a',
  'introduce' : function() {
    return 'My name is '+this.name;
  } 
}

//person과 personNew의 중복이 발생

function Person() {}
//이건 왜 해준거지..?
/*클래스 안에 생성자가 들어가있는 것이 아니라 함수를 통해 객체를 생성할 수 있고,
자바스크립트에는 클래스라는 개념 자체가 없다*/

var p = Person();
document.write(p);  //undefined
var p = new Person();
document.write(p);  //[object Object]

function Pperson(name){
  this.name = name;
  this.introduce = function(){
      return 'My name is '+this.name; 
  }   
}
//클래스 개념이 없기 때문에 생성자로 초기화!!

var p1 = new Pperson('egoing');
document.write(p1.introduce()+"<br />");

var p2 = new Pperson('leezche');
document.write(p2.introduce());