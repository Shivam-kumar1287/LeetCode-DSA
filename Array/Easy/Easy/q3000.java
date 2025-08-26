class q3000 {
    public int areaOfMaxDiagonal(int[][] dimensions) {
        
        double maxi = Integer.MIN_VALUE; 
        double temp = 0;                
        int area = 0;               

        for (int i = 0; i < dimensions.length; i++) {
            maxi = Math.sqrt(dimensions[i][0] * dimensions[i][0] + 
                             dimensions[i][1] * dimensions[i][1]);

            if (maxi > temp) {
                area = dimensions[i][0] * dimensions[i][1];
                temp = maxi;
            } 
            else if (maxi == temp) {
                area = Math.max(area, dimensions[i][0] * dimensions[i][1]);
            }
        }
        return area;
    }
}