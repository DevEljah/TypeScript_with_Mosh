/* let age: number = 24;
age = 20;

if (age < 50) age += 10;
console.log(age);
 */

//////////////////////////////////////////////////////
////////////  Section 2  FUNAMENTALS  ////////////////
//////////////////////////////////////////////////////

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
/* let sales = 123_456_789; // <== let sales: number = 123_456_789;
let course = "TypeScript"; // <== let course: string = "TypeScript";
let is_puplished = true; // <== let is_puplished: boolean = true;
let level; // TS assumes it is type is "any" */
// ==>
/* level = 1;
level = "a"; // don't use is like this! */

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
/* function render(doc) {
    console.log(doc);  
} */
// ==>
/* function render(doc: any) {
  console.log(doc);
} */
// ==> or // "noImplicitAny": true, // turn it to false in tsconfig.json

//////////////////////////////////////////////////////
/////////////////////      Arrays      ///////////////
//////////////////////////////////////////////////////
// let numbers = [1, 2, "3"]; //js
// let numbers: number [] = [1, 2, "3"]; //TS error at compile-time!
// let numbers = [1, 2, "3"]; //js
// let numbers: number[] = [1, 2, 3]; //TS error fix!
// but in this part of code it isnt needed to annotate it "number[]"
// bc every array items is number! so .. ==>
// let numbers = [1, 2, 3]; //TS no annotatation!
// but if arry is emtpy;
// let numbers = []; //TS its items is set to "any" wich should be avoided!

//////////////////////////////////////////////////////
/////////////////////      Tuples      ///////////////
//////////////////////////////////////////////////////
// is kinda of array where eeach elments has its particular type!
// its ofen useble when working with a pair of values
// e.g; ==> for each users // id : 1 / name: Dev
// let user: [number, string] = [1, "Dev"]; // if 3 elements added => error!
// but;
// let user: [number, string, boolean] = [1, "Dev", true];
// let user: [number, string] = [1, "Dev"];
// user[1]. or user[0]. // get code completion access TS benefits
// if Tuples compiled the results would be a regular js array // tsc!

//////////////////////////////////////////////////////
/////////////////////      Enums      ////////////////
//////////////////////////////////////////////////////

// const small = 1;
// const medium = 2;
// const big = 3; ////// one way,
// // another way;

/* //PascalCase!
enum Size {
  Small = 0,
  Medium,
  Large,
} */ // by default they have set values! // but is changeble also to strings!
/* enum Size {
  Small = "s",
  Medium = "m",
  Large = "l",
} */
///////////////////////////////
/* enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize); */
//// terminal ==> tsc ==> node dist/indexjs
//// a trick! if "const" then the tsc compiled code be different ;
/* const enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize); */

//////////////////////////////////////////////////////
/////////////////////    Functions    ////////////////
//////////////////////////////////////////////////////

/* function calculateTax (income: number) {
//////////////////////////////////////////////////////
} */ // at this if mouse over to the function the type of return value is "void"

//////////////////////////////////////////////////////
/* function calculateTax(income: number) {
  return 0;
} */ //now the function returns a type of value "number"(the type of return value)

//////////////////////////////////////////////////////
/* function calculateTax(income: number): number {
  // number or "void or ..."
  return 0;
} // annotate the return type! */

//////////////////////////////////////////////////////
/* function calculateTax(income: number): number {
  if (income < 50_000) return income * 1.2;
  // if its true the function will return a "number" but
  // otherweise js will return "uindefined" so 
  // thats missing in this function 
} */

//////////////////////////////////////////////////////
/* function calculateTax(income: number): number {
  if (income < 50_000) return income * 1.2;
  // if its true the function will return a "number" but
  // otherweise js will return "uindefined" so
  // thats missing in this function
} */

//////////////////////////////////////////////////////
/* function calculateTax(income: number) {
  if (income < 50_000) return income * 1.2;
  // but now the function is buggy!
  // but the good news in ts confing file theres another
  // to turn on to detecte it (noImplicitReturns)
} */

//////////////////////////////////////////////////////
/* function calculateTax(income: number): number {
  if (income < 50_000) return income * 1.2;
  return income * 1.3;
} */

//////////////////////////////////////////////////////
/* function calculateTax(income: number, taxYear: number): number {
  let x; // "noUnusedLocals" is on!
  if (taxYear < 2023) return income * 1.2;
  return income * 1.3;
}
calculateTax(10_000, 2023); */

//////////////////////////////////////////////////////
/* function calculateTax(income: number, taxYear?: number): number {
  if (taxYear < 2023) return income * 1.2;
  // if dont suply the "taxYear" by default "undefined" will be used
  // and we cant compare "undefined" with "2023"
  // so we hv 2 options   1- old js trick  2- default value
  return income * 1.3;
}
calculateTax(10_000); */

//////////////////////////////////////////////////////
/* function calculateTax(income: number, taxYear?: number): number {
  if ((taxYear || 2023) < 2023) return income * 1.2;
  // 1- old js trick
  return income * 1.3;
}
calculateTax(10_000); */

//////////////////////////////////////////////////////
/* function calculateTax(income: number, taxYear = 2023): number {
  if (taxYear < 2023) return income * 1.2;
  // 2 - default value
  return income * 1.3;
}
calculateTax(10_000); */

//////////////////////////////////////////////////////
/////////////////////    Objects    //////////////////
//////////////////////////////////////////////////////

/* let employee = { id: 1 };
employee.name = "Mosh"; // <== this is valid in js! */

/* let employee: { // to solve this error theres 2 option!
  id: number;
  name: string;
} = { id: 1 };
employee.name = "Mosh";
 */

//// option 1 ////
/* let employee: {
  id: number;
  name: string;
} = { id: 1, name: "" };
employee.name = "Mosh"; */

//// option 2 ////
/* let employee: {
  id: number;
  name?: string;
} = { id: 1 };
employee.name = "Mosh"; */ // but option to is a valid but it good avoid bc
///////////////////////// every employee musst have a name!
//==> ==>
/* let employee: {
  readonly id: number; // it is set to "readonly" bc you dont wanna change id!
  name: string;
} = { id: 1, name: "Dev" }; */
// employee.id = 0; // this is an error bc "id" is set to "readonly"!

///////// defining a function/method in this object //////////
/* let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void; // method!
} = {
  id: 1,
  name: "Dev",
  retire: (date: Date) => {
    console.log(date);
  },
}; */
// ==>

//////////////////////////////////////////////////////
////////////  Section 3  ADVANCED TYPES  /////////////
//////////////////////////////////////////////////////

//////////////////////////////////////////////////////
////////////////  Type Aliases   /////////////////////
//////////////////////////////////////////////////////

// ==>
//// Dry principle (dont repeat yourselsf!) //////
/* type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void; // method!
};

let employee: Employee = {
  // annotated with new type "Employee"
  id: 1,
  name: "Dev",
  retire: (date: Date) => {
    console.log(date);
  },
}; */

//////////////////////////////////////////////////////
////////////////  Union Types  ///////////////////////
//////////////////////////////////////////////////////

// woth "Union Types" we can give a variable or a function-
// parameter more then one type.

function kgToLbs(weight: number | string): number {
  ///////////////////// "number | string" => "Union Types"!
  // Narrowing //
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}
kgToLbs(10);
kgToLbs("10kg");

//////////////////////////////////////////////////////
///////////////   Intersection Types   ///////////////
//////////////////////////////////////////////////////
