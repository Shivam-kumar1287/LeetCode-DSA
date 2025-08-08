
class Solution(object):
    def findAnagrams(self, s, p):


        result = []
        s_len = len(s)
        p_len = len(p)

        for i in range(s_len - p_len + 1):
            sub = s[i:i + p_len]
            if self.is_anagram(sub, p):
                result.append(i)

        return result

    def is_anagram(self, a: str, b: str) -> bool:
        if len(a) != len(b):
            return False

        freq = [0] * 26
        for i in range(len(a)):
            freq[ord(a[i]) - ord('a')] += 1
            freq[ord(b[i]) - ord('a')] -= 1

        return all(count == 0 for count in freq)
