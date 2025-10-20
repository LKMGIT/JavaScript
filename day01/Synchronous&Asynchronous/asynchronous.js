function foo() {
  console.log("foo");
}

function bar() {
  console.log("bar");
}

// setTimeout 타이머 비동기 함수 호출
setTimeout(foo, 3000);
bar();

/*
실행결과
bar
(약 3초뒤)
foo
*/