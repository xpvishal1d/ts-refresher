// let subs = 10

// let subs = '10M'

let subs: number | string = 10;

// avoiding the any

let orders = ["10", "20", "30"];

let currentorder: string | undefined;

for (let order of orders) {
  if (order === "20") {
    currentorder = order;
  }

  break;
}
