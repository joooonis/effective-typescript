# 타입 공간과 값 공간의 심벌 구분하기

타입스크립트의 심벌(Symbol)은 타입 공간이나 값 공간 중의 한 곳에 존재합니다.

일반적으로 `type`이나 `interface` 다음에 나오는 심벌은 타입인 반면, `const`나 `let` 선언에 쓰이는 것은 값입니다.

# class, enum

`class`와 `enum`은 상황에 따라 타입과 값 두 가지 모두 가능한 예약어 입니다.

```typescript
class Cylinder {
  radius = 1;
  height = 1;
}

function calculateVolume(shape: Cylinder) {
  // ...
}
```

위 예제에서 `Cylinder`는 타입으로 쓰였습니다.

클래스가 타입으로 쓰일 때는 형태(속성과 매서드)가 사용되는 반변, 값으로 쓰일 때는 생성자가 사용됩니다.

# typeof

`typeof`의 경우에도 타입으로 쓰일 때와 값에서 쓰일 때 다른 기능을 합니다.

```ts
interface Person {
  name: string;
  age: number;
}

const p: Person = {
  name: 'John',
  age: 42,
};

function email(p: Person, subject: string, body: string): void {
  // ...
}

type T1 = typeof p; // 타입은 Person
type T2 = typeof email; // 타입은 (p: Person, subject: string, body: string) => void

const v1 = typeof p; // 값은 object
const v2 = typeof email; // 값은 function
```

`typeof`가 타입 공간에서 쓰일때는 값을 읽어서 타입스크립트 타입을 반환합니다.

`typeof`가 값 공간에서 쓰일때는 자바스크립트 런타임의 `typeof` 연산자로 사용되며, 대상 심벌의 런타임 타입을 가리키는 문자열을 반환합니다.

이때 자바스크립트 런타임 타입은 오직 6개로 `number`, `string`, `boolean`, `object`, `function`, `undefined`만이 존재합니다.

```ts
const v = typeof Cylinder; // 값은 function
type T = typeof Cylinder; // 타입은 typeof Cylinder
```

`class`가 값으로 쓰일 때는 `new` 키워드를 사용할 때 볼 수 있는 생성자 함수 입니다.

# 두 공간 사이에서 다른 의미를 가지는 코드패턴들

- this
- &, | 연산자
  - 값 : AND, OR 비트 연산자, 타입 : 인터섹션, 유니온
- const vs as const
  - 앞의 것은 새 변수를 선언하지만, 뒤의 경우 리터럴 또는 리터럴 표현식의 추론된 타입을 바꿉니다.
- extends
  - 서브클래스(class A extends B) 또는 서브타입(interface A extends B)
- in
  - 루프(for (key in object)) 또는 매핑된(mapped) 타입

# 타입스크립트 구조분해 할당

```ts
function email({ person: Person, subject: string, body: string }) {
  // ...
  // error : Binding element 'Person' implicitly has an 'any' type.ts(7031)
  // error : Duplicate identifier 'string'.ts(2300)
}
```

위 구조분해 할당 문법은 타입스크립트 오류를 발생시키는데 값의 관점에서 Person과 string이 해석되었기 때문입니다. 아래와 같이 작성하여 문제를 해결할 수 있습니다.

```ts
function email2({
  person,
  subject,
  body,
}: {
  person: Person;
  subject: string;
  body: string;
}) {
  // ...
}
```

# 요약

- 타입스크립트 코드를 읽을 때 타입인지 값인지 구분하는 방법을 터득해야 합니다.
- 모든 값은 타입을 가지지만, 타입은 값을 가지지 않습니다. type과 interface 같은 키워드는 타입 공간에만 존재합니다.
- class나 enum 같은 키워드는 타입과 값 두 가지로 사용될 수 있습니다.
- "foo"는 문자열 리터럴 이거나, 문자열 리터럴 타입일 수 있습니다.
- typeof, this 그리고 많은 다른 연산자들과 키워드들은 타입 공간과 값 공간에서 다른 목적으로 사용될 수 있습니다.
