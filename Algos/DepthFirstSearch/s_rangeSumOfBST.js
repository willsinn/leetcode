// 938. Range Sum of BST
// Easy

// 1865

// 268

// Add to List

// Share
// Given the root node of a binary search tree, return the sum of values of all nodes with a value in the range [low, high].

 

// Example 1:


// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32
// Example 2:


// Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
// Output: 23
 

// Constraints:

// The number of nodes in the tree is in the range [1, 2 * 104].
// 1 <= Node.val <= 105
// 1 <= low <= high <= 105
// All Node.val are unique.
// Accepted
// 306,930
// Submissions
// 371,135

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

 
 /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    if (!root) return;
    
    let sum = 0;
    dfs(root)
    function dfs(node) {
        if (!node) return;
         
        if (node.val < L) {
            dfs(node.right);
            return;
        }
        
        if (node.val > R) {
            dfs(node.left);
            return;
        }
        
        sum += node.val;
        dfs(node.left);
        dfs(node.right);
    }
    return sum
};