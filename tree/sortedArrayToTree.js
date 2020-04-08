const Node = require("./Tree");
const Tree = require("./Tree");

function sortedArrayToTree(arr) {
    const tree = new Tree();
    tree.root = sortedArrayToTree(arr, 0, arr.length);
    return tree;
}

function sortedArrayToTree(arr, startIdx, endIdx) {
    if (startIdx >= endIdx) return null;

    const midIdx = Math.floor(startIdx + (endIdx - startIdx) / 2);
    const node = new Node(arr[midIdx]);

    node.left = sortedArrayToTree(arr, startIdx, midIdx);
    node.left = sortedArrayToTree(arr, midIdx + 1, endIdx);
}


console.log("test here");
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const tree = sortedArrayToTree(arr);

console.log(tree.depth());