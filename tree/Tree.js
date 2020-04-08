function Node(inputValue) {
    this.value = inputValue;
    this.left = null;
    this.right = null;
}

class Tree {
    constructor(){
        this.root = null;
    }

    add(value) {
        if (!this.root) {
            this.root = new Node(value);
            return

        }
        this.addToNode(this.root, value)
    }

    addToNode(node, value){
        if (value <= node.value) {
            if (!node.left) {
                node.left = new Node(value)
            } else {
                this.addToNode(node.left, value)
            }
        } else {
            if (!node.right) {
                node.right = new Node(value )
            } else {
                this.addToNode(node.right, value)
            }
        }
    }

    contains(value) {
        return this.containsInNode(this.root, value)
    }

    containsInNode(node, value) {
        if (!node) return false;

        if (node.value == value) return true;

        if (value < node.value) {
            return this.containsInNode(node.left, value)
        } else {
            return this.containsInNode(node.right, value)
        }
    }

    elements(){
        const result = [];
        this.elementsForNode(this.root, result);
        return result
    }

    elementsForNode(node, arr) {
        if (node == null) {
            return
        }
        this.elementsForNode(node.left, arr);
        arr.push(node.value);
        this.elementsForNode(node.right, arr)
    }

    depth() {
        return this.depthForNode(this.root, 0)
    }

    depthForNode(node, curDepth) {
        if (!node || (!node.left && !node.right)) return curDepth;
        return Math.max(
            this.depthForNode(node.left, curDepth + 1),
            this.depthForNode(node.right, curDepth + 1),
        )
    }

    sortedArrayToTree(arr) {
        const tree = new Tree();
        tree.root = this.toTree(arr, 0, arr.length);
        return tree;
    }

    toTree(arr, startIdx, endIdx) {
        if (startIdx >= endIdx) {
            return null;
        }

        const midIdx = Math.floor((startIdx + endIdx) / 2);
        const node = new Node(arr[midIdx]);

        node.left = this.toTree(arr, startIdx, midIdx);
        node.right = this.toTree(arr, midIdx + 1, endIdx);

        return node;
    }

}

console.log("test here");
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const tree = new Tree().sortedArrayToTree(arr);

console.log(tree.depth()); // 3
