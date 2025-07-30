import java.util.*;

public class q25 {

      public class ListNode {
   int val;
      ListNode next;
      ListNode() {}
      ListNode(int val) { this.val = val; }
      ListNode(int val, ListNode next) { this.val = val; this.next = next; }
  }
    public ListNode reverseKGroup(ListNode head, int k) {
        int count = 0;
        ListNode t = head;
        while (t != null) {
            count++;
            t = t.next;
        }

        if (count < k) return head;

        List<Integer> l1 = new ArrayList<>();
        List<Integer> resultList = new ArrayList<>();
        ListNode temp = head;
        int groupCount = 0;

        while (temp != null) {
            l1.add(temp.val);
            groupCount++;

            if (groupCount == k) {
                Collections.reverse(l1);     
                resultList.addAll(l1);       
                l1.clear();                 
                groupCount = 0;
            }

            temp = temp.next;
        }

        resultList.addAll(l1);

        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;

        for (int val : resultList) {
            curr.next = new ListNode(val);
            curr = curr.next;
        }

        return dummy.next;
    }
    public static void main(String[] args) {
        
    }
}
