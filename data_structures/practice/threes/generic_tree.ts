type Node<T = unknown> = {
  value: T;
  children: Node[];
};

export const createNode = <T>(value: T): Node<T> => {
  const children: Node[] = [];
  return {
    value,
    children,
  };
};
  
export const convertTreeToString = (root: Node): string => {
  return "";
};
