/*
Detect a cycle in a linked list. Note that the head pointer may be 'null' if the list is empty.

A Node is defined as: 
    class Node {
        int data;
        Node next;
    }
*/

boolean hasCycle(Node head) {
    Node temp1=new Node();
    temp1=head;
    Node temp2=new Node();
    temp2=head;
    boolean result=false;
    while(temp1!=null && temp1.next!=null){
       temp1=temp1.next.next;
       temp2=temp2.next;
        if(temp1==temp2){
            result=true;
            break;
        }
    }
    return result;
}
