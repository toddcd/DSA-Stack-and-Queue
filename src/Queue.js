class _Node {
    constructor(value) {
        this.value=value,
            this.next=null
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    // Time complexity for adding items to the queue is Constant time O(1)
    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }
        //make the new node the last item on the queue
        this.last = node;
    }

    peek() {
        if (this.first === null) {
            return;
        }
        return this.first.value
    }

    // Time complexity for removing items from the queue is Constant time O(1)
    dequeue() {
        //if the queue is empty, there is nothing to return
        if (this.first === null) {
            return;
        }
        const node = this.first;
        this.first = this.first.next;
        //if this is the last item in the queue
        if (node === this.last) {
            this.last = null;
        }
        return node.value;
    }

}

function main() {
    const starTrekQ = new Queue()
    starTrekQ.enqueue('Kirk')
    starTrekQ.enqueue('Uhura')
    starTrekQ.enqueue('Sulu')
    starTrekQ.enqueue('Checkov ')

    console.log(starTrekQ.dequeue())
    console.log(starTrekQ.peek())

}

main()