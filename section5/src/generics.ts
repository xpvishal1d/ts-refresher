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