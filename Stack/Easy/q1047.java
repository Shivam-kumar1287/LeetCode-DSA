class q1047{
    class Solution {
    public String removeDuplicates(String s) {
        Stack<Character> stack=new Stack<>();
        for(int i=1;i<s.length();i++){
            char c=s.charAt(i);
            if( !stack.isEmpty()&& stack.peek()==c){
            stack.pop();
            }
            
            else{
                stack.push(c);
        }

        }
        StringBuilder sb=new StringBuilder();
        for(char c:stack){
            sb.append(c);
        }

        return sb.toString();
    }
}
}