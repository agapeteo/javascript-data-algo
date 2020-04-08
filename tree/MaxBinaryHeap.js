class MaxBinaryHeap {
    constructor() {
        this.container = [];
    }

    size() {
        return this.container.length;
    }

    peek() {
        if (this.container.length == 0) {
            return undefined;
        }
        return this.container[0];
    }

    push(element) {
        this.container.push(element);
        this.siftUp(this.container.length - 1);
    }

    pop() {
        if (this.container.length == 0) {
            return undefined;
        }
        if (this.container.length == 1) {
            return this.container.pop();
        }
        const result = this.container[0];
        const last = this.container.pop();
        this.container[0] = last;
        this.siftDown(0);

        return result;
    }

    siftUp(idx) {
        if (idx == 0) return;

        const parentIdx = MaxBinaryHeap.parentIdx(idx);
        if (this.container[idx] > this.container[parentIdx]) {
            this.swap(idx, parentIdx);
            this.siftUp(parentIdx);
        }
    }

    siftDown(idx) {
        if (idx >= Math.floor(this.container.length / 2)) {
            return
        }
        const leftChildIdx = MaxBinaryHeap.leftChildIdx(idx);
        const rightChildIdx = MaxBinaryHeap.rightChildIdx(idx);
        let greaterChildIdx = leftChildIdx;
        if (rightChildIdx < this.container.length && this.container[rightChildIdx] > this.container[leftChildIdx]) {
            greaterChildIdx = rightChildIdx;
        }
        if (this.container[greaterChildIdx] > this.container[idx]) {
            this.swap(greaterChildIdx, idx);
            this.siftDown(greaterChildIdx);
        }
    }

    swap(i, j) {
        [this.container[i], this.container[j]] = [this.container[j], this.container[i]]
    }

    static parentIdx(idx) {
        return Math.floor((idx - 1) / 2)
    }

    static rightChildIdx(idx) {
        return idx * 2 + 2
    }

    static leftChildIdx(idx) {
        return idx * 2 + 1
    }
}


const list = [10, 5, 3, 3, 30, 25, 2, 0, 0, 0, -1, 200];
const heap = new MaxBinaryHeap();

for (let i of list) {
    heap.push(i);
}

const actual = [];
while(heap.size() > 0) {
    actual.push(heap.pop());
}

for (const i of actual) {
    console.log(`${i} `)
}

