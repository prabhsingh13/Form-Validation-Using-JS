let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let mailError = document.getElementById('mail-error');
let passwordError = document.getElementById('password-error');
let cpasswordError = document.getElementById('cpassword-error');
let submitError = document.getElementById('submit-error');

function validateName() {
    let name = document.getElementById('vName').value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validatePhone() {
    let phone = document.getElementById('vPhone').value;
    if (phone.length == 0) {
        phoneError.innerHTML = 'Enter a valid number';
        return false;
    }
    if (phone.length >= 11) {
        phoneError.innerHTML = 'Number must be 10 digits';
        return false;
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validateMail() {
    let mail = document.getElementById('vMail').value;
    if (mail.length == 0) {
        mailError.innerHTML = 'Email is required';
        return false;
    }
    mailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validatePass() {
    let pass = document.getElementById('vPass').value;
    if (pass.length == 0) {
        passwordError.innerHTML = 'Password is required';
        return false;
    }
    passwordError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validateCPass() {
    let pass = document.getElementById('vPass').value;
    let cPass = document.getElementById('vCPass').value;
    if (cPass !== pass) {
        cpasswordError.innerHTML = 'Password is not Same';
        return false;
    }
    cpasswordError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

// function validatePassword() {
//     let pass = document.getElementById('vPass').value;
//     let cPass = document.getElementById('vCPass').value;
//     if (pass.length == 0) {
//         passwordError.innerHTML = 'Password is required';
//         return false;
//     }
//     passwordError.innerHTML = '<i class="fas fa-check-circle"></i>';
//     return true;

//     if (cPass !== pass) {
//         cpasswordError.innerHTML = 'Password is not Same';
//         return false;
//     }
//     cpasswordError.innerHTML = '<i class="fas fa-check-circle"></i>';
//     return true;
// }

function validateForm() {
    if (!validateName() ||!validatePhone() ||!validateMail() ||!validatePass() ||!validateCPass) {
        submitError.innerHTML = 'Please Fix The Errors';
    }
    else{
        let name = document.getElementById('vName').value;
        let phone = document.getElementById('vPhone').value;
        let mail = document.getElementById('vMail').value;
        let vpass = document.getElementById('vCPass').value;

        
        localStorage.setItem("Name", name);
        localStorage.setItem("Phone", phone);
        localStorage.setItem("Mail", mail);
        localStorage.setItem("Password", vpass);
    }
}