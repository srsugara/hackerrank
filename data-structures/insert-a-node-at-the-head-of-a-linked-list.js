
/*
  Insert Node at the beginning of a linked list
  head pointer input could be NULL as well for empty list
  Node is defined as
  var Node = function(data) {
      this.data = data;
      this.next = null;
  }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function insert(head, data) {
    value=new Node(data);
    temp=new Node();
    if(head==null){
       temp=value;
    }else{        
        temp.data=data
        temp.next=head
    }
    return temp
}
