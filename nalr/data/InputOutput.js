window.TopicsData = window.TopicsData || {};
window.TopicsData["InputOutput"] = {
    title: "Input-Output (Reasoning)",
    sections: [
        {
            heading: "Basic Rules & Rearrangements",
            items: [
                `<strong>Definition:</strong> Input-Output questions are based on finding the pattern/rule used to systematically rearrange a given sequence of numbers, words, or both, step-by-step.`,
                `<strong>Common Ordering Rules:</strong>
                <ul>
                    <li><strong>Ascending Order Rule:</strong> Numbers sorted from smallest to largest.<br><em>Example:</em> 8, 3, 6, 1 &rarr; 1, 3, 6, 8</li>
                    <li><strong>Descending Order Rule:</strong> Numbers sorted from largest to smallest.<br><em>Example:</em> 2, 9, 5, 7 &rarr; 9, 7, 5, 2</li>
                    <li><strong>Alphabetical Order:</strong> Words/letters sorted from A &rarr; Z.<br><em>Example:</em> Dog, Apple, Cat &rarr; Apple, Cat, Dog</li>
                    <li><strong>Reverse Alphabetical Order:</strong> Words sorted from Z &rarr; A.<br><em>Example:</em> Ball, Zebra, Apple &rarr; Zebra, Ball, Apple</li>
                </ul>`,
                `<strong>Pattern & Character Rules:</strong>
                <ul>
                    <li><strong>Position Formula (Alphabet Positions):</strong> Translating letters to their index value. Useful in alphabetical shifting: <code>A = 1, B = 2, C = 3, ..., Z = 26</code>.</li>
                    <li><strong>Letter Shifting Rule:</strong> Shifting letters forward/backward. e.g., <code>A + 1 = B</code>, <code>C + 2 = E</code>.</li>
                    <li><strong>Number Operation Pattern:</strong> Numbers incrementing via arithmetic operations (<code>+, &minus;, &times;, &divide;</code>). e.g., 5 &rarr; 10 &rarr; 20 (pattern is <code>&times; 2</code>).</li>
                    <li><strong>Odd-Even Arrangement:</strong> Separating odd and even numbers into distinct groups. e.g., 3, 8, 5, 2 &rarr; 3, 5, 8, 2 (odds first, evens later).</li>
                </ul>`
            ]
        },
        {
            heading: "Arrangement Methods & Stepwise Rules",
            items: [
                `<strong>Stepwise Arrangement:</strong> Changing one element at a time in each step.
                <pre>Input:  8 3 6 1
Step 1: 1 8 3 6  (smallest number 1 shifts to front)
Step 2: 1 3 8 6  (next smallest 3 shifts)
Step 3: 1 3 6 8  (6 shifts, 8 is auto-arranged. Final Step)</pre>`,
                `<strong>Important Formula: Maximum Steps Rule:</strong>
                <ul>
                    <li><strong>Formula: <code>Total Steps &le; n - 1</code></strong> (where <code>n</code> = total elements in the input)</li>
                    <li>If a machine arranges <code>n</code> elements one by one, the maximum possible steps required to complete the rearrangement is <code>n - 1</code>.</li>
                    <li><em>Note:</em> The actual steps can be less than <code>n - 1</code> if elements naturally fall into their correct sorted position during intermediate steps (called <strong>auto-arrangement</strong>).</li>
                </ul>`,
                `<strong>Key Shortcuts to Master:</strong>
                <ol>
                    <li>Compare the original <strong>Input</strong> directly with the final <strong>Output</strong> step first to identify the sorting goal.</li>
                    <li>Check if numbers are sorted ascending/descending, and words sorted alphabetically/reverse-alphabetically.</li>
                    <li>Identify if the shifting happens on the left side, right side, or alternates.</li>
                    <li>Observe if any elements are shifting simultaneously.</li>
                    <li><strong>Critical Tip:</strong> You can never determine a previous step (e.g., Step 2) or the original Input from a later step (e.g., Step 4) because multiple inputs can converge to the same intermediate arrangements.</li>
                </ol>`
            ]
        }
    ],
    mcqs: {
        easy: [
            {
                q: "If an input is '9 3 7 1 5' and the rule is to arrange the numbers in ascending order from left to right by shifting one element per step, how many steps are required to reach the final output?",
                options: ["3 steps", "4 steps", "5 steps", "2 steps"],
                answer: 1,
                explanation: "Let's trace: \nInput: 9 3 7 1 5 \nStep 1: 1 9 3 7 5 (1 shifts to front) \nStep 2: 1 3 9 7 5 (3 shifts) \nStep 3: 1 3 5 9 7 (5 shifts) \nStep 4: 1 3 5 7 9 (7 shifts, 9 auto-arranges). Since the numbers are sorted, it takes 4 steps."
            },
            {
                q: "What is the maximum number of steps required to arrange an input containing 6 numbers one by one, assuming no auto-arrangements occur?",
                options: ["6 steps", "5 steps", "7 steps", "4 steps"],
                answer: 1,
                explanation: "Using the formula: Total Steps = n - 1. Here, n = 6 elements, so the maximum steps = 6 - 1 = 5 steps."
            },
            {
                q: "Arrange the words 'Zebra, Apple, Dog, Cat' in Alphabetical Order (A to Z).",
                options: ["Zebra, Dog, Cat, Apple", "Apple, Cat, Dog, Zebra", "Apple, Dog, Cat, Zebra", "Zebra, Apple, Cat, Dog"],
                answer: 1,
                explanation: "Following A-Z alphabet order: A (Apple) &rarr; C (Cat) &rarr; D (Dog) &rarr; Z (Zebra). Hence: Apple, Cat, Dog, Zebra."
            },
            {
                q: "If the input is 'cat dog apple ball' and we sort alphabetically from left to right, which word will occupy the first position in Step 1?",
                options: ["cat", "dog", "apple", "ball"],
                answer: 2,
                explanation: "Alphabetical sorting puts the word starting with 'a' ('apple') first. In Step 1, 'apple' shifts to the first position."
            },
            {
                q: "Using alphabet position values (A=1, B=2, C=3...), what is the sum of the positions of the letters in the word 'CAB'?",
                options: ["5", "6", "7", "8"],
                answer: 1,
                explanation: "C = 3, A = 1, B = 2. Sum = 3 + 1 + 2 = 6."
            }
        ],
        medium: [
            {
                q: "Input: '45 12 37 89 23'. If the rule is to arrange numbers in descending order (largest first) on the left side, one per step, what will be Step 2?",
                options: ["89 45 12 37 23", "89 45 37 12 23", "89 45 37 23 12", "89 12 37 45 23"],
                answer: 1,
                explanation: "Let's trace: \nInput: 45 12 37 89 23 \nStep 1: 89 45 12 37 23 (largest 89 shifts to front) \nStep 2: 89 45 37 12 23 (45 is already in place. Next largest 37 shifts to position 3, moving past 12)."
            },
            {
                q: "Input: 'box ant cat dog'. If we arrange words in reverse alphabetical order (Z to A) on the left side, shifting one word at a time, how many steps will be needed to complete the arrangement?",
                options: ["1 step", "2 steps", "3 steps", "4 steps"],
                answer: 1,
                explanation: "Let's trace: \nInput: box ant cat dog \nStep 1: dog box ant cat (largest letter D shifts first) \nStep 2: dog cat box ant (next largest C shifts to position 2. Since B (box) and A (ant) are now in order, this is the final step). Total steps = 2."
            },
            {
                q: "Input: '15 22 9 41 36'. If the rule is to group all odd numbers first in ascending order, followed by even numbers in ascending order, what is the final sorted sequence?",
                options: ["9 15 41 22 36", "9 15 22 36 41", "41 15 9 36 22", "15 9 41 22 36"],
                answer: 0,
                explanation: "Odd numbers are: 15, 9, 41. Sorted ascending: 9, 15, 41. \nEven numbers are: 22, 36. Sorted ascending: 22, 36. \nCombining them gives: 9 15 41 22 36."
            },
            {
                q: "If the word 'CAT' shifts to 'ECV' under a shifting rule, what will the word 'DOG' become under the same pattern?",
                options: ["FQI", "EPH", "FPI", "EQJ"],
                answer: 0,
                explanation: "Trace letters: C(+2)&rarr;E, A(+2)&rarr;C, T(+2)&rarr;V. The rule is +2 shifting. Applying this to DOG: D(+2)&rarr;F, O(+2)&rarr;Q, G(+2)&rarr;I. Result is FQI."
            },
            {
                q: "Find the missing number in this operation sequence: 3 &rarr; 6 &rarr; 12 &rarr; 24 &rarr; ?",
                options: ["30", "36", "48", "60"],
                answer: 2,
                explanation: "The pattern is multiplying the previous number by 2 (3&times;2=6, 6&times;2=12, 12&times;2=24). Therefore, the next number is 24 &times; 2 = 48."
            }
        ],
        hard: [
            {
                q: "Input: 'boy 43 cat 88 ant 12'. The rule is to arrange words alphabetically on the left, and numbers in descending order on the left, alternating (Word on Step 1, Number on Step 2...). How many steps are required to complete this arrangement?",
                options: ["5 steps", "2 steps", "3 steps", "4 steps"],
                answer: 1,
                explanation: "Let's trace: \nInput: boy 43 cat 88 ant 12 \nStep 1: ant boy 43 cat 88 12 (Word 'ant' shifts to front) \nStep 2: ant 88 boy 43 cat 12 (Number 88 shifts to position 2). Let's check the remaining items: Word 'boy' is already at pos 3, number '43' is already at pos 4, word 'cat' is at pos 5, number '12' is at pos 6. Everything is auto-arranged! So Step 2 is the final step. Total steps = 2."
            },
            {
                q: "A machine arranges elements by putting the smallest number on the left and the largest word on the right in alternate steps. Given Input: 'zebra 45 monkey 12 cat 89'. What will be Step 2?",
                options: ["12 45 monkey cat 89 zebra", "12 zebra 45 monkey cat 89", "12 45 cat monkey 89 zebra", "cat 12 45 monkey 89 zebra"],
                answer: 0,
                explanation: "Let's trace: \nInput: zebra 45 monkey 12 cat 89 \nStep 1: 12 zebra 45 monkey cat 89 (Smallest number 12 shifts to extreme left) \nStep 2: 12 45 monkey cat 89 zebra (Largest word 'zebra' shifts to extreme right)."
            },
            {
                q: "Input: '96 47 18 52 35'. In each step, the digits of each number are summed, and the numbers are arranged in ascending order of their digit sums. Which is the final output step?",
                options: ["18 35 52 47 96", "52 35 18 47 96", "96 47 18 35 52", "52 18 35 47 96"],
                answer: 1,
                explanation: "Compute digit sums: \n96 &rarr; 9+6 = 15 \n47 &rarr; 4+7 = 11 \n18 &rarr; 1+8 = 9 \n52 &rarr; 5+2 = 7 \n35 &rarr; 3+5 = 8. \nSorting in ascending order of sums: 7 (52), 8 (35), 9 (18), 11 (47), 15 (96). Output is: 52 35 18 47 96."
            },
            {
                q: "If Step 4 of a word sorting process is 'always best care daily', which of the following represents the original input?",
                options: ["daily always best care", "best care daily always", "care daily always best", "Cannot be determined"],
                answer: 3,
                explanation: "In input-output questions, you can trace forward from the input to steps, but you CANNOT trace backward from a later step to find the unique original input because multiple different inputs can lead to the same step sequence. The answer is 'Cannot be determined'."
            },
            {
                q: "Input: '5 12 26 54 110'. Identify the number operation pattern governing this sequence.",
                options: ["&times; 2", "&times; 2 + 2", "&times; 3 &minus; 3", "+ 7, + 14, + 28..."],
                answer: 1,
                explanation: "Let's check the terms: \n5 &times; 2 + 2 = 12 \n12 &times; 2 + 2 = 26 \n26 &times; 2 + 2 = 54 \n54 &times; 2 + 2 = 110. \nThe correct pattern is &times; 2 + 2."
            }
        ]
    }
};
