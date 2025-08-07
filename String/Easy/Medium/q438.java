public class q438 {
    public List<Integer> findAnagrams(String s, String p) {
        List<Integer> list=new ArrayList<>();
          int slen=s.length();
            int plen=p.length();
        for( int i=0;i<=slen-plen;i++  ){
            String ab=s.substring(i,i+plen);
            if(check(ab,p)){
                list.add(i);
            }
        }
        return list;
    }
    private boolean check(String ab,String p){
       if(ab.length()!=p.length()) {
          return false;}

    int[] freq = new int[26];
        for(int i=0;i<ab.length();i++){
            freq[ab.charAt(i)-'a']++;
            freq[p.charAt(i)-'a']--;
        }
        for(int num:freq){
            if(num!=0){
                return false;
            }
        }
        return true;
    }
}