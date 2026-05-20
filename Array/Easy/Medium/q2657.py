class q2657:
    def findThePrefixCommonArray(self, a: List[int], b: List[int]) -> List[int]:
        set1=set()
        set2=set()
        c=0
        li=[]
        for i in range(0,len(a)):
            set1.add(a[i])
            set2.add(b[i])
            if a[i] == b[i]:
                c += 1
            else:
                if a[i] in set2:
                    c+=1
                if b[i] in set1:
                    c+=1
            li.append(c)
        return li


        