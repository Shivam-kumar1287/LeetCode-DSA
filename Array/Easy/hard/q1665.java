import java.util.Arrays;
class q1665 {
    public int minimumEffort(int[][] tasks) {
        int l=0;
        int r=1000000000;
        int result=Integer.MAX_VALUE;
        Arrays.sort(tasks, (a, b) -> (b[1] - b[0]) - (a[1] - a[0]));
        while(l<=r){
          int   m=l+(r-l)/2;
            if(isPossible(tasks,m)){
                result=m;
                r=m-1;
            }else{
                l=m+1;
            }
        }
        return result;
    }
    public boolean isPossible(int[][] tasks,int m){
        for(int[] i:tasks){
            int actual=i[0];
            int minimum=i[1];
            if(minimum>m){
                return false;
            }
            m-=actual;
        }
        return true;
    }
}