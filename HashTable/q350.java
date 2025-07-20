import java.util.*;

public class q350 {
   public static int[] intersect(int[] nums1, int[] nums2) {

      Map<Integer, Integer> map = new HashMap<>();
List<Integer> result = new ArrayList<>();
for(int num : nums1) {
map.put(num, map.getOrDefault(num, 0) + 1);
}
for(int num : nums2) {
if(map.containsKey(num) && map.get(num) > 0) {
result.add(num);
map.put(num, map.get(num) - 1);
}
}
return result.stream().mapToInt(i -> i).toArray();
}


    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter size of 1st array:");
        int n = sc.nextInt();
        int[] arr = new int[n];

        System.out.println("Enter elements of 1st array:");
        for (int i = 0; i < n; i++) {        
            arr[i] = sc.nextInt();
        }

        System.out.println("Enter size of 2nd array:");
        int m = sc.nextInt();
        int[] ar = new int[m] ;

        System.out.println("Enter elements of 2nd array:");
        for (int i = 0; i < m; i++) {        
            ar[i] = sc.nextInt();   }

        int[] result = intersect(arr, ar); 
                System.out.println("Intersection: " + Arrays.toString(result));

        sc.close(); 
    }
}
