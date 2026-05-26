window.TopicsData = window.TopicsData || {};
window.TopicsData["BitManipulation"] = {
    title: "Bit Manipulation",
    sections: [
        {
            heading: "Core Bitwise Operators",
            items: [
                "**AND (`&`):** `1 & 1 = 1`, otherwise `0`.",
                "**OR (`|`):** `0 | 0 = 0`, otherwise `1`.",
                "**XOR (`^`):** `1 ^ 1 = 0`, `0 ^ 0 = 0`, different bits yield `1`. Key property: `a ^ a = 0`, `a ^ 0 = a`.",
                "**NOT (`~`):** Inverts all bits (flips 0 to 1, and 1 to 0).",
                "**Left Shift (`<<`):** Multiplies number by powers of 2. `x << y` is `x * 2^y`.",
                "**Right Shift (`>>`):** Arithmetic shift (retains sign bit). Dividies by powers of 2.",
                "**Unsigned Right Shift (`>>>`):** Logical shift (fills leftmost vacant positions with 0s)."
            ]
        },
        {
            heading: "Common Bit Tricks",
            items: [
                "Check if number is even: `(n & 1) == 0`.",
                "Clear lowest set bit: `n & (n - 1)`. Extremely useful to check if a number is a power of 2: `(n > 0) && ((n & (n - 1)) == 0)`.",
                "Get lowest set bit: `n & -n`.",
                "Swap two numbers without extra variable: `a = a ^ b; b = a ^ b; a = a ^ b;`"
            ]
        },
        {
            heading: "Complexity",
            items: [
                "Bitwise operations are executed directly on the CPU register and take constant time O(1)."
            ]
        }
    ],
    mcqs: {
        easy: [],
        medium: [],
        hard: []
    }
};
