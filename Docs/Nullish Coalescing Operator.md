# Nullish Coalescing Operator(널 병합 연산자)
널 병합 연산자(Nullish Coalescing Operator)는 JavaScript에서 도입된 새로운 연산자로, 주어진 피연산자 중에서 "null" 또는 "undefined"가 아닌 값을 찾는 데 사용됩니다. 이 연산자는 두 개의 물음표(??)로 표시됩니다.

기존의 논리 OR 연산자(`||`)는 왼쪽 피연산자가 falsy한 값이라면 오른쪽 피연산자를 반환하는데, falsy한 값으로는 "null", "undefined", "false", 0, NaN, 빈 문자열 등이 포함됩니다. 때때로 이러한 값들을 유효한 값으로 간주하지 않고 기본값을 할당해야 하는 경우가 있는데, 이때 널 병합 연산자가 유용합니다.

널 병합 연산자는 왼쪽 피연산자가 "null" 또는 "undefined"일 때에만 오른쪽 피연산자를 반환하고, 그렇지 않은 경우 왼쪽 피연산자를 반환합니다. 이를 통해 오직 "null" 또는 "undefined"일 때에만 기본값을 지정할 수 있습니다.

아래는 널 병합 연산자의 간단한 예제입니다:

```javascript
const someValue = null;
const defaultValue = 'Hello, World!';

// 널 병합 연산자를 사용하여 기본값 할당
const result = someValue ?? defaultValue;

console.log(result); // 출력 결과: 'Hello, World!'
```

위의 코드에서 `someValue`는 "null"이므로 널 병합 연산자는 오른쪽 피연산자인 `defaultValue`를 반환하게 됩니다. 만약 `someValue`가 "null" 대신 다른 값이었다면, 해당 값이 `result`에 할당되었을 것입니다.

널 병합 연산자는 변수 할당 뿐만 아니라, 함수의 매개변수 기본값(default parameter) 설정 등에서도 유용하게 사용될 수 있습니다. 이를 통해 코드의 가독성과 신뢰성을 높일 수 있습니다.