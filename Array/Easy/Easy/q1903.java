
// class q1903 {
//     public String largestOddNumber(String num) {
//         int l = 0;
//         int r = num.length();

//         while (l < r) {
//             String leftStr = num.substring(l, r);
//             String rightStr = num.substring(l, r);

//             // Check if leftStr is odd
//             if (isOdd(leftStr)) {
//                 return leftStr;
//             }
//             // Check if rightStr is odd
//             if (isOdd(rightStr)) {
//                 return rightStr;
//             }

//             l++;
//             r--;
//         }
//         return "";
//     }

//     // Check if string number is odd
//     private boolean isOdd(String s) {
//         char last = s.charAt(s.length() - 1);
//         int digit = last - '0';
//         return digit % 2 == 1;
//     }

    
//}
class q1903 {
    public String largestOddNumber(String num) {
   
for(int i=num.length()-1;i>=0;i--){
    char c=num.charAt(i);
    if((c-'0')%2!=0){
        return num.substring(0,i+1);
    }

}

return "";
    }
}
class  main{
    public static void main(String[] args) {
          q1903 obj = new q1903();
        System.out.println(obj.largestOddNumber("52"));     // "5"
        System.out.println(obj.largestOddNumber("4206"));   // ""
           System.out.println(obj.largestOddNumber("35427"));  // "35427"
    }
}