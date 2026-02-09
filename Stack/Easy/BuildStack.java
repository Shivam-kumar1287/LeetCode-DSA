
import java.util.ArrayList;

public class BuildStack {
    ArrayList<Integer> stack=new ArrayList<>() ;
    int top=-1;
    void push(int x){
        stack.add(x);
        top++;
    }
    void pop(){
        if(top==-1){
            System.out.println("Stack is empty");
            return;
        }
        stack.remove(top);
        top--;
    }
    int peek(){
        if(top==-1){
            System.out.println("Stack is empty");
            return -1;
        }
        return stack.get(top);
    }
    boolean isEmpty(){
        return top==-1;
    }
    public static void main(String[] args) {
        BuildStack s=new BuildStack();
        s.push(10);
        s.push(20);
        s.push(30);
        System.out.println(s.peek());
        s.pop();
        System.out.println(s.peek());
        s.pop();
        s.pop();
        s.pop();
        System.out.println(s.isEmpty());
    }
}
