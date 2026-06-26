const chai = {
  name: "Masala Chai",
  price: 20,
  isHot: true,
};

// {
//     name: "string";
//     price: number;
//     isHot: boolean
// }

// declaring object types

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

// type base

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

// duck type

type Cup = { size: string };

let smallCup: Cup = {
  size: "200ml",
};

let bigCup = {
  size: "500ml",
  material: "steel",
};

smallCup = bigCup;

type Brew = {
  brewTime: number;
};

const coffee = {
  brewTime: 5,
  beans: "Arabica",
};

const chaiBrew: Brew = coffee;

type User = {
  username: string;
  password: string;
};

const u1: User = {
  username: "Chicode",
  password: "123",
};

// datatype sepration

type Item = { name: string; quantity: number };
type Address = { street: string; pin: number };

type Order = {
  id: string;
  items: Item[];
  address: Address;
};

//

type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};

const updateChai = (updates: Partial<Chai>) => {
  console.log("Updating chai with", updates);
};

updateChai({ price: 25 });
updateChai({});

type ChaiOrder = {
  name?: string;
  quantity?: number;
};

const placeOrder = (order: Required<ChaiOrder>) => {
  console.log(order);
};

placeOrder({
  name: "Meethi Chai",
  quantity: 1,
});

type Chaii = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};

type BasicChaiInfo = Pick<Chaii, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
  name: "Lemon tea",
  price: 20,
};

type ChaiiNew = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngredients: string[];
};

type PublicChai = Omit<Chaii, "secretIngredients">;


