//////////////////////////////////////////////////////////////////
/////BINARY TREE

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    const queue = [this.root];

    while (queue.length) {
      let current = queue.shift();

      if (!current.left) {
        current.left = newNode;
        break;
      } else {
        queue.push(current.left);
      }

      if (!current.right) {
        current.right = newNode;
        break;
      } else {
        queue.push(current.right);
      }
    }
  }

  display(node) {
    if (node == null) return;

    this.display(node.left);
    console.log(node.data);
    this.display(node.right);
  }

  height(node = this.root) {
    if (node == null) return -1;

    const left = height(node.left);
    const right = height(node.right);

    return Math.max(left, right) + 1;
  }
}

const tree = new Tree();
tree.insert(15);
tree.insert(6);
tree.insert(8);
tree.insert(5);
tree.insert(9);
tree.insert(7);
tree.insert(10);
// tree.display(tree.root);

///////////////////////////////////////////////////////////////////////////////////
////BINARY SEARCH TREE

class Bnode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root == null;
  }
  insert(data) {
    const newNode = new Bnode(data);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    this.insertNode(this.root, newNode);
  }
  insertNode(root, newNode) {
    if (newNode.data < root.data) {
      if (!root.left) root.left = newNode;
      else this.insertNode(root.left, newNode);
    } else {
      if (!root.right) root.right = newNode;
      else this.insertNode(root.right, newNode);
    }
  }
  search(root, data) {
    if (!root) return false;
    if (root.data == data) return true;

    if (data < root.data) {
      return this.search(root.left, data);
    } else {
      return this.search(root.right, data);
    }
  }
  ////////////////////DFS TRAVERSAL///////////////////

  // PREORDER
  // 1) Read the node
  // 2) visit left
  // 3) visit right
  ////Mean all the left nodes starting from root will print first then reccursion goes for right trees

  preOrder(root) {
    if (!root) return;
    console.log(root.data);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }

  //INORDER
  // 1) Visit the left
  // 2) Read the Node
  // 3) Visit right
  //// Means all the left nodes starting from left leaf(bottom-root) will print first then goes for right

  inOrder(root) {
    if (!root) return;
    this.inOrder(root.left);
    console.log(root.data);
    this.inOrder(root.right);
  }

  //POSTORDER
  //1) Visit the left
  //2) Visit the right
  ////Means it will be like printing the left leaf and right leave go back to parent execute all the calls
  postOrder(root) {
    if (!root) return;
    this.inOrder(root.left);
    this.inOrder(root.right);
    console.log(root.data);
  }
  ///////////////////////////////BFS TRAVERSAL//////////////////////
  //1) enqueue the root
  //2) Dequeue and read
  //3) push left and right

  levelOrder() {
    if (this.isEmpty()) return 'Empty';
    const queue = [this.root];
    while (queue.length) {
      let current = queue.shift();
      console.log(current.data);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }

  min(root) {
    if (!root.left) return root.data;
    return this.min(root.left);
  }
  max(root) {
    if (!root.right) return root.data;
    return this.max(root.right);
  }

  deleteNode(root, data) {
    if (!root) return null;

    if (data < root.data) {
      root.left = this.deleteNode(root.left, data);
    } else if (data > root.data) {
      root.right = this.deleteNode(root.right, data);
    } else {
      if (!root.left && !root.right) {
        return null;
      } else if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      } else {
        let mindata = this.min(root.right);
        root.data = mindata;
        root.right = this.deleteNode(root.right, mindata);
      }
    }
    return root;
  }
}

const bst = new BST();
bst.insert(10);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(7);

/////////////////////////////////////////////////////////////////////
///////Find closest node in tree to the target number

BST.prototype.findClosest = function (root, target) {
  let closest = root.data;

  while (root !== null) {
    if (Math.abs(target - root.data) < Math.abs(target - closest)) {
      closest = root.data;
    }

    if (target < root.data) {
      root = root.left;
    } else if (target > root.data) {
      root = root.right;
    } else {
      break;
    }
  }
  return closest;
};

console.log(bst.findClosest(bst.root, 2));

/////////////////////////////////////////////////////////////////////
/////Check its a BST or not
BST.prototype.isBst = function (root, min = -Infinity, max = Infinity) {
  if (!root) return true;

  if (root.data <= min || root.data >= max) return false;

  return (
    this.isBst(root.left, min, root.data) &&
    this.isBst(root.right, root.data, max)
  );
};

/////////////////////////////////////////////////////////////////
//Find kth smallest tree in BST

BST.prototype.kthSmallest = function (root, k) {
  let ans = 0;
  inOrder(root);
  return ans;
  function inOrder(node) {
    if (node == null) return;

    inOrder(node.left);
    k--;
    if (k == 0) {
      ans = node.val;
      return;
    }
    inOrder(node.right);
  }
};
