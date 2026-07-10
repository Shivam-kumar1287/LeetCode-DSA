class q222{
    public static void main(String[] args){
        func(91);
    }
    public static int func(int n){
        if(n>100){
            return func(n-10); 
        }
        System.out.println(n);
        return func(n+11);
    }
}