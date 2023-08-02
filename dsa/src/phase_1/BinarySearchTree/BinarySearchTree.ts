export class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number, left: TreeNode | null, right: TreeNode | null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export class BinaryTree {
  root: TreeNode | null;

  constructor(root: TreeNode) {
    this.root = root;
  }

  insert(value: number) {
    let prev: TreeNode | null = null;
    let current: TreeNode | null = this.root;

    while (current) {
      prev = current;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    if (!prev) {
      this.root = new TreeNode(value, null, null);
    } else if (value < prev.value) {
      prev.left = new TreeNode(value, null, null);
    } else {
      prev.right = new TreeNode(value, null, null);
    }
  }

  /**
  * transplants the target node into the current
  */
  delete_transplant(curr: TreeNode, prev: TreeNode | null, target: TreeNode | null) {
  }

  delete(node: TreeNode) {
  }

  get(value: number) {
  }

  inorder() {
  }

  preorder() {
    return null;
  }

  postorder() {
    return null;
  }
}
