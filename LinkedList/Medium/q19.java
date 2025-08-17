/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *        ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class q19 {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        
     int c=0;
     ListNode temp=head;

     while(temp!=null){
        c++;
        temp=temp.next;
     }
     int index=c-n+1;
     if(index==1){
        return head.next;
     }
    int  c1=1;
    ListNode t=head;
    while(t!=null){
        if(c1==index-1){
        t.next=t.next.next;
        break;
     }
        t=t.next;
        c1++;
     
    }
       return head;    
    }
}