/**************type alias 사용하기**************** */

/*
type은 특정 타입에 별칭을 붙이는 용도로 사용함
이를 사용하여 객체를 위한 타입을 설정할 수도 있고, 배열, 또는 그 어떤 타입이던 별칭을 지어줄 수 있음

interface와 그 쓰임이 유사한데, 언제 어떤 용도로 사용할지?
=> 클래스와 관련된 타입의 경우엔 interface를 사용하는 게 좋고,
일반 객체 타입의 경우엔 그냥 type을 사용해도 무방함.
사실 객체를 위한 타입을 정의할 땐 무엇이든 써도 상관 없음. 일관성 있게만 쓰기
*/

type Person2 = {
  name: string;
  age?: number;
};

//&는 Intersection으로서 두 개 이상의 타입들을 합쳐줌
// 참고: https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types
type Developer2 = Person2 & {
  skills: string[];
};

const person2: Person2 = {
  name: "김사람",
};

const expert2: Developer2 = {
  name: "김개발",
  skills: ["javascript", "react"],
};

type People = Person2[]; //Person[]를 이제 People이라는 타입으로 사용할 수 있음
const people2: People = [person2, expert2];

type Color = "red" | "orange" | "yellow";
const color2: Color = "red";
const colors2: Color[] = ["red", "orange"];
