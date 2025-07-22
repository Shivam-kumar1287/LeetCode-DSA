import java.util.*;
public class linkedlist {
   static class Node {
        int head;
        Node next;

        Node(int data) {
            this.head = head;
            this.next = null;
        }

    }
    static Node head = null;
    public static boolean IsEmpty() {
        return head == null;
    }
    public static int push( int data) {
        Node newNode = new Node(data);
        if(IsEmpty()){
            head=newNode;
        
        }
        else{
            Node temp=head;
            temp.next=newNode;
            head=newNode;
        }
        return head.head;
        
    }
    public static int pop(){
        if(IsEmpty()){
            System.out.println("Stack is empty");
            return -1;
        
        }
        Node temp = head;
        while(temp.next != null && temp.next.next != null) {
            temp = temp.next;
        }
        return temp.head;
    }
    public static int peek(){
        if(IsEmpty()){
            System.out.println("Stack is empty");
            return -1;
        }
        return head.head;
    }

    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<>();
        stack.push(10);
        stack.push(20);
        stack.push(30);
        System.out.println("Top element is: " + stack.peek());
        System.out.println("Popped element is: " + stack.pop());
        System.out.println("Top element after pop is: " + stack.peek());
        System.out.println("Popped element is: " + stack.pop());
        System.out.println("Top element after pop is: " + stack.peek());
        System.out.println("Popped element is: " + stack.pop());
        System.out.println("Top element after pop is: " + stack.peek());
    }
}
