class q458 {
    public int poorPigs(int buckets, int minutesToDie, int minutesToTest) {
       int trial=minutesToTest/minutesToDie+1;
       int pig=0;
       while(Math.pow(trial,pig)<buckets) pig++;
       return pig;
    }
}