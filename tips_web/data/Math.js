window.TopicsData = window.TopicsData || {};
window.TopicsData["Math"] = {
    title: "Number Theory & Maths",
    sections: [
        {
            heading: "Basic Concepts",
            items: [
                "**Greatest Common Divisor (GCD):** Found using Euclidean Algorithm. `gcd(a, b) = gcd(b, a % b)`.",
                "**Least Common Multiple (LCM):** Calculated as `lcm(a, b) = (a * b) / gcd(a, b)`.",
                "**Prime Numbers:** Numbers greater than 1 with no positive divisors other than 1 and itself."
            ]
        },
        {
            heading: "Common Algorithms",
            items: [
                "**Sieve of Eratosthenes:** Generate all primes up to N in O(N log(log N)) time.",
                "**Fast Exponentiation (Binary Exponentiation):** Compute `a^b % mod` in O(log b) time."
            ]
        },
        {
            heading: "Coding Tips",
            items: [
                "Watch out for integer overflow! In Java, cast to `long` before multiplication: `long val = (long) a * b;`",
                "Modulo Arithmetic rules: <br>`(a + b) % m = ((a % m) + (b % m)) % m`<br>`(a * b) % m = ((a % m) * (b % m)) % m`"
            ]
        }
    ],
    mcqs: {
        easy: [],
        medium: [],
        hard: []
    }
};
