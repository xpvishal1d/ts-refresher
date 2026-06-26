type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai(order: ChaiOrder) {}

function serveChai(order: ChaiOrder) {}


type TeaRacipe = {
    water: number;
    milk: number
}

class MasalaChai implements TeaRacipe {
    water = 10;
    milk=50
}



interface CupSize {
    
   size:  "small" | "large"
}

class Chai implements CupSize {
    size: "small" | "large" = "large";
}

// type Response = {
//     ok: true
// } | {ok : false}

// class MyRes implements Response {
//     ok: boolean= true;
// }

// revision - union ( literal types)

type TeaType = "masala" | "ginger" | "lemon"

function orderChai (t: TeaType): void {
    console.log(t)
}

// intersection
type BaseChai = {
    tealeaves: number
}

type Extra = {masala: number


}

type MaSalaChai = BaseChai & Extra

const cup : MaSalaChai = {
    tealeaves: 5,
    masala: 1
}
// optional value
type User = {
    username: string,
    bio?: string
}

const u1: User  = {
    username: "Hitesh"
}

// read only value
type Config = {
    readonly appName : string;
    version : number
}

const cfg: Config = {
    appName: "opus 1.1",
    version: 1.2
}

// cfg.appName="monika" - not allow


