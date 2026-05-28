window.TopicsData = window.TopicsData || {};
window.TopicsData["Puzzles"] = {
    title: "Puzzles (All Forms)",
    sections: [
        {
            heading: "Main Seating Arrangements",
            items: [
                `<strong>Linear Seating Arrangement:</strong>
                <ul>
                    <li>People sit in a straight line facing North or South.</li>
                    <li><strong>Facing North:</strong> Left = your left; Right = your right.</li>
                    <li><strong>Facing South:</strong> Left/Right directions reverse (Left = your right, Right = your left).</li>
                    <li><strong>Opposite Position Formula:</strong> If total persons = <code>n</code>, then:
                        <br><strong><code>Opposite Position = n + 1 &minus; Given Position</code></strong>
                        <br><em>Example:</em> For 8 persons, a position 3rd from the left is: <code>8 + 1 &minus; 3 = 6th</code> from the right.
                    </li>
                </ul>`,
                `<strong>Circular Seating Arrangement:</strong>
                <ul>
                    <li>People sit around a circular table. Fix one person's position first to establish relative positioning.</li>
                    <li><strong>Facing Center:</strong> Left movement = <em>Clockwise</em>; Right movement = <em>Anti-clockwise</em>.</li>
                    <li><strong>Facing Outside:</strong> Left movement = <em>Anti-clockwise</em>; Right movement = <em>Clockwise</em>.</li>
                </ul>`
            ]
        },
        {
            heading: "Grid, Floor, and Scheduling Puzzles",
            items: [
                `<strong>Floor Puzzle Rules:</strong>
                <ul>
                    <li>People live on different floors of a building.</li>
                    <li><strong>Floor from Bottom:</strong> If top floor = <code>n</code>, then:
                        <br><strong><code>Floor from Bottom = n + 1 &minus; Floor from Top</code></strong>
                        <br><em>Example:</em> In a 10-floor building, a person 3rd from the top lives on floor: <code>10 + 1 &minus; 3 = 8th</code> floor.
                    </li>
                </ul>`,
                `<strong>Box Puzzle Tips:</strong>
                <ul>
                    <li>Boxes stacked vertically or arranged horizontally. Always draw vertical lines to represent stack levels.</li>
                    <li>Mark the top-most and bottom-most boundaries clearly and fill in fixed clues first.</li>
                </ul>`,
                `<strong>Day, Month & Date Puzzles:</strong>
                <ul>
                    <li><strong>Standard Sequences:</strong> Mon &rarr; Tue &rarr; Wed... and Jan &rarr; Feb &rarr; Mar...</li>
                    <li><strong>Odd-Even Date Clues:</strong> Sorting items based on odd (1st, 3rd, 5th...) or even (2nd, 4th, 6th...) dates.</li>
                </ul>`,
                `<strong>Scheduling Puzzle Strategy:</strong>
                <ul>
                    <li>Used for timelines, meetings, subjects, or lectures. Create a fixed grid/table (e.g., Time Slot vs. Person) before placing clues.</li>
                </ul>`
            ]
        },
        {
            heading: "Relations, Ranking, and General Solving Steps",
            items: [
                `<strong>Blood Relation Puzzle Symbols:</strong>
                <ul>
                    <li>Define relationships (Father, Mother, Uncle, Aunt, Sibling) using a family tree.</li>
                    <li>Mark genders immediately (e.g., "+" for Male, "-" for Female) and represent married couples with double lines.</li>
                </ul>`,
                `<strong>Ranking Puzzle Formula:</strong>
                <ul>
                    <li>To find the total number of people in a queue or list when a person's rank is known from both ends:</li>
                    <li><strong><code>Total Persons = Rank from Top + Rank from Bottom &minus; 1</code></strong></li>
                    <li><em>Example:</em> Ravi is 8th from top and 15th from bottom. Total = <code>8 + 15 &minus; 1 = 22</code>.</li>
                </ul>`,
                `<strong>Universal Solving Steps:</strong>
                <ol>
                    <li><strong>Read Clues:</strong> Skim the entire puzzle before drawing to identify the type and structure.</li>
                    <li><strong>Mark Direct Clues:</strong> Always start with the <em>Golden Shortcut</em>—place exact positions, immediate neighbors, and fixed directions first.</li>
                    <li><strong>Use Diagram Codes:</strong> Draw arrows or equals signs to show relations quickly.</li>
                    <li><strong>Case Elimination:</strong> Draw parallel cases for complex clues and eliminate impossible scenarios step-by-step.</li>
                </ol>`
            ]
        }
    ],
    mcqs: {
        easy: [
            {
                q: "In a row of 8 persons facing North, if A is sitting 3rd from the left end, what is his position from the right end?",
                options: ["5th", "6th", "7th", "4th"],
                answer: 1,
                explanation: "Using the formula: Opposite Position = n + 1 &minus; Given Position. Here, n = 8 and position = 3, so: 8 + 1 &minus; 3 = 6th from the right end."
            },
            {
                q: "Ravi ranks 8th from the top and 15th from the bottom in a class test. How many students are there in the class?",
                options: ["23", "22", "24", "21"],
                answer: 1,
                explanation: "Using the ranking formula: Total = Rank from Top + Rank from Bottom &minus; 1. Total = 8 + 15 &minus; 1 = 22 students."
            },
            {
                q: "In a circular seating arrangement where all persons are facing the center, moving in a clockwise direction represents which movement?",
                options: ["Right movement", "Left movement", "Opposite movement", "Diagonal movement"],
                answer: 1,
                explanation: "For center-facing seating, clockwise movement corresponds to moving towards the left of the person."
            },
            {
                q: "In a 10-floor building, if a person lives on the 3rd floor from the top, which floor do they occupy from the bottom?",
                options: ["7th floor", "8th floor", "6th floor", "9th floor"],
                answer: 1,
                explanation: "Using the formula: Floor from Bottom = n + 1 &minus; Top. Here, n = 10 and Top = 3, so: 10 + 1 &minus; 3 = 8th floor."
            },
            {
                q: "In a family tree, if A is the brother of B, and B is the mother of C, how is A related to C?",
                options: ["Father", "Uncle", "Brother", "Grandfather"],
                answer: 1,
                explanation: "A is B's brother, and B is C's mother. The brother of one's mother is their maternal uncle (Uncle)."
            }
        ],
        medium: [
            {
                q: "In a row of 30 people facing North, A is 10th from the left, and B is 15th from the right. How many people sit between A and B?",
                options: ["5", "6", "4", "3"],
                answer: 0,
                explanation: "Find B's position from the left: 30 + 1 &minus; 15 = 16th from left. Since A is 10th from left and B is 16th from left, the number of people between them is: 16 &minus; 10 &minus; 1 = 5 people."
            },
            {
                q: "A, B, C, and D are sitting around a circular table facing the center. A is to the immediate right of B. C sits opposite to A. Who is to the immediate left of B?",
                options: ["A", "C", "D", "Cannot be determined"],
                answer: 1,
                explanation: "Let B be at position 1. Facing center: right is anti-clockwise, so A is at position 2. C is opposite A, so C is at position 4. The remaining person D must be at position 3. Immediate left of B (clockwise) is position 4, which is occupied by C."
            },
            {
                q: "In a floor puzzle of 7 floors (numbered 1 to 7 from bottom to top), A lives on an odd-numbered floor above the 4th floor. How many possible floors can A live on?",
                options: ["1", "2", "3", "4"],
                answer: 1,
                explanation: "Floors above the 4th floor are 5, 6, and 7. The odd-numbered floors among these are 5 and 7. Thus, there are exactly 2 possible floors A can live on."
            },
            {
                q: "Pointing to a photograph, Rohit said, 'She is the mother of my father's only son.' How is the woman in the photograph related to Rohit?",
                options: ["Sister", "Mother", "Aunt", "Grandmother"],
                answer: 1,
                explanation: "Rohit's 'father's only son' must be Rohit himself. The mother of Rohit's only son (himself) is Rohit's mother."
            },
            {
                q: "Six boxes (P, Q, R, S, T, U) are stacked vertically. Box Q is immediately above box R. Box S is at the bottom-most position. If there are exactly three boxes between T and S, which position does T occupy from the top?",
                options: ["1st", "2nd", "3rd", "4th"],
                answer: 1,
                explanation: "Let positions be 1 (bottom) to 6 (top). Box S is at 1. Since there are three boxes between T and S, T must be at position 5 (as 1 + 3 + 1 = 5). From the top, position 6 is 1st, and position 5 is 2nd."
            }
        ],
        hard: [
            {
                q: "In a row of boys facing North, A is 16th from the left end and B is 18th from the right end. G, who is 11th from A towards the right, is 3rd to the right of B. How many boys are in the row?",
                options: ["40", "41", "42", "45"],
                answer: 1,
                explanation: "A is 16th from left. G is 11th to the right of A, so G's position = 16 + 11 = 27th from left. G is 3rd to the right of B, which means B's position = 27 &minus; 3 = 24th from left. Since B is 18th from the right: Total = Left Rank + Right Rank &minus; 1 = 24 + 18 &minus; 1 = 41."
            },
            {
                q: "Eight persons (A, B, C, D, E, F, G, H) sit around a circle facing the center. A sits 3rd to the right of B. H sits 2nd to the left of A. F sits opposite to H. C sits to the immediate right of F. D sits opposite to B. G sits to the immediate left of B. Who sits opposite to A?",
                options: ["D", "E", "F", "G"],
                answer: 3,
                explanation: "Let B be at position 1. A (3rd right of B) = 4. H (2nd left of A) = 2. F (opposite H) = 6. C (immediate right of F) = 7. D (opposite B) = 5. G (immediate left of B) = 8. E occupies the remaining position 3. The person sitting opposite to A (4) is G (8)."
            },
            {
                q: "Five plays (A, B, C, D, E) are scheduled to be staged from Monday to Friday, one play per day. Play D is staged on Wednesday. Play A is staged immediately before play E. Play B is staged on Monday. On which day is play C staged?",
                options: ["Tuesday", "Thursday", "Friday", "Monday"],
                answer: 0,
                explanation: "B is on Monday, and D is on Wednesday. The remaining slots are Tue, Thu, and Fri. Since A is immediately before E, they must occupy adjacent slots, which can only be Thu and Fri. Therefore, C must be staged on Tuesday."
            },
            {
                q: "Introducing a man, a woman says: 'He is the only son of my mother's mother.' How is the man related to the woman?",
                options: ["Father", "Maternal Uncle", "Brother", "Nephew"],
                answer: 1,
                explanation: "The woman's 'mother's mother' is her maternal grandmother. The 'only son of her maternal grandmother' is the brother of the woman's mother, which is her Maternal Uncle."
            },
            {
                q: "Six boxes (A, B, C, D, E, F) are arranged in a stack from top (6) to bottom (1). There are two boxes between A and B. Box C is immediately below Box B. Box D is at the top-most position. Box E is immediately above Box A. Which box is at position 3?",
                options: ["A", "B", "C", "E"],
                answer: 3,
                explanation: "D is at 6. Since E is immediately above A, and C is immediately below B with 2 boxes between A and B, we test configurations: B=5, C=4, E=3, A=2, F=1. Check clues: Two boxes between A(2) and B(5) [C, E] (Correct). C(4) is below B(5) (Correct). E(3) is above A(2) (Correct). Thus, box E is at position 3."
            }
        ]
    }
};
