let strStr = function(haystack, needle) {

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle[0]) {
            if (haystack.substring(i, i + needle.length) == needle) {
                return i;
            } else {
                continue;
            }
        }
    }

    return -1;
};