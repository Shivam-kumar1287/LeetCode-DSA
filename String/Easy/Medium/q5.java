class q5 {
    public String longestPalindrome(String s) {
        int n = s.length();
        String longest = "";
        
        for (int i = 0; i < n; i++) {
            String odd = expandPalindrome(s, i, i);
            if (odd.length() > longest.length()) {
                longest = odd;
            }
            
            String even = expandPalindrome(s, i, i + 1);
            if (even.length() > longest.length()) {
                longest = even;
            }
        }
        
        return longest;
    }
    
    private String expandPalindrome(String s, int left, int right) {
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            left--;
            right++;
        }
        return s.substring(left + 1, right);
    }
}