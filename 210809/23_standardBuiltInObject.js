//표준에서 기본으로 내장되어있는 객체들 : 자바스크립트가 기본적으로 제공하는 객체

/*
Object
Function
Array
String
Boolean
Number
Math
Date
RegExp
*/

//확장 >> 사용자 정의 객체
//중용 : 내장 객체의 확장

var arr = new Array('seoul','new york','ladarkh','pusan', 'Tsukuba');
function getRandomValueFromArray(haystack){
    var index = Math.floor(haystack.length*Math.random());
    //floor : 소수점 제거
    return haystack[index]; 
}
console.log(getRandomValueFromArray(arr));

//모든 배열로 확장
Array.prototype.rand = function(){
  var index = Math.floor(this.length*Math.random());
  return this[index];
}
var arr = new Array('seoul','new york','ladarkh','pusan', 'Tsukuba');
console.log(arr.rand());