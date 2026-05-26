window.TopicsData = window.TopicsData || {};
window.TopicsData["Array"] = {
    title: "Array & Sliding Window",
    sections: [
        {
            heading: "Basics & Java Specifics",
            items: [
                "Contiguous memory allocation, indexing, traversal.",
                "<code>int[] arr = new int[n]</code>. Length is accessed via <code>arr.length</code> (no parentheses).",
                "<strong>Initialization Code:</strong> <code>int[] arr = {1, 2, 3};</code> or <code>Arrays.fill(arr, -1);</code>",
                "<strong>Sorting Code:</strong> <code>Arrays.sort(arr);</code> (O(N log N) time).",
                "<strong>Copying Arrays:</strong> <code>int[] copy = Arrays.copyOf(arr, arr.length);</code>"
            ]
        },
        {
            heading: "Theoretical & Coding Tips",
            items: [
                "Always check for edge cases like <code>if(arr == null || arr.length == 0) return 0;</code>.",
                "If the array is sorted, consider <strong>Binary Search</strong> or <strong>Two Pointers</strong>.",
                "<strong>Two Pointers Code Pattern:</strong><pre><code>int left = 0, right = arr.length - 1;\nwhile(left < right) { \n    // logic \n    left++; right--; \n}</code></pre>",
                "For subarray sums, think of <strong>Prefix Sums</strong>. <em>Theory:</em> <code>prefixSum[i]</code> stores the sum of elements from index <code>0</code> to <code>i</code>.",
                "If you need to find duplicates or missing numbers in an array of size <code>n</code> containing numbers from 1 to n, consider modifying the array in-place to achieve O(1) space."
            ]
        },
        {
            heading: "Time & Space Complexity",
            items: [
                "<strong>Access by index:</strong> O(1) Time",
                "<strong>Search (Unsorted):</strong> O(N) Time",
                "<strong>Search (Sorted, Binary Search):</strong> O(log N) Time",
                "<strong>Insert/Delete at end:</strong> O(1) Time",
                "<strong>Insert/Delete in middle/beginning:</strong> O(N) Time (due to shifting elements)",
                "<strong>Space Complexity:</strong> O(N) where N is the size of the array."
            ]
        }
    ],
    mcqs: {
        easy: [
            {
                q: "What is the time complexity to access an element by index in a Java array?",
                options: ["O(1)", "O(log N)", "O(N)", "O(N log N)"],
                answer: 0,
                explanation: "Arrays allocate contiguous memory blocks, so computing the memory address of an element at a specific index takes constant time O(1)."
            },
            {
                q: "Which of the following is the correct way to find the size of an array named 'arr' in Java?",
                options: ["arr.size()", "arr.length()", "arr.length", "arr.getSize()"],
                answer: 2,
                explanation: "In Java, arrays are special objects that expose a public, final field called 'length' (no parentheses) to retrieve their size."
            },
            {
                q: "What is the default value of elements in a newly instantiated 'int[]' array in Java?",
                options: ["0", "null", "undefined", "-1"],
                answer: 0,
                explanation: "Primitive numeric arrays (like int[]) in Java are automatically initialized to their default values, which is 0 for integers."
            },
            {
                q: "Which utility method from java.util.Arrays should be used to fill an array with a specific value, say -1?",
                options: ["Arrays.set(arr, -1)", "Arrays.fill(arr, -1)", "Arrays.populate(arr, -1)", "Arrays.initialize(arr, -1)"],
                answer: 1,
                explanation: "Arrays.fill(arr, val) assigns the specified value to each element of the array."
            },
            {
                q: "In a two-pointer technique on a sorted array, if the sum of elements at the pointers is too small, how do you adjust the pointers?",
                options: ["Decrement the right pointer", "Increment the left pointer", "Decrement both pointers", "Increment both pointers"],
                answer: 1,
                explanation: "Since the array is sorted, incrementing the left pointer moves it to a larger value, which increases the total sum."
            },
            {
                q: "What is the space complexity of Arrays.copyOf(arr, arr.length)?",
                options: ["O(1)", "O(log N)", "O(N)", "O(N^2)"],
                answer: 2,
                explanation: "Arrays.copyOf allocates a new array of size N and copies elements from the source array, which requires O(N) auxiliary space."
            },
            {
                q: "Which of the following array operations takes O(N) time in the worst case?",
                options: ["Accessing the first element", "Modifying the last element", "Inserting an element at the beginning", "Finding the length of the array"],
                answer: 2,
                explanation: "Inserting an element at index 0 requires shifting all existing N elements one index to the right, which takes linear time."
            },
            {
                q: "What happens if you try to access arr[arr.length] in Java?",
                options: ["Returns null", "Returns 0", "Throws ArrayIndexOutOfBoundsException", "Throws NullPointerException"],
                answer: 2,
                explanation: "Valid array indices in Java range from 0 to length - 1. Accessing index length is out of bounds and throws ArrayIndexOutOfBoundsException."
            },
            {
                q: "What is the time complexity of the standard Arrays.sort(int[] arr) in Java?",
                options: ["O(N)", "O(N log N)", "O(N^2)", "O(2^N)"],
                answer: 1,
                explanation: "Java's Arrays.sort() for primitive arrays uses a Dual-Pivot Quicksort implementation, which has an average and worst-case time complexity of O(N log N)."
            },
            {
                q: "Which technique is most suitable for finding the sum of arbitrary subarrays in O(1) time after an initial preprocessing step?",
                options: ["Sliding Window", "Two Pointers", "Prefix Sum", "Binary Search"],
                answer: 2,
                explanation: "Precomputing a prefix sum array allows computing the sum of elements between indices L and R as prefix[R] - prefix[L-1] in constant time."
            }
        ],
        medium: [
            {
                q: "In the sliding window technique, when is a window considered 'dynamic' (variable-size) as opposed to 'fixed-size'?",
                options: [
                    "When the window size increases and decreases based on a condition",
                    "When the window only moves forward",
                    "When the window size is predetermined",
                    "When the window elements are sorted"
                ],
                answer: 0,
                explanation: "A dynamic sliding window dynamically expands and contracts its boundaries based on whether a condition (like the number of unique characters) is met."
            },
            {
                q: "Given a sliding window problem of finding the maximum sum of a subarray of size K, what is the optimal time complexity?",
                options: ["O(K)", "O(N)", "O(N * K)", "O(N log N)"],
                answer: 1,
                explanation: "Using a fixed sliding window of size K, we add the new element and subtract the oldest element to slide the window in O(1) per step, resulting in O(N) overall time."
            },
            {
                q: "How can we check if an array of size N containing numbers from 1 to N has duplicate elements in O(N) time and O(1) auxiliary space?",
                options: [
                    "Sort the array first",
                    "Use a HashSet to track seen elements",
                    "Use elements as indices and negate values at those indices",
                    "Use nested loops"
                ],
                answer: 2,
                explanation: "Since elements are between 1 and N, we can treat each element's value as an index and negate the value at that index. If we visit an index that is already negative, a duplicate exists."
            },
            {
                q: "What is the time complexity of Kadane's Algorithm for finding the maximum subarray sum?",
                options: ["O(N^2)", "O(N log N)", "O(N)", "O(1)"],
                answer: 2,
                explanation: "Kadane's Algorithm does a single pass over the array, tracking the max sum ending at the current element: currMax = Math.max(num, currMax + num). This takes O(N) time."
            },
            {
                q: "In Java, what is the primary difference between sorting an int[] array and an Integer[] array using Arrays.sort()?",
                options: [
                    "int[] is sorted using MergeSort while Integer[] uses QuickSort",
                    "int[] uses Dual-Pivot QuickSort while Integer[] uses TimSort",
                    "Integer[] cannot be sorted using Arrays.sort()",
                    "There is no difference"
                ],
                answer: 1,
                explanation: "For primitive arrays, Java uses a fast Dual-Pivot Quicksort. For Object arrays (like Integer[]), Java uses TimSort to guarantee a stable sort and O(N log N) worst-case time."
            },
            {
                q: "For the 'Two Sum' problem on an UNSORTED array, what is the best achievable time and space complexity combination?",
                options: [
                    "Time O(N log N), Space O(1)",
                    "Time O(N), Space O(N)",
                    "Time O(N^2), Space O(1)",
                    "Time O(N), Space O(1)"
                ],
                answer: 1,
                explanation: "By utilizing a HashSet/HashMap to store visited values and their indices, we can locate target complements in O(N) time with O(N) space."
            },
            {
                q: "What is the time complexity of building a Prefix Sum array of size N?",
                options: ["O(1)", "O(log N)", "O(N)", "O(N log N)"],
                answer: 2,
                explanation: "Constructing a prefix sum array requires iterating through the N elements once: prefix[i] = prefix[i-1] + arr[i], which is O(N) time."
            },
            {
                q: "Suppose you have a sorted array that has been rotated at some unknown pivot. Which algorithm can find an element in O(log N) time?",
                options: ["Linear Search", "Binary Search", "Two Pointers", "Sliding Window"],
                answer: 1,
                explanation: "In a rotated sorted array, one of the two halves divided by the mid-point is always sorted. We can adapt binary search to check which half is sorted and adjust search boundaries."
            },
            {
                q: "When implementing the sliding window maximum problem using a Double-Ended Queue (Deque), what does the Deque store?",
                options: [
                    "The elements themselves in sorted order",
                    "The indices of the elements",
                    "The prefix sums of the window",
                    "The counts of frequency"
                ],
                answer: 1,
                explanation: "Storing indices instead of values allows us to check whether elements inside the Deque are still within the boundaries of the current sliding window."
            },
            {
                q: "If we use the Two Pointer technique on a sorted array of size N to find a pair with a target sum, what is the worst-case number of comparisons?",
                options: ["O(N^2)", "O(N log N)", "O(N)", "O(1)"],
                answer: 2,
                explanation: "The pointers start at the outer limits and move towards each other. Each step does a comparison and moves at least one pointer, taking at most N steps, which is O(N)."
            }
        ],
        hard: [
            {
                q: "In the 'Dutch National Flag' algorithm (three-way partitioning for sorting 0s, 1s, and 2s in one pass), how many pointers are maintained?",
                options: ["Two pointers", "Three pointers", "Four pointers", "One pointer"],
                answer: 1,
                explanation: "Three pointers are maintained: low (boundary for 0s), mid (iterator for 1s), and high (boundary for 2s)."
            },
            {
                q: "In the sliding window maximum problem using a Monotonic Deque, what is the amortized time complexity per element insertion/deletion?",
                options: ["O(1)", "O(log K)", "O(K)", "O(N)"],
                answer: 0,
                explanation: "Each element is inserted into the Deque exactly once and removed at most once. Over the course of N elements, the total operations are at most 2N, making the amortized time O(1)."
            },
            {
                q: "Given an array representing heights, the 'Trapping Rain Water' problem can be solved in O(N) time and O(1) space. Which technique achieves this?",
                options: [
                    "Dynamic Programming with left/right max arrays",
                    "Monotonic Stack",
                    "Two Pointers",
                    "Binary Search on answer"
                ],
                answer: 2,
                explanation: "The Two Pointer technique tracks left and right boundaries alongside leftMax and rightMax, allowing elements to be processed from the shorter side with O(1) space."
            },
            {
                q: "What is the time complexity of the Quickselect algorithm to find the K-th smallest element in an array of size N in the worst case?",
                options: ["O(N)", "O(N log N)", "O(N^2)", "O(N!)"],
                answer: 2,
                explanation: "Although Quickselect runs in average O(N) time, poor pivot choices (like choosing the maximum element on a sorted array) reduce search space by only 1 per step, causing O(N^2) worst case."
            },
            {
                q: "In the sliding window algorithm for 'Minimum Window Substring' (LeetCode 76), how do we optimize the search when string S is extremely large but contains very few characters present in T?",
                options: [
                    "Sort S first",
                    "Use a filtered list storing only indices and characters of S that exist in T",
                    "Use binary search on indices",
                    "Compress S using run-length encoding"
                ],
                answer: 1,
                explanation: "By first storing a filtered list of only the characters in S that appear in T (along with their indices), the sliding window iterates only over relevant characters, speeding up runtime."
            },
            {
                q: "What is the recommended size of a 1D prefix sum array if the original array has size N, in order to simplify subarray sum queries without index-out-of-bounds checks?",
                options: ["N", "N - 1", "N + 1", "2N"],
                answer: 2,
                explanation: "A prefix sum array of size N+1 (where prefix[0] = 0) enables querying subarray sum L..R via prefix[R+1] - prefix[L] without needing to check if L is 0."
            },
            {
                q: "For the 'Longest Subarray with Sum Equal to K' problem containing BOTH positive and negative numbers, what is the optimal time and space complexity?",
                options: [
                    "Time O(N), Space O(1)",
                    "Time O(N), Space O(N)",
                    "Time O(N log N), Space O(1)",
                    "Time O(N^2), Space O(1)"
                ],
                answer: 1,
                explanation: "Since negative numbers mean prefix sums are not monotonic, we cannot use two-pointers. We must use a HashMap to store the first index of prefix sums, resulting in O(N) time and O(N) space."
            },
            {
                q: "In a 2D matrix of size M x N, if we want to find the maximum sum rectangle, what is the time complexity of the optimal algorithm?",
                options: ["O(M^2 * N^2)", "O(M^2 * N)", "O(M * N)", "O((M+N) log(M+N))"],
                answer: 1,
                explanation: "By fixing left and right column boundaries (O(M^2) pairs) and running Kadane's algorithm on the 1D accumulated row sums (O(N)), we solve it in O(M^2 * N) time."
            },
            {
                q: "If you want to partition an array into two subsets such that the difference between their sums is minimized, which classical problem does this reduce to?",
                options: ["Two Sum", "0/1 Knapsack", "Longest Common Subsequence", "Dijkstra's Algorithm"],
                answer: 1,
                explanation: "This problem is a direct variation of the Subset Sum problem (which itself is a 0/1 Knapsack variation) where we try to find a subset with a sum closest to totalSum / 2."
            },
            {
                q: "In a 'Majority Element II' problem where we need to find all elements that appear more than ⌊N/3⌋ times in O(N) time and O(1) space, which algorithm is used?",
                options: [
                    "Boyer-Moore Majority Vote Algorithm (with two candidates)",
                    "Kadane's Algorithm",
                    "Tortoise and Hare Algorithm",
                    "Quickselect"
                ],
                answer: 0,
                explanation: "The Boyer-Moore Majority Vote Algorithm can be extended to track two candidates with two vote counters to find elements appearing more than ⌊N/3⌋ times in O(N) time and O(1) space."
            }
        ]
    }
};
