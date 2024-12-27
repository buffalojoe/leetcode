let findMedianSortedArrays = function(nums1, nums2) {
    mergedArray = nums1.concat(nums2);
    mergedArray.sort((a, b) => a - b);
    
    if (mergedArray.length % 2 == 0) {
        return (mergedArray[(mergedArray.length / 2) - 1] + mergedArray[(mergedArray.length / 2)]) / 2;
    } else {
        return mergedArray[Math.floor(mergedArray.length / 2)];
    }
};

let nums1 = [1,2,3,4,5];
let nums2 = [6,7,8,9,10,11,12,13,14,15,16,17];
console.log(findMedianSortedArrays(nums1, nums2));