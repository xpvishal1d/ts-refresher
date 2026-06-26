# Started the Typescript refresher
## A 4.5 Hour video daily one hour

### Day 1 
- Learned how ts works and why need type safty, developer toolin, and works more efficiently with AI

### Day 2
- Leared about insallation and dev run and build using tsc
- Also I tried with bun its works nice but have a problem if you want use `console.log()` and want to build using `tsc` you need to do some extra setting in `tsconfig.json`
- Same day on day 2 I learn some types like premittive and union.

### Day 3
- Day 3 hit me hard todays i learn lots like `any, unknown, never, typenarrowing and type assertion`

## I have continue to all other section in section 5 instead of making new folder 

### Day 4 (File- inference.ts)
- Today I leared types works with classes but not always . when your type is this `type MaSalaChai = BaseChai & Extra` this will not work so use interfaces not types with classes . also revision about union, intersection, literal types.
- Also cover readonly and how to use .

## Objects Focused
### Day 5
- Lean about objects in typescript like 
<b>declaring object types</b>
```typescript
let tea :{
    name: string;
    price: number;
    isHot: boolean
}

tea = {
    name: "Ginger Tea",
    price: 25,
    isHot: true
}
```
- <b> Define type for reusable </b>
<br>
```typescript
type Tea = {
    name : string;
    price: number;
    ingredient : string[]
}
const adarakChai : Tea ={
    name: "Adrak Chai",
    price: 25,
    ingredient: ["Adrak"]
}
```

- Learned about duck checking - Means all fiels required but extra fields allowed

- <b> datatype sepration </b> Can add a type in the other type.

### Day 6
***This will be gone to long because I want complete it today***

* <b> Leared today Required Utility- </b>
  * You can use required like this `Required<T>` to make optional value to required.

* <b>Pick utility</b>
    * Using pick utility you can pick valur from your type to other type like this 

<br>

```typescript
  type Chaii = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
    };

  type BasicChaiInfo = Pick<Chaii, "name" | "price" > 
```
* <b> Omit Utility </b>
  * Remove a property from a type and make new type in new type removed property will not added.
```typescript
type ChaiiNew = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngredients: string[];
};

type PublicChai = Omit<Chaii, "secretIngredients">;
```

***So object is done next topic is Functions. In object you will use type in type methos many times***

## Functions Focused

    


