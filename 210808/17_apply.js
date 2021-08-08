//자바스크립트의 유연성을 잘 보여준다.
//자바스크립트에서는 함수도 객체 !!! 계속 나오는거 보니 중요한가봐 >>> 따라서 함수도 메서드를 가진다.
//앞 강의의 .length도 함수의 메서드 중 하나

//default
function func() {}
func();

//apply
func.apply(null, '원래 인자를 배열에 순서대로 담아서 전달' );
//function apply() { [natie code] }
//cf ) call

/*왜? null말고 다른 인자를 넣어서 사용할 수 있기 때문에 apply 사용*/

o1 = {val1:1, val2:2, val3:3}
o2 = {v1:10, v2:50, v3:100, v4:25}
function sum(){
    var _sum = 0;
    for(name in this){
                // this는 호출할 때 정해지기 때문에 아직 정해져있지 않다.
        _sum += this[name];
    }
    return _sum;
}

//null 없이 apply 호출
alert(sum.apply(o1)) // 6
alert(sum.apply(o2)) // 185

/* o1 or o2가 각각 this로 호출됨 >> o1.sum or o2.sum
o1 = {val1:1, val2:2, val3:3, sum:sum}
o2 = {v1:10, v2:50, v3:100, v4:25, sum:sum} 과 같은효과를 가진다
하지만 객체 안에 넣을 경우 for문에서 sum:sum까지 원소로 간주하기 때문에
if(typeof this[name] !== 'function')을 붙여줘야 한다.
그래서 apply 사용 !*/