function logMessage(message: string | null) {
  if (message) {
    console.log(message.toUpperCase());
  } else {
    console.log(message);
  }
}

function restOfPath(path: string) {
  return path.split('/').slice(1).join('/');
}

// null Error
// function getElement(elOrId: string | HTMLElement | null): HTMLElement {
//   if (typeof elOrId === 'object') {
//     return elOrId;
//   } else if (elOrId === null) {
//     return document.body;
//   } else {
//     const el = document.getElementById(elOrId);
//     return el;
//   }
// }

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

let response = fetch('https://swapi.co/api/people/1');

// fetch 함수의 명세 입니다. lib.dom.d.ts
declare function fetch(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<Response>;

interface RequestInit {
  /** A BodyInit object or null to set request's body. */
  body?: BodyInit | null;
  // ...
}
