type NodeId = number;

type NodeChildren = number[];

type TreeHashMap = Map<NodeId, NodeChildren>;

export const convertTreeArrayToHashMap = (
  treeArray: number[],
): TreeHashMap =>
  treeArray.reduce((map, nodeId, index) => {
    // The index is the children node and nodeId or the value of the array element is the parent node
    const nodeChildren = map.get(nodeId) ?? [];
    nodeChildren.push(index);

    map.set(nodeId, nodeChildren);
    return map;
  }, new Map<NodeId, NodeChildren>());

export const calculateTreeHeightRecursively = (
  treeMap: TreeHashMap,
  rootId: NodeId = -1,
): number => {
  const children = treeMap.get(rootId) ?? [];
  if (children.length === 0) {
    return 0;
  }

  const treeHeight = children.map((child) =>
    calculateTreeHeightRecursively(treeMap, child)
  ).reduce((prev, value) => value > prev ? value : prev);

  return treeHeight + 1;
};

export const calculateTreeHightWithLevelCount = (treeMap: TreeHashMap) => {
  const nodesQueue = [-1];
  let height = -1;

  while (nodesQueue.length > 0) {
    let totalLevelNodes = nodesQueue.length;
    height++;
    while (totalLevelNodes > 0) {
      const node = nodesQueue.shift();
      const children = treeMap.get(node!);
      if (children) {
        nodesQueue.push(...children);
      }
      totalLevelNodes--;
    }
  }

  return height;
};
