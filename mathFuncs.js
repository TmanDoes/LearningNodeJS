const {pi,pow} = require('mathjs');

function Add2Num(num1,num2){
    return num1 + num2;
}

function Subtract2Num(num1,num2){
    return num1 - num2;   
}

function Multi2Num(num1,num2){
    return num1 * num2;
}

function Divi2num(num1,num2){
    return num1 / num2;
}

function Circumfrence(diameter){
    return diameter * pi; //3.14159265;
}

function CircumfrenceGivenRadius(radius){
    return Circumfrence(pow(radius,2));
}
module.exports = {
    Add2Num,
    Subtract2Num,
    Multi2Num,
    Divi2num,
    Circumfrence,
    CircumfrenceGivenRadius
    
};