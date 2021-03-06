// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/


// 1281. Subtract the Product and Sum of Digits of an Integer
// Easy

// 576

// 151

// Add to List

// Share
// Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 

// Example 1:

// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15
// Example 2:

// Input: n = 4421
// Output: 21
// Explanation: 
// Product of digits = 4 * 4 * 2 * 1 = 32 
// Sum of digits = 4 + 4 + 2 + 1 = 11 
// Result = 32 - 11 = 21
 

// Constraints:

// 1 <= n <= 10^5
// Accepted
// 150,383
// Submissions
// 175,635



/**
 * @param {number} n
 * @return {number}
 */
 var subtractProductAndSum = function(n) {
    let numsStr = `${n}`;
    
    let multiplyNums = product(numsStr);
    let sumNums = sum(numsStr);
    function product(nums) {
        let multiply = null;
        for(let i=0;i <nums.length;i++) {
            const num = parseInt(nums[i])
            if (multiply === null) {
                multiply = num;
            } else {
                multiply *= num;
            }
        }
        return multiply;
    }
    function sum(nums) {
        let sum = null;
        for(let i=0;i <nums.length;i++) {
            const num = parseInt(nums[i])
            if (sum === null) {
                sum = num;
            } else {
                sum += num;
            }
        }
        return sum;
    }
    return multiplyNums - sumNums
};