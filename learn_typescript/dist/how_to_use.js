"use strict";
/****************일반 변수에서 ts 이용하기******************* */
let count = 0; //숫자
count += 1;
// count = "문자열"; //에러 남
const message = "hello world"; //문자열
const done = true; //불리언
const numbers = [1, 2, 3]; //숫자 배열
const messages = ["hello", "world"]; //문자열 배열
// messages.push(1); //숫자 넣으려고 하면 안 됨
let mightBeUndefined = undefined; //string일 수도 있고 undefined일 수도 있음
let nullableNumber = null; //number일 수도 있고 null일 수도 있음
let color = "red"; //red, orange, yellow 중 하나임
color = "yellow";
// color = "green"; //에러 발생
/****************함수에서 ts 이용하기******************* */
function sum(x, y) {
    //파라미터 x, y는 number이고, 함수는 number를 반환한다
    return x + y;
}
sum(1, 2);
function sumArray(numbers) {
    //배열의 내장함수를 사용할 때도 타입 유추가 매우 잘 이루어집니다.
    return numbers.reduce((acc, cur) => acc + cur, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);
//함수에서 아무것도 반환하지 않아야 한다면 반환 타입을 void로 설정하면 됩니다.
function returnNothing() {
    console.log("I am just saying hello world");
}
