class 3100:
    def maxBottlesDrunk(self, numBottles: int, numExchange: int) -> int:
        numwb=numBottles
        result=numBottles
        while numwb>=numExchange:
            numwb=numwb-numExchange
            result+=1
            numwb+=1
            numExchange+=1
        return result
        