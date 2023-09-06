/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

/** minDepth(): return the minimum depth of the tree -- that is,
 * the length of the shortest path from the root to a leaf. */

/** Here is the final code. So I'm checking for (!this.root) because 
 * it checks for falsy values rather than directly checking if this.root === 
 * 'undefined' or this.root === 'null'. 

I set leftDepth and rightDepth to Infinity because we want to 
start off both values high and we don't know how big the tree is, 
so we set them as high as possible so we can find the min.

We then let the recursion walk down each side of each branch 
until it reaches the bottom, at which point it returns distance. 

*/

  minDepth(treeNode = this.root, distance = 1) {
    if (!this.root) {
      throw Error("No root present");
    }

    if (treeNode.left === null && treeNode.right === null) return distance;
    else {
      let leftDepth = Infinity;
      let rightDepth = Infinity;

      if (treeNode.left) {
        leftDepth = this.minDepth(treeNode.left, distance + 1);
      }
      if (treeNode.right) {
        rightDepth = this.minDepth(treeNode.right, distance + 1);
      }

      return Math.min(leftDepth, rightDepth);
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(treeNode = this.root, depth = 1) {
    if(!this.root) {
        throw Error("No root present");
    }

    if(treeNode.left === null && treeNode.right === null) return depth;
    else {
        let leftDepth = 1;
        let rightDepth = 1;
        if (treeNode.left) {
            leftDepth = this.maxDepth(treeNode.left, depth + 1);
        }
        if (treeNode.right) {
            rightDepth = this.maxDepth(treeNode.right, depth + 1);
        }
        
        return Math.max(leftDepth, rightDepth);
    }
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum(treeNode = this.root) {
    if (!treeNode) return 0; // Return 0 if node is null

    let maxSumLeft = this.maxSum(treeNode.left);
    let maxSumRight = this.maxSum(treeNode.right);

    // Calculate maximum sum considering current node value and left/right paths
    return Math.max(treeNode.val, treeNode.val + maxSumLeft, treeNode.val + maxSumRight);
}
    

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {}

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  // areCousins(node1, node2) {

  // }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  // static serialize() {

  // }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  // static deserialize() {

  // }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  //   lowestCommonAncestor(node1, node2) {

  //   }
}

module.exports = { BinaryTree, BinaryTreeNode };



