    class q2264 {
    public String largestGoodInteger(String num) {
        int max = -1;
        for (int i = 2; i < num.length(); i++) {
            if (num.charAt(i) == num.charAt(i-1) && num.charAt(i-1) == num.charAt(i-2)) {
                int value = Integer.parseInt(num.substring(i-2, i+1));
                max = Math.max(max, value);
            }
        }
        
        if (max == -1) {
            return ""; 
        } else if (max == 0) {
            return "000";
        } else {
            return String.format("%03d", max);
        }
    }
}