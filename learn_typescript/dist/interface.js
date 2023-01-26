"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    //너비를 가져오는 함수를 구현함
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle {
    //constructor의 파라미터에 public 또는 private accessor를 사용해서 직접 하나하나 설정해주는 작업을 생략할 수 있음
    //public으로 선언된 값은 클래스 외부에서 조회할 수 있으며, private는 클래스 내부에서만 조회 가능
    constructor(width, height) {
        this.width = width;
        this.height = height;
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
const shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach((shape) => {
    console.log(shape.getArea());
});
