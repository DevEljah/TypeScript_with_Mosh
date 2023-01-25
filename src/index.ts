/* let age: number = 24;
age = 20;

if (age < 50) age += 10;
console.log(age);
 */

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
let sales = 123_456_789; // <== let sales: number = 123_456_789;
let course = "TypeScript"; // <== let course: string = "TypeScript";
let is_puplished = true; // <== let is_puplished: boolean = true;
let level; // TS assumes it is type is "any"
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

