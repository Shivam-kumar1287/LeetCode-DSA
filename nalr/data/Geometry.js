window.TopicsData = window.TopicsData || {};
window.TopicsData["Geometry"] = {
    title: "Geometry & Mensuration",
    sections: [
        {
            heading: "3D Shapes Formulas",
            items: [
                `<strong>3D Mensuration Table:</strong><br>
                <table class="dsa-table">
                    <thead>
                        <tr>
                            <th>Shape</th>
                            <th>Volume (V)</th>
                            <th>Total Surface Area (TSA)</th>
                            <th>Diagonal (d)</th>
                            <th>LSA / CSA / Extra</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Cube</strong></td>
                            <td>a³</td>
                            <td>6a²</td>
                            <td>&radic;3 a</td>
                            <td>LSA = 4a²</td>
                        </tr>
                        <tr>
                            <td><strong>Cuboid</strong></td>
                            <td>lbh</td>
                            <td>2(lb + bh + hl)</td>
                            <td>&radic;(l² + b² + h²)</td>
                            <td>LSA = 2h(l + b)</td>
                        </tr>
                        <tr>
                            <td><strong>Cylinder</strong></td>
                            <td>&pi;r²h</td>
                            <td>2&pi;r(h + r)</td>
                            <td>&mdash;</td>
                            <td>CSA = 2&pi;rh</td>
                        </tr>
                        <tr>
                            <td><strong>Cone</strong></td>
                            <td>⅓ &pi;r²h</td>
                            <td>&pi;r(l + r)</td>
                            <td>&mdash;</td>
                            <td>l = &radic;(r² + h²), CSA = &pi;rl</td>
                        </tr>
                        <tr>
                            <td><strong>Sphere</strong></td>
                            <td>4/3 &pi;r³</td>
                            <td>4&pi;r²</td>
                            <td>&mdash;</td>
                            <td>&mdash;</td>
                        </tr>
                        <tr>
                            <td><strong>Hemisphere</strong></td>
                            <td>2/3 &pi;r³</td>
                            <td>3&pi;r²</td>
                            <td>&mdash;</td>
                            <td>CSA = 2&pi;r²</td>
                        </tr>
                        <tr>
                            <td><strong>Frustum (Cone)</strong></td>
                            <td>⅓&pi;h(R² + r² + Rr)</td>
                            <td>&pi;(R² + r² + l(R + r))</td>
                            <td>&mdash;</td>
                            <td>l = &radic;((R&minus;r)² + h²), CSA = &pi;l(R + r)</td>
                        </tr>
                        <tr>
                            <td><strong>Pyramid</strong></td>
                            <td>⅓Bh (B = Base Area)</td>
                            <td>LSA + Base Area</td>
                            <td>&mdash;</td>
                            <td>LSA = &frac12; &times; Perimeter &times; l</td>
                        </tr>
                    </tbody>
                </table>`
            ]
        },
        {
            heading: "2D Shapes & Advanced Concepts",
            items: [
                `<strong>General 2D Formulas & Weights:</strong>
                <ul>
                    <li><strong>Weight:</strong> <code>Weight = Volume &times; Density</code></li>
                    <li><strong>Inscribed Sphere in a Cone:</strong> Radius <code>r = Rh / (l + R)</code> (where R = base radius of cone, h = cone height, l = slant height)</li>
                    <li><strong>Circumference of Cylinder Base:</strong> <code>2&pi;r</code></li>
                    <li><strong>Diagonal of Square:</strong> <code>d = s&radic;2</code></li>
                    <li><strong>Rectangle Diagonal:</strong> <code>d = &radic;(l² + b²)</code></li>
                    <li><strong>Rectangle Perimeter:</strong> <code>P = 2(l + b)</code></li>
                </ul>`
            ]
        },
        {
            heading: "Triangle Geometry",
            items: [
                `<strong>Triangle Area Formulas:</strong><br>
                <table class="dsa-table">
                    <thead>
                        <tr>
                            <th>Type / Case</th>
                            <th>Area Formula</th>
                            <th>Extra / Condition</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Basic Triangle</strong></td>
                            <td>&frac12; &times; base &times; height</td>
                            <td>Height &perp; base</td>
                        </tr>
                        <tr>
                            <td><strong>Right Triangle</strong></td>
                            <td>&frac12; &times; base &times; height</td>
                            <td>Base &perp; height</td>
                        </tr>
                        <tr>
                            <td><strong>Equilateral Triangle</strong></td>
                            <td>&radic;3/4 &times; a²</td>
                            <td>All sides equal, Height h = &radic;3/2 a</td>
                        </tr>
                        <tr>
                            <td><strong>Isosceles Triangle</strong></td>
                            <td>&frac12; &times; b &times; h</td>
                            <td>Height bisects the base <code>b</code></td>
                        </tr>
                        <tr>
                            <td><strong>Heron's Formula</strong></td>
                            <td>&radic;[s(s&minus;a)(s&minus;b)(s&minus;c)]</td>
                            <td>s = (a+b+c)/2 (semi-perimeter)</td>
                        </tr>
                        <tr>
                            <td><strong>Using Trigonometry</strong></td>
                            <td>&frac12; ab sin(C)</td>
                            <td>C is the angle between side a and b</td>
                        </tr>
                        <tr>
                            <td><strong>Using Coordinates</strong></td>
                            <td>&frac12; |x₁(y₂&minus;y₃) + x₂(y₃&minus;y₁) + x₃(y₁&minus;y₂)|</td>
                            <td>Coordinates of vertices are (x₁, y₁), (x₂, y₂), (x₃, y₃)</td>
                        </tr>
                        <tr>
                            <td><strong>Area via Inradius (r)</strong></td>
                            <td>A = r &times; s</td>
                            <td>s = semi-perimeter</td>
                        </tr>
                        <tr>
                            <td><strong>Area via Circumradius (R)</strong></td>
                            <td>A = abc / (4R)</td>
                            <td>a, b, c = sides of the triangle</td>
                        </tr>
                    </tbody>
                </table>`
            ]
        }
    ],
    mcqs: {
        easy: [
            {
                q: "If the volume of a cube is 216 cm³, what is its Total Surface Area (TSA)?",
                options: ["216 cm²", "144 cm²", "256 cm²", "180 cm²"],
                answer: 0,
                explanation: "Volume of cube = a³ = 216 => side a = 6 cm. TSA = 6a² = 6 &times; (6²) = 6 &times; 36 = 216 cm²."
            },
            {
                q: "Find the diagonal of a square whose side is 5&radic;2 cm.",
                options: ["5 cm", "10 cm", "15 cm", "10&radic;2 cm"],
                answer: 1,
                explanation: "Diagonal of a square d = s&radic;2. Given s = 5&radic;2, d = (5&radic;2) &times; &radic;2 = 5 &times; 2 = 10 cm."
            },
            {
                q: "Find the area of an equilateral triangle with side length 4 cm.",
                options: ["8&radic;3 cm²", "4&radic;3 cm²", "16&radic;3 cm²", "2&radic;3 cm²"],
                answer: 1,
                explanation: "Area of equilateral triangle = &radic;3/4 &times; a² = &radic;3/4 &times; 4² = &radic;3/4 &times; 16 = 4&radic;3 cm²."
            },
            {
                q: "Find the perimeter of a rectangle with length 10 cm and width 6 cm.",
                options: ["16 cm", "60 cm", "32 cm", "20 cm"],
                answer: 2,
                explanation: "Perimeter P = 2(l + b) = 2(10 + 6) = 2(16) = 32 cm."
            },
            {
                q: "The radius of a sphere is 3 cm. Find its surface area in terms of &pi;.",
                options: ["36&pi; cm²", "12&pi; cm²", "18&pi; cm²", "27&pi; cm²"],
                answer: 0,
                explanation: "Surface area of a sphere = 4&pi;r² = 4 &times; &pi; &times; 3² = 4 &times; &pi; &times; 9 = 36&pi; cm²."
            }
        ],
        medium: [
            {
                q: "A cylinder has a radius of 7 cm and a height of 10 cm. Find its volume. (Use &pi; = 22/7)",
                options: ["154 cm³", "1540 cm³", "770 cm³", "3080 cm³"],
                answer: 1,
                explanation: "Volume V = &pi;r²h = (22/7) &times; 7² &times; 10 = (22/7) &times; 49 &times; 10 = 22 &times; 7 &times; 10 = 1540 cm³."
            },
            {
                q: "Find the slant height (l) of a cone with radius 5 cm and height 12 cm.",
                options: ["13 cm", "17 cm", "14 cm", "15 cm"],
                answer: 0,
                explanation: "Slant height l = &radic;(r² + h²) = &radic;(5² + 12²) = &radic;(25 + 144) = &radic;169 = 13 cm."
            },
            {
                q: "Find the area of a triangle with sides measuring 5 cm, 12 cm, and 13 cm.",
                options: ["60 cm²", "30 cm²", "65 cm²", "32.5 cm²"],
                answer: 1,
                explanation: "The sides 5, 12, and 13 form a Pythagorean triplet (5² + 12² = 13²), indicating a right-angled triangle. Area = &frac12; &times; base &times; height = &frac12; &times; 5 &times; 12 = 30 cm²."
            },
            {
                q: "Find the radius of the inscribed sphere in a cone of base radius R = 6 cm and height h = 8 cm.",
                options: ["2 cm", "3 cm", "4 cm", "2.5 cm"],
                answer: 1,
                explanation: "First, find slant height l = &radic;(6² + 8²) = 10 cm. The inradius of sphere inside cone: r = Rh / (l + R). Thus, r = (6 &times; 8) / (10 + 6) = 48 / 16 = 3 cm."
            },
            {
                q: "Find the Curved Surface Area (CSA) of a cylinder with radius 5 cm and height 14 cm. (Use &pi; = 22/7)",
                options: ["220 cm²", "440 cm²", "880 cm²", "1100 cm²"],
                answer: 1,
                explanation: "Curved Surface Area CSA = 2&pi;rh = 2 &times; (22/7) &times; 5 &times; 14 = 2 &times; 22 &times; 5 &times; 2 = 440 cm²."
            }
        ],
        hard: [
            {
                q: "Find the volume of a frustum of a cone with height 6 cm, base radius R = 4 cm, and top radius r = 2 cm. (Leave answer in terms of &pi;)",
                options: ["56&pi; cm³", "28&pi; cm³", "84&pi; cm³", "112&pi; cm³"],
                answer: 0,
                explanation: "Volume V = ⅓&pi;h(R² + r² + Rr). Here h=6, R=4, r=2. V = ⅓ &times; &pi; &times; 6 &times; (4² + 2² + 4&times;2) = 2&pi; &times; (16 + 4 + 8) = 2&pi; &times; 28 = 56&pi; cm³."
            },
            {
                q: "Find the area of a triangle whose vertices are located at coordinates (0,0), (4,0), and (0,3).",
                options: ["12 sq units", "6 sq units", "8 sq units", "24 sq units"],
                answer: 1,
                explanation: "Using coordinate area formula: &frac12; |x₁(y₂&minus;y₃) + x₂(y₃&minus;y₁) + x₃(y₁&minus;y₂)| = &frac12; |0(0-3) + 4(3-0) + 0(0-0)| = &frac12; |12| = 6 sq units."
            },
            {
                q: "A pyramid has a square base of side 6 cm and height 4 cm. Find its volume.",
                options: ["48 cm³", "144 cm³", "36 cm³", "72 cm³"],
                answer: 0,
                explanation: "Volume V = ⅓ &times; Base Area &times; height. Base area B = side² = 6² = 36 cm². V = ⅓ &times; 36 &times; 4 = 12 &times; 4 = 48 cm³."
            },
            {
                q: "If the volume of a cylinder is equal to the volume of a cone with the same base radius, what is the ratio of the height of the cylinder (h1) to the height of the cone (h2)?",
                options: ["1:1", "1:3", "3:1", "1:9"],
                answer: 1,
                explanation: "V_cyl = &pi;r²h1. V_cone = ⅓&pi;r²h2. Since volumes are equal: &pi;r²h1 = ⅓&pi;r²h2 => h1 = ⅓ h2 => h1 : h2 = 1 : 3."
            },
            {
                q: "In a triangle, if the inradius r = 3 cm and the semi-perimeter s = 15 cm, find its area.",
                options: ["45 cm²", "30 cm²", "22.5 cm²", "15 cm²"],
                answer: 0,
                explanation: "Area of a triangle can be expressed as: A = r &times; s. Given r = 3 and s = 15, Area = 3 &times; 15 = 45 cm²."
            }
        ]
    }
};
