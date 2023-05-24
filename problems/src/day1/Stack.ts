type SNode<T> = {
    value: T;
    next?: SNode<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: SNode<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        this.length++;
        this.head = {
            value: item,
            next: this.head,
        };
    }
    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;

        const value = this.head.value;
        this.head = this.head.next;
        return value;
    }
    peek(): T | undefined {
      return this.head?.value;
    }
}
