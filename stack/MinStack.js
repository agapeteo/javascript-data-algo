class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(value) {
        if (this.minStack.length == 0 || value <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(value);
        }
        this.stack.push(value);
    }

    pop() {
        const result = this.stack.pop();
        if (result === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
        return result;
    }

    min() {
        return this.minStack[this.minStack.length - 1];
    }
}


min_stack = new MinStack();
min_stack.push(1)
min_stack.push(2)
min_stack.push(0)
min_stack.push(0)
min_stack.push(-1)
min_stack.push(3)

// assert min_stack.min() == -1
console.log(min_stack.min());

min_stack.pop()
min_stack.pop()

// assert min_stack.min() == 0
console.log(min_stack.min());

min_stack.pop()
//assert min_stack.min() == 0
console.log(min_stack.min());

min_stack.pop()
// assert min_stack.min() == 1
console.log(min_stack.min());