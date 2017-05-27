
/*
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
    if(head==null){ 
        head=value
    }
    else{
        tmp=new Node();
        tmp = head;  
        while(tmp.next != null){
            tmp = tmp.next;
        }
        tmp.next = value;
    }
    return head;
}


