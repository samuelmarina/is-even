function isEven(number){
    divide = number / 2;
    Digit = String(divide);
    if (Digit.includes('.') === true) {
        return false
    }
    else{
        return true
    }
}

module.exports = isEven;