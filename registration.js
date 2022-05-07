var regButton = document.getElementById("regbtn");
if(null !== regButton) {
    regButton.addEventListener('click', submit);
}
function submit() {
    document.getElementById("registerForm", submit);
}


var resetButton = document.getElementById("resbtn");

if(null !== resetButton) {
    resetButton.addEventListener('click', reset);
}

function reset(e) {
    e.preventDefault();
    document.getElementById("registerForm").reset();
}

const registerForm = document.getElementById('registerForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

var hasErrors = false;

registerForm.addEventListener('submit', e=> {
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    var password2Value = password2.value.trim();

    validateForm(emailValue, passwordValue, password2Value);
    if (hasErrors) {
        e.preventDefault();
    } else {
        let user = {
            "userEmail": emailValue,
            "userPassword": password2Value
        };
        localStorage.setItem('TitanUserInformation', JSON.stringify(user));
    }
})

function validateForm(emailValue, passwordValue, password2Value) {
    hasErrors = false;
    console.table(emailValue, passwordValue, password2Value);

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank')
    } else if (!isValidEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email')
    } else { 
        setSuccessFor(email);
    }

    if (passwordValue === ''){
        setErrorFor(password, 'Required');
    } else {
        setSuccessFor(password)
    }

    if(password2Value === ''){
        setErrorFor(password2, 'Required');
    } else if (passwordValue != password2Value){
        setErrorFor(password2, 'Passwords do not match');
    } else{
        setSuccessFor(password2);
    }
}

//validation
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//error message
function setErrorFor(input, message){
    hasErrors = true;
    const formControl = input.parentElement;
    const errorDisplay = formControl.querySelector('.error');

    errorDisplay.innerText = message;

    errorDisplay.className = 'form-control error';
}

//sucessful function
function setSuccessFor(input) {
    const formControl = input.parentElement;
    const errorDisplay = formControl.querySelector('.error');
    errorDisplay.innerText = '';
}