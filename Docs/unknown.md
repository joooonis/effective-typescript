# unknown tyep

TypeScript에서 `unknown`과 `undefined`는 모두 타입 시스템에서 다른 의미를 가지는 특별한 타입입니다.

**`unknown` 타입**: `unknown`은 TypeScript 3.0 버전에서 도입된 타입으로, "알 수 없는" 값을 나타냅니다.

`unknown` 타입은 모든 값에 할당할 수 있지만, 그 값을 사용하기 전에 타입을 좁히거나 확인해야 합니다. 이는 컴파일러가 타입 안전성을 유지할 수 있도록 합니다.

예를 들어, 다음과 같은 코드가 있다고 가정해봅시다:

```typescript
let value: unknown;
let stringValue: string;

value = 'Hello';
stringValue = value; // 오류: 'unknown'은 'string'에 할당될 수 없음
```

`value` 변수의 타입을 `unknown`으로 선언했습니다. `unknown`은 모든 값에 할당할 수 있지만, `stringValue` 변수는 `string` 타입으로 선언되어 있습니다. 따라서 `unknown` 타입의 값을 `string`에 할당할 때는 타입 단언(type assertion)이나 타입 가드를 사용하여 타입을 확인하거나 좁혀야 합니다.

```typescript
if (typeof value === 'string') {
  stringValue = value; // 타입 확인 후에 할당 가능
}
```

**`undefined` 타입**: `undefined`는 JavaScript에서 `undefined` 값에 해당하는 타입입니다. `undefined`는 값이 할당되지 않은 변수의 기본값이거나 함수에서 반환하지 않은 경우의 기본 반환값입니다.

예를 들어, 다음과 같은 코드가 있다고 가정해봅시다:

```typescript
let value: undefined;
let numberValue: number;

value = undefined;
numberValue = value; // 가능: 'undefined'는 'number'에 할당될 수 있음
```

`value` 변수의 타입을 `undefined`로 선언했습니다. `undefined`는 `number`에 할당될 수 있는 타입입니다. 따라서 `undefined` 값을 `number`에 할당하는 것은 문제가 없습니다.

요약하자면, `unknown`은 "알 수 없는" 값을 나타내고, 타입 확인이나 좁힘이 필요합니다. 반면에 `undefined`는 JavaScript에서 `undefined` 값에 해당하는 타입이며, 값이 할당되지 않은 변수의 기본값이거나 함수의 기본 반환값입니다.
