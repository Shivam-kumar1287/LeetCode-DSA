class q3100 {
    public int maxBottlesDrunk(int numBottles, int numExchange) {
        int numwb=numBottles;
        int result=numBottles;
        while(numwb>=numExchange){
            numwb=numwb-numExchange;
            numExchange+=1;
            result+=1;
            numwb+=1;
        }
        return result;
    }
}