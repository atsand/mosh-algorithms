import LinkedList from './classes/LinkedList';

function main() {
  let linkedList = new LinkedList();

  console.log('hdi', linkedList.getSize());
  linkedList.addLast(10);
  linkedList.addLast(20);
  linkedList.addLast(30);
  linkedList.addFirst(40);
  console.log('hdi', linkedList.getSize());
  linkedList.deleteLast();

  console.log('hi', linkedList.toArray());
}

main();