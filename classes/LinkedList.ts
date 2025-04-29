class LinkedList {
  private static MyNode = class {
    private value: number;
    private next: InstanceType<typeof LinkedList.MyNode> | null;

    constructor(value: number) {
      this.value = value;
      this.next = null;
    };

    public getValue(): number {
      return this.value;
    };

    public getNext(): InstanceType<typeof LinkedList.MyNode> | null {
      return this.next;
    };

    public setNext(value: InstanceType<typeof LinkedList.MyNode> | null): void {
      this.next = value;
    };
  };
  
  private first: InstanceType<typeof LinkedList.MyNode> | null;
  private last: InstanceType<typeof LinkedList.MyNode> | null;
  private size: number = 0;

  constructor() {
    this.first = null;
    this.last = null;
  };

  private isEmpty(): boolean {
    return this.first === null;
  };

  private getPrevious(node: InstanceType<typeof LinkedList.MyNode>): InstanceType<typeof LinkedList.MyNode> | null {
    let current = this.first;

    while (current !== null) {
      if (current.getNext() === node) {
        return current;
      } else {
        current = current.getNext();
      }
    }

    return null;
  }

  // addFirst
  public addFirst(value: number): void {
    let node = new LinkedList.MyNode(value);

    if (this.isEmpty()) {
      this.first = node;
      this.last = node;
    } else {
      node.setNext(this.first);
      this.first = node;
    }

    this.size++;
  };

  // addLast
  public addLast(value: number): void {
    let node = new LinkedList.MyNode(value);

    if (this.isEmpty()) {
      this.first = node;
      this.last = node;
    } else {
      this.last?.setNext(node);
      this.last = node;
    }

    this.size++;
  };

  // deleteFirst
  public deleteFirst(): void {
    if (this.isEmpty()) {
      throw Error('No element found');
    } else {
      this.first = this.first.getNext();

      if (this.first === null) {
        this.last = null;
      };

      this.size--;
    };
  };

  // deleteLast
  public deleteLast(): void {
    let current = this.first;
    let previous: InstanceType<typeof LinkedList.MyNode> | null;

    if (this.isEmpty()) {
      throw Error('No element found');
    }
    
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      previous = this.getPrevious(this.last);
      
      if (previous !== null) {
        previous.setNext(null);
      };

      this.last = previous;
    };

    this.size--;
  };

  // contains
  public contains(value: number): boolean {
    return this.indexOf(value) > -1;
  };

  // indexOf
  public indexOf(value: number): number {
    let index = 0;
    let current = this.first;

    while (current !== null) {
      if (current.getValue() === value) {
        return index;
      };
      current = current.getNext();
      index++;
    }

    return -1;
  };

  public getSize(): number {
    return this.size;
  };

  public toArray(): Array<number> {
    let newArray = [];
    let current = this.first;

    while (current !== null) {
      newArray.push(current.getValue());

      current = current.getNext();
    };

    return newArray;
  };

  public reverse(): void {
    let current = this.first.getNext();
    let next: InstanceType<typeof LinkedList.MyNode> | null;
    let previous: InstanceType<typeof LinkedList.MyNode> | null = this.first;

    if (this.isEmpty()) {
      throw Error('Unable to reverse empty LinkedList');
    };

    if (this.first === this.last) {
      return;
    };

    while (current !== null) {
      next = current.getNext();
      current.setNext(previous);
      previous = current;
      current = next;
    };

    this.last = this.first;
    this.last.setNext(null);
    this.first = previous;

    // My first attempt
    // while (current !== null) {
    //   next = current.getNext();

    //   if (current === this.first) {
    //     current.setNext(previous);

    //     this.last = current;
    //     previous = current;
    //     current = next;
    //   } else if (next === null) {
    //       current.setNext(previous);

    //       this.first = current;
    //       current = next;
    //     } else {
    //     current.setNext(previous);

    //     previous = current;
    //     current = next;
    //   }
    // }
  }
};

export default LinkedList;