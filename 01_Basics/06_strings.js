const name = "RadhaGopinath"
const repoCount =  "supreme personality of godhead"

//console.log(name + repoCount );

//the modern method of writing the code is :-

//console.log(`Hare Krishna,   ${name} is the ${repoCount}`);

const gameName =  new String('RadhaGopinath')

// console.log(gameName[10]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLowerCase());

// console.log(gameName.charAt(12));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,9)
console.log(newString);
 
const anotherString = gameName.slice(-12,4)
console.log(anotherString);

const url = "https://google.com/vasishth29&njurvnVasishth"

console.log(url.replace('&njurvn','__'));

console.log(url.includes('anuj'));

console.log(url.split('/'));

//notes:-
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String