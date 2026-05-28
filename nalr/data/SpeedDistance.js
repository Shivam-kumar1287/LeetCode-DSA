window.TopicsData = window.TopicsData || {};
window.TopicsData["SpeedDistance"] = {
    title: "Time, Speed & Distance",
    sections: [
        {
            heading: "Basic Concepts & Formulas",
            items: [
                `<strong>Core Relations & Metrics:</strong><br>
                <table class="dsa-table">
                    <thead>
                        <tr>
                            <th>Concept / Case</th>
                            <th>Formula</th>
                            <th>Context</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Speed</strong></td>
                            <td>Speed = Distance &divide; Time</td>
                            <td>Rate of travel</td>
                        </tr>
                        <tr>
                            <td><strong>Distance</strong></td>
                            <td>Distance = Speed &times; Time</td>
                            <td>Total path length covered</td>
                        </tr>
                        <tr>
                            <td><strong>Time</strong></td>
                            <td>Time = Distance &divide; Speed</td>
                            <td>Duration of travel</td>
                        </tr>
                        <tr>
                            <td><strong>Average Speed</strong></td>
                            <td>Total Distance &divide; Total Time</td>
                            <td>Average rate across changing segments</td>
                        </tr>
                        <tr>
                            <td><strong>Convert km/hr &rarr; m/s</strong></td>
                            <td>Multiply by <code>5/18</code></td>
                            <td>e.g., 72 km/hr &times; 5/18 = 20 m/s</td>
                        </tr>
                        <tr>
                            <td><strong>Convert m/s &rarr; km/hr</strong></td>
                            <td>Multiply by <code>18/5</code></td>
                            <td>e.g., 10 m/s &times; 18/5 = 36 km/hr</td>
                        </tr>
                    </tbody>
                </table>`,
                `<strong>Speed Change and Time Tradeoffs:</strong>
                <ul>
                    <li>If speed <strong>increases by x%</strong>, travel time decreases by: <strong><code>(x / (100 + x)) &times; 100%</code></strong></li>
                    <li>If speed <strong>decreases by x%</strong>, travel time increases by: <strong><code>(x / (100 - x)) &times; 100%</code></strong></li>
                    <li>Example: A speed increase of 25% leads to a time decrease of <code>(25/125) &times; 100% = 20%</code>.</li>
                </ul>`
            ]
        },
        {
            heading: "Boats & Streams",
            items: [
                `<strong>Downstream & Upstream Speed:</strong> Let <code>B</code> be the speed of the boat in still water, and <code>S</code> be the speed of the stream/current.
                <ul>
                    <li><strong>Downstream Speed (D):</strong> <code>D = B + S</code> (moving along the direction of flow)</li>
                    <li><strong>Upstream Speed (U):</strong> <code>U = B - S</code> (moving against the direction of flow)</li>
                    <li><strong>Boat Speed in Still Water (B):</strong> <code>B = (D + U) / 2</code></li>
                    <li><strong>Stream Speed (S):</strong> <code>S = (D - U) / 2</code></li>
                </ul>`
            ]
        },
        {
            heading: "Relative Speed & Journey Shortcuts",
            items: [
                `<strong>Relative Speed Table:</strong> Concept used when two bodies are in motion.
                <table class="dsa-table">
                    <thead>
                        <tr>
                            <th>Movement Direction</th>
                            <th>Visual Concept</th>
                            <th>Mathematical Formula</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Same Direction</strong></td>
                            <td>&xrarr; and &xrarr; (Overtaking / Catching up)</td>
                            <td>Relative Speed = <code>V₁ - V₂</code> (where V₁ &gt; V₂)</td>
                        </tr>
                        <tr>
                            <td><strong>Opposite Direction</strong></td>
                            <td>&xrarr; and &xlarr; (Approaching / Moving apart)</td>
                            <td>Relative Speed = <code>V₁ + V₂</code></td>
                        </tr>
                    </tbody>
                </table>`,
                `<strong>Shortcuts for Equal Distances & Late/Early Arrivals:</strong>
                <ul>
                    <li><strong>Equal Distance Average Speed:</strong> If a body covers equal distances at speeds <code>a</code> and <code>b</code> respectively, the average speed is: <strong><code>Avg Speed = 2ab / (a + b)</code></strong></li>
                    <li><strong>Late/Early Distance Formula:</strong> If a person goes at speed <code>S₁</code> and is late by <code>T₁</code>, and goes at speed <code>S₂</code> and is early by <code>T₂</code>, the total distance is:
                        <br><strong><code>Distance = (S₁ &times; S₂) / |S₁ - S₂| &times; Time Difference</code></strong> (where Time Difference is the absolute gap between arrival statuses)
                    </li>
                </ul>`
            ]
        }
    ],
    mcqs: {
        easy: [
            {
                q: "A car is traveling at a speed of 72 km/hr. Convert this speed into meters per second (m/s).",
                options: ["15 m/s", "20 m/s", "25 m/s", "30 m/s"],
                answer: 1,
                explanation: "To convert km/hr to m/s, multiply by 5/18. Thus, 72 &times; (5/18) = 4 &times; 5 = 20 m/s."
            },
            {
                q: "If an athlete runs at a speed of 5 m/s, what is their speed in km/hr?",
                options: ["12 km/hr", "15 km/hr", "18 km/hr", "20 km/hr"],
                answer: 2,
                explanation: "To convert m/s to km/hr, multiply by 18/5. Thus, 5 &times; (18/5) = 18 km/hr."
            },
            {
                q: "A boy walks a distance of 15 km in 3 hours. Find his average speed.",
                options: ["5 km/hr", "3 km/hr", "45 km/hr", "4 km/hr"],
                answer: 0,
                explanation: "Speed = Distance &divide; Time = 15 km &divide; 3 hours = 5 km/hr."
            },
            {
                q: "How much distance will a cyclist cover in 4 hours if they maintain a constant speed of 12 km/hr?",
                options: ["3 km", "16 km", "48 km", "36 km"],
                answer: 2,
                explanation: "Distance = Speed &times; Time = 12 km/hr &times; 4 hours = 48 km."
            },
            {
                q: "If a boat's speed in still water is 10 km/hr and the stream's speed is 2 km/hr, find the downstream speed of the boat.",
                options: ["8 km/hr", "12 km/hr", "20 km/hr", "5 km/hr"],
                answer: 1,
                explanation: "Downstream Speed = Boat Speed + Stream Speed = 10 + 2 = 12 km/hr."
            }
        ],
        medium: [
            {
                q: "A commuter travels from town A to town B at a speed of 40 km/hr and returns along the same route at 60 km/hr. Find the average speed for the entire round trip.",
                options: ["50 km/hr", "48 km/hr", "45 km/hr", "52 km/hr"],
                answer: 1,
                explanation: "Since distances are equal, Average Speed = 2ab / (a + b) = (2 &times; 40 &times; 60) / (40 + 60) = 4800 / 100 = 48 km/hr."
            },
            {
                q: "If the speed of a vehicle increases by 25%, by what percentage does the travel time decrease?",
                options: ["25%", "20%", "16.67%", "33.33%"],
                answer: 1,
                explanation: "Using the formula: Time decrease % = (x / (100 + x)) &times; 100. Here x = 25, so (25 / 125) &times; 100 = (1/5) &times; 100 = 20%."
            },
            {
                q: "A boat's downstream speed is 16 km/hr and its upstream speed is 10 km/hr. Find the boat's speed in still water.",
                options: ["13 km/hr", "3 km/hr", "6 km/hr", "26 km/hr"],
                answer: 0,
                explanation: "Boat speed in still water = (Downstream + Upstream) / 2 = (16 + 10) / 2 = 26 / 2 = 13 km/hr."
            },
            {
                q: "Two runners start in opposite directions from the same spot at speeds of 3 km/hr and 4 km/hr. How far apart will they be after 2 hours?",
                options: ["2 km", "7 km", "14 km", "8 km"],
                answer: 2,
                explanation: "Since they move in opposite directions, relative speed = V₁ + V₂ = 3 + 4 = 7 km/hr. Distance in 2 hours = Relative Speed &times; Time = 7 &times; 2 = 14 km."
            },
            {
                q: "If a train decreases its speed by 20%, what is the percentage increase in the time taken to complete its route?",
                options: ["20%", "25%", "15%", "30%"],
                answer: 1,
                explanation: "Using the formula: Time increase % = (x / (100 - x)) &times; 100. Here x = 20, so (20 / 80) &times; 100 = (1/4) &times; 100 = 25%."
            }
        ],
        hard: [
            {
                q: "A man travels to his office. If he rides at 30 km/hr, he arrives 10 minutes late. If he rides at 40 km/hr, he arrives 5 minutes early. Find the distance to his office.",
                options: ["20 km", "30 km", "40 km", "15 km"],
                answer: 1,
                explanation: "Using the shortcut: Distance = (S₁ &times; S₂) / |S₁ - S₂| &times; Time Diff. Here S₁=30, S₂=40. Time difference is 10 min late + 5 min early = 15 minutes = 15/60 hours = 0.25 hours. Distance = (30 &times; 40) / 10 &times; 0.25 = 120 &times; 0.25 = 30 km."
            },
            {
                q: "A thief is spotted by a policeman at a distance of 200 meters. When the chase begins, both start running. If the thief runs at 10 km/hr and the policeman chases at 12 km/hr, how far will the thief have run before being caught?",
                options: ["800 m", "1000 m", "1200 m", "1500 m"],
                answer: 1,
                explanation: "Relative speed of policeman = 12 - 10 = 2 km/hr. Convert to m/s: 2 &times; 5/18 = 5/9 m/s. Time to catch = Initial distance / Relative speed = 200 / (5/9) = 360 seconds. Distance thief runs in 360 seconds = speed &times; time = (10 &times; 5/18) &times; 360 = 1000 meters (or 1 km)."
            },
            {
                q: "A boat covers 24 km upstream and 36 km downstream in 6 hours. It covers 36 km upstream and 24 km downstream in 6.5 hours. Find the stream speed.",
                options: ["4 km/hr", "2 km/hr", "3 km/hr", "1.5 km/hr"],
                answer: 1,
                explanation: "Let 1/U = x, 1/D = y. Then: 24x + 36y = 6 (Eq 1) and 36x + 24y = 6.5 (Eq 2). Solving this system yields x = 1/8 (Upstream speed U = 8 km/hr) and y = 1/12 (Downstream speed D = 12 km/hr). Stream speed = (D - U) / 2 = (12 - 8) / 2 = 2 km/hr."
            },
            {
                q: "Walking at 4/5 of his usual speed, a man reaches his destination 15 minutes late. What is his usual travel duration?",
                options: ["60 minutes", "75 minutes", "45 minutes", "50 minutes"],
                answer: 0,
                explanation: "New speed is 4/5 of usual, so new time taken is 5/4 of usual time T (since speed and time are inversely proportional). Late time: 5/4 T - T = 15 min => T/4 = 15 => Usual time T = 60 minutes."
            },
            {
                q: "A boat's speed in still water is 15 km/hr and the stream's speed is 3 km/hr. If it takes the boat 5 hours to travel to a point and return, find the distance of the point.",
                options: ["30 km", "36 km", "40 km", "45 km"],
                answer: 1,
                explanation: "Downstream speed = 15 + 3 = 18 km/hr. Upstream speed = 15 - 3 = 12 km/hr. Let distance be d. Time taken: d/18 + d/12 = 5 => (2d + 3d) / 36 = 5 => 5d / 36 = 5 => d = 36 km."
            }
        ]
    }
};
