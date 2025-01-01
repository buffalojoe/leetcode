let lengthOfLongestSubstring = function(s) {

    let substrings = [];
    let validSubstringLengths = [];

    for (i = 0; i < s.length; i++) {
        for (j = i + 1; j <= s.length; j++) {
            substrings.push(s.substring(i, j));
        }
    }

    for (let item of substrings) {
        const set = new Set(item);

        if (set.size == item.length) {
            validSubstringLengths.push(item.length);
        }
    }

    let largest = 0;
    for (let num of validSubstringLengths) {      
        if (num > largest) {
            largest = num;
        }
    }

    return largest;
};

console.log(lengthOfLongestSubstring("abc"))