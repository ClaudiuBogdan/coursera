import { describe, it } from "std/testing/bdd.ts";
import { assertEquals, assertExists } from "std/testing/asserts.ts";
import { createLinkedList } from "./single_linked_list.ts";
describe("Singly Linked List", () => {
  it("should add element to the front of the list", () => {
    const value = "test_value";
    const list = createLinkedList<string>();

    list.pushFront(value);
    const frontNode = list.topFront();

    assertExists(frontNode);
    assertEquals(frontNode?.value, value);
  });

  it("should add element to the back of the list", () => {
    const value = "test_value_back";
    const list = createLinkedList();

    list.pushBack(value);
    const backNode = list.topBack();

    assertExists(backNode);
    assertEquals(backNode?.value, value)
  });
});
