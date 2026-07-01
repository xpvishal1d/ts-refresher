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

const apply50: DiscountCalculater = (p) => p * 0.5

// apply50(5)

// With the object methods

interface TeaMachine {
    start(): void
    stop(): void
}

const machine: TeaMachine = {
    start(){
        console.log("start")
    },
    stop(){console.log("stop")}
}

// index signature

interface ChaiRating {
    [flavor: string]: number
}

const ratings:ChaiRating = {
    masala: 4.5,
    ginger: 5
}

// interface merging

interface User {
    name: string
}
interface User {
    age: number
}

const u : User = {
    name: "Hitesh",
    age: 42
}

// Extends
interface A { a: string}

interface B { B: string}

interface C extends A, B {
    c: string
}













