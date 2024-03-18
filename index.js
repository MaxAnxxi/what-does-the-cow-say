const meAndI = require('./information');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text: `I followed ${meAndI.myName} and I come from ${meAndI.myCampus} `,
}))