interface Person {
  firstName: string;
  last: string;
}

let person: Person = { firstName: 'Jane', last: 'Jacobs' };
let personAny: any = { first: 'Jane', last: 'Jacobs' };

const formatName = (p: Person) => `${p.last}, ${p.firstName}`;
const formatNameAny = (p: any) => `${p.last}, ${p.first}`;
