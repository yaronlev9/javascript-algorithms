export default class PriorityQueue {
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
      return this.lst[0].item;
    }

    return null;
  }  

  /**
   * Remove the element at the front of the queue (the head of the linked list).
   * If the queue is empty, return null.
   * @return {*}
   */
  poll() {
    if (this.lst.length === 0){
      return null;
    }
    const first = this.lst.shift();
    return first.item;
  }

  /**
   * @param [callback]
   * @return {string}
   */
  toString(callback) {
    return this.lst.toString(callback);
  }

  /**
   * Add item to the priority queue.
   * @param {*} item - item we're going to add to the queue.
   * @param {number} [priority] - items priority.
   * @return {PriorityQueue}
   */
  add(item, priority = 0) {
    this.lst.push({'item':item, 'priority':priority});
    let partition = this.lst.length - 1;
    for (let i = 0; i < this.lst.length; i++){
      if (priority < this.lst[i].priority){
        partition = i;
        break;
      }
    }
    let temp;
    for (let i = this.lst.length - 1; i > partition; i--){
      temp = this.lst[i];
      this.lst[i] = this.lst[i - 1];
      this.lst[i - 1] = temp;
    }
    return this;
  }

  /**
   * Change priority of the item in a queue.
   * @param {*} item - item we're going to re-prioritize.
   * @param {number} priority - new item's priority.
   * @return {PriorityQueue}
   */
  changePriority(item, priority) {
    if (this.hasValue(item)){
      let index;
      for (let i = 0; i < this.lst.length; i++){
        if (item === this.lst[i].item){
          index = i;
          break;
        }
      }
      this.lst.splice(index, 1);
    }
    this.add(item, priority);
    return this;
  }

  /**
   * Check if item already exists in a queue.
   * @param {*} item
   * @return {boolean}
   */
  hasValue(item) {
    for (let i = 0; i < this.lst.length; i++){
      if (this.lst[i].item === item){
        return true;
      }
    }
    return false;
  }
}
