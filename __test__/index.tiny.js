function isEven(number) {
    if (number === 1 || number === "1" || number === "one" || number === "One" || number === "ONE") return false;
    else if (number === 2 || number === "2" || number === "two" || number === "Two" || number === "TWO") return true;
}

module.exports = isEven;


