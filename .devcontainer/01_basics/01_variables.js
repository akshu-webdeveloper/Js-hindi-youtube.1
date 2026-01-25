const accountId = 12345
let accountEmail = "akanksha@123"
var accountPassword = "5645"
accountCity = "Banaras"

//accountId = 2 // not allowed

accountEmail = "hv@23423"
accountPassword = "5656565"
accountCity = "Delhi"
let accountState;


console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
/*
prefer not to use var
because of issue in block scope and functional scope
*/