class q3147:
    def maximumEnergy(self, energy: List[int], k: int) -> int:
        max_sum = float('-inf')
        n=len(energy)
        for i in range(k):
            sum=0
            for j in range(n - 1 - i, -1, -k):
                sum+=energy[j]
                max_sum=max(max_sum,sum)
        return max_sum

        