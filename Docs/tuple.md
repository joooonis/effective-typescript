# tuple type

TypeScript에서 튜플은 고정된 길이의 배열을 나타내는 타입입니다. 각 요소는 서로 다른 타입을 가질 수 있습니다. 튜플을 사용하여 데이터 구조를 정의하고, 해당 구조를 따르는 배열을 생성할 수 있습니다.

튜플을 선언하는 방법은 다음과 같습니다:

```typescript
let tupleName: [Type1, Type2, Type3, ...];
```

여기서 `Type1`, `Type2`, `Type3`는 각 요소의 타입을 나타냅니다. 예를 들어, `string`과 `number` 타입을 가진 튜플을 선언하는 경우:

```typescript
let person: [string, number];
person = ['John', 25]; // 유효한 값
person = ['Jane', '30']; // 오류: 타입 불일치
```

위의 예시에서 `person`은 `string`과 `number` 타입을 가진 튜플입니다. 첫 번째 요소는 `string` 타입이어야 하고, 두 번째 요소는 `number` 타입이어야 합니다. 따라서 `["John", 25]`는 유효한 값이지만, `["Jane", "30"]`은 두 번째 요소의 타입이 일치하지 않으므로 오류가 발생합니다.

튜플의 요소에 접근하는 방법은 배열과 유사합니다. 인덱스를 사용하여 요소에 접근할 수 있습니다:

```typescript
let person: [string, number];
person = ['John', 25];

console.log(person[0]); // "John"
console.log(person[1]); // 25
```

튜플에는 고정된 길이가 있으므로, 인덱스가 튜플의 범위를 벗어나면 오류가 발생합니다.

튜플은 배열과 달리 요소의 순서와 타입이 중요하며, 타입 체크도 엄격하게 이루어집니다. 따라서 튜플을 사용할 때는 요소의 순서와 타입을 정확하게 지정해야 합니다.
