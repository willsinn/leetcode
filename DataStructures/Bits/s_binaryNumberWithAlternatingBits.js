// 693. Binary Number with Alternating Bits
// Easy

// 623

// 94

// Add to List

// Share
// Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

 

// Example 1:

// Input: n = 5
// Output: true
// Explanation: The binary representation of 5 is: 101
// Example 2:

// Input: n = 7
// Output: false
// Explanation: The binary representation of 7 is: 111.
// Example 3:

// Input: n = 11
// Output: false
// Explanation: The binary representation of 11 is: 1011.
// Example 4:

// Input: n = 10
// Output: true
// Explanation: The binary representation of 10 is: 1010.
// Example 5:

// Input: n = 3
// Output: false
 

// Constraints:

// 1 <= n <= 231 - 1
// Accepted
// 74,762
// Submissions
// 124,499

/**
 * @param {number} n
 * @return {boolean}
 */
 var hasAlternatingBits = function(n) {
    const binN = parseInt(n).toString(2);
    
    let prev = binN[0];
    for (let i=1;i<binN.length;i++) {
        const curr = binN[i];
        
        if (prev === curr) return false;
        
        prev = curr
    }
    return true
};