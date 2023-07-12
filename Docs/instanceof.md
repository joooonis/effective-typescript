# instanceof

`instanceof`는 JavaScript에서 사용되는 연산자입니다. 이 연산자는 객체가 특정 클래스 또는 생성자 함수의 인스턴스인지 여부를 확인하는 데 사용됩니다.

`instanceof` 연산자는 다음과 같은 구문을 갖습니다:

```javascript
object instanceof constructor;
```

여기서 `object`는 확인하려는 객체이고, `constructor`는 해당 객체와 비교할 클래스 또는 생성자 함수입니다.

`instanceof` 연산자는 두 가지 경우에 대해 `true`를 반환합니다:

1. 객체가 주어진 클래스의 인스턴스인 경우.
2. 객체가 주어진 클래스를 상속하는 클래스의 인스턴스인 경우.

예를 들어, 다음과 같은 클래스가 있다고 가정해보겠습니다:

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}
```

이제 `Person` 클래스의 인스턴스를 만들고 `instanceof` 연산자를 사용하여 확인해보겠습니다:

```javascript
const person = new Person('John');
console.log(person instanceof Person); // true
```

위의 코드에서 `person instanceof Person`은 `person` 객체가 `Person` 클래스의 인스턴스인지를 확인합니다. 따라서 `true`가 반환됩니다.

또 다른 예를 살펴보겠습니다. 다음과 같이 클래스를 상속하는 `Student` 클래스가 있다고 가정해봅시다:

```javascript
class Student extends Person {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }
}
```

이제 `Student` 클래스의 인스턴스를 만들어서 `instanceof` 연산자로 확인해보겠습니다:

```javascript
const student = new Student('Jane', 10);
console.log(student instanceof Person); // true
```

위의 코드에서 `student` 객체는 `Person` 클래스를 상속하는 `Student` 클래스의 인스턴스이므로, `student instanceof Person`은 `true`를 반환합니다.

`instanceof` 연산자는 객체의 상속 관계를 확인하는 데 유용하며, 객체의 유형을 동적으로 확인하는 데 사용될 수 있습니다. 그러나 주의해야 할 점은 `instanceof`는 원시 타입에는 사용할 수 없으며, 오직 객체에 대해서만 사용할 수 있다는 것입니다.
