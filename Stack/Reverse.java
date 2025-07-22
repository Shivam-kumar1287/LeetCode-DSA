import java.util.Stack;

public class Reverse {
    public static void pushAtBottom(int data, Stack<Integer> stack) {
        if (stack.isEmpty()) {
            stack.push(data);
            return;
        }
        int top = stack.pop();
        pushAtBottom(data, stack);
        stack.push(top);
    }

    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<>();
        stack.push(10);
        stack.push(20);
        stack.push(30);
        System.out.println("Stack before reversing: " + stack);

        Stack<Integer> reversedStack = new Stack<>();
        while (!stack.isEmpty()) {
            int top = stack.pop();
            pushAtBottom(top, reversedStack);
        }
        System.out.println("Stack after reversing: " + reversedStack);
    }
}
