import java.util.*;
class accenture1{
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        //112 1+11+112=124
        int n=sc.nextInt();
        String s= String.valueOf(n);
        int res=0;
        int sum=0;
        for(int i=0;i<s.length();i++){
            int v=s.charAt(i)-'0';
            res=res*10+v;
            sum+=v;
            System.out.println("res "+res+" sum "+sum+" v "+v);
        }
        System.out.println(s+" "+res+" "+sum);    
    }
}