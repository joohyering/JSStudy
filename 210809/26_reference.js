//원시 데이터 타입에 대해서는 복제

//객체에 대해서는 참조
//ex: vi editor
var a = {'id' : 1};
var b = a;
b.id = 2;
document.write(a.id); //2

var a = {'id' : 1};
var b = a;
b.id = {'id' : 2};  //새로운 객체를 생성. a를 바라보는 것이 아님
document.write(a.id); //1
