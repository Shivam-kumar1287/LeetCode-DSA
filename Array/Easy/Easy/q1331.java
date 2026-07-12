import java.util.*;
class q1331{
    public int[] arrayRankTransform(int[] arr) {
        int[] temp= Arrays.copyOf(arr,arr.length);
        Arrays.sort(temp);
        int pos=1;
        HashMap<Integer,Integer> map=new HashMap<>();
        for(int i:temp){
            if(!map.containsKey((i))){
                map.put(i,pos++);
            }
        }
        System.out.println("how value store in map");
        for(int i:map.keySet()){
            System.out.println(i+" "+map.get(i));
        }
        for(int i=0;i<arr.length;i++){
            arr[i]=map.get(arr[i]);
        }
        return arr;
    }
  public static void main(String[] args){
    Scanner sc=new Scanner(System.in);
    int n=sc.nextInt();
    int[] arr=new int[n];
    for(int i=0;i<n;i++){
        arr[i]=sc.nextInt();
    }
    q1331 ob=new q1331();
    int[] ans=ob.arrayRankTransform(arr);
    for(int i:ans){
        System.out.print(i+" ");
    }
  }

}