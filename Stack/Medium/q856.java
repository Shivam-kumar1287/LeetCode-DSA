class q856 {
    public int scoreOfParentheses(String s) {
        Stack<Integer> st = new Stack<>();
        st.push(0);
        for (char ch : s.toCharArray()) {
            if (ch == '(') {
                st.push(0);
            } else {
                int v = st.pop();
                int score = (v == 0) ? 1 : 2 * v;
                st.push(st.pop() + score);
            }    
        }
        return st.pop();
    }
}