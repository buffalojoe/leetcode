let longestCommonPrefix = function(strs) {
    
    let commonPrefix = [];

    for(let i = 0; i <= strs[0].length; i++) {

        if(strs.every((currentValue) => currentValue[i] === strs[0][i])) {
            commonPrefix.push(strs[0][i]);    
        } else {
            break
        }

    }

    return commonPrefix.join('');
};