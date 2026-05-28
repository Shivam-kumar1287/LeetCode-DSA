window.TopicsData = window.TopicsData || {};
window.TopicsData["PermutationCombination"] = {
    title: "Permutation & Combination",
    sections: [
        {
            heading: "Basic Difference & Factorials",
            items: [
                `<strong>Fundamental Difference:</strong>
                <ul>
                    <li><strong>Permutation:</strong> Order/arrangement of objects matters. (e.g. Passwords, seating order).</li>
                    <li><strong>Combination:</strong> Order does not matter, only selection matters. (e.g. Team selection, handshakes).</li>
                </ul>`,
                `<strong>Factorial Formula:</strong> The building block for permutations and combinations:
                <br><strong><code>n! = n &times; (n&minus;1) &times; (n&minus;2) &times; ... &times; 1</code></strong>
                <br><em>Special Cases:</em> <code>0! = 1</code> and <code>1! = 1</code>.
                <br><em>Example:</em> <code>5! = 5 &times; 4 &times; 3 &times; 2 &times; 1 = 120</code>.`
            ]
        },
        {
            heading: "Permutations & Arrangements",
            items: [
                `<strong>Standard Permutation Formula (nPn / nPr):</strong>
                <ul>
                    <li>Arranging <code>r</code> objects out of <code>n</code> total objects:
                        <br><strong><code>nPr = n! / (n &minus; r)!</code></strong>
                    </li>
                    <li><strong>Arranging All Objects:</strong> Arranging all <code>n</code> objects in a row is simply: <strong><code>n!</code></strong></li>
                </ul>`,
                `<strong>Arrangement with Repetitions:</strong>
                <ul>
                    <li>If arranging <code>n</code> items where some items repeat (item 1 repeats <code>p</code> times, item 2 repeats <code>q</code> times...):
                        <br><strong><code>Arrangements = n! / (p! &times; q! &times; r!)</code></strong>
                        <br><em>Example:</em> Word = "BALL" (4 letters, L repeats twice). Arrangements = <code>4! / 2! = 12</code>.
                    </li>
                </ul>`,
                `<strong>Circular Permutation:</strong>
                <ul>
                    <li>Arranging <code>n</code> objects in a circle:
                        <br><strong><code>Circular Arrangements = (n &minus; 1)!</code></strong>
                        <br><em>Example:</em> 5 people in a circle: <code>(5 &minus; 1)! = 4! = 24</code> ways.
                    </li>
                </ul>`
            ]
        },
        {
            heading: "Combinations & Properties",
            items: [
                `<strong>Combination Formula (nCr):</strong>
                <ul>
                    <li>Selecting <code>r</code> objects out of <code>n</code> total objects:
                        <br><strong><code>nCr = n! / [r! &times; (n &minus; r)!]</code></strong>
                    </li>
                </ul>`,
                `<strong>Relation between Permutation and Combination:</strong>
                <br><strong><code>nPr = nCr &times; r!</code></strong>`,
                `<strong>Key Combination Properties:</strong>
                <ul>
                    <li><strong>Symmetry:</strong> <code>nCr = nC(n&minus;r)</code> (e.g. <code>5C2 = 5C3</code>)</li>
                    <li><strong>Edge Cases:</strong> <code>nC0 = 1</code> and <code>nCn = 1</code></li>
                    <li><strong>Pascal's Identity:</strong> <code>nCr + nC(r&minus;1) = (n+1)Cr</code></li>
                </ul>`
            ]
        }
    ],
    mcqs: {
        easy: [
            {
                q: "What is the value of 5! (5 factorial)?",
                options: ["24", "120", "60", "720"],
                answer: 1,
                explanation: "5! = 5 &times; 4 &times; 3 &times; 2 &times; 1 = 120."
            },
            {
                q: "In how many different ways can you arrange 3 books in a row?",
                options: ["3 ways", "6 ways", "9 ways", "2 ways"],
                answer: 1,
                explanation: "Arranging n objects in a row is given by n!. Here n = 3, so 3! = 3 &times; 2 &times; 1 = 6 ways."
            },
            {
                q: "Find the value of 5C2.",
                options: ["10", "20", "5", "15"],
                answer: 0,
                explanation: "5C2 = 5! / [2! &times; (5-2)!] = 5! / (2! &times; 3!) = (5 &times; 4) / 2 = 10."
            },
            {
                q: "In how many ways can 4 people sit around a circular table?",
                options: ["24 ways", "12 ways", "6 ways", "8 ways"],
                answer: 2,
                explanation: "Circular arrangement of n objects is (n-1)!. Here n = 4, so (4-1)! = 3! = 3 &times; 2 &times; 1 = 6 ways."
            },
            {
                q: "If nP2 = 30, what is the value of n?",
                options: ["5", "6", "7", "8"],
                answer: 1,
                explanation: "nP2 = n! / (n-2)! = n &times; (n-1) = 30. Testing choices: 6 &times; 5 = 30, so n = 6."
            }
        ],
        medium: [
            {
                q: "In how many different ways can the letters of the word 'APPLE' be arranged?",
                options: ["120 ways", "60 ways", "240 ways", "48 ways"],
                answer: 1,
                explanation: "The word 'APPLE' contains 5 letters, where 'P' repeats 2 times. Total arrangements = 5! / 2! = 120 / 2 = 60 ways."
            },
            {
                q: "From a group of 7 consonants and 4 vowels, how many words consisting of 3 consonants and 2 vowels can be formed?",
                options: ["210", "25200", "24400", "21300"],
                answer: 1,
                explanation: "First, select the letters: consonants = 7C3 = 35; vowels = 4C2 = 6. Total selections = 35 &times; 6 = 210. Now, arrange these 5 selected letters: 5! = 120. Total words = 210 &times; 120 = 25200 words."
            },
            {
                q: "A committee of 4 members is to be formed from 6 boys and 4 girls. In how many ways can this be done if the committee must contain exactly 2 boys and 2 girls?",
                options: ["210 ways", "90 ways", "180 ways", "120 ways"],
                answer: 1,
                explanation: "Select 2 boys out of 6: 6C2 = 15. Select 2 girls out of 4: 4C2 = 6. Total ways = 15 &times; 6 = 90 ways."
            },
            {
                q: "Find the simplified expression for: 10C3 + 10C4.",
                options: ["11C3", "11C4", "10C7", "12C4"],
                answer: 1,
                explanation: "Using Pascal's Identity: nCr + nC(r-1) = (n+1)Cr. Here, 10C4 + 10C3 = 11C4."
            },
            {
                q: "In how many ways can a squad of 11 cricket players select a captain and a vice-captain?",
                options: ["110 ways", "55 ways", "121 ways", "22 ways"],
                answer: 0,
                explanation: "Order matters here because captain and vice-captain are distinct roles. Permutation formula: 11P2 = 11! / (11-2)! = 11 &times; 10 = 110 ways."
            }
        ],
        hard: [
            {
                q: "In how many different ways can the letters of the word 'DETAIL' be arranged such that the vowels always come together?",
                options: ["72 ways", "144 ways", "120 ways", "360 ways"],
                answer: 1,
                explanation: "The word 'DETAIL' has consonants D, T, L (3) and vowels E, A, I (3). Treat the vowels as 1 block. Total entities to arrange = 3 consonants + 1 block = 4. Ways = 4! = 24. Arrange vowels inside block: 3! = 6. Total = 24 &times; 6 = 144 ways."
            },
            {
                q: "In how many ways can 6 boys and 6 girls sit in a row alternatively?",
                options: ["6! &times; 6!", "2 &times; 6! &times; 6!", "12!", "(6!)²"],
                answer: 1,
                explanation: "Case 1: Boys sit first (B G B G...): 6! (arrange boys) &times; 6! (arrange girls) = (6!)². Case 2: Girls sit first (G B G B...): 6! &times; 6! = (6!)². Total alternative ways = 2 &times; 6! &times; 6!."
            },
            {
                q: "If a convex polygon has 44 diagonals, find the number of sides it has.",
                options: ["10 sides", "11 sides", "12 sides", "8 sides"],
                answer: 1,
                explanation: "Number of diagonals in a polygon of n sides = nC2 &minus; n = n(n-3)/2. Thus, n(n-3)/2 = 44 => n(n-3) = 88. Solving: 11 &times; 8 = 88, so n = 11."
            },
            {
                q: "At a gathering, everyone shakes hands with everyone else. If there were a total of 66 handshakes, how many people were present?",
                options: ["11 people", "12 people", "13 people", "14 people"],
                answer: 1,
                explanation: "A handshake occurs between 2 people. Total handshakes = nC2 = 66 => n(n-1)/2 = 66 => n(n-1) = 132. Solving: 12 &times; 11 = 132, so n = 12 people."
            },
            {
                q: "In how many ways can 5 boys and 5 girls sit around a circular table such that no two girls sit together?",
                options: ["5! &times; 5!", "4! &times; 5!", "4! &times; 4!", "5! &times; 4!"],
                answer: 1,
                explanation: "First, seat the 5 boys around the circular table: (5-1)! = 4! ways. This creates 5 gaps between the boys. The 5 girls can be arranged in these 5 gaps in 5! ways (since the circular table is already oriented by the boys, this step is linear). Total = 4! &times; 5!."
            }
        ]
    }
};
