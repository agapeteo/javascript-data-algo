class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null
    }

    append(value) {
        let curNode = this;
        while (curNode.next) {
            curNode = curNode.next
        }
        curNode.next = new ListNode(value)
    }

    elements() {
        const result = [];
        let curNode = this;
        while (curNode) {
            result.push(curNode.value);
            curNode = curNode.next
        }
        return result
    }

    size() {
        let size = 0;
        let curNode = this;

        while (curNode) {
            size++;
            curNode = curNode.next
        }
        return size
    }

    removeAt(idx) {
        const size = this.size();
        if (idx < 1 || idx >= size || idx == 0) {
            return
        }
        if (size == 2) {
            this.next = null;
            return
        }
        let prevNode = this;
        let curNode = prevNode.next;
        let nextNode = curNode.next;
        let curIdx = 1;

        while (curIdx < idx && nextNode) {
            prevNode = prevNode.next;
            curNode = curNode.next;
            nextNode = nextNode.next;
            curIdx++;
        }
        prevNode.next = nextNode;
    }

    deduplicate() {
        const uniq = new Set();
        let curNode = this;
        let prevNode = null;

        while (curNode) {
            if (uniq.has(curNode.value)) {
                prevNode.next = curNode.next;
            } else {
                uniq.add(curNode.value);
                prevNode = curNode;
            }
            curNode = curNode.next;
        }
    }
}


const node = new ListNode(0);
node.append(1);
node.append(2);
node.append(2);
node.append(2);
node.append(3);
node.append(4);
node.append(4);
node.append(2);

node.deduplicate()
// node.removeAt(2)

console.log(node.elements());
console.log(node.size());