function Person (name) {
  this.name = name;
}

Person.prototype.name = null;
Person.prototype.introduce = function() {
  return this.name;
}
//prototype 메서드 이용해서 객체 안에 introduce 메소드 정의

function Programmer(name){
  this.name = name;
}
Programmer.prototype = new Person();
//Person의 prototype 안에 있는 properties를 옮겨(?)줌

var p1 = new Programmer('egoing');
document.write(p1.introduce()+"<br />");

//기능 추가

Programmer.prototype.coding = function(){
  return "hello world";
}
//coding 기능은 Programmer만 가지고 있으면 됨
//오리지널 객체에서 필요한 기능을 더 넣어서 확장

var p1 = new Programmer('egoing');
document.write(p1.coding()+"<br />");
