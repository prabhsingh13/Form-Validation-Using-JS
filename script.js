let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let mailError = document.getElementById('mail-error');
let passwordError = document.getElementById('password-error');
let cpasswordError = document.getElementById('cpassword-error');
let submitError = document.getElementById('submit-error');

function validateName() {
    let name = document.getElementById('vName').value;

    if (!/^[a-zA-Z\s]+$/.test(name) || name.length < 2) {
        nameError.innerHTML = 'Write Full Name';
        return false;
    }

    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}


function validatePhone() {
    let phone = document.getElementById('vPhone').value;

    if (!/^\+\d{2,3}\d{10}$/.test(phone)) {
        if (!/^\+\d{1,3}/.test(phone)) {
            phoneError.innerHTML = 'Enter Country Code';
        } else if (/\+\d{2,3}\d{1,9}$/.test(phone)) {
            phoneError.innerHTML = 'Enter a valid 10 digit number';
        } else {
            phoneError.innerHTML = 'Enter a valid number';
        }
        return false;
    }

    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateMail() {
    let mail = document.getElementById('vMail').value;
    if (!/^\S+@\S+\.\S+$/.test(mail)) {
        mailError.innerHTML = 'Enter a valid email address';
        return false;
    }
    mailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatePass() {
    let pass = document.getElementById('vPass').value;

    let errors = [];

    if (pass.length < 8) {
        errors.push('Password must have at least 8 characters');
    }

    if (!/[a-z]/.test(pass)) {
        errors.push('Password must contain at least one lowercase letter');
    }

    if (!/[A-Z]/.test(pass)) {
        errors.push('Password must contain at least one uppercase letter');
    }

    if (!/[0-9]/.test(pass)) {
        errors.push('Password must contain at least one number');
    }

    if (!/[!@#$%^&*./,?'";:|]/.test(pass)) {
        errors.push('Password must contain at least one special character');
    }

    if (errors.length > 0) {
        passwordConditions.innerHTML = errors.join('<br>');
        passwordError.innerHTML = ''; // Clear the success message
        return false;
    }

    passwordConditions.innerHTML = ''; // Clear the error messages
    passwordError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}


function validateCPass() {
    let pass = document.getElementById('vPass').value;
    let cPass = document.getElementById('vCPass').value;
    if (cPass !== pass) {
        cpasswordError.innerHTML = 'Password is not the same';
        return false;
    }
    cpasswordError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateForm() {
    event.preventDefault();

    if (!validateName() || !validatePhone() || !validateMail() || !validatePass() || !validateCPass()) {
        submitError.innerHTML = 'Please fix the errors';
    } else {

        let name = document.getElementById('vName').value;
        let phone = document.getElementById('vPhone').value;
        let mail = document.getElementById('vMail').value;
        let vpass = document.getElementById('vCPass').value;

        localStorage.setItem("Name", name);
        localStorage.setItem("Phone", phone);
        localStorage.setItem("Mail", mail);
        localStorage.setItem("Password", vpass);

        resetForm();
    }
}

function resetForm() {
    // Replace 'formId' with the actual ID of your form
    document.getElementById('signUp').reset();
        
    // Assuming 'passwordError' is the element displaying the success message
    nameError.innerHTML = '';
    phoneError.innerHTML = '';
    mailError.innerHTML = '';
    passwordError.innerHTML = '';
    cpasswordError.innerHTML = '';

}