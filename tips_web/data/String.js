window.TopicsData = window.TopicsData || {};
window.TopicsData["String"] = {
    title: "Strings & Advanced String Algorithms",
    sections: [
        {
            heading: "String Basics & Properties",
            items: [
                "<strong>Definition:</strong> A string is a sequence of characters. In most languages (like Java, Python, and C#), strings are immutable (cannot be changed after creation).",
                "<strong>Key Characteristics:</strong><ul><li><strong>Immutable:</strong> Cannot modify in-place (any write operation creates a new string).</li><li><strong>Indexed & Ordered:</strong> Supports zero-based indexing; characters have a specific order.</li><li><strong>Comparable & Hashable:</strong> Compared lexicographically; strings are hashable and can be used as keys in HashMaps/Sets.</li></ul>",
                "<strong>Character Encodings:</strong><ul><li><strong>ASCII:</strong> 7-bit, 128 characters.</li><li><strong>Unicode:</strong> Universal character set mapping all characters to code points.</li><li><strong>UTF-8:</strong> Variable-length encoding (1-4 bytes per character); backward compatible with ASCII.</li><li><strong>UTF-16:</strong> 2 or 4 bytes per character; commonly used in Java's memory.</li></ul>",
                "<strong>Memory Representation:</strong><pre>String \"Hello\"\nIndex:  0    1    2    3    4\nChar:  'H'  'e'  'l'  'l'  'o'\nASCII: 72   101  108  108  111</pre>"
            ]
        },
        {
            heading: "String Operations & Complexities",
            items: [
                "Common String APIs across languages and their complexities:<br><table class=\"dsa-table\" style=\"width:100%; border-collapse: collapse; margin: 10px 0; font-size: 0.9rem;\"><thead><tr style=\"border-bottom: 2px solid var(--glass-border); text-align: left;\"><th style=\"padding: 8px;\">Operation</th><th style=\"padding: 8px;\">Python</th><th style=\"padding: 8px;\">Java</th><th style=\"padding: 8px;\">C++</th><th style=\"padding: 8px;\">Time Complexity</th><th style=\"padding: 8px;\">Space Complexity</th></tr></thead><tbody><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">Length</td><td style=\"padding: 8px;\"><code>len(s)</code></td><td style=\"padding: 8px;\"><code>s.length()</code></td><td style=\"padding: 8px;\"><code>s.length()</code></td><td style=\"padding: 8px; color: #10b981;\">O(1)</td><td style=\"padding: 8px;\">O(1)</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">Access</td><td style=\"padding: 8px;\"><code>s[i]</code></td><td style=\"padding: 8px;\"><code>s.charAt(i)</code></td><td style=\"padding: 8px;\"><code>s[i]</code></td><td style=\"padding: 8px; color: #10b981;\">O(1)</td><td style=\"padding: 8px;\">O(1)</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">Concatenate</td><td style=\"padding: 8px;\"><code>s1 + s2</code></td><td style=\"padding: 8px;\"><code>s1 + s2</code></td><td style=\"padding: 8px;\"><code>s1 + s2</code></td><td style=\"padding: 8px; color: #f59e0b;\">O(N + M)</td><td style=\"padding: 8px;\">O(N + M)</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">Substring</td><td style=\"padding: 8px;\"><code>s[i:j]</code></td><td style=\"padding: 8px;\"><code>s.substring(i, j)</code></td><td style=\"padding: 8px;\"><code>s.substr(i, j)</code></td><td style=\"padding: 8px; color: #f59e0b;\">O(K)</td><td style=\"padding: 8px;\">O(K) (where K=length)</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">Search</td><td style=\"padding: 8px;\"><code>s.find(sub)</code></td><td style=\"padding: 8px;\"><code>s.indexOf(sub)</code></td><td style=\"padding: 8px;\"><code>s.find(sub)</code></td><td style=\"padding: 8px; color: #ef4444;\">O(N * M) (naive)</td><td style=\"padding: 8px;\">O(1)</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">Compare</td><td style=\"padding: 8px;\"><code>==</code></td><td style=\"padding: 8px;\"><code>s1.equals(s2)</code></td><td style=\"padding: 8px;\"><code>s1 == s2</code></td><td style=\"padding: 8px; color: #f59e0b;\">O(N)</td><td style=\"padding: 8px;\">O(1)</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">Split</td><td style=\"padding: 8px;\"><code>s.split(delim)</code></td><td style=\"padding: 8px;\"><code>s.split(regex)</code></td><td style=\"padding: 8px;\">-</td><td style=\"padding: 8px; color: #f59e0b;\">O(N)</td><td style=\"padding: 8px;\">O(N)</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">Join</td><td style=\"padding: 8px;\"><code>' '.join(list)</code></td><td style=\"padding: 8px;\"><code>String.join(delim, list)</code></td><td style=\"padding: 8px;\">-</td><td style=\"padding: 8px; color: #f59e0b;\">O(N)</td><td style=\"padding: 8px;\">O(N)</td></tr></tbody></table>",
                "Advanced string mutations and checks:<br><table class=\"dsa-table\" style=\"width:100%; border-collapse: collapse; margin: 10px 0; font-size: 0.9rem;\"><thead><tr style=\"border-bottom: 2px solid var(--glass-border); text-align: left;\"><th style=\"padding: 8px;\">Operation</th><th style=\"padding: 8px;\">Python</th><th style=\"padding: 8px;\">Java</th><th style=\"padding: 8px;\">Time Complexity</th></tr></thead><tbody><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">Upper / Lower</td><td style=\"padding: 8px;\"><code>s.upper() / s.lower()</code></td><td style=\"padding: 8px;\"><code>s.toUpperCase() / s.toLowerCase()</code></td><td style=\"padding: 8px; color: #f59e0b;\">O(N)</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">Strip / Trim</td><td style=\"padding: 8px;\"><code>s.strip()</code></td><td style=\"padding: 8px;\"><code>s.trim()</code></td><td style=\"padding: 8px; color: #f59e0b;\">O(N)</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">Replace</td><td style=\"padding: 8px;\"><code>s.replace(old, new)</code></td><td style=\"padding: 8px;\"><code>s.replace(old, new)</code></td><td style=\"padding: 8px; color: #f59e0b;\">O(N)</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">Reverse</td><td style=\"padding: 8px;\"><code>s[::-1]</code></td><td style=\"padding: 8px;\"><code>new StringBuilder(s).reverse()</code></td><td style=\"padding: 8px; color: #f59e0b;\">O(N)</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">Is Alpha / Digit</td><td style=\"padding: 8px;\"><code>s.isalpha() / s.isdigit()</code></td><td style=\"padding: 8px;\"><code>Character.isLetter(ch) / Character.isDigit(ch)</code></td><td style=\"padding: 8px; color: #f59e0b;\">O(N)</td></tr></tbody></table>"
            ]
        },
        {
            heading: "Language Implementations: Python",
            items: [
                "<strong>Basic Operations:</strong><pre><code># Access & Slices\ns = \"Python\"\nchar = s[0]         # 'P'\nlast = s[-1]        # 'n'\nsub = s[1:4]        # 'yth'\nrev = s[::-1]       # 'nohtyP'\n\n# Formatting & repetition\ns_concat = \"Hello\" + \" \" + \"World\"\ns_fstring = f\"{s} is nice\"\ns_rep = \"Ha\" * 3    # \"HaHaHa\"</code></pre>",
                "<strong>Common Methods:</strong><pre><code>s = \"  Hello World  \"\ns.strip()           # \"Hello World\"\ns.upper()           # \"  HELLO WORLD  \"\ns.find(\"World\")     # 9 (index of first match)\ns.count(\"l\")        # 3\ns.split()           # ['Hello', 'World']\n'-'.join(['A', 'B']) # \"A-B\"</code></pre>",
                "<strong>Advanced Techniques:</strong><pre><code># Unique characters check\nis_unique = len(set(s)) == len(s)\n\n# Character to ASCII conversion\nascii_val = ord('A')  # 65\nchar_val = chr(65)    # 'A'\n\n# Frequency Counter\nfrom collections import Counter\ncounts = Counter(\"hello\") # {'l': 2, 'h': 1, 'e': 1, 'o': 1}</code></pre>"
            ]
        },
        {
            heading: "Language Implementations: Java",
            items: [
                "<strong>Standard Class Operations:</strong><pre><code>// Creation & Pool references\nString s1 = \"Hello\";\nString s2 = new String(\"Hello\"); // Bypasses pool\ns1.equals(s2); // true (value equality)\ns1 == s2;      // false (reference equality)\n\n// Conversions & Access\nchar ch = s1.charAt(0); // 'H'\nchar[] chars = s1.toCharArray();\nString sub = s1.substring(1, 4); // \"ell\" [1, 4)\n\n// Searching & Replacing\nint idx = s1.indexOf('l');     // 2\nboolean has = s1.contains(\"ell\"); // true\nString rep = s1.replace('l', 'p'); // \"Heppo\"</code></pre>",
                "<strong>StringBuilder vs. StringBuffer:</strong><pre><code>// StringBuilder: mutable and fast (non-thread-safe)\nStringBuilder sb = new StringBuilder();\nsb.append(\"Hello\").append(\" World\");\nsb.reverse();\nString result = sb.toString();\n\n// StringBuffer: thread-safe but slower (synchronized)\nStringBuffer sbf = new StringBuffer();\nsbf.append(\"Hello\");</code></pre>",
                "<strong>Concatenation Loop Performance Comparison:</strong><pre><code>// BAD (O(N^2) time due to copying string in each step)\nString s = \"\";\nfor (int i = 0; i &lt; 1000; i++) s += i;\n\n// GOOD (O(N) time with mutable array buffer)\nStringBuilder sb = new StringBuilder();\nfor (int i = 0; i &lt; 1000; i++) sb.append(i);\nString res = sb.toString();</code></pre>"
            ]
        },
        {
            heading: "Language Implementations: C++",
            items: [
                "<strong>Standard C++ STL String Methods:</strong><pre><code>#include &lt;string&gt;\n#include &lt;algorithm&gt;\nusing namespace std;\n\nstring s1 = \"Hello\";\nchar ch = s1[0];\nint len = s1.length(); // or s1.size()\n\n// Concatenation & Substring\nstring s3 = s1 + \"!\";\nstring sub = s1.substr(1, 4); // \"ello\"\n\n// Searching & Operations\nsize_t pos = s1.find(\"ell\");\nif (pos != string::npos) { /* Found */ }\ns1.insert(5, \" world\");\ns1.erase(5, 6); // Erases 6 chars from index 5\n\n// Conversions\nint num = stoi(\"123\");\nstring s_num = to_string(123);\n\n// In-place Reversal\nreverse(s1.begin(), s1.end());\n\n// Case modifications\ntransform(s1.begin(), s1.end(), s1.begin(), ::toupper);</code></pre>"
            ]
        },
        {
            heading: "Common String Patterns",
            items: [
                "<strong>1. Two Pointers Pattern:</strong> Check Palindrome & Reverse Strings.<pre><code>// Palindrome check skipping non-alphanumeric (Java)\npublic boolean isPalindrome(String s) {\n    int left = 0, right = s.length() - 1;\n    while (left &lt; right) {\n        while (left &lt; right && !Character.isLetterOrDigit(s.charAt(left))) left++;\n        while (left &lt; right && !Character.isLetterOrDigit(s.charAt(right))) right--;\n        if (Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) {\n            return false;\n        }\n        left++; right--;\n    }\n    return true;\n}</code></pre>",
                "<strong>2. Sliding Window Pattern:</strong> Longest Substring Without Repeating Characters.<pre><code>// Longest Substring Without Repeating Characters (Java)\npublic int lengthOfLongestSubstring(String s) {\n    Set&lt;Character&gt; set = new HashSet&lt;&gt;();\n    int left = 0, maxLen = 0;\n    for (int right = 0; right &lt; s.length(); right++) {\n        while (set.contains(s.charAt(right))) {\n            set.remove(s.charAt(left));\n            left++;\n        }\n        set.add(s.charAt(right));\n        maxLen = Math.max(maxLen, right - left + 1);\n    }\n    return maxLen;\n}</code></pre>",
                "<strong>3. Dynamic Programming on Strings:</strong> Longest Common Subsequence (LCS).<pre><code>// LCS algorithm (Java)\npublic int longestCommonSubsequence(String text1, String text2) {\n    int m = text1.length(), n = text2.length();\n    int[][] dp = new int[m + 1][n + 1];\n    for (int i = 1; i &lt;= m; i++) {\n        for (int j = 1; j &lt;= n; j++) {\n            if (text1.charAt(i - 1) == text2.charAt(j - 1)) {\n                dp[i][j] = dp[i - 1][j - 1] + 1;\n            } else {\n                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n            }\n        }\n    }\n    return dp[m][n];\n}</code></pre>",
                "<strong>4. String Matching:</strong> Knuth-Morris-Pratt (KMP) search algorithm.<pre><code>// KMP search returning index of first match (Java)\npublic int kmpSearch(String text, String pattern) {\n    if (pattern.isEmpty()) return 0;\n    int[] lps = buildLPS(pattern);\n    int i = 0, j = 0;\n    while (i &lt; text.length()) {\n        if (text.charAt(i) == pattern.charAt(j)) {\n            i++; j++;\n        }\n        if (j == pattern.length()) {\n            return i - j; // Found match\n        } else if (i &lt; text.length() && text.charAt(i) != pattern.charAt(j)) {\n            if (j != 0) j = lps[j - 1];\n            else i++;\n        }\n    }\n    return -1;\n}\nprivate int[] buildLPS(String p) {\n    int[] lps = new int[p.length()];\n    int len = 0, i = 1;\n    while (i &lt; p.length()) {\n        if (p.charAt(i) == p.charAt(len)) {\n            len++; lps[i] = len; i++;\n        } else {\n            if (len != 0) len = lps[len - 1];\n            else { lps[i] = 0; i++; }\n        }\n    }\n    return lps;\n}</code></pre>"
            ]
        },
        {
            heading: "Problem-Solving Templates",
            items: [
                "<strong>Template 1: Character Frequency Array (ASCII lowercase):</strong><pre><code>int[] freq = new int[26];\nfor (char c : s.toCharArray()) {\n    freq[c - 'a']++;\n}</code></pre>",
                "<strong>Template 2: Palindrome Substring Checker:</strong><pre><code>public boolean isPalindromeRange(String s, int left, int right) {\n    while (left &lt; right) {\n        if (s.charAt(left) != s.charAt(right)) return false;\n        left++; right--;\n    }\n    return true;\n}</code></pre>",
                "<strong>Template 3: String compression (In-place modification):</strong><pre><code>public int compress(char[] chars) {\n    int write = 0, read = 0;\n    while (read &lt; chars.length) {\n        char ch = chars[read];\n        int count = 0;\n        while (read &lt; chars.length && chars[read] == ch) {\n            read++; count++;\n        }\n        chars[write++] = ch;\n        if (count &gt; 1) {\n            for (char c : String.valueOf(count).toCharArray()) {\n                chars[write++] = c;\n            }\n        }\n    }\n    return write;\n}</code></pre>"
            ]
        },
        {
            heading: "Interview Problems Index",
            items: [
                "<table class=\"dsa-table\" style=\"width:100%; border-collapse: collapse; margin: 10px 0; font-size: 0.9rem;\"><thead><tr style=\"border-bottom: 2px solid var(--glass-border); text-align: left;\"><th style=\"padding: 8px;\">Problem</th><th style=\"padding: 8px;\">Difficulty</th><th style=\"padding: 8px;\">Key Technique</th></tr></thead><tbody><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px;\">Valid Palindrome (LeetCode 125)</td><td style=\"padding: 8px; color: #10b981;\">Easy</td><td style=\"padding: 8px;\">Two Pointers</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px;\">Valid Anagram (LeetCode 242)</td><td style=\"padding: 8px; color: #10b981;\">Easy</td><td style=\"padding: 8px;\">Frequency Array</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px;\">Longest Substring without Repeats (LeetCode 3)</td><td style=\"padding: 8px; color: #f59e0b;\">Medium</td><td style=\"padding: 8px;\">Sliding Window</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px;\">Longest Palindromic Substring (LeetCode 5)</td><td style=\"padding: 8px; color: #f59e0b;\">Medium</td><td style=\"padding: 8px;\">Expand Around Centers / DP</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px;\">Group Anagrams (LeetCode 49)</td><td style=\"padding: 8px; color: #f59e0b;\">Medium</td><td style=\"padding: 8px;\">HashMap (sorted string keys)</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px;\">Edit Distance (LeetCode 72)</td><td style=\"padding: 8px; color: #ef4444;\">Hard</td><td style=\"padding: 8px;\">2D Dynamic Programming</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px;\">Minimum Window Substring (LeetCode 76)</td><td style=\"padding: 8px; color: #ef4444;\">Hard</td><td style=\"padding: 8px;\">Two pointer sliding window</td></tr></tbody></table>"
            ]
        },
        {
            heading: "Advanced String Algorithms",
            items: [
                "<strong>1. Rabin-Karp Rolling Hash:</strong> Compares pattern hash with text window hashes. Uses sliding math to calculate the next window in O(1) time.<pre><code>public int rabinKarp(String text, String pattern) {\n    if (pattern.isEmpty()) return 0;\n    if (pattern.length() &gt; text.length()) return -1;\n    long base = 26, mod = 1000000007;\n    long pHash = 0, tHash = 0, power = 1;\n    for (int i = 0; i &lt; pattern.length(); i++) {\n        pHash = (pHash * base + (pattern.charAt(i) - 'a' + 1)) % mod;\n        tHash = (tHash * base + (text.charAt(i) - 'a' + 1)) % mod;\n        if (i &gt; 0) power = (power * base) % mod;\n    }\n    for (int i = 0; i &lt;= text.length() - pattern.length(); i++) {\n        if (pHash == tHash && text.substring(i, i + pattern.length()).equals(pattern)) {\n            return i;\n        }\n        if (i &lt; text.length() - pattern.length()) {\n            tHash = (tHash - (text.charAt(i) - 'a' + 1) * power) % mod;\n            tHash = (tHash * base + (text.charAt(i + pattern.length()) - 'a' + 1)) % mod;\n            if (tHash &lt; 0) tHash += mod;\n        }\n    }\n    return -1;\n}</code></pre>",
                "<strong>2. Trie (Prefix Tree):</strong> Efficient prefix lookup data structure.<pre><code>class TrieNode {\n    TrieNode[] children = new TrieNode[26];\n    boolean isEnd;\n}\nclass Trie {\n    TrieNode root = new TrieNode();\n    public void insert(String word) {\n        TrieNode curr = root;\n        for (char c : word.toCharArray()) {\n            if (curr.children[c - 'a'] == null) curr.children[c - 'a'] = new TrieNode();\n            curr = curr.children[c - 'a'];\n        }\n        curr.isEnd = true;\n    }\n    public boolean search(String word) {\n        TrieNode curr = root;\n        for (char c : word.toCharArray()) {\n            if (curr.children[c - 'a'] == null) return false;\n            curr = curr.children[c - 'a'];\n        }\n        return curr.isEnd;\n    }\n}</code></pre>",
                "<strong>3. Z-Algorithm:</strong> Builds a prefix LCP array <code>Z</code> in linear O(N) time.<pre><code>public int[] zAlgorithm(String s) {\n    int n = s.length();\n    int[] z = new int[n];\n    int l = 0, r = 0;\n    for (int i = 1; i &lt; n; i++) {\n        if (i &lt;= r) z[i] = Math.min(r - i + 1, z[i - l]);\n        while (i + z[i] &lt; n && s.charAt(z[i]) == s.charAt(i + z[i])) z[i]++;\n        if (i + z[i] - 1 &gt; r) {\n            l = i; r = i + z[i] - 1;\n        }\n    }\n    return z;\n}</code></pre>"
            ]
        },
        {
            heading: "Expert Tips & Optimization",
            items: [
                "<strong>Avoid Unnecessary Copies:</strong> Strings are immutable, so operators like <code>+</code> or methods like <code>substring()</code> duplicate buffers in O(N). If shifting characters dynamically, use a <code>Deque</code> or a mutable buffer array instead.",
                "<strong>Use Array for Lowercase Frequencies:</strong> Avoid maps (e.g. <code>HashMap&lt;Character, Integer&gt;</code>) for simple lowercase character counting. An integer array of size 26 (<code>int[] count = new int[26]</code>) is faster and has a smaller CPU cache footprint.",
                "<strong>Java Comparison Warning:</strong> Never use <code>==</code> to check string values in Java (it checks memory address references). Always use <code>.equals()</code> or <code>.equalsIgnoreCase()</code>.",
                "<strong>Decision Tree:</strong><pre>Need to search single pattern? → KMP or Boyer-Moore\nNeed to search multiple patterns? → Trie or Aho-Corasick\nNeed anagram comparisons? → Character frequency array\nNeed edit modifications? → StringBuilder (Java) / std::string (C++)</pre>"
            ]
        }
    ],
    mcqs: {
        easy: [
            {
                q: "What is the time complexity of the .charAt(int index) method in Java's String class?",
                options: ["O(1)", "O(log N)", "O(N)", "O(N^2)"],
                answer: 0,
                explanation: "Java Strings are internally backed by character/byte arrays, so retrieving a character by index is a constant time operation."
            },
            {
                q: "In Java, which of the following statements is true about Strings?",
                options: ["Strings are mutable", "Strings are immutable", "Strings are stored on the stack only", "Strings can be modified using .set(index, char)"],
                answer: 1,
                explanation: "Java Strings are immutable. Once created, their values cannot be changed. Any string operation that appears to modify a string returns a new String object."
            },
            {
                q: "Which class should be used to concatenate strings in a loop to avoid creating multiple temporary objects?",
                options: ["String", "StringBuffer", "StringBuilder", "StringConcatenator"],
                answer: 2,
                explanation: "StringBuilder is mutable and unsynchronized, making it the most efficient option for local string concatenations in loops."
            },
            {
                q: "How do you check if two String objects s1 and s2 have the same sequence of characters in Java?",
                options: ["s1 == s2", "s1.equals(s2)", "s1.compare(s2)", "s1 === s2"],
                answer: 1,
                explanation: "The == operator checks if both references point to the same object in memory, while the .equals() method compares the actual characters inside the strings."
            },
            {
                q: "What is the time complexity of the s.length() method in Java?",
                options: ["O(1)", "O(log N)", "O(N)", "O(N^2)"],
                answer: 0,
                explanation: "The length of a string in Java is stored as an internal instance field, making s.length() an O(1) operation."
            },
            {
                q: "What is the value returned by 'hello'.indexOf('z')?",
                options: ["0", "-1", "Throws Exception", "null"],
                answer: 1,
                explanation: "The indexOf() method returns -1 if the character or substring is not found within the calling String."
            },
            {
                q: "What is the correct way to convert a string s to a character array in Java?",
                options: ["s.toArray()", "s.toCharArray()", "(char[]) s", "Arrays.convert(s)"],
                answer: 1,
                explanation: "The toCharArray() method on a String returns a newly allocated character array whose length is the length of this string."
            },
            {
                q: "What is the time complexity of checking if a string of length N is a palindrome using two pointers?",
                options: ["O(1)", "O(log N)", "O(N)", "O(N log N)"],
                answer: 2,
                explanation: "Two pointers start at the outer limits and meet in the center, performing at most N/2 character comparisons. This requires O(N) time."
            },
            {
                q: "Which of the following is used to check if a character c is a letter or a digit in Java?",
                options: ["c.isAlphaNumeric()", "Character.isLetterOrDigit(c)", "String.isLetterOrDigit(c)", "c.isLetterOrDigit()"],
                answer: 1,
                explanation: "Character.isLetterOrDigit(c) is a static method in the java.lang.Character class that determines if a character is a letter or a digit."
            },
            {
                q: "What is the space complexity of s.substring(start, end) in Java 9+?",
                options: ["O(1)", "O(log N)", "O(N)", "O(N^2)"],
                answer: 2,
                explanation: "In modern Java (Java 9+), substring allocates a new character array for the substring to prevent memory leaks from holding onto the parent array, requiring O(N) space."
            }
        ],
        medium: [
            {
                q: "What is the worst-case time complexity of concatenating N strings of length L using the '+' operator in a loop?",
                options: ["O(N * L)", "O(N^2 * L)", "O(N * L^2)", "O(N^2 * L^2)"],
                answer: 1,
                explanation: "Each concatenation creates a new String, copying all previous characters. The total operations copy L, 2L, 3L... up to NL characters, which sums to O(N^2 * L)."
            },
            {
                q: "For an anagram check between two strings of length N containing lowercase English letters, what is the best space complexity?",
                options: ["O(1)", "O(N)", "O(log N)", "O(N^2)"],
                answer: 0,
                explanation: "Since the character set is fixed (26 letters), we can count character frequencies using a fixed-size integer array of size 26, which takes O(1) space."
            },
            {
                q: "In a string matching problem, what is the worst-case time complexity of the naive string search algorithm for a text of length N and pattern of length M?",
                options: ["O(N + M)", "O(N * M)", "O(N^2)", "O(M^2)"],
                answer: 1,
                explanation: "In the worst case, the naive algorithm compares the pattern at all N - M + 1 positions, making up to M comparisons at each step, yielding O(N * M) time."
            },
            {
                q: "Which data structure is best suited to check if a string contains duplicate characters in a single pass?",
                options: ["Queue", "Stack", "Boolean array or Bitmask", "LinkedList"],
                answer: 2,
                explanation: "A boolean array of size 256 (for ASCII) or a bitmask integer (if limited to 26 alphabets) allows tracking visited characters in O(1) lookup time."
            },
            {
                q: "In Java, what is the key difference between String constant pool and standard heap allocation?",
                options: [
                    "Constant pool is in stack memory",
                    "Constant pool reuses identical string literals to save memory",
                    "Constant pool is mutable",
                    "Standard heap allocation is faster"
                ],
                answer: 1,
                explanation: "String literals are stored in the String Constant Pool. When a literal is reused, Java references the existing object from the pool instead of creating a new one on the heap."
            },
            {
                q: "What is the purpose of the 'longest border' (LPS array) in the Knuth-Morris-Pratt (KMP) string matching algorithm?",
                options: [
                    "To sort the string",
                    "To store the frequency of characters",
                    "To store length of the longest proper prefix which is also a suffix",
                    "To count unique characters"
                ],
                answer: 2,
                explanation: "The LPS array tracks the length of the longest proper prefix of the pattern that is also a suffix, allowing the search to skip comparisons when a mismatch occurs."
            },
            {
                q: "What is the time complexity of building the LPS array for a pattern of length M in the KMP algorithm?",
                options: ["O(1)", "O(log M)", "O(M)", "O(M^2)"],
                answer: 2,
                explanation: "The preprocessing phase to construct the LPS array uses a two-pointer technique that takes linear time, O(M)."
            },
            {
                q: "How does the Rabin-Karp algorithm achieve efficient substring matching?",
                options: [
                    "Binary search on text",
                    "Preprocessing the text using a Trie",
                    "Using a rolling hash function to compare text window and pattern hashes in O(1)",
                    "Dynamic Programming"
                ],
                answer: 2,
                explanation: "Rabin-Karp uses a rolling hash function to calculate hashes of sliding text windows in O(1) time, checking for actual matches only when hashes match."
            },
            {
                q: "What is the maximum number of unique substrings in a string of length N?",
                options: ["N", "N log N", "N(N + 1) / 2", "2^N"],
                answer: 2,
                explanation: "Any substring is defined by a starting index and ending index. For length N, the number of choices is N + (N-1) + ... + 1 = N(N + 1)/2."
            },
            {
                q: "In Java, how does String.intern() behave?",
                options: [
                    "It deletes the string from memory",
                    "It places the string in the constant pool or returns its reference if it already exists",
                    "It converts the string to uppercase",
                    "It generates a unique hash code"
                ],
                answer: 1,
                explanation: "String.intern() checks if the pool already contains a string equal to this String object. If yes, the pool string is returned; if no, it is added to the pool and returned."
            }
        ],
        hard: [
            {
                q: "What is the worst-case time complexity of the Rabin-Karp string matching algorithm?",
                options: ["O(N + M)", "O(N * M)", "O(N log M)", "O(N^2)"],
                answer: 1,
                explanation: "In the worst case (e.g., when the hash function has collisions at every window), Rabin-Karp performs full character comparisons at every index, yielding O(N * M) time."
            },
            {
                q: "In the Boyer-Moore string search algorithm, what is the role of the 'Bad Character Heuristic'?",
                options: [
                    "Skip characters that are vowels",
                    "Align the mismatched text character with its rightmost occurrence in the pattern",
                    "Reverse the search direction",
                    "Shorten the pattern"
                ],
                answer: 1,
                explanation: "The bad character heuristic shifts the pattern so that the mismatched text character aligns with its last occurrence in the pattern (or shifts past it if it's not present)."
            },
            {
                q: "What is the time complexity of constructing a Suffix Array for a string of length N using the prefix doubling algorithm?",
                options: ["O(N)", "O(N log N)", "O(N log^2 N)", "O(N^2)"],
                answer: 2,
                explanation: "Prefix doubling assigns equivalence classes to substrings of length 2^k and sorts them in log N steps. Using standard sorting at each step takes O(N log^2 N) time."
            },
            {
                q: "In Manacher's Algorithm for finding the longest palindromic substring, how is O(N) time complexity achieved?",
                options: [
                    "By sorting the string first",
                    "By reusing palindrome centers and radii of previously computed symmetric characters",
                    "Using a suffix tree",
                    "Using binary search on answer"
                ],
                answer: 1,
                explanation: "Manacher's algorithm records palindrome boundaries and uses symmetry properties (mirror positions relative to the current center) to avoid re-expanding characters."
            },
            {
                q: "In the Z-Algorithm, what does the array Z[i] store for a string of length N?",
                options: [
                    "The character frequency at index i",
                    "The length of the longest common prefix between the suffix starting at i and the entire string",
                    "The number of unique characters up to i",
                    "The index of the next match"
                ],
                answer: 1,
                explanation: "Z[i] is defined as the length of the longest common prefix (LCP) between the suffix starting at index i and the entire string (suffix starting at index 0)."
            },
            {
                q: "What is the time and space complexity of the Z-Algorithm for pattern matching?",
                options: [
                    "Time O(N * M), Space O(M)",
                    "Time O(N + M), Space O(N + M)",
                    "Time O(N log N), Space O(1)",
                    "Time O(N + M), Space O(1)"
                ],
                answer: 1,
                explanation: "The Z-algorithm builds a Z-array of size N + M + 1 for the concatenated string Pattern + '$' + Text, taking O(N + M) time and O(N + M) space."
            },
            {
                q: "Which of the following string algorithms can find the longest common substring of two strings of length N and M in O(N + M) time?",
                options: ["KMP", "Rabin-Karp", "Suffix Tree or Suffix Automaton", "Z-Algorithm"],
                answer: 2,
                explanation: "A Suffix Tree (constructed via Ukkonen's algorithm) or a Suffix Automaton can find the longest common substring in O(N + M) time by traversing the structure."
            },
            {
                q: "How does Ukkonen's Algorithm construct a Suffix Tree in O(N) time?",
                options: [
                    "By sorting suffixes recursively",
                    "Online construction using active points and suffix links",
                    "Using dynamic programming",
                    "By dividing text into blocks"
                ],
                answer: 1,
                explanation: "Ukkonen's online algorithm parses the string character-by-character and leverages suffix links to traverse tree structures in O(1) amortized time per suffix addition."
            },
            {
                q: "What is the space complexity of a Suffix Automaton for a string of length N?",
                options: ["O(1)", "O(log N)", "O(N)", "O(N^2)"],
                answer: 2,
                explanation: "A Suffix Automaton represents all suffixes of a string using a directed acyclic graph that has at most 2N - 1 states and 3N - 4 transitions, taking O(N) space."
            },
            {
                q: "In Java, what is the capacity growth behavior of a StringBuilder?",
                options: [
                    "It stays fixed size",
                    "It doubles in size + 2 when it overflows",
                    "It grows by 1 element",
                    "It grows by a factor of 1.5"
                ],
                answer: 1,
                explanation: "When a StringBuilder exceeds its current buffer size, it allocates a new backing char array of size (currentCapacity * 2) + 2 and copies elements over."
            }
        ]
    }
};
