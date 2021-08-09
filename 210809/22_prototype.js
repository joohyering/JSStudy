//prototype chain

function Ultra(){}
Ultra.prototype.ultraProp = true;
 
function Super(){}
Super.prototype = new Ultra();
 
function Sub(){}
Sub.prototype = new Super();
 
var o = new Sub();
console.log(o.ultraProp); //true

/* 생성자 : 함수
함수는 객체이기 때문에 property를 가질수 있는데,
객체에는 prototype이라는 property가 있고,
prototype에는 객체가 저장되어 있는데, prototype의 property에 있는 것들이 상속되는 것 */