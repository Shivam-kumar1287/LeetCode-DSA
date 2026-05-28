window.TopicsData = window.TopicsData || {};
window.TopicsData["Inequality"] = {
    title: "Test of Inequality",
    sections: [
        {
            heading: "Basic Rules & Symbols",
            items: [
                `<strong>Definition:</strong> Inequality questions involve comparing two or more quantities or variables using relational mathematical operators.`,
                `<strong>Relational Symbols Table:</strong><br>
                <table class="dsa-table">
                    <thead>
                        <tr>
                            <th>Symbol</th>
                            <th>Meaning</th>
                            <th>Example</th>
                            <th>Logical Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>&gt;</code></td>
                            <td>Greater than</td>
                            <td>8 &gt; 5</td>
                            <td>8 is strictly larger than 5</td>
                        </tr>
                        <tr>
                            <td><code>&lt;</code></td>
                            <td>Less than</td>
                            <td>3 &lt; 7</td>
                            <td>3 is strictly smaller than 7</td>
                        </tr>
                        <tr>
                            <td><code>&ge;</code></td>
                            <td>Greater than or equal to</td>
                            <td>x &ge; 4</td>
                            <td>x is either greater than 4 OR equal to 4</td>
                        </tr>
                        <tr>
                            <td><code>&le;</code></td>
                            <td>Less than or equal to</td>
                            <td>x &le; 10</td>
                            <td>x is either less than 10 OR equal to 10</td>
                        </tr>
                        <tr>
                            <td><code>=</code></td>
                            <td>Equal to</td>
                            <td>A = B</td>
                            <td>Both variables carry identical values</td>
                        </tr>
                        <tr>
                            <td><code>&ne;</code></td>
                            <td>Not equal to</td>
                            <td>A &ne; B</td>
                            <td>A is either strictly greater than or strictly less than B</td>
                        </tr>
                    </tbody>
                </table>`
            ]
        },
        {
            heading: "Transitive Rules & Chain Building",
            items: [
                `<strong>Relational Chain Transitions:</strong> Combining statements is essential to establish relative order.
                <ul>
                    <li><strong>Rule 1:</strong> If <code>A &gt; B</code> and <code>B &gt; C</code>, then <strong><code>A &gt; C</code></strong>.</li>
                    <li><strong>Rule 2:</strong> If <code>A &lt; B</code> and <code>B &lt; C</code>, then <strong><code>A &lt; C</code></strong>.</li>
                    <li><strong>Rule 3:</strong> If <code>A = B</code> and <code>B &gt; C</code>, then <strong><code>A &gt; C</code></strong>.</li>
                    <li><strong>Rule 4 (Mixed Rules):</strong> If <code>A &gt; B</code> and <code>B &ge; C</code>, then <strong><code>A &gt; C</code></strong> (since B can be equal to C, but is strictly less than A).</li>
                </ul>`,
                `<strong>Transitive & Dominance Shortcut Table:</strong><br>
                <table class="dsa-table">
                    <thead>
                        <tr>
                            <th>Path Relational Combination</th>
                            <th>Definite Conclusion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>A &gt; B, B &gt; C</code></td>
                            <td><code>A &gt; C</code></td>
                        </tr>
                        <tr>
                            <td><code>A &lt; B, B &lt; C</code></td>
                            <td><code>A &lt; C</code></td>
                        </tr>
                        <tr>
                            <td><code>A = B, B &gt; C</code></td>
                            <td><code>A &gt; C</code></td>
                        </tr>
                        <tr>
                            <td><code>A &ge; B, B &ge; C</code></td>
                            <td><code>A &ge; C</code></td>
                        </tr>
                        <tr>
                            <td><code>A &le; B, B &le; C</code></td>
                            <td><code>A &le; C</code></td>
                        </tr>
                    </tbody>
                </table>`,
                `<strong>Golden Rules for Examinations:</strong>
                <ul>
                    <li><strong>Same Direction &rarr; Conclusion Possible:</strong> If all symbols along a path point in the same direction, a conclusion can be reached. e.g., <code>A &gt; B &gt; C &rArr; A &gt; C</code>.</li>
                    <li><strong>Opposite Directions &rarr; Blocked Path:</strong> If symbols along a path point in opposite directions, no definite relationship can be established. e.g., <code>A &gt; B &lt; C</code> yields no definite relation between A and C (Conclusion is <em>Cannot be determined</em>).</li>
                    <li><strong>Symbol Dominance Priority:</strong> Priority of symbols in a chain follows: <code>&gt; / &lt;</code> (Strongest) &gt; <code>&ge; / &le;</code> (Medium) &gt; <code>=</code> (Weakest).
                        <br><em>Example:</em> If the chain is <code>A &gt; B &ge; C = D</code>, the strongest symbol is <code>&gt;</code>, so the conclusion is <code>A &gt; D</code>.
                    </li>
                </ul>`,
                `<strong>Coded Inequalities:</strong>
                <br>In advanced reasoning sections, relational symbols are hidden behind codes (e.g. <code>A @ B</code> means <code>A &gt; B</code>, and <code>A # B</code> means <code>A &lt; B</code>).
                <br><em>Strategy:</em> Always create a decoding box first to map characters back to relational operators before connecting the chains.`
            ]
        }
    ],
    mcqs: {
        easy: [
            {
                q: "Given the statement: A &gt; B = C &ge; D. Which of the following conclusions is definitely true?",
                options: ["B &lt; D", "C &gt; A", "A &gt; D", "D &ge; A"],
                answer: 2,
                explanation: "Connecting the chain: A &gt; B = C &ge; D. The symbols between A and D are &gt;, =, and &ge;. The strong symbol '&gt;' dominates the chain, yielding A &gt; D."
            },
            {
                q: "If P &lt; Q and Q &lt; R, what is the definite relation between P and R?",
                options: ["P &gt; R", "P = R", "P &lt; R", "No relation can be determined"],
                answer: 2,
                explanation: "Using the transitive rule: If P is smaller than Q, and Q is smaller than R, then P must be smaller than R (P &lt; R)."
            },
            {
                q: "Given the statement: X &ge; Y &ge; Z. What is the correct conclusion?",
                options: ["X &gt; Z", "X &ge; Z", "X = Z", "X &lt; Z"],
                answer: 1,
                explanation: "Since both relations are &ge;, we combine them directly to get X &ge; Z."
            },
            {
                q: "If M &gt; N and N &lt; O, what is the relation between M and O?",
                options: ["M &gt; O", "M &lt; O", "M = O", "No definite conclusion can be determined"],
                answer: 3,
                explanation: "The symbols between M and O point in opposite directions (&gt; and &lt;). This blocks the path, meaning no definite relation can be determined."
            },
            {
                q: "What is the logical meaning of the relational symbol 'x &le; 10'?",
                options: ["x is strictly less than 10", "x is either less than 10 OR equal to 10", "x is strictly equal to 10", "x is not equal to 10"],
                answer: 1,
                explanation: "The symbol '&le;' stands for 'less than or equal to', meaning x can be either strictly smaller than 10 or exactly 10."
            }
        ],
        medium: [
            {
                q: "Statement: P &gt; Q &ge; R = S &lt; T. Which of the following conclusions are true?\nI. P &gt; S\nII. Q &ge; T",
                options: ["Only conclusion I is true", "Only conclusion II is true", "Both I and II are true", "Neither is true"],
                answer: 0,
                explanation: "For I: The path between P and S is P &gt; Q &ge; R = S. The dominant symbol is '&gt;', so P &gt; S is true. \nFor II: The path between Q and T is Q &ge; R = S &lt; T. Since the symbols point in opposite directions (&ge; and &lt;), no relation can be drawn. Thus, only I is true."
            },
            {
                q: "Statement: W &le; X = Y &lt; Z. Which of the following is true?\nI. W &lt; Z\nII. X &le; Z",
                options: ["Only I is true", "Only II is true", "Both are true", "Neither is true"],
                answer: 0,
                explanation: "For I: Path W &le; X = Y &lt; Z. The '&lt;' symbol dominates, so W &lt; Z is true. \nFor II: Path X = Y &lt; Z gives X &lt; Z. Therefore, the conclusion X &le; Z (which allows equal state) is not strictly correct because X is definitely strictly smaller than Z. Only I is true."
            },
            {
                q: "Coded Inequality: Let '@' mean '&gt;', '#' mean '&lt;', and '%' mean '='. If the statement is A @ B % C @ D, which option is correct?",
                options: ["A # D", "B % D", "A @ D", "C # D"],
                answer: 2,
                explanation: "Decoding the statement: A &gt; B = C &gt; D. The chain gives A &gt; D. Re-encoding this: A @ D."
            },
            {
                q: "Statement: H &ge; I &gt; J = K &le; L. Which of the following is definitely true?",
                options: ["H &gt; K", "I &lt; L", "H = K", "J &gt; L"],
                answer: 0,
                explanation: "Path H to K is H &ge; I &gt; J = K. The dominant symbol is '&gt;', so H &gt; K is definitely true."
            },
            {
                q: "Statement: M &lt; N &le; O = P &gt; Q. Which of the following conclusions is/are true?\nI. M &lt; P\nII. O &gt; Q",
                options: ["Only I is true", "Only II is true", "Both I and II are true", "Neither is true"],
                answer: 2,
                explanation: "For I: Path M &lt; N &le; O = P. Since '&lt;' dominates, M &lt; P is true. \nFor II: Path O = P &gt; Q. The '&gt;' symbol dominates, so O &gt; Q is true. Both are true."
            }
        ],
        hard: [
            {
                q: "Statements: A &gt; B &ge; C;  C = D &lt; E. Conclusions:\nI. A &gt; D\nII. B &lt; E",
                options: ["Only conclusion I is true", "Only conclusion II is true", "Both I and II are true", "Neither is true"],
                answer: 0,
                explanation: "Combine the statements: A &gt; B &ge; C = D &lt; E. \nFor I: Path A to D is A &gt; B &ge; C = D, which yields A &gt; D (True). \nFor II: Path B to E is B &ge; C = D &lt; E. The symbols point in opposite directions (&ge; and &lt;), blocking any conclusion between B and E. Thus, only I is true."
            },
            {
                q: "Coded Inequality: Let '$' mean '&ge;', '*' mean '&le;', '@' mean '&gt;', '!' mean '&lt;', and '&' mean '='. Statement: P $ Q @ R & S * T. Conclusions:\nI. P @ S\nII. Q @ T",
                options: ["Only I is true", "Only II is true", "Both are true", "Neither is true"],
                answer: 0,
                explanation: "Decoding: P &ge; Q &gt; R = S &le; T. \nFor I: Path P to S is P &ge; Q &gt; R = S, which yields P &gt; S. Re-encoding gives P @ S (True). \nFor II: Path Q to T is Q &gt; R = S &le; T (opposite direction symbols &gt; and &le;). No relation can be drawn. Only I is true."
            },
            {
                q: "Statements: X &lt; Y &le; Z; Z = W &gt; V. Which of the following conclusions is NOT correct?",
                options: ["X &lt; W", "Y &le; W", "Z &gt; V", "Y &lt; V"],
                answer: 3,
                explanation: "Combine: X &lt; Y &le; Z = W &gt; V. \nChecking options: \nA) X &lt; Z = W => X &lt; W (Correct) \nB) Y &le; Z = W => Y &le; W (Correct) \nC) Z = W &gt; V => Z &gt; V (Correct) \nD) Y &le; Z = W &gt; V gives Y &le; W &gt; V (opposite signs, so no definite relationship can be drawn. Y &lt; V is not definitely correct)."
            },
            {
                q: "Statement: A &ge; B = C &le; D. Conclusions:\nI. A &gt; C\nII. A = C",
                options: ["Only conclusion I is true", "Only conclusion II is true", "Either conclusion I or II is true", "Neither is true"],
                answer: 2,
                explanation: "Path A to C is A &ge; B = C, which simplifies to A &ge; C. This means A is either strictly greater than C, or equal to C. Therefore, either conclusion I (A &gt; C) or II (A = C) must be true."
            },
            {
                q: "Statement: E &gt; F &ge; G &lt; H = I. How many definite relationships can be established between E and the other variables in the statement?",
                options: ["1", "2", "3", "4"],
                answer: 1,
                explanation: "Let's check E's path to each variable: \n- Path E to F: E &gt; F (Definite, 1) \n- Path E to G: E &gt; F &ge; G &rArr; E &gt; G (Definite, 2) \n- Path E to H: E &gt; F &ge; G &lt; H (Opposite signs, no relation) \n- Path E to I: E &gt; F &ge; G &lt; H = I (Opposite signs, no relation). \nTherefore, only 2 definite relationships can be formed (with F and G)."
            }
        ]
    }
};
