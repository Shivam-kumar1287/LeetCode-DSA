
import java.util.*;
class job{
    public static void main(String[] args){
        HashMap<Integer ,Integer> map=new HashMap<>();
        Scanner sc=new Scanner(System.in);
        System.out.println("case 0 for apply");
        System.out.println("case 1 for exist");
        int choose=sc.nextInt();
        swtich(choose){
            case 0:{
                System.out.println("input for job role");
                System.out.println("   user id , java == 500 pyhton==501");
                int v1=sc.nextInt();
                int v2=sc.nextInt();
                if(map.containsKey(v2)){
                  System.out.println("you already apply for job role this is dupilcation "+v2);

                }
                else{
                map.put(v1,v2);
            }
        }
           case 1:
                break;
              
            
        }

    }
}