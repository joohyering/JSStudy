//내부함수가 외부함수의 맥락(context)에 접근할 수 있는 것

//내부함수는 외부함수의 지역변수에 접근할 수 있음

function outter() {
  var title = 'cd';
  return function() {
    alert(title);
  }
}
inner = outter();
inner();  //외부함수는 이미 죽었는데 내부함수에서 이미 사라진 외부함수에 접근


//private 변수를 가능하게 한다
//생성 시점에서 이미 원래 함수가 죽어서 title에는 get이랑 set을 통해서만 접근할 수 있다
function factory_movie(title){
  return {
      get_title : function (){
          return title;
      },
      set_title : function(_title){
          title = _title
      }
  }
}
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');

alert(ghost.get_title());
alert(matrix.get_title());

ghost.set_title('공각기동대');

alert(ghost.get_title());
alert(matrix.get_title());