//create a queue using  stacks
class b3{
    
    Stack<Integer> s1;
    Stack<Integer> s2;
    b3(){
        s1=new Stack<>();
        s2=new Stack<>();
    }
    void push(int x){
        s1.push(x);
    }
    int pop(){
        if(s2.isEmpty()){
            while(!s1.isEmpty()){
                s2.push(s1.pop());
            }
        }
        return s2.pop();
    }
    int peek(){
        if(s2.isEmpty()){
            while(!s1.isEmpty()){
                s2.push(s1.pop());
            }
        }
        return s2.peek();
    }
    boolean empty(){
        return s1.isEmpty() && s2.isEmpty();
    }
    public static void main(String[] args) {
        b3 q=new b3();
        q.push(1);
        q.push(2);
        System.out.println(q.peek());
        System.out.println(q.pop());
        System.out.println(q.empty());
    }
}