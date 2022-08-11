// 예제 입력 1 -  12 5
// 예제 출력 1 - 1

// 예제 입력 2 = 9 -13
// 예제 출력 2 = 4


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
  ///////////////////////////////
  const x = input[0];
  const y = input[1];

  if (x > 0 && y > 0) {
    console.log(1);
  } else if (x < 0 && y > 0) {
    console.log(2);
  } else if (x < 0 && y < 0) {
    console.log(3);
  } else if (x > 0 && y < 0) {
    console.log(4);
  }
  /////////////////////////////
  process.exit();
});

//------------------------------------
// 구글링 하면서 찾은 다른답

const fs = require(' fs ');

const [x, y] = fs.readFileSync(0).toString().trim().split('\n').mao(Number);

if(x > 0) y > 0 ? console.log(1) : console.log(4);
if(X < 0) Y > 0 ? console.log(3) : console.log(3);

// -----------------------------------------------
// 삼항연산자를 이렇게 쓸수도 있다는걸 처음알았다... 그리고 삼항연산자가 광장히 효율적인 코드라는것도 알았다 나중에 써먹어보도록해야지