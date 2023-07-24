// https://www.geeksforgeeks.org/find-height-binary-tree-represented-parent-array/
// javascript program to find height using parent array

// This function fills depth of i'th element in parent. The depth is
// filled in depth[i].
function fillDepth(parent, i, depth) {
  // If depth[i] is already filled
  if (depth[i] != 0) {
    return;
  }

  // If node at index i is root
  if (parent[i] == -1) {
    depth[i] = 1;
    return;
  }

  // If depth of parent is not evaluated before, then evaluate
  // depth of parent first
  if (depth[parent[i]] == 0) {
    fillDepth(parent, parent[i], depth);
  }

  // Depth of this node is depth of parent plus 1
  depth[i] = depth[parent[i]] + 1;
}

// This function returns height of binary tree represented by
// parent array
function findHeight(parent, n) {
  // Create an array to store depth of all nodes/ and
  // initialize depth of every node as 0 (an invalid
  // value). Depth of root is 1
  var depth = Array(n).fill(0);
  for (i = 0; i < n; i++) {
    depth[i] = 0;
  }

  // fill depth of all nodes
  for (i = 0; i < n; i++) {
    fillDepth(parent, i, depth);
  }

  // The height of binary tree is maximum of all depths.
  // Find the maximum value in depth and assign it to ht.
  var ht = depth[0];
  for (i = 1; i < n; i++) {
    if (ht < depth[i]) {
      ht = depth[i];
    }
  }
  return ht;
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding("utf8");
rl.once("line", () => rl.once("line", readLine));

function readLine(line) {
  console.log(solutionFn(line));
  process.exit();
}

function solutionFn(line) {
  // write your code here
  const treeArray = line.split(" ").map((value) => parseInt(value, 10));
  const treeHeight = findHeight(treeArray, treeArray.length);
  return treeHeight;
}

module.exports = solutionFn;
