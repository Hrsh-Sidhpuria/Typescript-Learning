//premative type ( number , string , boolean)
//arrays 
//tuples
//enum 
//any , unknown, void, null, undefined, never 


/*

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

interface emp {

    name :string,
    email:string,
    age: number ,
    gender? : number

    //gender? : number --> this means that the gender can be optional in this interface.
}
enum Gender {
 MALE = 1,
 FEMALE = 2,
 OTHER = 3
}

let emp1 : emp = {
    name : "harsh",
    email:"h@h.gamil.com",
    age :22,
    gender : Gender.MALE
}
let gender : string
if(emp1.gender == 1)
{
gender = "MALE"
}else if(emp1.gender == 2)
    {
        gender= "FEMALE" 
    } else {
        gender = "OTHER"
    }
 console.log(gender);

 //extending interface 

 // we make one interface USER 
 interface USER {
    name : string;
    email:string ;
    password :string;
    age:number;
 }

 //now we make ADMIN interface which extend the USER interface 

 interface ADMIN extends USER {
    isAdmin : boolean
 }

 let user : USER = {
    name:"alpha",
    age:21,
    email:"alpha@a.com",
    password:"passowrd"
 }

 let admin : ADMIN = {
    name:"admin1",
    age:22,
    email:"harsh@h.com",
    password:"admin",
    isAdmin:true
 }
 //here admin object extends the property of the user , means all the property of the user like name, email etc we can use it in the admin obj.
 

interface abab {
    name:string;
}interface abab {
    email:string;
}
// in the above example both the interface have same name aba and when we use abab then both interface gets merge and we have to use name and email both property.

//type aliase
//giving custom name to the type(s)

type alphanumeric = string | number ;

let a1 : alphanumeric = 20;
let a2 : alphanumeric = "harsh";

//both the above a1 and a2 are correct. 

//class and objects

class Device {
    name = "dell";
    price = 50000;
    category = "laptop";
}

let d1 = new Device();
let d2 = new Device();

// using constructor 

//class and objects

class Device1 {
       
    constructor(public name: string , public price : number , public  category : string  ){
        console.log(name+" "+price+" " +category);
    }
}

let d_1 = new Device1("dell",20000,"laptop");
let d_2 = new Device1("lenovo", 3000,"charger");

// using this 

class c1 {
    name1 = "harsh";

    changename (){
        this.name1 = "alpha";
    }
}


// super in constructor 

class cl1 {
    constructor(public name : string){

    }
}
class cl2 extends cl1{
    constructor(name : string)
    {
        super(name);
        // this super will call his parent class constructor and pass the name as a parameter to the parent class constructor.
    }
}

//access modifier 
//public, private, protected
// by default all the members are public if no modifier is mentioned.

//making the property readonly 
class company_user{
    constructor( public readonly name : string) // here the name is readonly so we cannot change the name ince we inatialized it .    {
          {  console.log(name);
    }
}



// getter setter

class USER1{
    constructor(public name : string , public email : string){}

    //getter
    getName (): string
    {
        return this.name;
    }
    getEmail():string{
        return this.email;
    }

    //setter
    setName(value: string  ) : void{
        this.name = value;
    }
    setEmail(value: string  ) : void{
        this.email = value;
    }

    // this above getter and setter will act like method not act like properties.
}

let u1= new USER1("harsh", "h@h.com");
console.log(u1.getName());

u1.setEmail("harsh@gmail.com");

*/

// getter and setter in which it will work like a properties 
class USER2{
    constructor(public _name : string , public email : string){}

    //getter
    get name () : string
    {
        return this._name;
    }

    //setter
   set name (value : string)
   {
    this._name = value
   }
   

    // this above getter and setter will act like method not act like properties.
}

let u2= new USER2("harsh", "h@h.com");
console.log(u2.name);

u2.name = "harsh112";

// callback Functions

// function abcd ( a:string,  cal: (value:string)=>void)
// {

// }

// abcd("harsh",(value:string)=>{console.log(value);
// })

function abcd ( a:string,  cal: (value:string)=>void)
{

    cal("hey");
}

abcd("harsh",(value:string)=>{console.log(value);
})

// optional and default parameter in functions

function oppara (name : string , email:string, age?:number){
//in this function the age? is a optional parameter. here ? shows that this is optional parameter.
}

function defaultpara(name:string = "user", age : number= 18 )
{
    // in this the name and age is the default parameter. in name if the name is being passed as parameter then it will take that name otherwise it will take the default name which is user.
}

//rest parameter 

function sum (...num : number[]) : number
{
// we can pass multple argument to the parameter and collect it at once using ...args parameter. this is used when we want to pass parameter at runtime or we want to pass any number of parameter.
let n :number = num.length;
let sum : number = 0;
while(n>0)
{
    sum - sum+ num[n];
}
return sum;

}

let ans : number = sum(1,2,3,4,5,2,3,4,2,3);

// spread operator use 
let arr = [1,2,3];
let arr1 = [...arr,4,5,6];

//Generics

function ab<T>(val : T)
{

}

ab<string>("harsh");
ab<boolean>(true);

//Generic Interface

interface user<T>{
    name : string,
    email:string,
    key:T
}

function abcd(obj: user<string>){
}
 
abcd({name:"harsh",email:"h@h.com",key:"user112"})

function dcba(obj:user<number>){

}

dcba({name:"harsh",email:"e@e.com",key:32})

class genericDemo<T>{
    constructor(val : T){}
}

let c1 = new genericDemo<string>("harsh");
let c2 = new genericDemo<number >(22);

//Type Assertion

let a: any = "test";

(a as string).indexOf("e"); 


// type casting

let num = Number(12);
let num1 = Number("127");
let str = String("testing type casting");

console.log(num, str);

//NON null assertion operator 

let d : null| undefined|string = "test1";
d!.charAt(3);

//here d! tell that the value of d is not null and undefined. there should exist some value of d for super.             

// type guard and typescript utility types

// type narrowing 

function demo( val : number|string)
{

    if(typeof val === "string"){

        console.log(val , " is a string so we can perform string operations here.");
        val.toUpperCase();
    }
    else if(typeof val === "number"){

        console.log(val , " is a number so we can perform number operations here.");
        val.toString();
        
    }
    else{}
}

demo(12);
demo("test2")

