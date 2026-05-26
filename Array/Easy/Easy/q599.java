import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Scanner;
import java.util.Set;

class q599 {

    // static Set<String> findRestaurantString[] l1, String[] l2) {

    //     Set<String> set1 = new HashSet<>();
    //     Set<String> set2 = new HashSet<>();
    //     for (String item : l1) {
    //         set1.add(item);
    //     }
    //     for (String item : l2) {
    //         if (set1.contains(item)) {
    //             set2.add(item);         }
    //     }

    //     return set2; 
    
    // }

 public String[] findRestaurant(String[] list1, String[] list2) {
        Map<String, Integer> map1 = new HashMap<>();
        for (int i = 0; i < list1.length; i++) {
            map1.put(list1[i], i);
        }
        int minSum = Integer.MAX_VALUE;
        List<String> result = new ArrayList<>();
        
        for (int j = 0; j < list2.length; j++) {
            if (map1.containsKey(list2[j])) {
                int indexSum = map1.get(list2[j]) + j;
                if (indexSum < minSum) {
                    minSum = indexSum;
                    result.clear();
                    result.add(list2[j]);
                } else if (indexSum == minSum) {
                    result.add(list2[j]);
                }
            }
        }
        
        return result.toArray(new String[0]);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int s = sc.nextInt();
        sc.nextLine(); 
        String[] list1 = new String[s];
        String[] list2 = new String[s];

        System.out.println("Enter elements for list 1:");
        for (int i = 0; i < s; i++) {
            list1[i] = sc.nextLine();
        }

        System.out.println("Enter elements for list 2:");
        for (int i = 0; i < s; i++) {
            list2[i] = sc.nextLine();
        }

        String[] commonElements = findRestaurant(list1, list2);

        System.out.println("Common elements:");
        if (commonElements.isEmpty()) {
            System.out.println("No common elements.");
        } else {
            for (String item : commonElements) {
                System.out.println(item);
            }
        }

        sc.close();
    }
}
