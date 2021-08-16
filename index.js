function isEven(number) {
    let counter = 0;
    while (counter !== Infinity) {
        if (number === counter && counter % 2 === 0) return true;
        else if (number === counter && counter % 2 === 1) return false;
        counter ++
    }
    // if(number === 1) return false;
    // else if(number === 2) return true;
    // else if(number === 3) return false;
    // else if(number === 4) return true;
    // else if(number === 5) return false;
    // else if(number === 6) return true;
    // else if(number === 7) return false;
    // else if(number === 8) return true;
    // else if(number === 9) return false;
    // else if(number === 10) return true;
}

module.exports = isEven;