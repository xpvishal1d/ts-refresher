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

// Read Only Array

const cities: readonly string[] = ["Jaipur", "Udaypur"];

// cities.push("Puna"); Read only array not allowed to modified

// multi dimentional array
const table: number[][] = [
  [1, 2, 1, 2, 1],
  [54, 54, 5, 432, 165, 1365, 62],
];

let chaiTuple: [string, number];
chaiTuple = ["Masala", 20];
// chaiTuple= [20, "Garm Massala"] orders matters this is not allowed keep string first

let userInfo: [string, number, boolean?];

userInfo = ["Vishal", 25]; // you can add true false because that is optional

// read onlt tuple
const location: readonly [number, number] = [2.2, 2.6];

const chaiItems : [name: string, price: number] = ["Masala", 25]

// enum

enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}

const size = CupSize.MEDIUM;

// auto increament

enum Status {
  PENDING = 100,
  SERVED, // 101
  CANCELLED, //102
}

enum ChaiType {
  MASALA = "masala",
  GINGER = "ginger",
}

function makeChaii(type: ChaiType) {
  console.log(`Making:  ${type}`);
}

makeChaii(ChaiType.GINGER);

enum RandomEnum {
  id = 1,
  name = "Chai",
} // this is not good practice to make enum muktiple data type enum

enum SpoonSugar {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}
const s = SpoonSugar.HIGH


let t : [String, number] = ["CHai", 25]

t.push("extra") // this is uunexpected error





