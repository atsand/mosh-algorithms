import LinkedList from './classes/LinkedList';

function main() {
  let linkedList = new LinkedList();

  linkedList.addLast(10);
  linkedList.addLast(20);
  linkedList.addLast(30);
  linkedList.addLast(40);
  
  console.log('hi', linkedList.getKthFromTheEnd(4));
}

main();