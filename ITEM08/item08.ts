import { Person } from './../ITEM05/item05';
class Cylinder {
  radius = 1;
  height = 1;
}

function calculateVolume(shape: Cylinder) {
  // ...
}

export interface Person {
  name: string;
  age: number;
}

// const p: Person = {
//   name: 'John',
//   age: 42,
// };

function email(p: Person, subject: string, body: string): void {
  // ...
}

type T1 = typeof p; // 타입은 Person
type T2 = typeof email; // 타입은 (p: Person, subject: string, body: string) => void

const v1 = typeof p; // 값은 object
const v2 = typeof email; // 값은 function

function emailError({ person: Person, subject: string, body: string }) {
  // ...
  // error : Binding element 'Person' implicitly has an 'any' type.ts(7031)
  // error : Duplicate identifier 'string'.ts(2300)
}

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
