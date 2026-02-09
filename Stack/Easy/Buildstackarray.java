public class Buildstackarray {
    int top;
    int capacity=10;
    int[] arr=new int[capacity];
    int min=-1;
    int max=-1;

    public boolean isEmpty(){
        return top==-1;
    }
    public void push(int x){
        if(top==capacity-1){
            System.out.println("Stack Overflow");
            return;
        }
        if(min==-1 || x<min){
            min=x;
        }
        if(max==-1 || x>max){
            max=x;
        }
        arr[++top]=x;
    }
    public void pop(){
        if(isEmpty()){
            System.out.println("Stack Underflow");
            return;
        }
        top--;
    }
    public int peek(){
        if(isEmpty()){
            System.out.println("Stack is empty");
            return -1;
        }
        return arr[top];
    }
    public void display(){
        if(isEmpty()){
            System.out.println("Stack is empty");
            return;
        }
        for(int i=top;i>=0;i--){
            System.out.println(arr[i]);
        }
        System.out.println("Min: "+min+" Max: "+max);
    }

    
public static void main(String[] args) {
    Buildstackarray s=new Buildstackarray();
    s.push(10);
    s.push(20);
    s.push(30);
    s.display();
    System.out.println(s.peek());
    s.pop();
    System.out.println(s.peek());
    s.pop();
    s.pop();
    s.pop();
    System.out.println(s.isEmpty());
}
}
