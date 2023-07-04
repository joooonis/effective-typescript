interface Person {
  name: string;
  age: number;
  address: string;
}

interface Lifespan {
  birth: Date;
  death: Date;
}

type PersonSpan = Person | Lifespan;

const person: PersonSpan = {
  name: 'joon',
  age: 12,
  address: 'abc',
  birth: new Date('1990-01-01'),
  death: new Date('2010-01-01'),
};

const person2: PersonSpan = {
  name: 'joon',
  age: 12,
  address: 'abc',
};

// K is never
type K = keyof (Person | Lifespan);

console.log(typeof person);

function getProperty(obj: any, key: keyof typeof obj) {
  return obj[key];
}

console.log(getProperty(person, 'age'));
