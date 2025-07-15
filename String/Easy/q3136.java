class q3136 {
    public boolean isValid(String word) {
     if(word.length()<=2)   {
        return false;
     }
     boolean vv=false;// for vowel 
     boolean cc=false;// for consonant
     for(int i=0;i<word.length();i++){
        char c=Character.toLowerCase(word.charAt(i));
        if(!Character.isLetterOrDigit(c)){
            return false;
        }
        
        if(Character.isLetter(c)){
            if(c=='a' || c=='e' || c=='i' || c=='o' || c=='u'){
                vv=true;
            }
            else{
                cc=true;
            }
        }
     }
     return vv && cc;
    }
}
// Example usagep
class Main{
    public static void main(String[] args) {
        
    }
}