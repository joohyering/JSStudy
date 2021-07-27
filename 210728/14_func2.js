//js에서는 함수도 객체

function a() {} //var a = function() {}
//함수도 값이기 때문에 객체 안에 저장할 수 있는 것

a = {
  b : function(){}
};
/* a 안에 정의되어있는 함수는 메서드라고 불려진다.
key b를 함수로 정의했다고 생각할 수도 있다*/

//함수는 값이기 때문에 인자로 전달될 수 있다

// function (func, num) {
//   return func(num);
// }

//함수는 리턴값으로도 사용될 수 있다.
function cal (mode) {
  var funcs = {
    'plus' : function(l, r) {return l+r},
    'minus' : function(l, r) {return l-r}
  };
  return funcs[mode];
}

alert(cal('plus')(2,1));


//함수는 배열의 값으로도 사용될 수 있다
var process = [
  function (input) {return input + 10;},
  function (input) {return input * 10;},
  function (input) {return input / 10;}
];
var input = 1;
for (var i = 0; i< process.length; i++){
  input = process[i](input);
  alert(input);
}