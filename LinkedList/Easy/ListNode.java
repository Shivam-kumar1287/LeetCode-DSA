 public class ListNode {
      int val;
      ListNode next;
      ListNode() {}
      ListNode(int val) { this.val = val; }
      ListNode(int val, ListNode next) { this.val = val; this.next = next; }
  }
 
class q22 {
    public int getDecimalValue(ListNode head) {
       ListNode t=head;
       StringBuilder sb=new StringBuilder();
       while(t!=null) {
           sb.append(t.val);
           t=t.next;
       }
       if(sb.length()==0){
        return 0;
       }
       //int num=parseInteger(sb);
        int decimalValue = Integer.parseInt(sb.toString(), 2);
        return decimalValue;


    }
}