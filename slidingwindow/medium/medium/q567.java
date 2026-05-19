package slidingwindow.medium.medium;

public class q567 { public boolean checkInclusion(String s1, String s2) {
        int n = s1.length();
        int m = s2.length();
        if (n > m) {
            return false;
        }
        int[] a = new int[26];
        int[] b = new int[26];
        for (char c : s1.toCharArray()) {
            a[c - 'a']++;
        }
        for (int i = 0; i < n; i++) {
            b[s2.charAt(i) - 'a']++;
        }
        if (matches(a, b)) {
            return true;
        }
        for (int i = n; i < m; i++) {
            b[s2.charAt(i) - 'a']++;
            b[s2.charAt(i - n) - 'a']--;
         if (matches(a, b)) {
                return true;
            }
        }
        return false;
    }
    public boolean matches(int[] a, int[] b) {
        for (int i = 0; i < 26; i++) {
            if (a[i] != b[i]) {
                  return false;
            }
        }
        return true;
    }
}