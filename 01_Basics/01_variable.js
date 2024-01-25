const accountId = 566454
/*here constant cant be canged in any situation*/
var accountPassword = "vasishth"
let accountEmail = "Vasishth@gmail.com"
accountCity = "Maharashtra"
let accountState;
/* prefer not to use var
because of issue  in block scope and functional scope
instead of var use let always*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
