"use strict";
/*
만약 generic을 쓰지 않을 경우...
getSize라는 함수를 숫자 배열, string 배열, boolean 배열, 객체 배열에서 모두 쓸 수 있다고 가정해 본다.
*/
function getSize(arr) {
    //getSize의 파라미터 타입 지정 부분이 너무 길어진다!
    return arr.length;
}
const arr1 = [1, 2, 3];
getSize(arr1); //3
const arr2 = ["a", "b", "c"];
getSize(arr2); //3
const arr3 = [false, true, true];
getSize(arr3); //3
const arr4 = [{}, {}, { name: "Tim" }];
getSize(arr4); //3
/*
//만약 generic을 쓸 경우... getSize를 다음과 같이 개선할 수 있다.
*/
function getSizeFixed(arr) {
    //<> 안에 들어가는 것을 타입 파라미터라고 한다.
    //보통 타입 파라미터는 T를 이용하며, X, A, B를 쓰기도 한다.
    return arr.length;
}
getSizeFixed(arr1); //3
//함수 호출 시 <타입>은 생략 가능하다. 생략 시, 타입스크립트가 알아서 유추해서 호출한다.
getSizeFixed(arr2); //3
getSizeFixed(arr3); //3
getSizeFixed(arr4); //3
