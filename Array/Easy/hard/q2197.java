import java.util.*;

class q2197 {
    public List<Integer> replaceNonCoprimes(int[] nums) {
        Stack<Integer> st = new Stack<>();
        
        for (int n : nums) {
            st.push(n);
            
            while (st.size() > 1) {
                int f = st.pop();
                int s = st.pop();
                int gcd = findgcd(f, s);
                
                if (gcd > 1) {
                    long lcm = (long)f * s / gcd; 
                      st.push((int)lcm);
                } else {
                    st.push(s);
                    st.push(f);
                    break;
                }
            }
        }
        
        List<Integer> list = new ArrayList<>();
        while (!st.isEmpty()) {
            list.add(st.pop());
        }
        Collections.reverse(list);
        return list;
    }
    
    private int findgcd(int a, int b) {
        if (b == 0) return a;
        return findgcd(b, a % b);
    }
}
