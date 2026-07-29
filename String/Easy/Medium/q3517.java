class q3517 {
    public String smallestPalindrome(String s) {

        char[] ch = s.toCharArray();
        Arrays.sort(ch);

        StringBuilder sb = new StringBuilder();
        StringBuilder sb1 = new StringBuilder();

        String t = "";

        int i = 1;
        while (i < ch.length) {
            if (ch[i] == ch[i - 1]) {
                sb.append(ch[i]);   // one character for left half
                i++;                // skip the paired character
            } else {
                t = String.valueOf(ch[i - 1]);
            }
            i++;
        }

        // Last character may be the middle one
        if (i == ch.length && ch.length % 2 == 1) {
            t = String.valueOf(ch[ch.length - 1]);
        }

          sb1.append(sb);
        sb1.reverse();

        return sb.toString() + t + sb1.toString();
    }
}