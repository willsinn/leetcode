// https://leetcode.com/problems/monotonic-array/



// 896. Monotonic Array
// Easy

// 1007

// 43

// Add to List

// Share
// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j].  An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Return true if and only if the given array nums is monotonic.

 

// Example 1:

// Input: nums = [1,2,2,3]
// Output: true
// Example 2:

// Input: nums = [6,5,4,4]
// Output: true
// Example 3:

// Input: nums = [1,3,2]
// Output: false
// Example 4:

// Input: nums = [1,2,4,5]
// Output: true
// Example 5:

// Input: nums = [1,1,1]
// Output: true
 

// Note:

// 1 <= nums.length <= 50000
// -100000 <= nums[i] <= 100000
// Accepted
// 152,745
// Submissions
// 263,777


/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var isMonotonic = function(nums) {
    let res = true;
    let counter = 1;
    let prev = nums[0]
    let incrementing = null;
    
    while(res && counter < nums.length) {
        const curr = nums[counter]
        if (incrementing === null && prev < curr) incrementing = true;
        if (incrementing === null && prev > curr) incrementing = false;

        if (incrementing && prev > curr) res = false;
        if (!incrementing && prev < curr) res = false;
        
        prev = curr
        counter ++;
    }
    return res
};