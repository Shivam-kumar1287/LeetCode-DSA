class Q1{
    public static void main(String[] args){
        int a = 5; 
        int b = 3;
        System.out.println("Before swapping: a = " + a + ", b = " + b);
        a=a^b; // a now holds the result of a XOR b
        b=a^b; // b now holds the original value of a
        a=a^b; // a now holds the original value of b
        System.out.println("After swapping: a = " + a + ", b = " + b);
    }
}