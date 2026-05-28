window.TopicsData = window.TopicsData || {};
window.TopicsData["Train"] = {
    title: "Train Problems",
    sections: [
        {
            heading: "Train Crossings Formulas Table",
            items: [
                `<strong>Core Train Formulations:</strong><br>
                <table class="dsa-table">
                    <thead>
                        <tr>
                            <th>Scenario</th>
                            <th>Formula</th>
                            <th>Key Parameter</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Train crossing a Pole / Standing Man</strong></td>
                            <td>Time = Length of Train &divide; Speed</td>
                            <td>Only train length acts as distance</td>
                        </tr>
                        <tr>
                            <td><strong>Train crossing a Platform / Bridge</strong></td>
                            <td>Time = (Length of Train + Length of Platform) &divide; Speed</td>
                            <td>Add platform length to train length for total distance</td>
                        </tr>
                        <tr>
                            <td><strong>Two trains crossing (Opposite Direction)</strong></td>
                            <td>Time = (Sum of Lengths) &divide; (Sum of Speeds)</td>
                            <td>Relative speed increases: <code>S₁ + S₂</code></td>
                        </tr>
                        <tr>
                            <td><strong>Two trains crossing (Same Direction)</strong></td>
                            <td>Time = (Sum of Lengths) &divide; (Difference of Speeds)</td>
                            <td>Relative speed decreases: <code>S₁ - S₂</code></td>
                        </tr>
                        <tr>
                            <td><strong>Length of Train</strong></td>
                            <td>Length = Speed &times; Time</td>
                            <td>Expressed in meters</td>
                        </tr>
                        <tr>
                            <td><strong>Speed of Train</strong></td>
                            <td>Speed = Distance &divide; Time</td>
                            <td>Expressed in m/s (multiply by 18/5 for km/hr)</td>
                        </tr>
                    </tbody>
                </table>`
            ]
        },
        {
            heading: "Train Crossing Tricks & Conversions",
            items: [
                `<strong>Direct Shortcuts:</strong>
                <ul>
                    <li><strong>Pole/Man:</strong> Treat the object as a point dimension (only train length matters).</li>
                    <li><strong>Platform/Bridge:</strong> Treat the object as a linear dimension (always add platform/bridge lengths).</li>
                    <li><strong>Opposite Direction:</strong> Add the speeds (approaching relative rate).</li>
                    <li><strong>Same Direction:</strong> Subtract the speeds (overtaking relative rate).</li>
                </ul>`,
                `<strong>Speed Conversion Reference Table:</strong><br>
                <table class="dsa-table">
                    <thead>
                        <tr>
                            <th>Speed in km/hr</th>
                            <th>Speed in m/s</th>
                            <th>Multiplier Check</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>18 km/hr</td>
                            <td>5 m/s</td>
                            <td>18 &times; (5/18) = 5</td>
                        </tr>
                        <tr>
                            <td>36 km/hr</td>
                            <td>10 m/s</td>
                            <td>36 &times; (5/18) = 10</td>
                        </tr>
                        <tr>
                            <td>54 km/hr</td>
                            <td>15 m/s</td>
                            <td>54 &times; (5/18) = 15</td>
                        </tr>
                        <tr>
                            <td>72 km/hr</td>
                            <td>20 m/s</td>
                            <td>72 &times; (5/18) = 20</td>
                        </tr>
                        <tr>
                            <td>90 km/hr</td>
                            <td>25 m/s</td>
                            <td>90 &times; (5/18) = 25</td>
                        </tr>
                        <tr>
                            <td>108 km/hr</td>
                            <td>30 m/s</td>
                            <td>108 &times; (5/18) = 30</td>
                        </tr>
                    </tbody>
                </table>`
            ]
        },
        {
            heading: "Advanced Train Concepts",
            items: [
                `<strong>Two Trains Crossing and Continuing:</strong> If two trains start at the same time from stations X and Y towards each other, and after passing each other they take times <code>T_A</code> and <code>T_B</code> to reach Y and X respectively:
                <br><strong><code>Speed of A / Speed of B = &radic;(T_B / T_A)</code></strong>`
            ]
        }
    ],
    mcqs: {
        easy: [
            {
                q: "A train 150 meters long is running at a speed of 54 km/hr. Find the time taken by it to cross a standing telegraph pole.",
                options: ["10 seconds", "15 seconds", "8 seconds", "12 seconds"],
                answer: 0,
                explanation: "First convert speed to m/s: 54 &times; 5/18 = 15 m/s. Time to cross pole = Length of train / Speed = 150 / 15 = 10 seconds."
            },
            {
                q: "If a train takes 15 seconds to cross a standing signal post at a speed of 72 km/hr, what is the length of the train?",
                options: ["150 meters", "200 meters", "300 meters", "250 meters"],
                answer: 2,
                explanation: "Convert speed to m/s: 72 &times; 5/18 = 20 m/s. Length of train = Speed &times; Time = 20 &times; 15 = 300 meters."
            },
            {
                q: "A train 200 meters long crosses a platform 100 meters long in 15 seconds. Find the speed of the train in km/hr.",
                options: ["54 km/hr", "60 km/hr", "72 km/hr", "80 km/hr"],
                answer: 2,
                explanation: "Total distance to cover = Train length + Platform length = 200 + 100 = 300 meters. Speed in m/s = 300 / 15 = 20 m/s. Convert to km/hr: 20 &times; 18/5 = 72 km/hr."
            },
            {
                q: "Two trains of lengths 100 meters and 120 meters are running in opposite directions. What is the total distance covered when they completely cross each other?",
                options: ["20 meters", "220 meters", "100 meters", "120 meters"],
                answer: 1,
                explanation: "Regardless of direction, the total distance covered to cross each other is the sum of their lengths: 100 + 120 = 220 meters."
            },
            {
                q: "Convert 90 km/hr to meters per second.",
                options: ["20 m/s", "25 m/s", "30 m/s", "15 m/s"],
                answer: 1,
                explanation: "Multiply by 5/18: 90 &times; 5/18 = 5 &times; 5 = 25 m/s."
            }
        ],
        medium: [
            {
                q: "A train 240 meters long crosses a platform in 30 seconds at a speed of 72 km/hr. What is the length of the platform?",
                options: ["240 meters", "360 meters", "300 meters", "400 meters"],
                answer: 1,
                explanation: "Speed in m/s = 72 &times; 5/18 = 20 m/s. Total distance covered in 30s = 20 &times; 30 = 600 meters. Since Total Distance = Train Length + Platform Length, the Platform Length = 600 - 240 = 360 meters."
            },
            {
                q: "Two trains of lengths 150m and 180m are running in opposite directions on parallel lines at speeds of 50 km/hr and 58 km/hr respectively. Find the time taken to cross each other.",
                options: ["11 seconds", "15 seconds", "10 seconds", "12 seconds"],
                answer: 0,
                explanation: "Sum of lengths = 150 + 180 = 330 meters. Relative speed in opposite directions = 50 + 58 = 108 km/hr = 108 &times; 5/18 = 30 m/s. Time to cross = 330 / 30 = 11 seconds."
            },
            {
                q: "Two trains of lengths 120m and 130m are running in the same direction on parallel lines at speeds of 60 km/hr and 42 km/hr. Find the time taken by the faster train to pass the slower train.",
                options: ["25 seconds", "40 seconds", "50 seconds", "60 seconds"],
                answer: 2,
                explanation: "Sum of lengths = 120 + 130 = 250 meters. Relative speed in same direction = 60 - 42 = 18 km/hr = 18 &times; 5/18 = 5 m/s. Time to cross = 250 / 5 = 50 seconds."
            },
            {
                q: "A train 180 meters long running at 66 km/hr passes a man walking at 6 km/hr in the opposite direction. Find the time taken to pass the man.",
                options: ["9 seconds", "10 seconds", "12 seconds", "8 seconds"],
                answer: 0,
                explanation: "Relative speed in opposite directions = 66 + 6 = 72 km/hr = 20 m/s. Time = Train Length / Relative Speed = 180 / 20 = 9 seconds."
            },
            {
                q: "A train running at 54 km/hr crosses a platform in 20 seconds. If it crosses a man running in the same direction at 6 km/hr in 12 seconds, what is the length of the train?",
                options: ["180 meters", "160 meters", "140 meters", "200 meters"],
                answer: 1,
                explanation: "Let train length be L. Relative speed vs man in same direction = 54 - 6 = 48 km/hr = 48 &times; 5/18 = 40/3 m/s. Since only train length matters for crossing a man: L = Relative Speed &times; Time = (40/3) &times; 12 = 160 meters."
            }
        ],
        hard: [
            {
                q: "A train running at 54 km/hr crosses a platform in 20 seconds. If it crosses a man running in the same direction at 6 km/hr in 12 seconds, find the length of the platform.",
                options: ["160 meters", "140 meters", "300 meters", "150 meters"],
                answer: 1,
                explanation: "From the previous problem, the train length is 160 meters. Train speed = 54 km/hr = 15 m/s. In 20 seconds it crosses the platform, so total distance = 15 &times; 20 = 300 meters. Platform length = Total Distance - Train Length = 300 - 160 = 140 meters."
            },
            {
                q: "Two trains A and B start running at the same time from stations X and Y towards each other. After crossing, they take 4 hours and 9 hours respectively to reach Y and X. If train A runs at 60 km/hr, find the speed of train B.",
                options: ["40 km/hr", "45 km/hr", "30 km/hr", "90 km/hr"],
                answer: 0,
                explanation: "Using the formula: Speed_A / Speed_B = &radic;(Time_B / Time_A). Thus, 60 / Speed_B = &radic;(9 / 4) = 3 / 2. Solving this: Speed_B = (60 &times; 2) / 3 = 40 km/hr."
            },
            {
                q: "Two trains of equal lengths take 10 seconds and 15 seconds to cross a telegraph post. If the length of each train is 120m, find the time taken to cross each other when running in opposite directions.",
                options: ["12 seconds", "12.5 seconds", "10 seconds", "15 seconds"],
                answer: 0,
                explanation: "Speed of train 1 = 120 / 10 = 12 m/s. Speed of train 2 = 120 / 15 = 8 m/s. Opposite direction crossing: Sum of lengths = 240m. Sum of speeds = 12 + 8 = 20 m/s. Time to cross = 240 / 20 = 12 seconds."
            },
            {
                q: "A train passes two bridges of lengths 800m and 400m in 100 seconds and 60 seconds respectively. Find the length of the train.",
                options: ["150 meters", "200 meters", "250 meters", "300 meters"],
                answer: 1,
                explanation: "Let train length be L. Since speed of the train is constant: (L + 800)/100 = (L + 400)/60. Cross-multiplying: 3(L + 800) = 5(L + 400) => 3L + 2400 = 5L + 2000 => 2L = 400 => L = 200 meters."
            },
            {
                q: "Train A running at 90 km/hr crosses train B running at 54 km/hr in the same direction in 1 minute. If the length of train A is 300 meters, what is the length of train B?",
                options: ["200 meters", "250 meters", "300 meters", "350 meters"],
                answer: 2,
                explanation: "Relative speed in same direction = 90 - 54 = 36 km/hr = 10 m/s. Distance covered in 60s (1 min) = 10 &times; 60 = 600 meters. For same direction crossing: Length_A + Length_B = 600m. Thus, Length_B = 600 - 300 = 300 meters."
            }
        ]
    }
};
