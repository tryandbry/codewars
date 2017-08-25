
/* BEGIN function class definition
 *
export function Node(val,next,prev){
  this.val = val;
  this.next = next;
  this.prev = prev;
}

export function LinkedList(val){
  let newNode = new Node(val);
  this.head = newNode;
  this.tail = newNode;
  this.length = 1;
}

LinkedList.prototype.pushToHead = function(val){
  let newNode = new Node(val,this.head);
  this.head.prev = newNode;
  this.head = newNode;
  this.length++;
  return newNode;
}

LinkedList.prototype.pushToTail = function(val){
  let newNode = new Node(val,undefined,this.tail);
  this.tail.next = newNode;
  this.tail = newNode;
  this.length++;
  return newNode;
}

LinkedList.prototype.popNode = function(node){
  this.length--;
  if(node === this.head) {
    this.head.next.prev = null;
    this.head = this.head.next;
    return node;
  }
  else if(node === this.tail) {
    this.tail.prev.next = null;
    this.tail = this.tail.prev;
    return node;
  }
  else {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    return node;
  }
}
 *
 * END function class definition */
export class Node {
  constructor(val,next,prev){
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

export class LinkedList {
  constructor(val){
    this.head = new Node(val);
    this.tail = this.head;
    this.length = 1;
  }

  pushToHead(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this.head;
  }

  pushToTail(val) {
    let newNode = new Node(val);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.tail;
  }

  popNode(node) {
    if(node === this.head) {
      this.head.next.prev = null;
      this.head = this.head.next;
    }
    else if(node === this.tail) {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    }
    else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
    this.length--;
    return node;
  }
}


export const dedupeList = (list) => {
  let hash = {};
  let currentNode = list.head;
  while(currentNode){
    if(hash[currentNode.val]) list.popNode(currentNode);
    else hash[currentNode.val] = true;

    currentNode = currentNode.next;
  }
}

export const dedupeListNoBuffer = (list) => {
  let currentNode = list.head;
  while(currentNode){
    let backRunner = currentNode.prev;
    while(backRunner) {
      if(backRunner.val === currentNode.val) {
        list.popNode(currentNode);
        break;
      }
      backRunner = backRunner.prev;
    }
    currentNode = currentNode.next;
  }
}






















