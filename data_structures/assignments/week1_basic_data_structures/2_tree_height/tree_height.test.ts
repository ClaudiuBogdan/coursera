import { assertEquals } from "std/testing/asserts.ts";
import { describe, it } from "std/testing/bdd.ts";
import {
  calculateTreeHightWithLevelCount,
  convertTreeArrayToHashMap,
} from "./tree_height.ts";
describe("tree height", () => {
  it("should convert an tree in array format to an tree in hashmap format", () => {
    const treeArray = [-1, 0, 4, 0, 3];

    const treeMap = convertTreeArrayToHashMap(treeArray);

    // Create expected result
    const expectedTreeMap = new Map();
    expectedTreeMap.set(-1, [0]);
    expectedTreeMap.set(0, [1, 3]);
    expectedTreeMap.set(3, [4]);
    expectedTreeMap.set(4, [2]);

    assertEquals(treeMap, expectedTreeMap);
  });

  it("should calculate the tree hight correctly", () => {
    const treeArray = [-1, 0, 4, 0, 3];

    const treeMap = convertTreeArrayToHashMap(treeArray);
    const treeHeight = calculateTreeHightWithLevelCount(treeMap);

    assertEquals(treeHeight, 4);
  });

  it("should calculate the tree hight correctly", () => {
    const treeArray = [-1];

    const treeMap = convertTreeArrayToHashMap(treeArray);
    const treeHeight = calculateTreeHightWithLevelCount(treeMap);

    assertEquals(treeHeight, 1);
  });

  it("should calculate the tree hight correctly", () => {
    const treeArray = [4, -1, 4, 1, 1];

    const treeMap = convertTreeArrayToHashMap(treeArray);
    const treeHeight = calculateTreeHightWithLevelCount(treeMap);

    assertEquals(treeHeight, 3);
  });
});
