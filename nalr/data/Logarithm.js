window.TopicsData = window.TopicsData || {};
window.TopicsData["Logarithm"] = {
    title: "Logarithms",
    sections: [
        {
            heading: "Logarithm Rules & Formulas",
            items: [
                `<strong>Logarithm Formulas Table:</strong><br>
                <table class="dsa-table">
                    <thead>
                        <tr>
                            <th>Formula Name</th>
                            <th>Formula</th>
                            <th>Shortcut Idea</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Definition</strong></td>
                            <td>log<sub>a</sub>(b) = x &hArr; a<sup>x</sup> = b</td>
                            <td>Convert log to exponent form</td>
                        </tr>
                        <tr>
                            <td><strong>Product Rule</strong></td>
                            <td>log<sub>a</sub>(xy) = log<sub>a</sub>(x) + log<sub>a</sub>(y)</td>
                            <td>Multiplication inside &rarr; Addition outside</td>
                        </tr>
                        <tr>
                            <td><strong>Division Rule</strong></td>
                            <td>log<sub>a</sub>(x/y) = log<sub>a</sub>(x) &minus; log<sub>a</sub>(y)</td>
                            <td>Division inside &rarr; Subtraction outside</td>
                        </tr>
                        <tr>
                            <td><strong>Power Rule</strong></td>
                            <td>log<sub>a</sub>(x<sup>n</sup>) = n &middot; log<sub>a</sub>(x)</td>
                            <td>Exponent moves to the front</td>
                        </tr>
                        <tr>
                            <td><strong>Root Rule</strong></td>
                            <td>log<sub>a</sub>(<sup>n</sup>&radic;x) = (1/n) &middot; log<sub>a</sub>(x)</td>
                            <td>Root becomes a fractional coefficient</td>
                        </tr>
                        <tr>
                            <td><strong>Change of Base</strong></td>
                            <td>log<sub>a</sub>(b) = log<sub>c</sub>(b) / log<sub>c</sub>(a)</td>
                            <td>Transition bases easily using quotients</td>
                        </tr>
                        <tr>
                            <td><strong>Reciprocal Rule</strong></td>
                            <td>log<sub>a</sub>(b) = 1 / log<sub>b</sub>(a)</td>
                            <td>Invert log by swapping base and argument</td>
                        </tr>
                        <tr>
                            <td><strong>Log of 1</strong></td>
                            <td>log<sub>a</sub>(1) = 0</td>
                            <td>Any base to power 0 equals 1</td>
                        </tr>
                        <tr>
                            <td><strong>Log of Same Number</strong></td>
                            <td>log<sub>a</sub>(a) = 1</td>
                            <td>Log base matches argument</td>
                        </tr>
                        <tr>
                            <td><strong>Exponential Cancel</strong></td>
                            <td>log<sub>a</sub>(a<sup>x</sup>) = x</td>
                            <td>Log cancels out its own base exponent</td>
                        </tr>
                        <tr>
                            <td><strong>Reverse Cancel</strong></td>
                            <td>a<sup>log<sub>a</sub>(x)</sup> = x</td>
                            <td>Exponent base cancels out its log exponent</td>
                        </tr>
                        <tr>
                            <td><strong>Equality Rule</strong></td>
                            <td>If log<sub>a</sub>(x) = log<sub>a</sub>(y), then x = y</td>
                            <td>If bases match, arguments must be equal</td>
                        </tr>
                        <tr>
                            <td><strong>Common Log</strong></td>
                            <td>log<sub>10</sub>(x) or log(x)</td>
                            <td>Implied base 10</td>
                        </tr>
                        <tr>
                            <td><strong>Natural Log</strong></td>
                            <td>ln(e) = 1</td>
                            <td>Log base e (e &approx; 2.718)</td>
                        </tr>
                    </tbody>
                </table>`
            ]
        }
    ],
    mcqs: {
        easy: [
            {
                q: "What is the value of log₂(16)?",
                options: ["2", "4", "8", "16"],
                answer: 1,
                explanation: "By definition, log₂(16) = x means 2^x = 16. Since 2⁴ = 16, the value is 4."
            },
            {
                q: "What is the value of log₅(1)?",
                options: ["0", "1", "5", "Undefined"],
                answer: 0,
                explanation: "The logarithm of 1 to any base is always 0, since a⁰ = 1."
            },
            {
                q: "Simplify the expression: log(a) + log(b).",
                options: ["log(a + b)", "log(a &times; b)", "log(a / b)", "log(a) &times; log(b)"],
                answer: 1,
                explanation: "Using the Product Rule: log_a(x) + log_a(y) = log_a(xy). Thus, log(a) + log(b) = log(ab)."
            },
            {
                q: "What is the value of log₃(3)?",
                options: ["0", "1", "3", "9"],
                answer: 1,
                explanation: "The logarithm of any number to the same base is 1 (log_a(a) = 1), since a¹ = a."
            },
            {
                q: "What is the value of ln(e)?",
                options: ["0", "1", "e", "10"],
                answer: 1,
                explanation: "ln(e) represents log_e(e). Since base and argument are equal, the value is 1."
            }
        ],
        medium: [
            {
                q: "Solve for x: log₂(x) = 5.",
                options: ["10", "25", "32", "64"],
                answer: 2,
                explanation: "Convert the log equation to exponent form: x = 2⁵. Therefore, x = 32."
            },
            {
                q: "If log₁₀(x) = &minus;2, what is the value of x?",
                options: ["0.01", "0.1", "&minus;20", "&minus;100"],
                answer: 0,
                explanation: "Converting to exponent form: x = 10^(&minus;2) = 1 / 10² = 1/100 = 0.01."
            },
            {
                q: "Simplify: log(50) + log(2). (Assume base 10)",
                options: ["log(52)", "2", "log(25)", "1"],
                answer: 1,
                explanation: "Using the Product Rule: log(50) + log(2) = log(50 &times; 2) = log(100). Since log₁₀(100) = 2 (as 10² = 100), the answer is 2."
            },
            {
                q: "Simplify: log₃(81) &minus; log₃(9).",
                options: ["log₃(72)", "2", "9", "3"],
                answer: 1,
                explanation: "Using the Division Rule: log₃(81) &minus; log₃(9) = log₃(81/9) = log₃(9). Since 3² = 9, the answer is 2."
            },
            {
                q: "What is the value of log<sub>8</sub>(4)?",
                options: ["2", "1/2", "2/3", "3/2"],
                answer: 2,
                explanation: "Using change of base to base 2: log_8(4) = log_2(4) / log_2(8). Since log_2(4) = 2 and log_2(8) = 3, the value is 2/3."
            }
        ],
        hard: [
            {
                q: "If log₂(x) + log₄(x) = 6, find the value of x.",
                options: ["16", "32", "64", "8"],
                answer: 0,
                explanation: "Rewrite log₄(x) with base 2: log₄(x) = log₂(x)/log₂(4) = log₂(x)/2 = 0.5 log₂(x). The equation becomes: log₂(x) + 0.5 log₂(x) = 6 => 1.5 log₂(x) = 6 => log₂(x) = 4 => x = 2⁴ = 16."
            },
            {
                q: "Find the value of 5<sup>log₅(12)</sup>.",
                options: ["5", "12", "60", "log₅(60)"],
                answer: 1,
                explanation: "Using the Reverse Cancel rule: a^(log_a(x)) = x. Therefore, 5^(log_5(12)) = 12."
            },
            {
                q: "Solve for x: log₃(x &minus; 2) = 2.",
                options: ["8", "11", "9", "7"],
                answer: 1,
                explanation: "Convert to exponent form: x &minus; 2 = 3² => x &minus; 2 = 9 => x = 9 + 2 = 11."
            },
            {
                q: "Find the value of log₂(3) &times; log₃(4) &times; log₄(8).",
                options: ["2", "3", "4", "8"],
                answer: 1,
                explanation: "Using Change of Base formula: (log 3/log 2) &times; (log 4/log 3) &times; (log 8/log 4). The terms cancel out: log 8 / log 2 = log_2(8) = 3."
            },
            {
                q: "Given log₁₀(2) &approx; 0.3010, find the number of digits in the integer 2⁵⁰.",
                options: ["15", "16", "17", "50"],
                answer: 1,
                explanation: "The number of digits in a^b is given by floor(b &times; log₁₀(a)) + 1. Thus, floor(50 &times; log₁₀(2)) + 1 = floor(50 &times; 0.3010) + 1 = floor(15.05) + 1 = 15 + 1 = 16."
            }
        ]
    }
};
