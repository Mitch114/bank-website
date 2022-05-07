const login = document.getElementById('theLogin');
const email = document.getElementById('email');
const password = document.getElementById('password');
const verify = document.getElementById('verifyLogin');

var hasErrors = false;

login.addEventListener('submit', e => {
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();

    let orignal = localStorage.getItem("TitanUserInformation");

    let obj = JSON.parse(orignal);
    let loginEmail = obj.userEmail;
    let loginPassword = obj.userPassword;

    loginValidation(emailValue, passwordValue, loginEmail, loginPassword);
    if(hasErrors) {
        e.preventDefault();
    } else {
        alert("Login Succesful.");
        accountLink(verify);
    }
});

function loginValidation(emailValue, passwordValue, loginEmail, loginPassword) {
    hasErrors = false;

    if(loginEmail != emailValue) {
        setErrorFor(email, 'Emails do not match');
    } else {
        setSuccessFor(email)
    }
    
    if (loginPassword != passwordValue){
        setErrorFor(password, 'Passwords do not match');
    } else {
        setSuccessFor(password);
    }
}

function setErrorFor(input, message) {
    hasErrors = true;
    const formControl = input.parentElement;
    const errorDisplay = formControl.querySelector('.error');

    errorDisplay.innerText = message;

    errorDisplay.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    const errorDisplay = formControl.querySelector('.error');
    errorDisplay.innerText = '';
}

function accountLink(input) {
    const control = input.parentElement;
    const displayNav = control.querySelector('.verifyLogin');
    displayNav.className = 'sidebar verifyLogin';
}

var resetPwdButton = document.getElementById("resetpwd");

if(null !== resetPwdButton) {
    resetPwdButton.addEventListener('click', resetPassword);
}

function resetPassword() {
    window.location.href = "reset.html";
}