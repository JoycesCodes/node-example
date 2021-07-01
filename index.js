let lodash = require("lodash");
//this links the package into the this document

// let name = "joyce";
// console.log(name);

// name = lodash.upperFirst(name);

const fixNames = (caps) => {
  results = caps.toLowerCase();
  results = lodash.upperFirst(results);
  return results;
};

let name = "STEVE";

name = lodash.lowerCase(name);
console.log(name);

name = "steeve";
name = lodash.startCase(name);
console.log(name);
name = lodash.upperCase(name);
console.log(name);

console.log(fixNames(name));
