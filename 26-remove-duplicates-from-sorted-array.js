let removeDuplicates = function(nums) {
    
    let currentNum;
    let lastNum;

    for (let i = 0; i <= nums.length; i++) {
        if (currentNum == undefined) {
            currentNum = nums[i];
        } else {
            lastNum = currentNum;
            currentNum = nums[i];
        }

        if (lastNum == currentNum) {
            nums.splice(i, 1);
            i -= 1;
        }
    }

    return nums.length;
};