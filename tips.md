tips

// binary  to binary 
  for string format to decomal
   for (char c : s.toCharArray()) {
        int bit = c - '0';
        value = (value << 1) + bit;
    }
  //  binary to num 
    for (int i = 0; i < nums.length; i++) {
        String binaryString = String.valueOf(nums[i]);  // convert 1011 → "1011"
        int decimal = Integer.parseInt(binaryString, 2); // convert binary → decimal
        result[i] = decimal;
    }


// Convert to long to avoid overflow
   long num = Math.abs((long) numerator);

how to convert string to integer
like return Integer.parseInt(value);
        return Integer.parseInt(binarhelp(n));

how to convert int to float
float f1=(float) num;

how to convert float to string
return Float.toString(f1);

// Format to 2 decimal places, remove trailing zeros if you want
return String.format("%.2f", f3);

how to convert char to int 
1> Character.getNumericValue(c)
2>num = Integer.parseInt(String.valueOf(c));

/\*LinkedList
1> LinkedList convert into Array
 Object\[] arr=List.toArray():


2> Create a shallow copy of the LinkedList

linkedList<String> clonsedlist =(linkedList<String> List.clone);



3> how create copy of arr
  int\[] copyarr = arr.colne();



30-07-2025

leetcode 2419

#### Arrays
1).How to find a max value in array without use array
int max = Arrays.stream(nums).max().getAsInt();



##### LinkedList
1> .How to convert array to list
 List<Integer> list = Arrays.asList(nums);
2.how to put the data from  list to linkedlist
 ListNode dummy = new ListNode(0);
        ListNode curr = dummy;
        for (int val : resultList) {
            curr.next = new ListNode(val);
            curr = curr.next;
        }
        return dummy.next;



String 
1>.How to convert Char to String in java
 return new String(charArray);
 
2>.How to convert String to char
  char[] charArray = str.toCharArray();
 
3>. string to int
   int a = Integer.parseInt(str);
4>.int to string
   String str = Integer.toString(a);

StringBuilder 
1>. If you want to insert sum index in stringBuilder than use Insert();
   example 
      



Collection 
how store array in list
Collection<Integer> list = Arrays.asList(nums);
how to convert list to array
int[] arr = list.stream().mapToInt(i -> i).toArray();
how to reverse a list
List<Integer> list = Arrays.asList(nums);
Collections.reverse(list);
how to convert list to array
int[] arr = list.stream().mapToInt(i -> i).toArray();


how to sort 2d array  and store  list 

Arrays.sort(arr,(a,b)->a[0]-b[0]);


 5>.Date AND time 
 how to convert date to day 
 input  08 15 2015
 output WEDNESDAY
  <!-- public static String findDay(int month, int day, int year) {

    Calendar cal = Calendar.getInstance();
        cal.set(year, month - 1, day);
        String[] days = { "SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY" };
        return days[cal.get(Calendar.DAY_OF_WEEK) - 1];
    }

} -->


/*    // US format
        NumberFormat usFormat = NumberFormat.getCurrencyInstance(Locale.US);

        // India format (custom locale because Java doesn't have built-in one)
        NumberFormat indiaFormat = NumberFormat.getCurrencyInstance(new Locale("en", "IN"));

        // China format
        NumberFormat chinaFormat = NumberFormat.getCurrencyInstance(Locale.CHINA);

        // France format
        NumberFormat franceFormat = NumberFormat.getCurrencyInstance(Locale.FRANCE);

        System.out.println("US: " + usFormat.format(payment));
        System.out.println("India: " + indiaFormat.format(payment));
        System.out.println("China: " + chinaFormat.format(payment));
        System.out.println("France: " + franceFormat.format(payment))
*/

how to find expected sum form number like 5 is sum=5+4+3+2+1=15
int expextedsum= num*(num+1)/2;


Aspect	      Single Quotes ' '	      Double Quotes " "
Data Type   	char (primitive)	      String (object)
Content	      Exactly one character	Zero or more characters
Memory	      2 bytes (primitive)	   Variable (object)
Operations  	Primitive operations	   Object methods
Nullability	   Cannot be null	         Can be null
Comparison	   == compares values	   Use .equals() for content
