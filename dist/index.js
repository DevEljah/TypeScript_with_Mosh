"use strict";
/* let age: number = 24;
age = 20;

if (age < 50) age += 10;
console.log(age);
 */
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
// if (customer !== null) // but ...
//// Optional property access operator! => ("?") ////
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
// excute this code => //// tsc && node dist/index.js //
// the result is => "undefined"
//# sourceMappingURL=index.js.map