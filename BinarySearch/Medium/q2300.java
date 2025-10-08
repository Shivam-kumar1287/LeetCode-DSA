class q2300 {
    public int[] successfulPairs(int[] spells, int[] potions, long success) {
        int[] arr=new int[spells.length];
        Arrays.sort(potions);
       for(int index = 0; index < spells.length; index++) {
         int spell = spells[index];
        int count = countclass(spell, success, potions);
        arr[index]=count;
       }
        return arr;
    }
    private int countclass(int mul,Long target,int[] potions){
       int l=0,r=potions.length;
       while(l<r){
int m = l + (r - l) / 2;
       long pro=(long) mul*potions[m];
    if(pro >= target) {
        r=m;
       }
       else{
        l=m+1;
       }
       
       }
        return potions.length - l;   }
}