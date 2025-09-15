class Solution {
    public int canBeTypedWords(String text, String brokenLetters) {
        String[] ch= text.split(" ");
        int res=0;
        for(String word: ch){
        if(numvalue1(word,brokenLetters)){
            res++;
        }
        }
        return res;
    }
    private boolean numvalue1(String ch,String broken){
        int c=0;
        for(int i=0;i<ch.length();i++){
           if (broken.indexOf(ch.charAt(i)) != -1) { 
                return false;
            }
        }
        return true;
    }
}