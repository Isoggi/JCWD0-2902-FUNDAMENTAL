/** @format */

const list = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: null,
      },
    },
  },
};

class Node2 {
  public element: string;
  public next: any = null;
  constructor(element: string) {
    this.element = element;
    this.next = null;
  }
}

//{ element: "a", next: null}
// { head: { element: "a", next: null} , size : 0 }
//{ element: "b", next: null}
//current = { element: "a", next: null} // pointer
//current.next = { element: "b", next: null}
// { head: { element: "a", next: { element: "b", next: null}} , size : 0 }

//{ element: "c", next: null}
//current = { element: "a", next: { element: "b", next: null}}
//current = { element: "b", next: null}
//current.next = { element: "c", next: null}

//{ head: { element: "a", next: { element: "b", next: { element: "c", next: null}}} , size : 0 }
//insert at 0 , elementnya = d
//node = { elemenet: "d", next:null}
// node.next = this.head
// { elemenet: "d", next:{ element: "a", next: { element: "b", next: { element: "c", next: null}}} , size : 0 }}

//insert at 1, elementnya "e"
// {element: "e", next:null }
//curr =  { elemenet: "d", next:{ element: "a", next: { element: "b", next: { element: "c", next: null}}} , size : 0 }}

//prev = { elemenet: "d", next:{ element: "a", next: { element: "b", next: { element: "c", next: null}}}
//curr = { element: "a", next: { element: "b", next: { element: "c", next: null}}}

//prev =  { element: "a", next: { element: "b", next: { element: "c", next: null}}}
//curr = { element: "b", next: { element: "c", next: null}}

//prev =  { element: "a", next: {element: "e", next:null }}
//node = {element: "e", next: { element: "b", next: { element: "c", next: null}}}

// { element: "a", next: {element: "e", next: { element: "b", next: { element: "c", next: null}}}}

//remove at 0
// { head : { element: "a", next: {element: "e", next: { element: "b", next: { element: "c", next: null}}}}}
//curr = { element: "a", next: {element: "e", next: { element: "b", next: { element: "c", next: null}}}}
///head = curr.next
//head =  {element: "e", next: { element: "b", next: { element: "c", next: null}}

//remove b
//head =  {element: "e", next: { element: "b", next: { element: "c", next: null}}
//curr = {element: "e", next: { element: "b", next: { element: "c", next: null}}
//prev = null

//prev = {element: "e", next: { element: "b", next: { element: "c", next: null}}
//curr = { element: "b", next: { element: "c", next: null}}
// b == curr.element
//prev.next = { element: "c", next: null}

//{element: "e", next: { element: "c", next: null}}

//indexof "c"
//count = 0
//head = {element: "e", next: { element: "c", next: null}}
//curr = {element: "e", next: { element: "c", next: null}}
// curr.element == "c" false c

//count = 1
// curr =  { element: "c", next: null}
// curr.element == "c" true
//return count = 1

//index of "z"
//curr = {element: "e", next: { element: "c", next: null}}
// curr.element == "z" false e

//count = 1
// curr =  { element: "c", next: null}
// curr.element == "z" false c

//count  = 2
// curr =  null

// return -1

class LinkedList {
  public head: Node2 | null;
  public size: number = 0;
  constructor() {
    this.head = null;
  }

  addElement(element: string) {
    let node = new Node2(element);
    let current: Node2;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current?.next) {
        current = current?.next;
      }
      current.next = node;
    }
    this.size++;
  }

  printList() {
    let curr = this.head;
    while (curr) {
      console.log(curr.element);
      curr = curr.next;
    }
  }

  insertAt(element: string, index: number) {
    if (index < 0 || index > this.size) {
      return console.log("please enter a valid index");
    } else {
      const node = new Node2(element);
      let curr = this.head;

      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        let prev: Node2 | null = null;
        for (let i = 0; i < index; i++) {
          prev = curr;
          curr = curr?.next;
        }
        if (prev) prev.next = node;
        node.next = curr;
      }
    }
    this.size++;
  }
  removeAt(index: number) {
    if (index < 0 || index > this.size) {
      return console.log("please enter a valid index");
    } else {
      let curr = this.head;

      if (index === 0) {
        if (curr?.next) this.head = curr.next;
      } else {
        let prev: Node2 | null = null;
        for (let i = 0; i < index; i++) {
          prev = curr;
          curr = curr?.next;
        }
        if (prev) prev.next = curr?.next;
      }
    }
    this.size--;
  }

  removeElement(element: string) {
    let curr: Node2 | null = this.head;
    let prev: Node2 | null = null;

    while (curr) {
      if (curr.element == element) {
        if (!prev) {
          this.head = curr.next;
        } else {
          prev.next = curr.next;
        }
        this.size--;

        return curr.element;
      }
      prev = curr;
      curr = curr.next;
    }
    return null;
  }

  indexOf(element: string) {
    let count = 0;
    let curr = this.head;

    while (curr) {
      if (curr.element === element) return count;
      count++;
      curr = curr.next;
    }
    return -1;
  }
}
//{ head :null}
// add element("a")
// "a" => { element: "a" , next:null }

const ll = new LinkedList();
ll.addElement("b");
ll.addElement("c");

ll.insertAt("a", 0);
ll.insertAt("e", 1);
ll.removeAt(0);

ll.printList();
ll.removeAt(1);

ll.removeElement("c");
console.log("======");
ll.insertAt("z", 0);

ll.printList();

console.log(ll.indexOf("e"));
