export default class DoublyLinkedList<T> {
  public length: number;
  private head: ListNode<T> | undefined;
  private tail: ListNode<T> | undefined;

  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
  }

  prepend(item: T): void {
    if (!this.head) {
      this.head = {
        next: undefined,
        prev: undefined,
        value: item,
      };
      this.tail = this.head;
    } else {
      const newHead: ListNode<T> = {
        next: this.head,
        prev: undefined,
        value: item,
      };

      this.head.prev = newHead;
      this.head = newHead;
    }
    this.length++;
  }

  insertAt(item: T, idx: number): void {
    if (idx > this.length || idx < 0) {
      throw new Error("outta hee-ya");
    }

    // handle case where we need to update both head and tail
    if (this.length === 0) {
      this.head = {
        next: undefined,
        prev: undefined,
        value: item,
      };
      this.tail = this.head;
    } else {
      let prev = undefined;
      let curr = this.head;
      let iter = idx;
      while (curr && iter > 0) {
        prev = curr;
        curr = curr.next;
        iter--;
      }

      // inserting at the head
      if (!prev) {
        this.head = {
          next: this.head?.next,
          prev: undefined,
          value: item,
        };
      } else if (!curr) {
        // inserting at tail
        this.tail = {
          next: undefined,
          prev: prev,
          value: item,
        };
      } else {
        const newNode: ListNode<T> = {
          prev,
          next: curr.next,
          value: item,
        };
        prev.next = newNode;
        curr.prev = newNode;
      }
    }
    this.length++;
  }

  append(item: T): void {
    if (this.length === 0) {
      this.head = {
        next: undefined,
        prev: undefined,
        value: item,
      };
      this.tail = this.head;
    } else {
      const newTail: ListNode<T> = {
        next: undefined,
        prev: this.tail,
        value: item,
      };
      this.tail!.next = newTail;
      this.tail = newTail;
    }
    this.length++;
  }

  remove(item: T): T | undefined {
    // if successfully removed then decrement length
    let prev = undefined;
    let curr = this.head;
    while (curr && curr.value !== item) {
      prev = curr;
      curr = curr.next;
    }
    if (!curr) {
      // didn't find it boyyyyy
      return undefined;
    }
    if (!prev) {
      // we're at the head
      this.head = this.head!.next; // this exists otherwis curr would just be undefined
      this.length--;
      return curr.value;
    }
    if (curr === this.tail) {
      prev.next = undefined;
      this.tail = prev;
      this.length--;
      return curr.value;
    }
    prev.next = curr.next;
    curr.next!.prev = prev;
    this.length--;
    return curr.value;
  }

  get(idx: number): T | undefined {
    if (idx >= this.length) {
      return undefined;
    }
    let curr = this.head;
    let iter = idx;
    while (curr && iter > 0) {
      curr = curr.next;
      iter--;
    }
    return curr ? curr.value : curr;
  }

  removeAt(idx: number): T | undefined {
    if (idx < 0 || idx > this.length - 1) {
      return undefined;
    }
    if (this.length === 1) {
      const head = this.head;
      this.head = undefined;
      this.tail = undefined;
      this.length--;
      return head ? head.value : head;
    }
    let prev = undefined;
    let curr = this.head;
    let iter = idx;
    while (curr && iter > 0) {
      prev = curr;
      curr = curr.next;
      iter--;
    }
    if (!curr) {
      return undefined;
    }
    if (!prev) {
      // at the head
      this.head = this.head?.next;
      this.length--;
      return curr!.value;
    }
    if (curr === this.tail) {
      // at the end
      prev.next = undefined;
      this.tail = prev;
      this.length--;
      return curr!.value;
    }
    prev.next = curr!.next;
    curr!.prev = prev;
    this.length--;

    return curr ? curr.value : curr;
  }
}
