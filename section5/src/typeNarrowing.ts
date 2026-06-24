type ChaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    typeof obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serveOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai with ${item.sugar}`;
  }

  return `serving custom chai : ${item}`;
}

type MsalaChai = { type: "masala"; spiceLevel: number };
type GingerChai = { type: "ginger"; amount: number };
type ElaichiChai = { type: "elaichi"; aroma: number };

type Chai = MsalaChai | GingerChai | ElaichiChai;

function makeChai(order: Chai) {
  switch (order.type) {
    case "masala":
      return "Masala Chai";
      break;

    case "elaichi":
      return "Elaichi Chai";
      break;

    case "ginger":
      return "Ginger chai";
      break;
  }
}

function brew ( order : MsalaChai | GingerChai){
    if("spiceLevel" in order){
        return "Servig masala tea"
    }
        
}

function isStringArray(arr: unknown): arr is string[] {
  return Array.isArray(arr) && arr.every(item => typeof item === "string");
}


