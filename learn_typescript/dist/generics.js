"use strict";
/***************제네릭********************* */
/*
제네릭은 타입스크립트에서 함수, 클래스, interface, type alias를 사용하게 될 때, 여러 종류의 타입에 대하여 호환을 맞춰야 하는 상황에서
사용하는 문법이다.
*/
/**함수에서 Generics 사용하기
 *
  우리가 객체 A와 B를 합쳐주는 merge라는 함수를 만든다고 가정할 때,
  A와 B에 어떤 타입이 올 지 모른다 -> any를 써야 하는가?
  
  function merge(a: any, b: any): any {
    return {
        ...a,
        ...b
    };
  }
  const merged = merge({ foo: 1 }, { bar: 1 });
  
  하지만 any를 쓰면 타입 유추가 모두 깨진 거나 다름이 없다.
  이런 상황에 Generics를 사용할 수 있다.
 
 */
function merge(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const merged = merge({ foo: 1 }, { bar: 1 });
/**함수에서 Generics를 사용하면 파라미터로 다양한 타입을 넣을 수도 있고 타입 지원을 지켜낼 수 있다. */
