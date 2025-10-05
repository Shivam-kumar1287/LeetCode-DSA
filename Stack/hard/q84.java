class q84 {
    public int largestRectangleArea(int[] heights) {
       Stack<Integer> stack =new Stack<>();
       int maxarea=0;
       int n= heights.length;
       for(int i=0;i<=n;i++){
        int curr=(i==n)?0:heights[i];
        while(!stack.isEmpty() && curr <heights[stack.peek()]){
            int h=heights[stack.pop()];
            int r=i;
          int l=stack.isEmpty() ? -1:stack.peek();
            int w=r-l-1;
            maxarea=Math.max(maxarea,h*w);
        }
        stack.push(i);
       }
     return maxarea;
    }
}