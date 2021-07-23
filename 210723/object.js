//map, associative array, dict

var grades = {'e':10, 'k':6, 's':80};   //객체 정의, index가 문자
document.write(grades);   //[object Object] 잉?

//다양한 선언 방법
var g = {};
var G = new Object();
g[222] = 22;

document.write(grades['e']);  //10, 대괄호 안 문자값 가공 가능
document.write(grades.k); //6
document.write(g[222]);   //22

//배열은 저장된 데이터들이 순서를 갖고 있으며, 내부적으로 순서가 유지된다
//객체는 순서가 없고 key - value만 있을 뿐

//객체와 반복
for(key in grades) {  //key : 변수, 객체의 키값이 담긴다
  document.write("key : "+key+" value : "+grades[key]+"<br />");
} //key : e value : 10 ...

for(key in grades) {  
  document.write("<li> key : "+key+" value : "+grades[key]+"<br /> </li>");
} //앞에 구분점이 생긴다. html과의 결합

//for - in 은 배열에서도 사용 가능, index값을 하나씩 가져올 수 있다.

var gInG = {'list':grades, 'show': function(){alert('hello world!');}};
//객체 안에 객체 가능, 객체 안에 함수도 가능..? 미친 세상에 이런 언어가 ,,

document.write(gInG.list.e);  //10, 이중으로 소환(?) 가능
document.write(gInG.show());  //undefined
gInG.show();

gInG['show2'] = function(){alert(this.list)};
gInG.show2(); //this : 얘가 속해있는 객체를 가리킨다

//와 이래서 얘가 객체구나