/*
    Detect a cycle in a Linked List.
    Note that the head may be 'null' if the list is empty.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function hasCycle(head) {
    temp1=new Node();
    temp1=head;
    temp2=new Node();
    temp2=head;
    var result=0;
    while(temp1!=null && temp1.next!=null){
       temp1=temp1.next.next;
       temp2=temp2.next;
        if(temp1==temp2){
            result=1
            break;
        }
    }
    return result
}
