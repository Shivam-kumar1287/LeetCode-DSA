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
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        if(lists==null || lists.length==0){
            return null;
        }
        List<Integer> list=new ArrayList<>();
        
         for (ListNode node : lists) {
            while (node != null){
             list.add(node.val);
             node =node.next;
             }
        }
        ListNode dummy=new ListNode(-1);
        ListNode temp=dummy;
        Collections.sort(list);

        for(int val:list){
            temp.next=new ListNode(val);
            temp=temp.next;
        }
        return dummy.next;
    }
}