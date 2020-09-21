import LinkedList from '../linked-list/LinkedList';

export default class Queue {
  constructor() {
    // We're going to implement Queue based on LinkedList since the two
    // structures are quite similar. Namely, they both operate mostly on
    // the elements at the beginning and the end. Compare enqueue/dequeue
    // operations of Queue with append/deleteHead operations of LinkedList.
    this.lst = [];
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return this.lst.length === 0;
  }

  /**
   * Read the element at the front of the queue without removing it.
   * @return {*}
   */
  peek() {
    if (this.lst.length !== 0) {
      return this.lst[0];
    }

    return false;
  }

  /**
   * Add a new element to the end of the queue (the tail of the linked list).
   * This element will be processed after all elements ahead of it.
   * @param {*} value
   */
  enqueue(value) {
    for (let i = 0; i < this.length - 1; i++){
      this.lst[i + 1] = this.lst[i];
    }
    this.lst[0] = value;
  }   

  /**
   * Remove the element at the front of the queue (the head of the linked list).
   * If the queue is empty, return null.
   * @return {*}
   */
  dequeue() {
    if (this.lst.length === 0){
      return null;
    }
    const first = this.lst[0];
    for (let i = 1; i < this.length; i++){
      this.lst[i - 1] = this.lst[i];
    }
    return first;
  }

  /**
   * @param [callback]
   * @return {string}
   */
  toString(callback) {
    // Return string representation of the queue's linked list.
    return this.lst.toString(callback);
  }
}
