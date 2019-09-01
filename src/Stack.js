class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    // Time complexity for adding items to the stack is Constant time O(1)
    push(data) {
        /* If the stack is empty, then the node will be the
           top of the stack */
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        /* If the stack already has something,
           then create a new node,
           add data to the new node, and
           have the pointer point to the top */
        const node = new _Node(data, this.top);
        this.top = node;
    }

    // Time complexity for removing items from the stack is Constant time O(1)
    pop() {
        /* In order to remove the top of the stack, you have to point
           the pointer to the next item and that next item becomes the
           top of the stack */
        const node = this.top;
        this.top = node.next;
        return node.data;
    }

    peek() {

    }

    isEmpty() {
        return this.top === null
    }


    display() {

    }
}

function is_palindrome(str) {
    const clean_source = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
    const pStack = new Stack()

    for (let i = 0; i < clean_source.length; i++) {
        const chr = clean_source.charAt(i);
        pStack.push(chr)
    }

    let reverse = ''

    while (!pStack.isEmpty()) {
        reverse = reverse + pStack.pop()
    }
    return clean_source === reverse
}

// console.log(is_palindrome('Dad!!!'))
// console.log(is_palindrome('A man, a plan, a canal: Panama'))
// console.log(is_palindrome('Tauhida'))


function matchingParentheses(string) {
    const stack = new Stack();
    const map = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }

    for (let i = 0; i < string.length; i++) {
        let key = string.charAt(i)

        if (key === '(' || key === '[' || key === '{') {
            stack.push(map[key])
        } else {
            if (stack.isEmpty() || key !== stack.pop()) {
                return false
            }
        }
    }
    return stack.isEmpty()
}

console.log(matchingParentheses('[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]'))