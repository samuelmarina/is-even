(function() {
    var wtn, large, small;

    small = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9,
        'ten': 10,
        'eleven': 11,
        'twelve': 12,
        'thirteen': 13,
        'fourteen': 14,
        'fifteen': 15,
        'sixteen': 16,
        'seventeen': 17,
        'eighteen': 18,
        'nineteen': 19,
        'twenty': 20,
        'thirty': 30,
        'forty': 40,
        'fifty': 50,
        'sixty': 60,
        'seventy': 70,
        'eighty': 80,
        'ninety': 90
    };

    large = {
        'thousand': 1000,
        'million': 1000000,
        'billion': 1000000000,
        'trillion': 1000000000000,
        'quadrillion': 1000000000000000,
        'quintillion': 1000000000000000000,
        'sextillion': 1000000000000000000000,
        'septillion': 1000000000000000000000000,
        'octillion': 1000000000000000000000000000,
        'nonillion': 1000000000000000000000000000000,
        'decillion': 1000000000000000000000000000000000
    };

    wtn = function(english) {
        var current, exponent, i, int, len, product, total, word, words, negative;
        if (!isNaN(int = parseInt(english, 10))) {
            return int;
        }
        negative = english.indexOf("negative") === 0 || english.indexOf("-") === 0;
        words = english.replace(/\sand\s/g, " ").replace(/^negative\s/,"").replace(/^-\s/,"").replace(/^a\s/,"one ").replace(/,\s/g, " ").replace(/first/g, "one").replace(/second/g, "two").replace(/third/g, "three").replace(/fourth/g, "four").replace(/fifth/g, "five").replace(/eighth/g, "eight").replace(/ninth/g, "nine").replace(/twelfth/g, "twelve").replace(/twentieth/g, "twenty").replace(/fiftieth/g, "fifty").replace(/seventieth/g, "seventy").replace(/ninetieth/g, "ninety").replace(/(i|ie)?th(\b|-|$)/g, "").split(/[\s-]+/);
        total = 0;
        current = 0;
        for (i = 0, len = words.length; i < len; i++) {
            word = words[i];
            product = small[word];
            if (product !== undefined) {
                current += product;
            } else if (word === "hundred" && current !== 0) {
                current *= 100;
            } else {
                exponent = large[word];
                if (exponent) {
                    total += current * exponent;
                    current = 0;
                } else {
                    throw new Error("Unknown number: " + word);
                }
            }
        }
        var output = total + current;
        if(negative){
            return output * -1;
        }
        return output;
    };
    module.exports = wtn;
}).call(this);
//GoldenFox also made this.
