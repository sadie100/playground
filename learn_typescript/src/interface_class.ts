/************클래스에서 interface를 implements 하기************** */

//Shape라는 interface 선언
interface Shape {
  getArea(): number; //Shape interface에는 getArea라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자임
}

class Circle implements Shape {
  //'implements' 키워드를 사용하여 해당 클래스가 Shape interface의 조건을 충족하겠다는 것을 명시함
  radius: number; //멤버 변수 radius 값을 설정
  constructor(radius: number) {
    this.radius = radius;
  }

  //너비를 가져오는 함수를 구현함
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  //constructor의 파라미터에 public 또는 private accessor를 사용해서 직접 하나하나 설정해주는 작업을 생략할 수 있음
  //public으로 선언된 값은 클래스 외부에서 조회할 수 있으며, private는 클래스 내부에서만 조회 가능
  constructor(public width: number, private height: number) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

console.log(rectangle.width);
// console.log(rectangle.height);   //에러

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});
