const emailHelperText = "Inter correct Email";
let passwordHelperText ="You password must include.\n";
passwordHelperText+="A number [0-9]";
passwordHelperText+="A small letter [a-z]";
passwordHelperText+="A capital letter [A-Z]";
passwordHelperText+="A symbol [#,@,$,&]";

const textHelperText = "Text only";
const numberHelpertext = "Numbers only";

const helperText = {
    email:emailHelperText,
    password:passwordHelperText,
    text:textHelperText,
    number:numberHelpertext
}
module.exports = helperText;