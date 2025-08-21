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
class q61 {
    public ListNode rotateRight(ListNode head, int k) {
        if (head == null || head.next == null || k == 0) {
            return head;
        }

        ListNode temp = head;
        int s = 0;
        while (temp != null) {
            temp = temp.next;
            s++;
        }

        k = k % s;
        int p = s - k; 

        List<Integer> list = new ArrayList<>(); 
        List<Integer> list1 = new ArrayList<>();

        temp = head;
        int c = 0;
        while (temp != null) {
            if (c >= p) {
                list.add(temp.val);   
    
            } else {
                list1.add(temp.val); 
            }
            c++;
            temp = temp.next;
        }

        list.addAll(list1);

        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;
        for (int val : list) {
            curr.next = new ListNode(val);
            curr = curr.next;
        }

        return dummy.next;
    }
}
