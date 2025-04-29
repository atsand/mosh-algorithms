import LinkedList from './classes/LinkedList';

function main() {
  let linkedList = new LinkedList();

  linkedList.addLast(10);
  linkedList.addLast(20);
  linkedList.addLast(30);
  linkedList.addLast(40);
  linkedList.reverse()
  console.log('hi', linkedList);
}

main();