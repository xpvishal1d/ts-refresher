# Started the Typescript refresher

## A 4.5 Hour video daily one hour

### Day 1

- Learned how ts works and why need type safty, developer toolin, and works more
  efficiently with AI

### Day 2

- Leared about insallation and dev run and build using tsc
- Also I tried with bun its works nice but have a problem if you want use
  `console.log()` and want to build using `tsc` you need to do some extra
  setting in `tsconfig.json`
- Same day on day 2 I learn some types like premittive and union.

### Day 3

- Day 3 hit me hard todays i learn lots like
  `any, unknown, never, typenarrowing and type assertion`

## I have continue to all other section in section 5 instead of making new folder

### Day 4 (File- inference.ts)

- Today I leared types works with classes but not always . when your type is
  this `type MaSalaChai = BaseChai & Extra` this will not work so use interfaces
  not types with classes . also revision about union, intersection, literal
  types.
- Also cover readonly and how to use .

## Objects Focused

### Day 5

- Lean about objects in typescript like
  <b>declaring object types</b>

```typescript
let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "Ginger Tea",
  price: 25,
  isHot: true,
};
```

- <b> Define type for reusable </b>
  <br>

```typescript
type Tea = {
  name: string;
  price: number;
  ingredient: string[];
};
const adarakChai: Tea = {
  name: "Adrak Chai",
  price: 25,
  ingredient: ["Adrak"],
};
```

- Learned about duck checking - Means all fiels required but extra fields
  allowed

- <b> datatype sepration </b> Can add a type in the other type.

### Day 6

_**This will be gone to long because I want complete it today**_

- <b> Leared today Required Utility- </b>
  - You can use required like this `Required<T>` to make optional value to
    required.

- <b>Pick utility</b>
  - Using pick utility you can pick valur from your type to other type like this

<br>

```typescript
type Chaii = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};

type BasicChaiInfo = Pick<Chaii, "name" | "price">;
```

- <b> Omit Utility </b>
  - Remove a property from a type and make new type in new type removed property
    will not added.

```typescript
type ChaiiNew = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngredients: string[];
};

type PublicChai = Omit<Chaii, "secretIngredients">;
```

_**So object is done next topic is Functions. In object you will use type in
type methos many times**_

## Functions Focused In Day 6

- There is not lots of things in function pass a value in params with type,
  write the return value , use void if function will be not returned anything.
- You can make a property optional using this `?` or give it a default value in
  function parameter like this `function orderChai(type: string = "Masala") {}`

<br>
<hr>
<br>

_**Next 3 Topic In TS**_

1. Array
2. Tuples
3. Enums

**Foundationals Data Stucture and rapidally usase**

- **Arrays**
  - Arrays Simple you can git in buils type like number or strinfd or can also
    give custom type like `type Chai = string` like this `Array<T>` or `T[]`

  **Exaple Code- Array In TS**

```typescript
const chaiflavores: string[] = ["Massala", "Adrak"];
const chaiPrice: number[] = [20, 54];

const rating: Array<number> = [4.5, 1];

// array of object

type Chai = {
  name: string;
  price: number;
};

const menu: Chai[] = [
  { name: "Massala Chai", price: 20 },
  {
    name: "Adarak chai",
    price: 60,
  },
];

menu.push({ name: "Hululu", price: 88 });
```

- Read Only Array Jsut add `readonly before define type it will convirted to a
  immutable array
  <br>
  - **For Exaple**

```typescript
// Read Only Array

const cities: readonly string[] = ["Jaipur", "Udaypur"];

// cities.push("Puna"); Read only array not allowed to modified
```

**Multi dirementional Array**

- You can write a multidimentional array like just write `T` time dimentiona
  size time array brackets `[][]`

**For Example**

```typescript
// multi dimentional array
const table: number[][] = [
  [1, 2, 1, 2, 1],
  [54, 54, 5, 432, 165, 1365, 62],
];
```

- **Tuples**
  - It is very easy you can add simple type usinf let and const , inside array
    you write the `T` like `let chaiTuple : [string, number]` and the n can use
    the varible `chaiTuple = ["Masala" , 25]`
  - Read only tuple its like immutable array just write `readonly` keyword
    before `T` like `const location: readonly [number, number] = [2.2, 2.6];`
  - Named Tuple is like you can write key value inside tuple array like const
    userInfo : [name: string, age: number] = ["Vishal", 27]

- **ENUMS**
  - So Enum help us to make sure no extra value allowed to write.
  - Syntaxt is very easy you can just use `enum` word to starting and without
    `=` just add `{}` and inside curly bracket add you enum in capital letter.
    It's a good practice to write enum in capital letter.

```typescript
// enum

enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}

const size = CupSize.MEDIUM;
```

- Auto increament - If you assign a enum to number and add more enum
  automatticly other have also number with increamented value

```typescript
// auto increament

enum Status {
  PENDING = 100,
  SERVED, // 101
  CANCELLED, //102
}
```

- ❌ Avoid to add multiple type enum like `string, number` in a single enum

```typescript
enum RandomEnum {
  id = 1,
  name = "Chai",
} // this is not good practice to make enum muktiple data type enum
```

- You can Also add value to a enum

```typescript
enum SpoonSugar {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}
const s = SpoonSugar.HIGH; // s = 3
```

---

Tuples have a problem when you write or define it will restrict to add only
known value but you can push some value TS will not give ypu any error
<br> **Like this**.

```typescript
let t: [String, number] = ["CHai", 25];

t.push("extra"); // this is uunexpected error
```

## Next OOP (Object Oriented Programming) In day 7

### Day 7

- Learned about classes how it works in TS private and public
  - Access Modifier
  - Protected - Only employee can access
  - You can make private variable or private methods using `#`
    - Make sure use `_` before private it is a good practice
  - You can use `readonly` utility in classes also
  - Can also make a create a get and set for `private`
    - `get` and `set` are inbuilt typescript utility.

  _**Also Covered**_
  1. Static -
     ```typescript
     class EkChai {
       static shopName = "Chaicode caffe";

       constructor(public flavor: string) {}
     }

     console.log(EkChai.shopName);
     ```
  2. Abstract -
     ```typescript
     abstract class Drink {
       abstract make(): void;
     }

     class MyChai extends Drink {
       make() {
         console.log("Chai bani");
       }
     }
     ```
  3. Composition -
     ```typescript
     class Heater {
       heat() {}
     }

     class ChaiMaker {
       constructor(private heater: Heater) {}

       make() {
         this.heater.heat;
       }
     }
     ```

## Next is most imp `interface` And `Generics`

### Most used thing Day 8

- **It is used for shapinfg the objects and functions**
- Leared about interface -> this is very similer to type you will use it like
  type but creation is little bit different like no need to use semi-collon.

  - It can work with simply objects and function you can shape your object,
    shape your functions and shape your objects methods
  ```typescript
  // simple working

  interface Chai {
    flavor: string;
    price: number;
    milk?: boolean;
  }

  const masalaChai: Chai = {
    flavor: "masala",
    price: 30,
  };

  // readonly

  interface Shop {
    readonly id: number;
    name: string;
  }

  const s: Shop = {
    id: 1,
    name: "chai code caffe",
  };

  // s.id = 12 --- NOT ALLOWED

  // With the function
  interface DiscountCalculater {
    (price: number): number;
  }

  const apply50: DiscountCalculater = (p) => p * 0.5;

  // apply50(5)

  // With the object methods

  interface TeaMachine {
    start(): void;
    stop(): void;
  }

  const machine: TeaMachine = {
    start() {
      console.log("start");
    },
    stop() {
      console.log("stop");
    },
  };
  ```

- **Index signature** Using this you can shape your object keys and values both
  -> Its helpfull like when you create your object you knew the keys type like
  its a flavor or its a animal name

  ```typescript
  // index signature

  interface ChaiRating {
    [flavor: string]: number;
  }

  const ratings: ChaiRating = {
    masala: 4.5,
    ginger: 5,
  };
  ```

- **Interface merging** When you create interfaces with same name it wi;; be
  merged. Like you have two interface named with `User` and used it in a
  object creation so need to define the both interce property.

  ```typescript
  // interface merging

  interface User {
    name: string;
  }
  interface User {
    age: number;
  }

  const u: User = {
    name: "Hitesh",
    age: 42,
  };
  ```

- **Interface extends** You can extends the two interface it will ask both
  interface property while using.
  ```typescript
  // Extends
  interface A {
    a: string;
  }

  interface B {
    B: string;
  }

  interface C extends A, B {
    c: string;
  }
  ```

***Generics***
- Its use for like interface for template but very different from interface you can name type and put a dynamic variable and when you will use it can pull data type in variable. 
  ```typescript
  function wrapInArray<T>(item: T): T[] {
    return [item];
  }

  wrapInArray("Masaala");

  wrapInArray("maasala");
  wrapInArray(44);
  wrapInArray({ flavor: "ginger" });

  function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b];
  }

  pair("maasala", 20);
  pair("ginger", { flavor: "ginger" });

  // genric interface

  interface Box<T> {
    content: T;
  }

  const numberBox: Box<number> = {
    content: 45,
  };

  // real world example

  interface ApiPromice<T> {
      status: number,
      data : T
  }

  const responce : ApiPromice<{flavor:string}> = {
      status: 200,
      data : {flavor: "maasala"}
  }
  ```

  ## type declaraton and web request

