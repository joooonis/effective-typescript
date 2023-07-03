# duck typing

덕 타이핑은 객체의 유형이나 클래스보다는 객체의 메서드와 속성의 존재에 초점을 맞추는 개념입니다. 이 개념은 "오리처럼 걷고, 오리처럼 꽥꽥 소리를 내면, 그것은 오리다"라는 유명한 표현에서 유래되었습니다.

객체가 어떤 클래스에 속하는지가 중요한 것이 아니라, 객체가 원하는 동작을 지원하는지 여부가 중요합니다. 객체가 필요한 메서드나 속성을 가지고 있다면, 그 객체는 해당 타입으로 간주됩니다.

# structural typing

ypeScript는 정적 타입을 갖는 프로그래밍 언어로, 구조적 타이핑(structural typing)을 지원합니다. 구조적 타이핑은 객체의 구조가 동일하면 타입이 호환된다는 개념을 갖습니다. 이는 TypeScript에서 타입 검사 시 객체의 형태를 기준으로 타입 호환을 판단하는 방식입니다.

구조적 타이핑은 명시적으로 인터페이스를 정의하지 않아도, 객체의 구조가 일치하면 타입 호환을 제공합니다. 즉, 타입 검사는 객체의 프로퍼티와 메서드의 구조를 기준으로 이루어지며, 객체가 필요로 하는 프로퍼티와 메서드를 가지고 있다면 호환 가능한 것으로 간주됩니다.

```typescript
interface Vector2D {
  x: number;
  y: number;
}

interface Vector3D {
  x: number;
  y: number;
  z: number;
}
```

위의 두 개의 인터페이스는 구조적 타이핑에 의해 서로 호환됩니다.
따라서 아래 예시는 오류를 발생시키지 않습니다.

```typescript
function calcuateLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}

const v: Vector3D = { x: 3, y: 4, z: 5 };
calcuateLength(v);
```

하지만 이는 객체를 순회할때 예상하지 못한 속성이 포함될 수 있음을 야기합니다. type checker는 이를 에러로 판단합니다.

```typescript
// 구조적 타이핑으로 객체의 property를 정확하게 예상할 수 업으므로 에러가 발생합니다.
function calcuateLengthL1(v: Vector3D) {
  let length = 0;
  for (const axis of Object.keys(v)) {
    const coord = v[axis];
    length += coord * coord;
  }
  return Math.sqrt(length);
}

calcuateLengthL1(v);
/*
Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Vector2D'.
  No index signature with a parameter of type 'string' was found on type 'Vector2D'.
*/

// 객체의 속성값을 정확히 명시해주어야 합니다.
function calcuateLengthL2(v: Vector3D) {
  return Math.sqrt(v.x ** 2 + v.y ** 2 + v.z ** 2);
}
```

구조적 타이핑을 활용하면 유닛 테스팅을 손쉽게 할 수 있습니다.

```typescript
interface Author {
  first: string;
  last: string;
}

interface DB {
  runQuery: (sql: string) => any[];
}

function getAuthors(database: DB): Author[] {
  const authorRows = database.runQuery(`SELECT FIRST, LAST FROM AUTHORS`);
  return authorRows.map((row) => ({
    first: row[0],
    last: row[1],
  }));
}
```

# 요약

- 자바스크립트가 덕 타이핑(duck typing) 기반이고 타입스크립트가 이를 모델링하기 위해 구조적 타이핑을 사용함을 이해해야 합니다. 어떤 인터페이스에 할당 가능한 값이라면 타입 선언에 명시적으로 나열된 속성들을 가지고 있을 겁니다. 타입은 '봉인'되어 있지 않습니다.
- 클래스 역시 구조적 타이핑 규칙을 따른다는 것을 명심해야 합니다. 클래스의 인스턴스가 예상과 다를 수 있습니다.
- 구조적 타이핑을 사용하면 유닛 테스팅을 손쉽게 할 수 있습니다.
