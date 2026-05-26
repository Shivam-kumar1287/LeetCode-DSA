window.TopicsData = window.TopicsData || {};
window.TopicsData["String"] = {
    title: "Strings & Advanced String Algorithms",
    sections: [
        {
            heading: "Basics & Java Specifics",
            items: [
                "Sequences of characters. In Java, Strings are immutable.",
                "<code>String.length()</code>, <code>s.charAt(i)</code>, <code>s.substring(start, end)</code>."
            ]
        },
        {
            heading: "Theoretical & Coding Tips",
            items: [
                "Use <code>StringBuilder</code> for multiple append operations.<pre><code>StringBuilder sb = new StringBuilder();\nsb.append('a');\nString result = sb.toString();</code></pre>",
                "String to char array is much faster for index manipulation.<pre><code>char[] arr = s.toCharArray();</code></pre>",
                "String comparison MUST use <code>.equals()</code>, not <code>==</code>.",
                "For anagrams or character frequency, use a fixed size array instead of a HashMap.<pre><code>int[] count = new int[26];\ncount[s.charAt(i) - 'a']++;</code></pre>",
                "To check if a character is alphanumeric: <code>Character.isLetterOrDigit(c)</code>."
            ]
        },
        {
            heading: "Time & Space Complexity",
            items: [
                "<strong>Access by index (charAt):</strong> O(1) Time",
                "<strong>Substring creation:</strong> O(N) Time",
                "<strong>Concatenation (+ operator in a loop):</strong> O(N^2) Time.",
                "<strong>Concatenation using StringBuilder:</strong> O(1) amortized Time per append, O(N) overall.",
                "<strong>Space Complexity:</strong> O(N) for storing a string of length N."
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
