//create a stack using one queue
import java.util.LinkedList;
class b1{
    LinkedList<Integer> q;
    b1(){
        q=new LinkedList<>();
    }
    void push(int x){
        q.add(x);
        for(int i=0;i<q.size()-1;i++){
            q.add(q.remove());
        }
    }
    int pop(){
        return q.remove();
    }
    int top(){
        return q.peek();
    }
    boolean empty(){
        return q.isEmpty();
    }
    public static void main(String[] args) {
        b1 s=new b1();
        s.push(1);
        s.push(2);
        System.out.println(s.top());
        System.out.println(s.pop());
        System.out.println(s.empty());
    }
}