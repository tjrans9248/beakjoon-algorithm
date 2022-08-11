// # 2884 알림시계
// 45분 일찍 알람 설정하기

// 예제 입력 1 - 10 10
// 예졔 출력 1 - 9 25

// 예제 입력 2 - 0 30 
// 예제 출력 2 - 23 45

// -45 를 한 minutes(분)이 양수이면 그대로 45분만 빼주면된다.
// 하지만 -45 한 값이 음수 일경우는 h(시간에서) 1을 빼주고 분에서 

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (line) {
    const input = line.split(' ');


    let h = Number(input[0])
    let m = Number(input[1])

    m -= 45;

    if(m < 0){
        m +=60;
        h -=1;
    }
    if(h < 0){
        h = 23;
    }
    console.log(h, m);
});
