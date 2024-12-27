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
    unresolvedBracketsAdded = 0;

    for (let char of s) {
        if (char in openingBrackets) {
            unresolvedBrackets.push(char);
            unresolvedBracketsAdded += 1;
        } else if (char in closingBrackets && unresolvedBrackets.length == 0) {
            return false;
        } else {
            if (unresolvedBrackets[unresolvedBrackets.length -1] === closingBrackets[char]) {
                unresolvedBrackets.pop();
            } else {
                break;
            }
        }
    }

    console.log(unresolvedBracketsAdded);

    if (unresolvedBrackets.length == 0 && unresolvedBracketsAdded > 0) {
        return true;
    } else {
        return false;
    }
};

console.log(isValid("()"))