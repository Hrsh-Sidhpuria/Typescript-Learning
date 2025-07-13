"use strict";
//premative type ( number , string , boolean)
//arrays 
//tuples
//enum 
//any , unknown, void, null, undefined, never 
// type inference 
var a = 10;
// type annotation in variable
let n = 10;
//type annotation in func 
function demo(a, b) {
    let sum = a + b;
    return sum;
}
//enumeration
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role["USER"] = "user";
    Role["SUPER_ADMIN"] = "super_admin";
})(Role || (Role = {}));
function printuser(obj) {
    console.log("name is " + obj.name + " and age is " + obj.age);
}
// correct 
printuser({ name: "harsh", age: 22 });
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 1] = "MALE";
    Gender[Gender["FEMALE"] = 2] = "FEMALE";
    Gender[Gender["OTHER"] = 3] = "OTHER";
})(Gender || (Gender = {}));
let emp1 = {
    name: "harsh",
    email: "h@h.gamil.com",
    age: 22,
    gender: Gender.MALE
};
let gender;
if (emp1.gender == 1) {
    gender = "MALE";
}
else if (emp1.gender == 2) {
    gender = "FEMALE";
}
else {
    gender = "OTHER";
}
console.log(gender);
let user = {
    name: "alpha",
    age: 21,
    email: "alpha@a.com",
    password: "passowrd"
};
let admin = {
    name: "admin1",
    age: 22,
    email: "harsh@h.com",
    password: "admin",
    isAdmin: true
};
let a1 = 20;
let a2 = "harsh";
//both the above a1 and a2 are correct. 
//class and objects
class Device {
    constructor() {
        this.name = "dell";
        this.price = 50000;
        this.category = "laptop";
    }
}
let d1 = new Device();
let d2 = new Device();
// using constructor 
//class and objects
class Device1 {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
        console.log(name + " " + price + " " + category);
    }
}
let d_1 = new Device1("dell", 20000, "laptop");
let d_2 = new Device1("lenovo", 3000, "charger");
// using this 
class c1 {
    constructor() {
        this.name1 = "harsh";
    }
    changename() {
        this.name1 = "alpha";
    }
}
