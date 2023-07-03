# typeof null === 'object'

typeof null이 'object'를 반환하는 이유는 JavaScript 언어의 초기 버전에서의 설계 결함으로 인해 발생한 것입니다.

JavaScript는 원래 자바 언어를 기반으로 만들어진 것이 아니라, 처음에는 웹 페이지에 간단한 스크립트 기능을 추가하기 위해 만들어진 스크립트 언어입니다. 따라서 초기 버전에서는 많은 제약과 디자인 결정이 있었고, 이 중 하나는 데이터 타입 처리입니다.

JavaScript의 원시 데이터 타입은 undefined, null, boolean, number, string, symbol이 있습니다. 그리고 객체(object)도 데이터 타입 중 하나입니다. 그러나 초기 버전의 JavaScript에서는 객체를 나타내는 태그 비트가 하위 비트로 사용되지 않았고, 대신 null 타입이 비어있는 포인터를 나타내는데 사용되었습니다.

따라서 typeof null을 호출하면 'object'가 반환됩니다. 이는 역사적인 이유로 인해 현재의 JavaScript에서도 그대로 유지되고 있습니다. 즉, JavaScript의 설계 결함으로 인해 발생한 것이며, 엄밀히 말하면 null은 객체가 아니라 원시 데이터 타입입니다.

# null check

JavaScript에서 `null`을 체크하는 방법에는 몇 가지가 있습니다. 아래에는 가장 일반적으로 사용되는 방법 몇 가지를 설명하겠습니다.

1. 동등 연산자(`==`) 사용:

   ```javascript
   if (variable == null) {
     // null 또는 undefined일 경우 실행될 코드
   }
   ```

이 방법은 `variable`이 `null` 또는 `undefined`인 경우에 참(true)으로 평가됩니다. 동등 연산자(`==`)를 사용하면 자동으로 형 변환을 수행하기 때문에 `null`과 `undefined`를 동시에 체크할 수 있습니다.

2. 일치 연산자(`===`) 사용:

   ```javascript
   if (variable === null) {
     // null일 경우 실행될 코드
   }
   ```

   일치 연산자(`===`)를 사용하면 엄격한 비교를 수행합니다. `variable`이 정말로 `null`인 경우에만 참(true)으로 평가됩니다. 이 방법은 형 변환을 수행하지 않기 때문에 타입과 값 모두를 비교합니다.

3. `typeof` 연산자 사용:

   ```javascript
   if (typeof variable === 'object' && variable === null) {
     // null일 경우 실행될 코드
   }
   ```

   `typeof` 연산자를 사용하여 변수의 타입을 확인하고, 값이 `null`인지도 확인할 수 있습니다. 하지만 기억해야 할 점은 `typeof null`이 `'object'`를 반환한다는 것입니다.

4. Null 병합 연산자(`??`) 사용 (ES2020 이상):
   ```javascript
   if (variable ?? null) {
     // null 또는 undefined가 아닐 경우 실행될 코드
   }
   ```
   Null 병합 연산자(`??`)는 `variable`이 `null` 또는 `undefined`인 경우에만 `null`을 반환합니다. 그렇지 않으면 `variable`의 값 자체를 반환합니다.

이러한 방법 중 하나를 사용하여 `null`을 체크할 수 있습니다. 선택한 방법은 코드의 컨텍스트와 개발자의 선호도에 따라 다를 수 있습니다.
