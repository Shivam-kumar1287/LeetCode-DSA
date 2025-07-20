class q383 {

    public boolean canConstruct(String ransomNote, String magazine) {

        int[] charCount = new int[26]; 
        for (char ch : magazine.toCharArray()) {
            charCount[ch - 'a']++;
        }

        for (char ch : ransomNote.toCharArray()) {
            if (charCount[ch - 'a'] == 0) {
                return false;
         } 
            charCount[ch - 'a']--; 
        }

        return true;
    }
}
