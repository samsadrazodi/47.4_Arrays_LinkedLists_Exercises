/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if(!this.head){
        this.head = newNode;
        this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if(!this.head){
        this.head = newNode;
        this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    try{
      if(!this.head){
          console.error('List Empty!')
      }

      if(this.head === this.tail){
        let deletedNode = this.head;
        this.head = null;
        this.tail = null;

        this.length -= 1;
        return deletedNode.val;
      }else if(this.length ==2){
        let deletedNode = this.tail;
        this.tail = this.head;
        this.length -= 1;
        return deletedNode.val;
      }else{
        let currentNode = this.head;
  
        while(currentNode.next.next !== null){
            currentNode = currentNode.next
        
            }
        let deletedNode = currentNode.next;
        this.tail = currentNode;
        currentNode.next = null;
        
        this.length -= 1;
        return deletedNode.val;
      }

      }catch(e){
          return e;
      }
  }

  /** shift(): return & remove first item. */

  shift() {
    try{
      if(!this.head){
          throw new Error('List Empty!')
      }

      if(this.head === this.tail){
        let deletedNode = this.head;
        this.head = null;
        this.tail = null;

        this.length -= 1;
        return deletedNode.val;
      }else{
        
        let deletedNode = this.head;
        let newHead = deletedNode.next;
        
        this.head = newHead
  
        this.length -= 1;

        return deletedNode.val;
      }

  }catch(e){
      return e;
  }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    try{
      if(idx<0 || idx>= this.length){
          throw new Error('invalid index!')
      }
      let currentNode = this.head;
  for(let i=0; i<idx ; i++){
      currentNode = currentNode.next
  }

  return currentNode.val;
  }catch(e){
      return e;
  }
  
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    try{
            
      if(idx<0 || idx>= this.length){
          throw new Error('invalid index!')
      }
      
      let currentNode = this.head;
      
      for(let i=0; i<idx ; i++){
          currentNode = currentNode.next
      }

      currentNode.val = val;
      
      
  }catch(e){
       return e;
  }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    try{
      if(idx<0 || idx> this.length+1){
          throw new Error('invalid index!')
      }
      if(this.head === null){
        let newNode = new Node(val);
        this.head = newNode;
        this.tail = newNode;
        this.length +=1;
      }else if(idx === this.length){
        let newNode  = new Node(val);
        let currentNode = this.head;
        while(currentNode.next !== null){
            currentNode = currentNode.next;
        }
        //console.log('lastcurrentnode: ', currentNode)
        currentNode.next = newNode;
        this.tail = newNode;
        this.length +=1 ;
          
      }else{
        let currentNode = this.head;
        let newNode = new Node(val);
        for(let i=0; i<idx-1 ; i++){
            console.log('current node', currentNode)
            currentNode = currentNode.next
        }
        
        // console.log('before the idx: ',currentNode.val)
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        
        this.length += 1;
      }

      
  }catch(e){
       return e;
  } 
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    try{
      if(idx<0 || idx>= this.length){
          throw new Error('invalid index!')
      }
      if(this.head === this.tail){
        this.head = null;
        this.tail = null;
        this.length -= 1;
      }else{
        let currentNode = this.head;
      
        for(let i=0; i<idx-1 ; i++){
            currentNode = currentNode.next
        }
        currentNode.next = currentNode.next.next;
        // console.log('1 before the removed node:', currentNode.val)
        // currentNode.next = null;
        // console.log('before the idx: ',currentNode.val)
        
        // console.log('its next new node: ', currentNode.next)
        this.length -= 1;
      }

      
  }catch(e){
       return e;
  } 
  }

  /** average(): return an average of all values in the list */

  average() {
    if(!this.head){
      return 0;
    }
    let sum = 0;
    let currentNode = this.head;
    while(currentNode){
        sum += currentNode.val;
        currentNode = currentNode.next;
    }
    return sum/this.length;
  }
}

module.exports = LinkedList;
