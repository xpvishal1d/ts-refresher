class Chai {
  flavor: string;
  // price:number;

  // constructor(flavor:string, price: number){
  //     this.flavor=flavor
  //     this.price= price
  // }

  constructor(flavor: string) {
    this.flavor = flavor;
    console.log(this);
  }
}

// const masalaChai = new Chai("ginger", 20)
const masalaChai = new Chai("ginger");

masalaChai.flavor = "masala";

// access modifier

class Chaia {
  public flavor: string = "Masala";
  private secretIngredients: string = "Cardamom";

  reveal() {
    return this.secretIngredients; // ok
  }
}

class Shop {
  protected shopName = "Chai corner";
}

class Branch extends Shop {
  gateName() {
    return this.shopName;
  }
}

class Walet {
  #balance = 100;

  getBalance() {
    return this.#balance;
  }
}

const w = new Walet();

w.getBalance();

const c = new Chaia();

// read only

class Cup {
  readonly capacity: number = 250;

  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

class ModernChai {
  private _sugar: number = 2;
  get suger() {
    return this._sugar;
  }

  set sugar(value: number) {
    if (value > 5) throw new Error("Too sweet");

    this._sugar = value;
  }
}

const c12 = new ModernChai();

c12.sugar = 3;

class EkChai {
  static shopName = "Chaicode caffe";

  constructor(public flavor: string) {}
}

console.log(EkChai.shopName);

abstract class Drink {
  abstract make(): void;
}

class MyChai extends Drink {
  make() {
    console.log("Chai bani");
  }
}

class Heater {
  heat() {}
}

class ChaiMaker {
  constructor(private heater: Heater) {}

  make() {
    this.heater.heat;
  }
}
