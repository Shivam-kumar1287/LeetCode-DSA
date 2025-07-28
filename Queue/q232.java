import java.util.Stack;
public class q232 {

    public class myQueue{
        private Stack<Integer> stack1;
        private Stack<Integer> stack2;
        public myQueue(){
            stack1=new Stack<>();
            stack2=new Stack<>();
        }
        public int push(int x)
        {
            stack1.push(x);
            return x;
        }
        public int pop(){
            if(stack2.isEmpty()){
                while(!stack1.isEmpty()){
                    stack2.push(stack1.pop());
                }
            }
            return stack2.pop();
        }
        public int peek(){
            if(stack2.isEmpty()){

                while(!stack1.isEmpty()){
                    stack2.push(stack1.pop());
                }
            }
            return stack2.peek();
        }
        public boolean empty(){
            return stack1.isEmpty() && stack2.isEmpty();
        }
    }
    public static void main(String[] args) {
        q232 queue = new q232();
        myQueue myQueue = queue.new myQueue();
        myQueue.push(1);
        myQueue.push(2);
        System.out.println(myQueue.peek()); // Output: 1
        System.out.println(myQueue.pop());  // Output: 1
        System.out.println(myQueue.empty()); // Output: false
        myQueue.push(3);
        System.out.println(myQueue.peek()); // Output: 2
        
    }
}
