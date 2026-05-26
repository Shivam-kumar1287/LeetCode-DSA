window.TopicsData = window.TopicsData || {};
window.TopicsData["BinarySearch"] = {
    title: "Binary Search",
    sections: [
        {
            heading: "Basics & Theory",
            items: [
                "Search in O(log n) time. Search space must be sorted or monotonic."
            ]
        },
        {
            heading: "Theoretical & Coding Tips",
            items: [
                "Always use <code>left + (right - left) / 2</code> to avoid integer overflow when calculating mid.",
                "<strong>Classic Binary Search Code Pattern:</strong><pre><code>int left = 0, right = arr.length - 1;\nwhile(left <= right) {\n    int mid = left + (right - left) / 2;\n    if(arr[mid] == target) return mid;\n    else if(arr[mid] < target) left = mid + 1;\n    else right = mid - 1;\n}\nreturn -1;</code></pre>",
                "For finding the 'first occurrence' (lower bound), do not return immediately. Instead, shrink the right boundary."
            ]
        },
        {
            heading: "Time & Space Complexity",
            items: [
                "<strong>Standard Binary Search Time:</strong> O(log N).",
                "<strong>Search Space on Answers Time:</strong> O(N log(Max - Min)).",
                "<strong>Space Complexity:</strong> O(1) if iterative, O(log N) if recursive."
            ]
        }
    ],
    mcqs: {
        easy: [
            {
                q: "What is the prerequisite for performing a binary search on an array?",
                options: [
                    "The array must be sorted",
                    "The array must have a size that is a power of 2",
                    "The array must contain unique values",
                    "The array must be stored on the stack"
                ],
                answer: 0,
                explanation: "Binary search works by dividing search regions in half. This requires elements to be in a sorted or monotonic order to decide which half contains the target."
            },
            {
                q: "What is the time complexity of the standard binary search algorithm on a sorted array of size N?",
                options: ["O(1)", "O(log N)", "O(N)", "O(N log N)"],
                answer: 1,
                explanation: "Each iteration of binary search reduces the size of the search interval by half. The maximum number of divisions is log₂ N, yielding O(log N) complexity."
            },
            {
                q: "Which of the following formulas is preferred to calculate the middle index 'mid' to prevent integer overflow in Java?",
                options: [
                    "mid = (left + right) / 2;",
                    "mid = left + (right - left) / 2;",
                    "mid = left + right >> 1;",
                    "mid = (left + right) >>> 1;"
                ],
                answer: 1,
                explanation: "If left and right are very large, their sum can exceed Integer.MAX_VALUE and overflow into a negative number. Using left + (right - left) / 2 avoids this issue entirely."
            },
            {
                q: "If the target element is NOT present in the sorted array, what does a standard binary search return?",
                options: [
                    "Throws an exception",
                    "-1 or a negative index representation",
                    "null",
                    "0"
                ],
                answer: 1,
                explanation: "A standard implementation returns -1 or a negative representation of the insertion index to indicate the element was not found."
            },
            {
                q: "In binary search, if the element at the middle index 'arr[mid]' is strictly less than the target, where should the search continue?",
                options: [
                    "In the left half (right = mid - 1)",
                    "In the right half (left = mid + 1)",
                    "Stop and return mid",
                    "Start a linear search"
                ],
                answer: 1,
                explanation: "Since the array is sorted, if the mid value is smaller than the target, then the target must be located to the right of mid. Thus, we update left = mid + 1."
            },
            {
                q: "What is the space complexity of an iterative binary search?",
                options: ["O(1)", "O(log N)", "O(N)", "O(N log N)"],
                answer: 0,
                explanation: "Iterative binary search uses only a few pointers (left, right, mid) and updates them in-place, taking O(1) auxiliary space."
            },
            {
                q: "What is the space complexity of a recursive binary search on a sorted array of size N?",
                options: ["O(1)", "O(log N)", "O(N)", "O(N^2)"],
                answer: 1,
                explanation: "Recursive binary search adds a stack frame for each call. The recursion depth is log₂ N, so it takes O(log N) space on the system call stack."
            },
            {
                q: "How many comparison operations are performed in the worst case for a binary search on an array of size 8?",
                options: ["3", "4", "8", "1"],
                answer: 1,
                explanation: "The worst-case search path does ⌊log₂ 8⌋ + 1 = 3 + 1 = 4 comparisons before concluding the search."
            },
            {
                q: "What initial values are left and right pointers set to in a binary search on an array 'arr'?",
                options: [
                    "left = 0, right = arr.length;",
                    "left = 0, right = arr.length - 1;",
                    "left = 1, right = arr.length;",
                    "left = -1, right = arr.length;"
                ],
                answer: 1,
                explanation: "Valid array indices range from 0 to arr.length - 1. Pointers must encompass all elements, so left starts at 0 and right at arr.length - 1."
            },
            {
                q: "Which condition is standard in the while loop of a classic binary search searching for a target?",
                options: [
                    "while (left < right)",
                    "while (left <= right)",
                    "while (left != right)",
                    "while (left > right)"
                ],
                answer: 1,
                explanation: "Using left <= right ensures that search spaces of size 1 (when left == right) are checked before concluding that the target is missing."
            }
        ],
        medium: [
            {
                q: "In a binary search variation to find the 'first occurrence' (lower bound) of a target in an array containing duplicates, what should you do when arr[mid] == target?",
                options: [
                    "Return mid immediately",
                    "Set left = mid + 1 to search the right side",
                    "Set right = mid - 1 (or right = mid) to search the left side",
                    "Terminate search and return -1"
                ],
                answer: 2,
                explanation: "When we find a match, there could be earlier occurrences to its left. We shrink the search space to the left by updating the right boundary to find the earliest index."
            },
            {
                q: "Suppose you have a sorted array that is rotated at an unknown pivot (e.g. [4,5,6,7,0,1,2]). How does binary search determine which half to search?",
                options: [
                    "By comparing arr[left] with arr[mid]",
                    "By sorting the array first",
                    "Using linear search",
                    "Comparing arr[mid] with arr[right] to identify the sorted half"
                ],
                answer: 3,
                explanation: "In a rotated sorted array, one of the two halves split by mid is always sorted. By comparing arr[mid] and arr[right], we find the sorted half and check if the target lies within its range."
            },
            {
                q: "What is the time complexity of the 'Search Space on Answers' technique (e.g., Koko Eating Bananas) where the search range is between 1 and M, and validating a choice takes O(N) time?",
                options: ["O(N * M)", "O(N log M)", "O(N + M)", "O(M log N)"],
                answer: 1,
                explanation: "Binary search on the answer space [1..M] takes log M iterations. Each iteration runs an O(N) validation check, yielding a total complexity of O(N log M)."
            },
            {
                q: "In Java, what does Arrays.binarySearch(arr, target) return if the target is NOT found in the array?",
                options: ["-1", "null", "-(insertion_point) - 1", "Throws an exception"],
                answer: 2,
                explanation: "It returns -(insertion_point) - 1, representing the index where the key would be inserted, negated, to ensure a negative return value."
            },
            {
                q: "When searching for the peak element in a mountain array (strictly increasing then strictly decreasing), what condition at mid indicates the peak is on the right?",
                options: [
                    "arr[mid] < arr[mid - 1]",
                    "arr[mid] < arr[mid + 1]",
                    "arr[mid] == arr[mid + 1]",
                    "arr[mid] > arr[mid + 1]"
                ],
                answer: 1,
                explanation: "If arr[mid] < arr[mid+1], it indicates the values are still ascending. The peak must be to the right of mid, so we set left = mid + 1."
            },
            {
                q: "What is the time complexity to find the square root of a number N using binary search with a precision of 6 decimal places?",
                options: ["O(N)", "O(log N)", "O(constant)", "O(N^2)"],
                answer: 1,
                explanation: "The search space is [0, N]. Since each step halves the range, the number of steps required to reach precision P is log₂(N * 10^P), which is O(log N)."
            },
            {
                q: "Which property must a function f(x) satisfy so that we can apply binary search to find an x such that f(x) == target?",
                options: [
                    "It must be continuous",
                    "It must be monotonic (strictly increasing or decreasing)",
                    "It must be quadratic",
                    "It must be symmetric"
                ],
                answer: 1,
                explanation: "Monotonicity ensures that if f(mid) is less than the target, we know the search space is to the right; if greater, it is to the left. This allows halving the range."
            },
            {
                q: "If a 2D matrix of size M x N is sorted such that the first integer of each row is greater than the last integer of the previous row (flattened sorted array), what is the optimal search time complexity?",
                options: ["O(M * N)", "O(log(M * N))", "O(M log N)", "O(M + N)"],
                answer: 1,
                explanation: "Since the rows form one long sorted array, we can map flat indices [0..M*N-1] to matrix indices: row = index / N, col = index % N, allowing standard O(log(M*N)) binary search."
            },
            {
                q: "What is the result of using a binary search loop condition 'while (left < right)' when the target is at index right and we update right = mid?",
                options: [
                    "Loop terminates and fails to check the last element",
                    "Infinite loop",
                    "Loop works correctly if a post-loop check is performed",
                    "Stack overflow"
                ],
                answer: 2,
                explanation: "The loop terminates when left == right. Since the last index is never evaluated inside the loop, we must check if arr[left] == target after the loop."
            },
            {
                q: "In a binary search for the first element greater than or equal to a target (lower bound), how should we update the pointers if arr[mid] >= target?",
                options: ["left = mid + 1;", "right = mid;", "right = mid - 1;", "Stop and return mid;"],
                answer: 1,
                explanation: "Since arr[mid] is >= target, mid is a candidate. However, there could be a smaller index that also satisfies the condition. We shrink the boundary to [left, mid] by setting right = mid."
            }
        ],
        hard: [
            {
                q: "In the 'Median of Two Sorted Arrays' problem of sizes N and M, what is the time complexity of the optimal binary search algorithm?",
                options: ["O(N + M)", "O(log(N + M))", "O(log(min(N, M)))", "O(N log M)"],
                answer: 2,
                explanation: "The optimal algorithm binary searches the partition point of the smaller array. This halves the search space of size min(N, M), yielding O(log(min(N, M))) time complexity."
            },
            {
                q: "In the 'Split Array Largest Sum' (LeetCode 410) problem, we partition an array into K subarrays to minimize the maximum subarray sum. What is the search space of our binary search?",
                options: [
                    "From 0 to totalSum",
                    "From maxElement to totalSum",
                    "From 0 to maxElement",
                    "From 1 to N"
                ],
                answer: 1,
                explanation: "The minimum possible largest subarray sum is the maximum single element in the array (maxElement), and the maximum possible is the sum of all elements (totalSum)."
            },
            {
                q: "In a search on a sorted array of unknown/infinite size, how do we locate the boundaries for binary search?",
                options: [
                    "Run linear search from index 0",
                    "Set boundaries dynamically using exponential search (doubling the index: 1, 2, 4, 8...)",
                    "Run binary search on the entire integer range",
                    "It is impossible"
                ],
                answer: 1,
                explanation: "Exponential search doubles the boundary index dynamically until the value exceeds the target. This finds a boundary [index/2, index] of size O(target) in O(log(target)) time, where we can then perform binary search."
            },
            {
                q: "When performing binary search on double precision floating-point numbers (e.g. finding a double root), how do we prevent infinite loops due to precision limits?",
                options: [
                    "Run the loop for a fixed number of iterations (e.g., 60-100 iterations)",
                    "Use while (Math.abs(right - left) > 1e-9)",
                    "Cast numbers to integers",
                    "Both 1 and 2 are standard practices"
                ],
                answer: 3,
                explanation: "Floating-point precision limits make normal equality tests unsafe. Running a fixed loop (e.g., 80 iterations) or stopping when the search interval is smaller than a precision threshold (1e-9) ensures safety."
            },
            {
                q: "In a sorted array containing duplicates, what is the time complexity of finding the total count of a target element using binary search?",
                options: ["O(log N)", "O(N)", "O(N log N)", "O(1)"],
                answer: 0,
                explanation: "We search twice using binary search: once to find the first occurrence (lower bound) and once to find the last occurrence (upper bound). The count is upper - lower + 1, taking O(log N) time."
            },
            {
                q: "In a rotated sorted array of size N that contains duplicates (LeetCode 81), what is the worst-case time complexity of searching for an element?",
                options: ["O(log N)", "O(N)", "O(N log N)", "O(N^2)"],
                answer: 1,
                explanation: "When arr[left] == arr[mid] == arr[right], it is impossible to determine which half is sorted. We must increment left and decrement right sequentially, leading to O(N) worst-case time."
            },
            {
                q: "Which binary search algorithm is used in standard database index lookups (like B+ Trees)?",
                options: [
                    "Iterative array binary search",
                    "Tree node binary search",
                    "Interpolation search",
                    "Exponential search"
                ],
                answer: 1,
                explanation: "B+ Tree index nodes contain a sorted list of keys. Finding the correct child branch to traverse down uses binary search on these keys."
            },
            {
                q: "What is the time complexity of the Interpolation Search algorithm on average, if the elements in the sorted array are uniformly distributed?",
                options: ["O(log N)", "O(log(log N))", "O(1)", "O(N)"],
                answer: 1,
                explanation: "If elements are uniformly distributed, Interpolation Search estimates target positions mathematically (similar to human dictionary lookups), reducing average time to O(log(log N))."
            },
            {
                q: "In a 'Capacity To Ship Packages Within D Days' problem, if K is the sum of package weights, what happens to the required ship capacity as the allowed days D increases?",
                options: [
                    "The required capacity increases",
                    "The required capacity decreases",
                    "The required capacity remains constant",
                    "The required capacity is unpredictable"
                ],
                answer: 1,
                explanation: "Allowing more days to ship the same total weight means we can ship less weight per day, which decreases the required minimum ship capacity. This establishes monotonicity."
            },
            {
                q: "In a 'Find Minimum in Rotated Sorted Array' problem (no duplicates), what index does binary search return if the array was rotated N times (effectively sorted)?",
                options: ["Index N-1", "Index 0", "Index N/2", "Index -1"],
                answer: 1,
                explanation: "If an array is rotated N times (where N is its size), it returns to its original sorted order. The minimum element will be at index 0."
            }
        ]
    }
};
