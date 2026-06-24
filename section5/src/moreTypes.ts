// type assertion
let response : any = "42"
let numericle : number = (response as string).length

type Book = {
    name : string
}

let bookString = '{"name" : "Manjhari class-5"}'

let bookObject = JSON.parse(bookString) as Book

console.log(bookObject.name)

const inputElement = document.getElementById("username") as HTMLInputElement

// unknow & any

let value : any;

value= "chai"

value = [1,2,3]

value = 2.5

value.toUperCase() // any give run time erroer

// unknown

let newValue : unknown;

newValue= "chai"

newValue = [1,2,2]

newValue = 2.5

if(typeof newValue === "string"){
    newValue.toUpperCase()
}


try {
    
} catch (error) {
   if( error instanceof Error){
    console.log(error.message)
   }

   console.log("error", error)
}


const data :unknown = "chai aur code"

const strData: string = data as string


// never

type Role = "admin" | "user" | "superadmin"

function redirectbasedOnRole (role: Role): void{
    if(role === "admin") {
        console.log("Redicting to the admin dashboard")
        return
    }

    if (role=== "user"){
         console.log("Redicting to the user dashboard")
         return
    }

    role // 
}

function neverReturn() :never{
    while(true){}
}