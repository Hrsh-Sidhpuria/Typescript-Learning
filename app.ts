//premative type ( number , string , boolean)
//arrays 
//tuples
//enum 
//any , unknown, void, null, undefined, never 


// type inference 
var a = 10;

// type annotation in variable
let n : number = 10;

//type annotation in func 
function demo (a:number , b:number ) : number {
    let sum : number = a+b;
    return sum;
}

//enumeration
enum Role {
    ADMIN = "admin",
    USER = "user",
    SUPER_ADMIN ="super_admin"
} 
 
//using interface 
interface user {
    name : string,
    age : number
}
 
function printuser (obj:user)
{
    console.log("name is "+ obj.name + " and age is " + obj.age)
}

// correct 
printuser({name : "harsh" , age : 22})

// Wrong 
//printuser({name : "harsh" , age : "22"})