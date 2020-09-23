const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passRegx=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
const textRegx = /^[A-Za-z]+$/;
const numberRegx = /^[-+]?[0-9]+$/;

function validateEmail(email){
    if(email.match(mailformat))
        return true;
    return false;
}

function validatePassword(pass){
    if(pass.match(passRegx))
        return true;
    return false;
}

function textValidate(text){
    if(text.match(textRegx))
        return true;
    return false;
}

function numberValidate(number){
    if(number.match(numberRegx))
        return true;
    return false;
}
const validate = {
    email:validateEmail,
    password:validatePassword,
    text:textValidate,
    number:numberValidate
}

module.exports = validate;