/*
만약 generic을 쓰지 않을 경우...
getSize라는 함수를 숫자 배열, string 배열, boolean 배열, 객체 배열에서 모두 쓸 수 있다고 가정해 본다.
*/
function getSize(arr: number[] | string[] | boolean[] | object[]): number {
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
만약 generic을 쓸 경우... getSize를 다음과 같이 개선할 수 있다.
*/
function getSizeFixed<T>(arr: T[]): number {
  //<> 안에 들어가는 것을 타입 파라미터라고 한다.
  //보통 타입 파라미터는 T를 이용하며, X, A, B를 쓰기도 한다.
  return arr.length;
}

getSizeFixed<number>(arr1); //3
//함수 호출 시 <타입>은 생략 가능하다. 생략 시, 타입스크립트가 알아서 유추해서 호출한다.
getSizeFixed(arr2); //3
getSizeFixed(arr3); //3
getSizeFixed(arr4); //3

/******화살표 함수에서 제네릭 이용하기 */
const returnInArray = <T>(value: T): T[] => {
  return [value];
};

const strArray = returnInArray<string>("hello");
const numArray = returnInArray(100);

/** interface에서 Generics 사용하기 */
interface Items<T> {
  list: T[];
}
const items: Items<string> = {
  list: ["a", "b", "c"],
};

interface Mobile<T> {
  name: string;
  price: number;
  option: T;
}

const m1: Mobile<object> = {
  name: "s21",
  price: 1000,
  option: {
    color: "red",
    coupon: false,
  },
};

//object를 아래와 같이 구체적으로 정의할 수도 있음
const m2: Mobile<{ color: string; coupon: boolean }> = {
  name: "s21",
  price: 1000,
  option: {
    color: "red",
    coupon: false,
  },
};

const m3: Mobile<string> = {
  name: "s20",
  price: 900,
  option: "good",
};

//T에 extends를 할 수도 있음
function showName<T extends { name: string }>(data: T): string {
  return data.name;
}

showName({ name: "a", age: 10 }); //됨
// showName({ price: 3000 }); //name:string이 없으므로 에러

/***type에서 Generics를 사용하는 것은 interface에서 Generics를 사용한 것과 유사 */
type Items2<T> = {
  list: T[];
};

const items2: Items2<string> = {
  list: ["a", "b", "c"],
};

/***클래스에서 Generics 사용할 수도 있음. 벨로퍼트 사이트 더 참고 **/
