class q1625 {
    public String findLexSmallestString(String s, int a, int b) {
        Set<String> vis=new HashSet<>();
        Queue<String> queue=new LinkedList<>();
        String min=s;
        queue.offer(s);
        vis.add(s);

       while(!queue.isEmpty()){
        String cur=queue.poll();
        if(cur.compareTo(min)<0){
            min=cur;
        }
        String added=add(cur,a);
        if(!vis.contains(added)){
            vis.add(added);
            queue.offer(added);
          }
           String  rotated=rotate(cur,b);
        if(!vis.contains(rotated)){
            vis.add(rotated);
            queue.offer(rotated);
        }
        
       }
         return  min;

    }
    public String add(String s,int a){
        char[] ch=s.toCharArray();
        for(int i=1;i<ch.length;i+=2){
            int val=(ch[i]-'0'+a)%10;
            ch[i]=(char)(val+'0');
        }

        return new String(ch);
    }
    public String rotate(String s,int b){
        int n=s.length();
        b=b%n;
        return s.substring(n-b)+s.substring(0,n-b);
    }
}