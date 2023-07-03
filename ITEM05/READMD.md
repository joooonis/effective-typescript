# any 타입 지양하기

typescript를 사용하면서 any type을 지양해야 하는 이유는 다음과 같습니다.

- any 타입에는 타입 안전성이 없습니다.
- any는 함수 시그니처를 무시해 버립니다.

- any 타입에는 언어 서비스가 적용되니 않습니다.

```typescript
interface Person {
  first: string;
  last: string;
}

let person: Person = { first: 'Jane', last: 'Jacobs' };
let personAny: any = { first: 'Jane', last: 'Jacobs' };

const formatName = (p: Person) => `${p.last}, ${p.first}`;
const formatNameAny = (p: any) => `${p.last}, ${p.first}`;

// After Rename Symbol

interface Person {
  firstName: string; // first -> firstName
  last: string;
}

let person: Person = { firstName: 'Jane', last: 'Jacobs' };
let personAny: any = { first: 'Jane', last: 'Jacobs' };

const formatName = (p: Person) => `${p.last}, ${p.firstName}`;
const formatNameAny = (p: any) => `${p.last}, ${p.first}`;
```

위에서 `any`를 사용한 경우 속성값을 읽을 수 없고 'Rename Symbol`(F2)을 사용하여도 `any` 타입의 심벌은 함께 변경되지 않습니다.

- any 타입은 코드 리펙터링 때 버그를 갑춥니다.
- any는 타입 설계를 감춰버립니다.
- any는 타입시스템의 신뢰도를 떨어트립니다.

# 요약

- `any` 타입을 사용하면 타입 체커와 타입스크립트 언어 서비스를 무력화시켜 버립니다. `any` 타입은 진짜 문제점을 감추며, 개발 경험을 나쁘게 하고, 타입 시스템의 신뢰도를 떨어트립니다. 최대한 사용을 피하도록 합시다.
