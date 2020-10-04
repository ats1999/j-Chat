const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passRegx=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
const textRegx = /^[a-zA-Z]*$/;
const numberRegx = /^[-+]?[0-9]+$/;

function validateEmail(email){
    let pattern = new String(email);
    if(pattern.match(mailformat))
        return true;
    return false;
}

function validatePassword(pass){
    let pattern = new String(pass);
    if(pattern.match(passRegx))
        return true;
    return false;
}

function textValidate(text){
    let pattern = new String(text);
    if(pattern.match(textRegx))
        return true;console.log("Invailid text")
    return false;
}

function numberValidate(number){
    let pattern = new Number(number)
    if(pattern.match(numberRegx))
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