import { assertEquals } from "std/testing/asserts.ts";
import { describe, it } from "std/testing/bdd.ts";
import { convertTreeToString, createNode } from "./generic_tree.ts";
describe("Generic trees unit testing", () => {
  it.ignore("should convert a tree to a string format to be printed", () => {
    const root = createNode("root_node");
    const firstLeaf = createNode("first_leaf");
    const secondLeaf = createNode("second_leaf");

    root.children = [firstLeaf, secondLeaf];

    const treeString = convertTreeToString(root);
    const expectedString = 
                        `                                         root_node
                                                                /           \
                            first_leaf                                                                second_leaf
                            /            \                                                           /           \
            first_leaf                          first_leaf                          first_leaf                          first_leaf
          /            \                       /          \                       /           \                        /          \
first_leaf              first_leaf   first_leaf            first_leaf   first_leaf             first_leaf   first_leaf             first_leaf
`;

    assertEquals(treeString, expectedString);
  });
});
