// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

const convertTreeArrayToHashMap = (treeArray) =>
  treeArray.reduce((map, nodeId, index) => {
    const nodeChildren = map.get(nodeId) || [];
    nodeChildren.push(index);
    map.set(nodeId, nodeChildren);
    return map;
  }, new Map());

const calculateTreeHightWithLevelCount = (treeMap) => {
  const nodesQueue = [-1];
  let height = -1;
  while (nodesQueue.length > 0) {
    let totalLevelNodes = nodesQueue.length;
    height++;
    while (totalLevelNodes > 0) {
      const node = nodesQueue.shift();
      const children = treeMap.get(node);
      if (children) {
        nodesQueue.push(...children);
      }
      totalLevelNodes--;
    }
  }
  return height;
};

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
  const treeMap = convertTreeArrayToHashMap(treeArray);
  const treeHeight = calculateTreeHightWithLevelCount(treeMap);
  return treeHeight;
}

module.exports = solutionFn;
