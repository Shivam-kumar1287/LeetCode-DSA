class pq1518:
    def numWaterBottles(self, numBottles: int, numExchange: int) -> int:
        total=numBottles
        empty=numBottles
        while(numExchange<=empty):
            c=empty // numExchange
            total+=c
            empty=empty%numExchange+c
        return total
        