import java.util.*;

class q166 {
    public String fractionToDecimal(int numerator, int denominator) {
        if (numerator == 0) { 
               return "0";
        }
        StringBuilder sb = new StringBuilder();
        if ((numerator < 0) ^ (denominator < 0)) {
            sb.append('-');
        }
        long nu = Math.abs((long) numerator);
        long de = Math.abs((long) denominator);
        
        sb.append(nu / de);
        long remainder = nu % de;  
        if (remainder == 0) {
            return sb.toString();
        }
        sb.append('.');
        Map<Long, Integer> map = new HashMap<>();
        while (remainder != 0) {
            if (map.containsKey(remainder)) {
                int index = map.get(remainder);
                sb.insert(index, "(");
                sb.append(")");
                break;
            }
            map.put(remainder, sb.length());
            
            remainder *= 10;
            sb.append(remainder / de);
              remainder %= de; 
             }  
        return sb.toString();
    }
}