window.TopicsData = window.TopicsData || {};
window.TopicsData["LinkedList"] = {
    title: "Linked List",
    sections: [
        {
            heading: "Basics & Java Specifics",
            items: [
                "Nodes pointing to subsequent nodes. Good for O(1) insertions/deletions if you have the pointer, but O(N) access time."
            ]
        },
        {
            heading: "Theoretical & Coding Tips",
            items: [
                "Always consider using a <strong>Dummy Head</strong> node.<pre><code>ListNode dummy = new ListNode(0);\ndummy.next = head;\nListNode curr = dummy;</code></pre>",
                "The <strong>Fast & Slow Pointer</strong> technique is standard for finding the middle or detecting cycles.<pre><code>ListNode slow = head, fast = head;\nwhile(fast != null && fast.next != null) {\n    slow = slow.next;\n    fast = fast.next.next;\n}</code></pre>",
                "Reversing a linked list requires tracking 3 pointers.<pre><code>ListNode prev = null, curr = head;\nwhile(curr != null) {\n    ListNode nextTemp = curr.next; \n    curr.next = prev;              \n    prev = curr;                   \n    curr = nextTemp;               \n}</code></pre>"
            ]
        },
        {
            heading: "Time & Space Complexity",
            items: [
                "<strong>Access by index / Search:</strong> O(N) Time",
                "<strong>Insertion/Deletion at Head:</strong> O(1) Time",
                "<strong>Insertion/Deletion in Middle (with pointer):</strong> O(1) Time",
                "<strong>Space Complexity:</strong> O(N) for N nodes. Pointers require extra memory."
            ]
        }
    ],
    mcqs: {
        easy: [
            {
                q: "What is the time complexity to insert a new node at the head of a singly linked list (given reference to head)?",
                options: ["O(1)", "O(log N)", "O(N)", "O(1) space but O(N) time"],
                answer: 0,
                explanation: "Creating a new node, setting its next reference to point to the current head, and updating the head pointer takes constant time O(1)."
            },
            {
                q: "What is the time complexity to access the K-th element of a singly linked list of size N?",
                options: ["O(1)", "O(log N)", "O(K)", "O(N)"],
                answer: 2,
                explanation: "Linked lists do not support index-based random access. We must traverse K elements sequentially from the head, resulting in O(K) time."
            },
            {
                q: "Which of the following is a main disadvantage of a singly linked list compared to a dynamic array?",
                options: [
                    "O(1) insertion at head",
                    "No contiguous memory leading to cache-unfriendly behavior and no random access",
                    "Higher memory usage per node due to pointers",
                    "Both 2 and 3"
                ],
                answer: 3,
                explanation: "Linked lists store elements non-contiguously in memory (cache-unfriendly) and require sequential traversal (no random access). They also consume extra memory for storing node references."
            },
            {
                q: "In Java, what does a null value for a node's next pointer in a singly linked list signify?",
                options: ["The list is empty", "The node is the dummy head", "The node is the last node (tail) of the list", "The list is cyclic"],
                answer: 2,
                explanation: "A null next pointer indicates that there are no subsequent elements in the sequence, signifying the end of the list."
            },
            {
                q: "In a doubly linked list, how many pointers does each node store?",
                options: ["One pointer", "Two pointers", "Three pointers", "None"],
                answer: 1,
                explanation: "Each node in a doubly linked list stores two pointer references: one pointing to the next node and one pointing to the previous node."
            },
            {
                q: "What is the time complexity of deleting the last node of a singly linked list if you only have references to the head and tail?",
                options: ["O(1)", "O(log N)", "O(N)", "O(1) space and time"],
                answer: 2,
                explanation: "To delete the tail node, the next pointer of the second-to-last node must be set to null. Finding the second-to-last node requires traversing from the head, taking O(N) time."
            },
            {
                q: "How can you detect if a singly linked list is empty?",
                options: ["head.next == null", "head == null", "head.val == 0", "list.size() == 0"],
                answer: 1,
                explanation: "If the head pointer itself is null, it means there is no initial node, indicating that the list is empty."
            },
            {
                q: "What is the space complexity of reversing a linked list iteratively?",
                options: ["O(1)", "O(N)", "O(log N)", "O(N^2)"],
                answer: 0,
                explanation: "Iterative reversal updates pointer references in-place using a few temporary variables, which consumes O(1) auxiliary space."
            },
            {
                q: "What is the primary purpose of a 'dummy head' node in linked list operations?",
                options: [
                    "Stores default fallback data",
                    "Simplifies edge case handling (e.g., inserting/deleting the head)",
                    "Speeds up search operations",
                    "Automatically counts elements"
                ],
                answer: 1,
                explanation: "A dummy head acts as a placeholder preceding the actual head node. This avoids needing separate conditional logic for operations that modify the head of the list."
            },
            {
                q: "What is the time complexity to reverse a singly linked list of size N?",
                options: ["O(1)", "O(log N)", "O(N)", "O(N^2)"],
                answer: 2,
                explanation: "Reversing a list requires traversing each of the N nodes exactly once to update its next pointer, which takes O(N) time."
            }
        ],
        medium: [
            {
                q: "In Floyd's Cycle-Finding Algorithm (Tortoise and Hare), if a cycle exists, the fast and slow pointer will eventually meet. If the cycle size is C, how does the fast pointer behave relative to the slow pointer?",
                options: [
                    "The fast pointer gets further away in each step",
                    "The distance between them decreases by 1 in each step",
                    "The fast pointer moves 3 times faster",
                    "They will never meet if C is odd"
                ],
                answer: 1,
                explanation: "In each step, the slow pointer moves 1 node and the fast pointer moves 2 nodes. The distance between them decreases by exactly 1 node per iteration, ensuring they will meet."
            },
            {
                q: "In a circular singly linked list, what does the next pointer of the last node point to?",
                options: ["null", "The middle node", "The head node", "A dummy node"],
                answer: 2,
                explanation: "A circular singly linked list connects its final tail node back to the head node, forming a closed loop."
            },
            {
                q: "How do you find the middle node of a linked list in a single pass?",
                options: [
                    "Traverse the list to count nodes, then traverse again to count/2",
                    "Use slow and fast pointers where fast moves twice as fast as slow",
                    "Use a recursion stack",
                    "Use a HashMap"
                ],
                answer: 1,
                explanation: "By advancing a fast pointer by 2 nodes and a slow pointer by 1 node per step, the slow pointer will be at the middle node when the fast pointer reaches the end."
            },
            {
                q: "What is the time complexity to merge two sorted linked lists of sizes N and M into a single sorted list?",
                options: ["O(N * M)", "O(N log M)", "O(N + M)", "O(1)"],
                answer: 2,
                explanation: "We compare head elements and link them sequentially, traversing each node in both lists at most once. This takes linear O(N + M) time."
            },
            {
                q: "In a doubly linked list, what is the time complexity of deleting a node if you have a direct pointer reference to that node?",
                options: ["O(1)", "O(log N)", "O(N)", "O(N^2)"],
                answer: 0,
                explanation: "Because the node contains references to both node.prev and node.next, we can update the links of its neighbors directly in constant O(1) time."
            },
            {
                q: "What is the time complexity of finding the intersection point of two singly linked lists of sizes N and M?",
                options: ["O(N * M)", "O(N log M)", "O(N + M)", "O(min(N, M))"],
                answer: 2,
                explanation: "By calculating the lengths, shifting the pointer of the longer list to align starting positions, and traversing together, we can find the intersection node in O(N + M) time and O(1) space."
            },
            {
                q: "What is the space complexity of reversing a linked list of size N recursively?",
                options: ["O(1)", "O(log N)", "O(N)", "O(N^2)"],
                answer: 2,
                explanation: "Recursive reversal utilizes the call stack to store the frames for each node. The stack depth will reach N, leading to O(N) space complexity."
            },
            {
                q: "If you want to check if a linked list is a palindrome, what is the optimal time and space complexity combination?",
                options: [
                    "Time O(N^2), Space O(1)",
                    "Time O(N), Space O(N)",
                    "Time O(N), Space O(1)",
                    "Time O(N log N), Space O(N)"
                ],
                answer: 2,
                explanation: "By finding the middle, reversing the second half in-place, comparing both halves, and restoring the list, we achieve O(N) time and O(1) auxiliary space."
            },
            {
                q: "What happens if you run the following code on a singly linked list containing elements: 1 -> 2 -> 3 where curr points to 1?\ncurr.next = curr.next.next;",
                options: ["List becomes 1 -> 3", "List becomes 1 -> 2", "Throws NullPointerException", "List becomes empty"],
                answer: 0,
                explanation: "Updating curr.next to curr.next.next bypasses node 2, linking node 1 directly to node 3, effectively deleting node 2."
            },
            {
                q: "Which data structure does the standard Java java.util.LinkedList class implement under the hood?",
                options: ["Singly Linked List", "Doubly Linked List", "Circular Linked List", "Dynamic Array"],
                answer: 1,
                explanation: "Java's java.util.LinkedList class is built using a doubly linked list, implementing both the List and Deque interfaces."
            }
        ],
        hard: [
            {
                q: "In Floyd's Cycle-Finding algorithm, once the slow and fast pointers meet inside a loop, how do we find the start node of the cycle?",
                options: [
                    "Move one pointer to the head, keep the other at the meeting point, and advance both at the same speed of 1 step/iteration",
                    "Move both pointers to the head and step forward",
                    "Run binary search on the node values",
                    "Run the algorithm backwards"
                ],
                answer: 0,
                explanation: "Mathematical analysis of node distances shows that the distance from the head to cycle-start is equal to the distance from the meeting-point to cycle-start. Advancing both pointers at 1 step/iteration makes them meet at the cycle start."
            },
            {
                q: "What is the time complexity of sorting a linked list using Merge Sort?",
                options: ["O(N^2)", "O(N log N)", "O(N)", "O(N^2 log N)"],
                answer: 1,
                explanation: "Merge sort split steps take O(N) time using slow/fast pointers, and merging takes O(N) time. With a recursion depth of log N, the overall time complexity is O(N log N)."
            },
            {
                q: "Why is Merge Sort preferred over Quick Sort for sorting linked lists?",
                options: [
                    "Quick sort takes O(N^2) space on lists",
                    "Merge sort doesn't require random access and can merge nodes in-place in O(1) auxiliary space",
                    "Merge sort is simpler to write",
                    "Quick sort cannot be implemented on linked lists"
                ],
                answer: 1,
                explanation: "Merge sort doesn't require index-based random access (which is expensive in lists). It can also merge sublists in-place by relinking existing nodes, achieving O(N log N) time with O(1) auxiliary space."
            },
            {
                q: "How do you delete a node in a singly linked list in O(1) time if you are ONLY given a reference to that specific node (which is not the tail)?",
                options: [
                    "Traverse from the head to find the previous node",
                    "Copy the value of the next node into the current node, and bypass/delete the next node",
                    "Swap current node with head node",
                    "It is mathematically impossible"
                ],
                answer: 1,
                explanation: "Since we cannot traverse backwards to find the previous node, we copy the data from node.next into the current node, then delete node.next by setting node.next = node.next.next."
            },
            {
                q: "In the 'Copy List with Random Pointer' problem, what is the benefit of weaving cloned nodes inside the original list (e.g., A -> A' -> B -> B')?",
                options: [
                    "It sorts the list",
                    "It reduces time complexity to O(log N)",
                    "It allows setting random pointers in O(1) auxiliary space without a lookup table",
                    "It keeps the original list structure untouched"
                ],
                answer: 2,
                explanation: "Weaving cloned nodes allows setting clone random pointers via A'.random = A.random.next. This eliminates the need for a HashMap to link original nodes to clone nodes, lowering space complexity to O(1)."
            },
            {
                q: "What is the time and space complexity of sorting a linked list using Insertion Sort?",
                options: [
                    "Time O(N log N), Space O(1)",
                    "Time O(N^2), Space O(1)",
                    "Time O(N^2), Space O(N)",
                    "Time O(N log N), Space O(N)"
                ],
                answer: 1,
                explanation: "Insertion sort constructs a sorted list incrementally. It searches the sorted section for each element, taking O(N^2) time in the worst case and O(1) auxiliary space."
            },
            {
                q: "What is the time complexity to flatten a multilevel doubly linked list of total N nodes using depth-first search?",
                options: ["O(N)", "O(N^2)", "O(N log N)", "O(2^N)"],
                answer: 0,
                explanation: "Each node in the multi-level list structure is visited exactly once to update its next, prev, and child references, which takes linear O(N) time."
            },
            {
                q: "If we want to implement a Least Recently Used (LRU) Cache with O(1) get and put operations, which data structures are combined?",
                options: [
                    "HashSet and Queue",
                    "HashMap and Doubly Linked List",
                    "Binary Search Tree and Stack",
                    "Min-Heap and Array"
                ],
                answer: 1,
                explanation: "A Doubly Linked List keeps track of access order (adding to head, removing from tail in O(1) time), while a HashMap stores keys pointing to nodes in the list for O(1) lookups."
            },
            {
                q: "What is the worst-case time complexity of finding the K-th element from the end of a singly linked list in a single pass?",
                options: ["O(K)", "O(N - K)", "O(N)", "O(N log N)"],
                answer: 2,
                explanation: "Using two pointers spaced K nodes apart, we traverse the entire list of N nodes in a single pass, which requires O(N) time."
            },
            {
                q: "In a skip list, what is the average time complexity for search, insertion, and deletion?",
                options: ["O(N)", "O(log N)", "O(1)", "O(N log N)"],
                answer: 1,
                explanation: "Skip lists maintain multiple layers of linked nodes to allow jumping over sections. Similar to binary search trees, this reduces average operation time to O(log N)."
            }
        ]
    }
};
