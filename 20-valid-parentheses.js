let isValid = function(s) {

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

    if (unresolvedBrackets.length == 0) {
        return true;
    } else {
        return false;
    }
};