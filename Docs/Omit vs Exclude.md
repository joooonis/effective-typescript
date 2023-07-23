# Exclude 는 유니온 타입을 만들 때. Omit 객체형태의 타입을 만들때 사용합니다.

`Exclude`와 `Omit`은 TypeScript에서 서로 다른 유틸리티 타입입니다.

1. `Exclude`:
   `Exclude<T, U>`는 `T` 타입에서 `U` 타입에 할당 가능한 속성을 제거하여 새로운 타입을 생성합니다. 즉, `T`와 `U`의 교집합에 해당하는 타입을 제거하는 역할을 합니다.

예를 들어, 다음과 같은 타입이 있다고 가정해봅시다:

```typescript
type A = 'a' | 'b' | 'c';
type B = 'a' | 'b';
```

그리고 우리가 `Exclude`를 사용하여 타입을 생성하면:

```typescript
type Result = Exclude<A, B>; // Result는 'c' 타입이 됩니다.
```

`Exclude<A, B>`는 `A` 타입에서 `B` 타입에 할당 가능한 `'a'`와 `'b'`를 제거하여 `'c'`만을 가진 타입을 생성합니다.

2. `Omit`:
   `Omit<T, K>`는 `T` 타입에서 `K` 속성을 제거하여 새로운 타입을 생성합니다. 즉, `T` 타입의 특정 속성을 명시적으로 제거하는 역할을 합니다.

예를 들어, 다음과 같은 타입이 있다고 가정해봅시다:

```typescript
interface Person {
  name: string;
  age: number;
  address: string;
}
```

그리고 우리가 `Omit`을 사용하여 타입을 생성하면:

```typescript
type PersonWithoutAge = Omit<Person, 'age'>;
```

`PersonWithoutAge` 타입은 `Person` 타입에서 `age` 속성을 제거한 새로운 타입이 됩니다.

요약하면, `Exclude`는 두 개의 타입 간에 교집합에 해당하는 부분을 제거하고, `Omit`은 하나의 타입에서 명시적으로 특정 속성을 제거합니다.
