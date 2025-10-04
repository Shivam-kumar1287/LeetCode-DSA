class 11:
    def maxArea(self, height: List[int]) -> int:
        l=0
        r=len(height)-1
        result=0
        while l<r:
            num = min(height[l], height[r])  
            d=r-l
            result= max(result,d*num)
            if(height[l]<height[r]):
                l+=1
            else:
                r-=1
        return result
        