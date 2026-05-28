window.TopicsData = window.TopicsData || {};
window.TopicsData["Algebra"] = {
    title: "Algebra Tricks",
    sections: [
        {
            heading: "Algebra Shortcuts & Tricks",
            items: [
                `<strong>Squares & Higher Powers:</strong> General power reduction rules for expressions of the form <code>x + 1/x = n</code>:
                <ul>
                    <li>If <code>x + 1/x = n</code>, then <strong><code>x² + 1/x² = n² - 2</code></strong></li>
                    <li>If <code>x + 1/x = n</code>, then <strong><code>x³ + 1/x³ = n³ - 3n</code></strong></li>
                    <li>If <code>x - 1/x = n</code>, then <strong><code>x² + 1/x² = n² + 2</code></strong></li>
                    <li>If <code>x - 1/x = n</code>, then <strong><code>x³ - 1/x³ = n³ + 3n</code></strong></li>
                </ul>`,
                `<strong>Power Difference Trick:</strong> To convert a positive exponent sum to a difference:
                <ul>
                    <li>If <code>x^k + 1/x^k = n</code>, then <strong><code>x^k - 1/x^k = &plusmn;&radic;(n² - 4)</code></strong></li>
                    <li>Example: If <code>x^631 + 1/x^631 = 11</code>, then <code>x^631 - 1/x^631 = &radic;(11² - 4) = &radic;117</code></li>
                </ul>`,
                `<strong>Algebraic Identity 1 (Sum of Differences):</strong> For the expression <code>a² + b² + c² - ab - bc - ca</code>:
                <ul>
                    <li>If <code>a, b, c</code> are in Arithmetic Progression (AP) with a common difference <code>d</code>:</li>
                    <li><strong>Shortcut Formula: <code>Result = 3 &times; d²</code></strong></li>
                </ul>`,
                `<strong>Algebraic Identity 2 (Sum of Cubes):</strong> For the expression <code>a³ + b³ + c³ - 3abc</code>:
                <ul>
                    <li>If <code>a, b, c</code> are in Arithmetic Progression (AP) with common difference <code>d</code> and middle value <code>m</code>:</li>
                    <li><strong>Shortcut Formula: <code>Result = 9 &times; d² &times; m</code></strong></li>
                    <li>Example: If <code>a=64, b=66, c=68</code>, then <code>d=2</code> and <code>m=66</code>. Result = <code>9 &times; 2² &times; 66 = 2376</code></li>
                </ul>`
            ]
        }
    ],
    mcqs: {
        easy: [
            {
                q: "If x + 1/x = 5, what is the value of x² + 1/x²?",
                options: ["23", "25", "27", "20"],
                answer: 0,
                explanation: "Using the shortcut: x² + 1/x² = n² - 2. Here n = 5, so 5² - 2 = 25 - 2 = 23."
            },
            {
                q: "If x + 1/x = 3, what is the value of x³ + 1/x³?",
                options: ["27", "24", "18", "9"],
                answer: 2,
                explanation: "Using the shortcut: x³ + 1/x³ = n³ - 3n. Here n = 3, so 3³ - 3(3) = 27 - 9 = 18."
            },
            {
                q: "If x + 1/x = 4, what is the value of x² + 1/x²?",
                options: ["14", "16", "18", "12"],
                answer: 0,
                explanation: "Using the shortcut: n² - 2. Here n = 4, so 4² - 2 = 16 - 2 = 14."
            },
            {
                q: "Find the value of a² + b² + c² - ab - bc - ca if a, b, c are in Arithmetic Progression with a common difference d = 3.",
                options: ["9", "18", "27", "36"],
                answer: 2,
                explanation: "Using the shortcut: Result = 3 &times; d². Here d = 3, so 3 &times; (3²) = 3 &times; 9 = 27."
            },
            {
                q: "If x + 1/x = 2, what is the value of x^10 + 1/x^10?",
                options: ["1024", "2", "100", "20"],
                answer: 1,
                explanation: "If x + 1/x = 2, the only real solution is x = 1. Therefore, x^10 + 1/x^10 = 1^10 + 1/1^10 = 1 + 1 = 2."
            }
        ],
        medium: [
            {
                q: "If x^200 + 1/x^200 = 6, find the positive value of x^200 - 1/x^200.",
                options: ["&radic;32", "&radic;34", "&radic;38", "4"],
                answer: 0,
                explanation: "Using the shortcut: x^k - 1/x^k = &radic;(n² - 4). Here n = 6, so &radic;(6² - 4) = &radic;(36 - 4) = &radic;32 (which simplifies to 4&radic;2)."
            },
            {
                q: "If a = 94, b = 96, and c = 98, find the value of a³ + b³ + c³ - 3abc.",
                options: ["3456", "3840", "2304", "1728"],
                answer: 0,
                explanation: "Since a, b, and c are in AP with common difference d = 2 and middle term m = 96, we use the shortcut: 9 &times; d² &times; m. Thus, 9 &times; 2² &times; 96 = 9 &times; 4 &times; 96 = 3456."
            },
            {
                q: "If x + 1/x = 6, find the value of x³ + 1/x³.",
                options: ["216", "234", "198", "180"],
                answer: 2,
                explanation: "Using the shortcut: n³ - 3n. Here n = 6, so 6³ - 3(6) = 216 - 18 = 198."
            },
            {
                q: "Find the value of a² + b² + c² - ab - bc - ca if a = 101, b = 105, and c = 109.",
                options: ["16", "32", "48", "64"],
                answer: 2,
                explanation: "Here, a, b, and c are in AP with common difference d = 4 (since 105-101 = 4). Using the shortcut: 3 &times; d² = 3 &times; 4² = 3 &times; 16 = 48."
            },
            {
                q: "If x - 1/x = 4, what is the value of x² + 1/x²?",
                options: ["14", "18", "16", "20"],
                answer: 1,
                explanation: "Since x - 1/x = n, then x² + 1/x² = n² + 2. Here n = 4, so 4² + 2 = 16 + 2 = 18."
            }
        ],
        hard: [
            {
                q: "If x^631 + 1/x^631 = 11, find the positive value of x^631 - 1/x^631.",
                options: ["&radic;117", "&radic;125", "9", "&radic;121"],
                answer: 0,
                explanation: "Using the shortcut: &radic;(n² - 4). Here n = 11, so &radic;(11² - 4) = &radic;(121 - 4) = &radic;117."
            },
            {
                q: "If a = 1002, b = 1005, and c = 1008, find the value of a³ + b³ + c³ - 3abc.",
                options: ["81405", "90450", "72360", "81000"],
                answer: 0,
                explanation: "Here, a, b, and c are in AP with d = 3 and middle term m = 1005. Using the shortcut: 9 &times; d² &times; m = 9 &times; 3² &times; 1005 = 9 &times; 9 &times; 1005 = 81 &times; 1005 = 81405."
            },
            {
                q: "If x² - 5x + 1 = 0, what is the value of x³ + 1/x³?",
                options: ["140", "110", "125", "115"],
                answer: 1,
                explanation: "Divide the equation x² - 5x + 1 = 0 by x to get: x - 5 + 1/x = 0, which means x + 1/x = 5. Now use the shortcut: n³ - 3n = 5³ - 3(5) = 125 - 15 = 110."
            },
            {
                q: "If a² + b² + c² - ab - bc - ca = 108 and a, b, c are in AP, what is their common difference?",
                options: ["3", "4", "6", "8"],
                answer: 2,
                explanation: "Using the shortcut formula: 3 &times; d² = 108. Dividing by 3: d² = 36, which gives d = 6."
            },
            {
                q: "If x + 1/x = 3, what is the value of x^5 + 1/x^5?",
                options: ["243", "120", "123", "126"],
                answer: 2,
                explanation: "We know: x^5 + 1/x^5 = (x² + 1/x²)(x³ + 1/x³) - (x + 1/x). Since n = 3, x² + 1/x² = 3² - 2 = 7, and x³ + 1/x³ = 3³ - 3(3) = 18. Thus, x^5 + 1/x^5 = 7 &times; 18 - 3 = 126 - 3 = 123."
            }
        ]
    }
};
