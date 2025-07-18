package LinkedList.Mediam;
 // Definition for singly-linked list.
 import java.util.List;
 import java.util.ArrayList;
 import java.util.Collections;
  public class ListNode {
      int val;
      ListNode next;
      ListNode() {}
      ListNode(int val) { this.val = val; }
      ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 }


public class q445 {private ListNode rev(ListNode head){
    ListNode prev = null;
    ListNode curr = head;
    while (curr != null) {
        ListNode next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        l1= rev(l1);
        l2=rev(l2);
        int carry=0;
       
        ListNode dummy=new ListNode();
        ListNode temp=dummy;
        while(l1!=null || l2!=null){
            int x =(l1!=null) ? l1.val: 0;
            int y=(l2!=null) ? l2.val: 0;
            int s=x+y+carry;
            carry=s/10;
            temp.next=new ListNode(s%10);
            temp=temp.next;
            if(l1!=null) l1=l1.next;
            if(l2!=null) l2=l2.next;
        }
        if(carry>0){
        temp.next=new ListNode(carry);
         }
    return   rev(dummy.next);

    }
}