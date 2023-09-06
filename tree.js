class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  test() {
    console.log(this.root);
  }

  sumValues() {
    let toVisitStack = [this.root];
    let sum = 0;

    while (toVisitStack.length) {
      let currentItem = toVisitStack.pop();
      console.log("Adding", currentItem.val);

      if (typeof currentItem.val !== "number") {
        console.log(currentItem.val, "is not a number.");
        continue;
      } else {
        sum += currentItem.val;
      }

      for (let child of currentItem.children) {
        toVisitStack.push(child);
      }
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let toVisitStack = [this.root];
    let evenCount = 0;

    while (toVisitStack.length) {
      let currentItem = toVisitStack.pop();
      console.log("Checking", currentItem.val);

      if (typeof currentItem.val !== "number") {
        console.log(currentItem.val, "is not a number.");
      } else {
        if (currentItem.val % 2 === 0) {
          evenCount++;
        } else {
          continue;
        }
      }

      for (let child of currentItem.children) {
        toVisitStack.push(child);
      }
    }
    return evenCount;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let toVisitStack = [this.root];
    let greaterCount = 0;

    if (typeof lowerBound !== "number") {
      throw new TypeError("This method requires a number");
    }

    while (toVisitStack.length) {
      let currentItem = toVisitStack.pop();
      console.log(
        "Checking if",
        currentItem.val,
        "is greater than",
        lowerBound
      );
      if (typeof currentItem.val !== "number") {
        console.log("SKIPPING -- ", currentItem.val, "is not a number");
        continue;
      } else {
        if (currentItem.val > lowerBound) {
          greaterCount++;
        }
      }
      for (let child of currentItem.children) {
        toVisitStack.push(child);
      }
    }
    return greaterCount;
  }
} // end class

// const myRoot = new TreeNode(10, [
//   new TreeNode("twenty"),
//   new TreeNode(30, [new TreeNode(40), new TreeNode(51)]),
// ]);

// const myTree = new Tree(myRoot);

module.exports = { Tree, TreeNode };
