let isValid = function(s) {
    // if an opening bracket is found, the next character must be an opening bracket or
    //  a closing bracket of the same type
    // if a closing bracket is found, the next character must be an opening bracket or
    //  a closing bracket of an opening bracket that has already been used

    let openingBrackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    let closingBrackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    unresolvedBrackets = [];

    for (let char of s) {
        if (char in openingBrackets) {
            unresolvedBrackets.push(char);
        } else {
            if (unresolvedBrackets.includes(closingBrackets[char])) {
                unresolvedBrackets.splice(unresolvedBrackets.indexOf(closingBrackets[char]), 1);
            }
        }
    }

    if (unresolvedBrackets.length == 0) {
        return true;
    } else {
        return false;
    }

};

console.log(isValid("(()){}[][[[]]]"));