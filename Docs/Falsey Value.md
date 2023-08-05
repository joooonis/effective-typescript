# Falsey Value

JavaScript에서 "falsey value"는 불리언 문맥에서 false로 간주되는 값들을 말합니다. JavaScript에는 여섯 가지 기본 자료형이 falsy로 간주됩니다:

- false: 불리언 값 false.
- 0: 숫자 0.
- '': 빈 문자열 (즉, 문자가 없는 문자열).
- null: "값 없음" 또는 "빈 값"을 나타내는 특별한 값.
- undefined: 할당되지 않은 값이거나 정의되지 않은 값.
- NaN: "숫자가 아님"을 의미하며, 잘못된 수학 연산을 나타냅니다

위에 나열된 값 이외의 모든 값은 JavaScript에서 truthy로 간주됩니다. falsy 값을 조건문에서 사용할 경우 자동으로 false로 변환됩니다. 예를 들어:

```js
if (false) {
  console.log('이 부분은 실행되지 않습니다.');
}

if (0) {
  console.log('이 부분도 실행되지 않습니다.');
}

if ('') {
  console.log('이 부분 또한 실행되지 않습니다.');
}

if (null) {
  console.log('이 부분도 실행되지 않습니다.');
}

if (undefined) {
  console.log('결코 이 부분은 실행되지 않습니다.');
}

if (NaN) {
  console.log('여전히 이 부분도 실행되지 않습니다.');
}
```

만약 함수로 들어온 값이 `undefined`이거나 `null`인지 확인 하기 위해서는 아래와 같이 작성해야 합니다.

```js
function ensure(value) {
  // Your code goes here
  // throw a Error if value is undefined or null
  // Falsey values like 0 or "" are valid values and should not throw an error
  if (value === undefined) {
    throw new Error('Value is undefined or null');
  }
  return value;
}
```
