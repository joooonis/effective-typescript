interface Vector2D {
  x: number;
  y: number;
}

interface Vector3D {
  x: number;
  y: number;
  z: number;
}

function calcuateLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}

const v: Vector3D = { x: 3, y: 4, z: 5 };

// 구조적 타이핑으로 객체의 property를 정확하게 예상할 수 업으므로 에러가 발생한다.
function calcuateLengthL1(v: Vector3D) {
  let length = 0;
  for (const axis of Object.keys(v)) {
    const coord = v[axis];
    length += coord * coord;
  }
  return Math.sqrt(length);
}

calcuateLengthL1(v); // Error : Element implicitly has an 'any' type

// 객체의 속성값을 정확히 명시해주어야 한다.
function calcuateLengthL2(v: Vector3D) {
  return Math.sqrt(v.x ** 2 + v.y ** 2 + v.z ** 2);
}

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
