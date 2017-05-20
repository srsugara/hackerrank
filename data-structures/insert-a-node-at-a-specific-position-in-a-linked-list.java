/*
  Insert Node at a given position in a linked list 
  head can be NULL 
  First element in the linked list is at position 0
  Node is defined as 
  class Node {
     int data;
     Node next;
  }
*/
    

Node InsertNth(Node head, int data, int position) {
    Node n = new Node();
    n.data = data;
    Node current = head;
    Node prev = head;
    int count = 0;
    
    while(count != position) {
        prev=current;
        current=current.next;
        count++;
    }
    
    if(position == 0) {
        n.next = head;
        head=n;
    }else{
        n.next=current;
        prev.next=n;
    }
    
    return head;
}
