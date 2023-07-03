# 편집기를 사용하여 타입 시스템 탐색하기

타입스크립트를 설치하면, 다음 두 가지를 실행할 수 있습니다.

- 타입스크립트 컴파일러(tsc) : ts를 js로 컴파일
- 단독으로 실행할 수 있는 타입스크립트 서버(tsserver) : ts 언어 서비스 제공

언어 서비스에는 타입추론, 함수 시그니처, 코드 자동 완성, 명세(speccifiaction) 검사, 검색, 리펙터링이 포함됩니다.

```typescript
function getElement(elOrId: string | HTMLElement | null): HTMLElement {
  if (typeof elOrId === 'object') {
    return elOrId; // Error
  } else if (elOrId === null) {
    return document.body;
  } else {
    const el = document.getElementById(elOrId); // Error
    return el;
  }
}
```

위 코드는 ts error를 반환합니다.

자바스크립트에서 `typeof null`은 `"object"`이므로, `elOrId`는 여전히 분기문 내에서 `null`일 가능성이 있습니다. 또한 `document.getElementById` 역시 `null`을 반환할 가능성이 있으므로 에러입니다.

```typescript
function getElementFixed(elOrId: string | HTMLElement | null): HTMLElement {
  if (typeof elOrId === 'object') {
    return elOrId === null ? document.body : elOrId;
  } else {
    const el = document.getElementById(elOrId);
    if (el === null) {
      return document.body;
    }
    return el;
  }
}
```

타입 선언은 처음에는 이해하기 어렵지만 타입스크립트가 무엇을 하는지, 어떻게 라이브러리가 모델링되었는지, 어떻게 오류를 찾아낼 지 살펴볼 수 있는 훌륭한 수단입니다.

```typescript
let response = fetch('https://swapi.co/api/people/1');

// 아래는 fetch 함수의 명세 입니다. lib.dom.d.ts
declare function fetch(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<Response>;

interface RequestInit {
  /** A BodyInit object or null to set request's body. */
  body?: BodyInit | null;
  // ...
}
```

# 요약

- 편집기에서 타입스크립트 언어 서비스를 적극 활용해야 합니다.
- 편집기를 사용하면 어떻게 타입 시스템이 동작하는지, 그리고 타입스크립트가 어떻게 타입을 추론하는지 개념을 잡을 수 있습니다.
- 타입스크립트가 동작을 어떻게 모델링 하는지 알기 위해 타입 선언 파일을 찾아보는 방법을 터득해야 합니다.
