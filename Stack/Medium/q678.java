package Medium;
public class q678 {
    public boolean checkValidString(String s) {
        int low = 0; 
        int high = 0; 
        
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c == '(') {
                low++;
                high++;
            } else if (c == ')') {
                low--;
                high--;
            } else if (c == '*') {
                low--;
                high++;
            }
            
            if (high < 0) {
                return false;
            }
            low = Math.max(low, 0);
        }
        
        return low == 0;
    }
    public static void main(String[] args) {
        q678 solution = new q678();
        String testString = "(*))";
        boolean result = solution.checkValidString(testString);
        System.out.println("Is the string \"" + testString + "\" valid? " + result);
    }
}
