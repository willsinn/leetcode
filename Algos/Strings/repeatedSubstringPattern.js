// 459. Repeated Substring Pattern
// Easy

// 2298

// 236

// Add to List

// Share
// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

 

// Example 1:

// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.
// Example 2:

// Input: s = "aba"
// Output: false
// Example 3:

// Input: s = "abcabcabcabc"
// Output: true
// Explanation: It is the substring "abc" four times or the substring "abcabc" twice.
 

// Constraints:

// 1 <= s.length <= 104
// s consists of lowercase English letters.
// Accepted
// 187,047
// Submissions
// 431,503

/**
 * @param {string} s
 * @return {boolean}
 */
 var repeatedSubstringPattern = function(s) {
    return s.repeat(2).slice(1, -1).includes(s);
};