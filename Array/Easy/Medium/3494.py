class q3494:
    def minTime(self, skill: List[int], mana: List[int]) -> int:
        n = len(skill)
        prefix = [0] * n
        prefix[0] = skill[0]
        for i in range(1,n):
            prefix[i] = prefix[ i - 1] + skill[i]
        start_time=0
        for i in range(1,len(mana)):
            maxdiff=0
            for j in range(0,n):
                left = prefix[j - 1] if j > 0 else 0
                cur=(mana[i-1]*prefix[j])-(mana[i]*left)
                if cur>maxdiff:
                    maxdiff=cur
            start_time+=maxdiff
        return start_time + mana[len(mana)-1]*prefix[len(skill)-1]
             
        