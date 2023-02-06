type Node<T = unknown> = {
  value: T;
  next: Node | null;
};

type Head = Node | null;
type Tail = Node | null;

type LinkedList<T = unknown> = {
  head: Node | null;
  pushFront: (value: T) => void;
  pushBack: (value: T) => void;
  topFront: () => Head;
  topBack: () => Tail;
};

export const createLinkedList = <T = unknown>(): LinkedList<T> => {
  let head: Head = null;

  const isEmpty = (): boolean => {
    return !head;
  };

  const topFront = (): Head => {
    return head;
  };

  const topBack = (_head: Head): Tail => {
    if (!_head) {
      return null;
    }
    if (!_head.next) {
      return _head;
    }
    return topBack(_head.next);
  };

  const pushFront = (value: T) => {
    // 1. Create new node
    // 2. Set new node next value to old head
    // 3. Change head var value to the new node
    const newNode: Node = {
      value,
      next: head,
    };
    head = newNode;
  };

  const pushBack = (value: T) => {
    // 1. Create new node element
    // 2. Get last element
    // 3. Set next value of last element to new node
    const newNode: Node = {
      value,
      next: null,
    };

    if (isEmpty()) {
      head = newNode;
    } else {
      const lastNode = topBack(head);
      lastNode!.next = newNode;
    }
  };

  return {
    head,
    pushFront,
    pushBack,
    topFront,
    topBack: () => topBack(head),
  };
};
