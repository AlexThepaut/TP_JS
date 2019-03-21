const _ = require('lodash');

function addition(a, b){
    if(_.isNumber(a) && _.isNumber(b)){
        return a+b;
    }
    return Error;
}

function soustraction(a, b){
    if(_.isNumber(a) && _.isNumber(b)){
        return a-b;
    }
    return Error;
}

function multiplication(a, b){
    if(_.isNumber(a) && _.isNumber(b)){
        return a*b;
    }
    return Error;
}

function division(a, b){
    if(_.isNumber(a) && _.isNumber(b)){
        return a/b;
    }
    return Error;
}

module.exports = {
    multiplication: multiplication,
    division: division,
    addition: addition,
    soustraction: soustraction
}