/* let age: number = 24;
age = 20;

if (age < 50) age += 10;
console.log(age);
 */

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
let user: [number, string] = [1, "Dev"];
// user[1]. or user[0]. // get code completion access TS benefits
// if Tuples compiled the results would be a regular js array // tsc!

//////////////////////////////////////////////////////
/////////////////////      Enums      ////////////////
//////////////////////////////////////////////////////
