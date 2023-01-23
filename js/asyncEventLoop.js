function foo() {
  console.log(
    "**********************************나는비동기****************************************"
  );
}

function bar() {
  let mathtime = 0;
  mathtime += 1;
}

setTimeout(foo, 0); // 0초(실제는 4ms) 후에 foo 함수가 호출된다.
for (let i = 0; i < 10; i++) {
  bar();
}
