function loginData(username, email, passward, login) {

    let obj = {};

    obj.username = username
    obj.email = email
    obj.passward = passward
    obj.login = function () {
        console.log(`user ${username} logged in`);
    }

    
    return obj;


}

let loginData1 = loginData("pillu","pilu@gmail.com", "pillu@123",);
let loginData2 = loginData("susheel", "susheel@gmail.com", "susheel@123");

console.log(loginData1,loginData2);
