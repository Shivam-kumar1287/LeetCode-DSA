class q42 {
    public int trap(int[] height) {
        int n = height.length;
        if (n == 0) return 0;
        
        int[] l = new int[n];
        l[0] = height[0];  
        for(int i = 1; i < n; i++) {
            l[i] = Math.max(height[i], l[i-1]);
        }
        
        int[] r = new int[n];
        r[n-1] = height[n-1];
            for(int i = n-2; i >= 0; i--) {
            r[i] = Math.max(height[i], r[i+1]);
        }
        
        int Water = 0;
        for(int i = 0; i < n; i++) {
            Water += (Math.min(l[i], r[i])) - height[i];
        }
        return Water;
    }
}