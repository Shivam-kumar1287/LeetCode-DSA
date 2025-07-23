import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Iterator;

class q71 {
    public String simplifyPath(String path) {
        Deque<String> stack = new ArrayDeque<>();
        String[] parts = path.split("/");

        for (String part : parts) {
            if (part.equals("") || part.equals(".")) {
                continue;
            } else if (part.equals("..")) {
                if (!stack.isEmpty()) {
                    stack.pop();
                }
            } else {
                stack.push(part);
            }
        }

        StringBuilder result = new StringBuilder();
        Iterator<String> iterator = stack.descendingIterator();
        while (iterator.hasNext()) {
            result.append("/").append(iterator.next());
        }

        return result.length() == 0 ? "/" : result.toString();
    }
}