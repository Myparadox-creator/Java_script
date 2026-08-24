const name = "Aditya"
const repocount = 42

console.log(name + repocount + "Value");  //old

console.log(`hello my name is ${name} and my repo count is ${repocount}`);

//another way to declare string

const gamename = new String('Aditya-Ranjan')

//console.log(gamename[0]);
//console.log(gamename.__proto__);


//console.log(gamename.length);
//console.log(gamename.toUpperCase());
console.log(gamename.charAt(5));
console.log(gamename.indexOf('y'));



const newString = gamename.substring(0, 5)
console.log(newString);

const anotherString = gamename.slice(-4, 4)
console.log(anotherString);


const newString1 = "   Aditya   "
console.log(newString1);
console.log(newString1.trim());


const url = "https://www.aditya%20ranjan"
console.log(url.replace('%20', '-'));
console.log(url.includes('aditya'));

console.log(gamename.split('.'));