class q1518 {
    public int numWaterBottles(int numBottles, int numExchange) {
        int total=numBottles;
        int empty=numBottles;
        while(numExchange<=empty){
        int c=empty / numExchange;
        total+=c;
           empty=empty % numExchange + c;
        }
        return total;
    }
}