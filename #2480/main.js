// 같은 눈 3개가 나오면 10,000 +(같은 눈) * 1000
// 같은 눈 2개가 나오면 1000 +(같은 눈) * 100
// 모두 다른 눈이 나오는 경우 (그중 가장큰눈) * 100


const fs = require('fs')
const numbers = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

let a = numbers[0];
let b = numbers[1];
let c = numbers[2];

let money = 0;
let maxNum = 0;

if(a === b && a === c){
    money = 1000 + (a * 1000);
}else if(a === b || a === c || b === c){
    if(a === b || a === c ){
        money = 1000 + a * 100
    }else {
        money = 1000 + (b * 100);
    }
}else {
    maxNum = Math.max(...numbers); // Math.max()를 사용해서 가장큰 숫자를 선택
    // spread 연산자(...)에 대해 배웠다.
    money = maxNum * 100;
}

console.log(money);