package kn;

public class knapsack {
    public static void main(String[] args) {
        int val[]={15,14,10,45,30};
        int wt[]={2,5,1,3,4};
        int w=7;
        System.out.println(knapSack1(w,wt,val,wt.length));
    }

public static int knapSack1(int w,int wt[],int val[],int n){
    if(w==0 || n==0){return 0;}
    if(wt[n-1]<=w){
        int ans=val[n-1]+knapSack1(w, wt, w-wt[n-1], n);
        int ans2=knapSack1(w, wt, val, n-1);
          return Math.max(ans, ans2);

    }
    else{
        return knapsack(val,wt,w,n-1);
    }
}
}
