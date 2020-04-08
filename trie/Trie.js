class Node {
    constructor() {
        this.nodes = new Map();
        this.isLast = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    add(text) {
        let curNode = this.root;
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            let nextNode = curNode.nodes.get(char);
            if (!nextNode) {
                nextNode = new Node();
                curNode.nodes.set(char, nextNode);
            }
            if (i == text.length - 1) {
                nextNode.isLast = true;
            }
            curNode = nextNode;
        }
    }

    contains(text) {
        let curNode = this.root;
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            let nextNode = curNode.nodes.get(char);
            if (!nextNode) {
                return false;
            }
            if (i == text.length - 1 && nextNode.isLast) {
                return true;
            }
            curNode = nextNode;
        }
        return false;
    }
}

const trie = new Trie();
trie.add("cat");
trie.add("can");
trie.add("cast");
trie.add("boost");

// all true
console.log(trie.contains("cat"));
console.log(trie.contains("can"));
console.log(trie.contains("cast"));
console.log(trie.contains("boost"));

// all false
console.log(trie.contains("cas"));
console.log(trie.contains("casting"));
console.log(trie.contains("cost"));
console.log(trie.contains("but"));
console.log(trie.contains("bot"));


