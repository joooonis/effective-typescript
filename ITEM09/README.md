# 타입 단언보다는 타입 선언을 사용하기

```typescript
interface Person {
  name: string;
}

// 타입 선언
const alice: Person = { name: 'Alice' };

// 타입 단언
const bob = { name: 'Bob' } as Person;
```

타입 선언은 :을 이용하여 변수의 타입을 선언합니다.
타입 단언은 as을 이용하며 타입스크립트가 추론한 타입이 있더라도 as 뒤에 붙여진 타입으로 간주합니다.

타입 선언은 할당되는 값이 해당 인터페이스를 만족하는지 검사합니다. 하지만 타입 단언은 강제로 타입을 지정했으니 타입 체커에게 오류를 무시하라고 하는 것입니다.

# 속성을 추가하는 경우

```ts
const alice: Person = {}; // 오류 O, 'name' 속성이 없습니다.
const bob = {} as Person; // 오류 X

const alice: Person = {
  name: 'alice',
  occupation: 'developer',
}; // 오류 O, 'name' 속성이 'Person' 형식에 없습니다.

const bob = {
  name: 'alice',
  occupation: 'developer',
} as Person; // 오류 X
```

타입 단언이 꼭 필요한 경우가 아니라면, 안정성 체크도 되는 타입 선언을 사용하는 것이 좋습니다.

# Arrow 함수에서 타입 선언 사용하기

```ts
const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

const greet = (name: string): string => {
  return `Hello, ${name}!`;
};
```

- 매개변수에 타입 지정 : 매개변수 이름 뒤에 `:`을 붙입니다.
- Arrow 함수의 반환 타입 지정하기 : 매개번수 리스트 뒤에 ':`을 붙이고 반환하고자 하는 타입을 지정합니다.

```ts
const people: Person[] = ['alice', 'bob', 'jain'].map(
  (name): Person => ({ name })
);
```

위와 같이 함수 호출 체이닝이 일어날때 적절하게 작성할 수 있습니다.

# 타입 단언을 사용해야 하는 경우

타입스크립트는 DOM에 접근할 수 없습니다.

```js
document.querySelector('myBtn').addEventListner('click', e => {
  e.curretTarget // 타입은 EventTarget
  const button = e.curretTarget as HTMLButtonElement
  button // 타입은 HTMLButtonElement
})
```

# null 아님 단언문(Non-null assertion operator)

변수의 접미사로 쓰이는 `!`는 그 값이 null이 아니라는 단언문으로 쓰입니다.
변수나 프로퍼티의 값이 null 또는 undefined가 아니라고 단언(확신)할 때 사용합니다.

```ts
let name: string | null = 'Alice'; // 'name'은 문자열 또는 null일 수 있음
const displayName: string = name!; // 'name'이 항상 문자열임을 단언함
```

# 타입 단언으로 인한 타입 변환

타입 단언문으로 임의의 타입 간에 변환을 할 수 는 없습니다.

A가 B의 부분집합의 경우에만 타입 단언문을 사용해 변환할 수 있습니다.

`unknown`은 모든 타입의 서브타입이기 때문에 `unknown`이 포함된 단언문은 항상 동작합니다. 물론 이는 위험합니다.

```ts
const el = document.body as unknown as Person; // 정상
```

# 요약

- 타입 단언(as Type)보다 타입 선언(: Type)을 사용해야 합니다.
- 화살표 함수의 반환 타입을 명시하는 방법을 터득해야 합니다.
- 타입스크립트보다 타입 정보를 더 잘 알고 있는 상황에서는 타입 단언문과 `null` 아님 단언문을 사용하면 됩니다.
