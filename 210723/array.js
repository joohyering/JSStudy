var member = ['e', '8', 's']; //대괄호로 시작해서 대괄호로 끝

alert(member);  //e,8,s

//indexing

alert(member[0]); //e

for (i = 0; i < member.length; i++) {       //.length 뒤에 () 없는게 신기하네 ..?
  document.write(member[i].toUpperCase());  //숫자는 변화 X!!
  document.write('<br />');
}

//배열의 추가, 삭제, 수정
member.push('7');   //마지막에 추가

alert(member);  //alert가 모두 끝나고 document.write 실행
member.concat(member); //return값 담을 변수가 없기 때문에 member는 그대로
member = member.concat(member);

document.write(member); //e,8,s,7,e,8,s,7 배열이 return되기 때문

member.unshift('a');
document.write(member); //a,e,8,s,7,e,8,s,7 인덱싱 값도 바뀌게 된다, 처음에 끼워넣기

//splice : 배열에 배열을 추가하고 싶을 때
//splice(index, howmanyDelete, elements .., .., ~);
//배열의 형태로 넣지 않고 원소 형태로 추가하게 된다는 점을 주의

member.shift(); //맨 앞에 있는 값 삭제
document.write(member); //e,8,s,7,e,8,s,7

member.pop();   //맨 뒤에 있는 값 삭제
document.write(member); //e,8,s,7,e,8,s

member.sort();  //정렬, sort(sortfunc) : 특정 기준에 따라 정렬
member.reverse(); //거꾸로 정렬