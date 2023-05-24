type QNode<T> = {
    data: T;
    next?: QNode<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: QNode<T>;
    private tail?: QNode<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        this.length++;
        if (!this.head || !this.tail) {
            this.head = {
                data: item,
            };
            this.tail = this.head;
            return;
        }

        this.tail.next = {
            data: item,
        };
        this.tail = this.tail.next;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;
        const dequedItem = this.head;
        this.head = this.head.next;


        if (this.length === 0) {
          this.tail = undefined;
        }

        return dequedItem.data;
    }

    peek(): T | undefined {
        return this.head?.data;
    }
}
