// 501. Find Mode in Binary Search Tree
// Easy

// 1360

// 422

// Add to List

// Share
// Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.

// If the tree has more than one mode, return them in any order.

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than or equal to the node's key.
// The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
// Both the left and right subtrees must also be binary search trees.
 

// Example 1:


// Input: root = [1,null,2,2]
// Output: [2]
// Example 2:

// Input: root = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -105 <= Node.val <= 105
 

// Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).
// Accepted
// 110,082
// Submissions
// 250,077


const findMode = root => {
    const handleValue = val => {
      // handle current count
      if (val !== currVal) {
        currVal = val;
        currCount = 0;
      }
      currCount++;
  
      if (currCount > maxCount) {
        // found a new mode
        maxCount = currCount;
        modeCount = 1;
        modes[0] = currVal;
      } else if (currCount === maxCount) {
        // found a mode with same count
        modes[modeCount] = currVal;
        modeCount++;
      }
    };
  
    const inorder = node => {
      if (!node) return;
  
      inorder(node.left);
      handleValue(node.val);
      inorder(node.right);
    };
  
    let currVal = null;
    let currCount = 0;
    let maxCount = 0;
    let modeCount = 0;
  
    const modes = [];
  
    inorder(root);
  
    return modes.slice(0, modeCount);
  };