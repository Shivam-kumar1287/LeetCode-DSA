class q3195 {
    public int minimumArea(int[][] grid) {
       int r=grid.length;
       int c=grid[0].length;
       int maxrow=-1;
       int  maxcol=-1;
       int minrow=r;
       int mincol=c;
        for(int i=0;i<r;i++){
           for(int j=0;j<c;j++){
            if(grid[i][j]==1){
             minrow= Math.min(minrow,i);
             mincol= Math.min(mincol,j);
             maxrow= Math.max(maxrow,i);
             maxcol= Math.max(maxcol,j);
            }
           }
          
        }

       return (maxrow-minrow+1)*(maxcol-mincol+1);      
    }
}