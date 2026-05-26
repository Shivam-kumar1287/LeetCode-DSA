import java.util.HashSet;
class q222 {
    public int numberOfSpecialChars(String word) {
        HashSet<Character> set=new HashSet<>();
        for(int i=0;i<word.length();i++){
            char ch=word.charAt(i);
            set.add(ch);

        }
        return set.size();
    }
    public static void main(String[] args) {
        q222 ob=new q222();
        String word="abcde";
        System.out.println(ob.numberOfSpecialChars(word));
    }
}