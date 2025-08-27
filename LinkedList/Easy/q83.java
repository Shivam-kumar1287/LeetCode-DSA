/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class q83 {
    public ListNode deleteDuplicates(ListNode head) {
                if (head == null) return null;

        ListNode temp=head;
        HashSet<Integer> set=new HashSet<>();
        ListNode Dummy=new ListNode(0);
        ListNode curr = Dummy;        
        while(temp!=null){
         int va=temp.val;
         if(!set.contains(va)){
            set.add(va);
            curr.next=new ListNode(va);
            curr=curr.next;
         }
         temp=temp.next;
        }

return Dummy.next;

    }
}