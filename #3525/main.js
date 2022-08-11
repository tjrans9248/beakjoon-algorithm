const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const current = input[0].split(' ').map(Number);

let hour = input[0];
let minutes = input[1];
let cook = Number(input[1]);

const endTimeHour = parseInt((hour * 60 + minutes + cook) / 60);
const endTimeMinutes = parseInt((hour * 60 + minutes + cook) % 60);

console.log(endTimeHour >= 24 ? endTimeHour - 24 : endTimeHour, endTimeMinutes);

/*

const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const current = input[0].split(' ').map(Number);

const currentHour = current[0];
const currentMinute = current[1];
const cookTime = Number(input[1]);

const cookEndTimeHour = parseInt((currentHour*60 + currentMinute + cookTime)/ 60) ;
const cookEndTimeMinute = parseInt((currentHour*60 + currentMinute + cookTime)% 60);

console.log(cookEndTimeHour >= 24 ? cookEndTimeHour - 24 : cookEndTimeHour, cookEndTimeMinute);

*/