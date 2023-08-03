let emailInput = document.getElementById("emailInput");
let passInput = document.getElementById("passInput");
let loginBtn = document.getElementById("loginBtn");
let nameInput = document.getElementById("nameInput");
let signUpBtn = document.getElementById("signUpBtn");
let existAlert = document.getElementById("existAlert");
let successAlert = document.getElementById("successAlert");
let requiredAlert = document.getElementById("requiredAlert");
let userName = document.getElementById("userName");
let incorrectAlert = document.getElementById("incorrectAlert");

let loginList = [];
if (localStorage.getItem("objUser") != null) {
    loginList = JSON.parse(localStorage.getItem("objUser"));
}


signUpBtn?.addEventListener("click", function () {



    let index = loginList.findIndex((el) => {
        return el.name == nameInput.value && el.email == emailInput.value && el.password == passInput.value;
    })
    if (isNameValid() == true && isEmailValid() == true && isPassValid() == true) {
        if (index == -1) {
            let objUser = {
                name: nameInput.value,
                email: emailInput.value,
                password: passInput.value
            }
            loginList.push(objUser);
            localStorage.setItem("objUser", JSON.stringify(loginList));
            document.getElementById("successAlert").style.display = "block";
            window.location.href = "signin.html"
        } 
        else {
            document.getElementById("existAlert").style.display = "block";
        }
    } else if (isNameValid() == false || isEmailValid() == false || isPassValid() == false) {
        document.getElementById("incorrectAlert").style.display = "block";

    }
    

})
loginBtn?.addEventListener("click", function () {


    let currentUser = loginList.find((el) => {
        return el.email == emailInput.value && el.password == passInput.value;
    })
    if (isEmailValid() == true && isPassValid() == true) {
        localStorage.setItem("currentUser", currentUser.name);
        window.location.href = "wellcome.html";

    } else if (currentUser == undefined) {
        document.getElementById("incorrectAlert").style.display = "block";
    }

    else if (currentUser == null) {
        document.getElementById("requiredAlert").style.display = "block";
    }

})

    
















let nameRegex = /^[A-Z][a-z]{2,10}$/;
function isNameValid() {
    if (nameRegex.test(nameInput.value)) {
        return true;
    }
    else {
        return false;
    }
}
let emailRegex = /^\w{3,20}@[a-zA-Z_-]{3,15}\.[a-zA-Z]{2,4}$/;
function isEmailValid() {
    if (emailRegex.test(emailInput.value)) {
        return true;
    }
    else {
        return false;
    }
}
let passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
function isPassValid() {
    if (passRegex.test(passInput.value)) {
        return true;
    }
    else {
        return false;
    }
}



