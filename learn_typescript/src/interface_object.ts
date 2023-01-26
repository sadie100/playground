/*******일반 객체를 interface로 타입 설정하기******** */
interface Person {
  name: string;
  age?: number; //물음표가 들어갔다는 것은, 설정을 해도 되고 안 해도 되는 값이라는 것을 의미함
}

interface Developer extends Person {
  //interface를 선언할 때 다른 interface를 extends 키워드를 사용해서 상속받을 수 있음
  //   name: string;
  //   age?: number;
  skills: string[];
}

const person: Person = {
  name: "김사람",
  age: 20,
};

const expert: Developer = {
  name: "김개발",
  skills: ["javascript", "react"],
};

const people: Person[] = [person, expert];
