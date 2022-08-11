//예제 입력  
//475 385

//예제 출력
//2360
//3776
//1416
//181720

const fs = require(' fs' );
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((item) => +item);

solution(input[0]. input[1]);

function solution(A, B) {
  const stringB = String(B); // B 를 문자열로 바꿔주면 385 => "3", "8", "5" 로 바꿀 수 있다.
  const one = +stingB[2]; // stringB 로 각각의 숫자를 문자열로 바꿔준다음 값으로 변환할때는 숫자열로 바꿔줘야하므로 (+, 숫자형) 를 이용한다.
  const ten = +stingB[1]; // stringB 로 각각의 숫자를 문자열로 바꿔준다음 값으로 변환할때는 숫자열로 바꿔줘야하므로 (+, 숫자형) 를 이용한다.
  const hun = +stingB[0]; // stringB 로 각각의 숫자를 문자열로 바꿔준다음 값으로 변환할때는 숫자열로 바꿔줘야하므로 (+, 숫자형) 를 이용한다.

  console.log(A * one);
  console.log(A * ten);
  console.log(A * hun);
  console.log(A * B);
}