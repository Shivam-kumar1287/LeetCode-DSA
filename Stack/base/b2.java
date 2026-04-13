//create stack using two queues
import java.util.LinkedList;
class b2{
    LinkedList<Integer> q1;
    LinkedList<Integer> q2;
    b2(){
        q1=new LinkedList<>();
        q2=new LinkedList<>();
    }
    void push(int x){
        q1.add(x);
    }
    int pop(){
        while(q1.size()>1){
            q2.add(q1.remove());
        }
        int res=q1.remove();
        LinkedList<Integer> temp=q1;
        q1=q2;
        q2=temp;
        return res;
    }
    int top(){
        while(q1.size()>1){
            q2.add(q1.remove());
        }
        int res=q1.peek();
        q2.add(q1.remove());
        LinkedList<Integer> temp=q1;
        q1=q2;
        q2=temp;
        return res;
    }
    boolean empty(){
        return q1.isEmpty();
    }
    public static void main(String[] args) {
        b2 s=new b2();
        s.push(1);
        s.push(2);
        System.out.println(s.top());
        System.out.println(s.pop());
        System.out.println(s.empty());
    }
}