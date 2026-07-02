window.TopicsData = window.TopicsData || {};
window.TopicsData["Sorting"] = {
    title: "Sorting Algorithms",
    sections: [
        {
            heading: "Sorting Complexity Cheat Sheet",
            items: [
                `<strong>Summary of General Purpose & Advanced Sorting Algorithms:</strong><br>
                <div style="overflow-x: auto; margin: 10px 0;">
                    <table class="dsa-table" style="width:100%; border-collapse: collapse; font-size: 0.85rem; text-align: left; min-width: 800px;">
                        <thead>
                            <tr style="border-bottom: 2px solid var(--glass-border);">
                                <th style="padding: 10px; font-weight: 700; color: #60a5fa;">Algorithm</th>
                                <th style="padding: 10px; font-weight: 700; color: #60a5fa;">Definition</th>
                                <th style="padding: 10px; font-weight: 700; color: #60a5fa;">Best Time</th>
                                <th style="padding: 10px; font-weight: 700; color: #60a5fa;">Avg Time</th>
                                <th style="padding: 10px; font-weight: 700; color: #60a5fa;">Worst Time</th>
                                <th style="padding: 10px; font-weight: 700; color: #60a5fa;">Space</th>
                                <th style="padding: 10px; font-weight: 700; color: #60a5fa;">Stable</th>
                                <th style="padding: 10px; font-weight: 700; color: #60a5fa;">In-Place</th>
                                <th style="padding: 10px; font-weight: 700; color: #60a5fa;">Use Case</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                <td style="padding: 10px; font-weight: 600;">Bubble Sort</td>
                                <td style="padding: 10px;">Repeatedly swaps adjacent elements if they are in the wrong order.</td>
                                <td style="padding: 10px; color: #10b981; font-weight: 600;">O(n)</td>
                                <td style="padding: 10px; color: #f59e0b;">O(n²)</td>
                                <td style="padding: 10px; color: #ef4444;">O(n²)</td>
                                <td style="padding: 10px;">O(1)</td>
                                <td style="padding: 10px; color: #10b981;">✅ Yes</td>
                                <td style="padding: 10px; color: #10b981;">✅ Yes</td>
                                <td style="padding: 10px; color: var(--text-secondary);">Small arrays, learning</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                <td style="padding: 10px; font-weight: 600;">Selection Sort</td>
                                <td style="padding: 10px;">Repeatedly selects the minimum element and places it at the beginning.</td>
                                <td style="padding: 10px; color: #ef4444;">O(n²)</td>
                                <td style="padding: 10px; color: #ef4444;">O(n²)</td>
                                <td style="padding: 10px; color: #ef4444;">O(n²)</td>
                                <td style="padding: 10px;">O(1)</td>
                                <td style="padding: 10px; color: #ef4444;">❌ No</td>
                                <td style="padding: 10px; color: #10b981;">✅ Yes</td>
                                <td style="padding: 10px; color: var(--text-secondary);">Small datasets, few swaps</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                <td style="padding: 10px; font-weight: 600;">Insertion Sort</td>
                                <td style="padding: 10px;">Builds the sorted array one element at a time by inserting elements.</td>
                                <td style="padding: 10px; color: #10b981; font-weight: 600;">O(n)</td>
                                <td style="padding: 10px; color: #f59e0b;">O(n²)</td>
                                <td style="padding: 10px; color: #ef4444;">O(n²)</td>
                                <td style="padding: 10px;">O(1)</td>
                                <td style="padding: 10px; color: #10b981;">✅ Yes</td>
                                <td style="padding: 10px; color: #10b981;">✅ Yes</td>
                                <td style="padding: 10px; color: var(--text-secondary);">Nearly sorted arrays</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                <td style="padding: 10px; font-weight: 600;">Merge Sort</td>
                                <td style="padding: 10px;">Divides the array into halves, sorts them, and merges them.</td>
                                <td style="padding: 10px; color: #10b981; font-weight: 600;">O(n log n)</td>
                                <td style="padding: 10px; color: #10b981; font-weight: 600;">O(n log n)</td>
                                <td style="padding: 10px; color: #10b981; font-weight: 600;">O(n log n)</td>
                                <td style="padding: 10px; color: #f59e0b;">O(n)</td>
                                <td style="padding: 10px; color: #10b981;">✅ Yes</td>
                                <td style="padding: 10px; color: #ef4444;">❌ No</td>
                                <td style="padding: 10px; color: var(--text-secondary);">Large datasets, linked lists</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                <td style="padding: 10px; font-weight: 600;">Quick Sort</td>
                                <td style="padding: 10px;">Chooses a pivot and partitions elements around it recursively.</td>
                                <td style="padding: 10px; color: #10b981; font-weight: 600;">O(n log n)</td>
                                <td style="padding: 10px; color: #10b981; font-weight: 600;">O(n log n)</td>
                                <td style="padding: 10px; color: #ef4444;">O(n²)</td>
                                <td style="padding: 10px; color: #60a5fa;">O(log n)</td>
                                <td style="padding: 10px; color: #ef4444;">❌ No</td>
                                <td style="padding: 10px; color: #10b981;">✅ Yes</td>
                                <td style="padding: 10px; color: var(--text-secondary);">Fastest general-purpose sorting</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                <td style="padding: 10px; font-weight: 600;">Heap Sort</td>
                                <td style="padding: 10px;">Uses a binary heap to repeatedly extract the max/min element.</td>
                                <td style="padding: 10px; color: #10b981; font-weight: 600;">O(n log n)</td>
                                <td style="padding: 10px; color: #10b981; font-weight: 600;">O(n log n)</td>
                                <td style="padding: 10px; color: #10b981; font-weight: 600;">O(n log n)</td>
                                <td style="padding: 10px;">O(1)</td>
                                <td style="padding: 10px; color: #ef4444;">❌ No</td>
                                <td style="padding: 10px; color: #10b981;">✅ Yes</td>
                                <td style="padding: 10px; color: var(--text-secondary);">Memory-efficient sorting</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                <td style="padding: 10px; font-weight: 600;">Counting Sort</td>
                                <td style="padding: 10px;">Counts occurrences of each value and reconstructs the array.</td>
                                <td style="padding: 10px; color: #10b981; font-weight: 600;">O(n + k)</td>
                                <td style="padding: 10px; color: #10b981; font-weight: 600;">O(n + k)</td>
                                <td style="padding: 10px; color: #10b981; font-weight: 600;">O(n + k)</td>
                                <td style="padding: 10px; color: #f59e0b;">O(k)</td>
                                <td style="padding: 10px; color: #10b981;">✅ Yes</td>
                                <td style="padding: 10px; color: #ef4444;">❌ No</td>
                                <td style="padding: 10px; color: var(--text-secondary);">Small integer ranges</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                <td style="padding: 10px; font-weight: 600;">Radix Sort</td>
                                <td style="padding: 10px;">Sorts numbers digit by digit using a stable sorting algorithm.</td>
                                <td style="padding: 10px; color: #10b981; font-weight: 600;">O(d(n + k))</td>
                                <td style="padding: 10px; color: #10b981; font-weight: 600;">O(d(n + k))</td>
                                <td style="padding: 10px; color: #10b981; font-weight: 600;">O(d(n + k))</td>
                                <td style="padding: 10px; color: #f59e0b;">O(n + k)</td>
                                <td style="padding: 10px; color: #10b981;">✅ Yes</td>
                                <td style="padding: 10px; color: #ef4444;">❌ No</td>
                                <td style="padding: 10px; color: var(--text-secondary);">Large integers, IDs</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                <td style="padding: 10px; font-weight: 600;">Bucket Sort</td>
                                <td style="padding: 10px;">Distributes elements into buckets, sorts them, and combines.</td>
                                <td style="padding: 10px; color: #10b981; font-weight: 600;">O(n + k)</td>
                                <td style="padding: 10px; color: #10b981; font-weight: 600;">O(n + k)</td>
                                <td style="padding: 10px; color: #ef4444;">O(n²)</td>
                                <td style="padding: 10px; color: #f59e0b;">O(n + k)</td>
                                <td style="padding: 10px; color: #60a5fa;">Depends</td>
                                <td style="padding: 10px; color: #ef4444;">❌ No</td>
                                <td style="padding: 10px; color: var(--text-secondary);">Uniformly distributed data</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                <td style="padding: 10px; font-weight: 600;">Shell Sort</td>
                                <td style="padding: 10px;">Improves insertion sort by comparing elements far apart first.</td>
                                <td style="padding: 10px; color: #60a5fa;">O(n log n)</td>
                                <td style="padding: 10px; color: #f59e0b;">≈ O(n^1.5)</td>
                                <td style="padding: 10px; color: #ef4444;">O(n²)</td>
                                <td style="padding: 10px;">O(1)</td>
                                <td style="padding: 10px; color: #ef4444;">❌ No</td>
                                <td style="padding: 10px; color: #10b981;">✅ Yes</td>
                                <td style="padding: 10px; color: var(--text-secondary);">Medium-sized arrays</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            ]
        },
        {
            heading: "Quick Comparison Matrix",
            items: [
                `<strong>Comparison of Stability, In-Place, Recursion, and Adaptiveness:</strong><br>
                <div style="overflow-x: auto; margin: 10px 0;">
                    <table class="dsa-table" style="width:100%; border-collapse: collapse; font-size: 0.9rem; text-align: left; min-width: 500px;">
                        <thead>
                            <tr style="border-bottom: 2px solid var(--glass-border);">
                                <th style="padding: 10px; font-weight: 700; color: #60a5fa;">Algorithm</th>
                                <th style="padding: 10px; font-weight: 700; color: #60a5fa;">Stable</th>
                                <th style="padding: 10px; font-weight: 700; color: #60a5fa;">In-Place</th>
                                <th style="padding: 10px; font-weight: 700; color: #60a5fa;">Recursive</th>
                                <th style="padding: 10px; font-weight: 700; color: #60a5fa;">Adaptive</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                <td style="padding: 10px; font-weight: 600;">Bubble</td>
                                <td style="padding: 10px; color: #10b981;">✅ Yes</td>
                                <td style="padding: 10px; color: #10b981;">✅ Yes</td>
                                <td style="padding: 10px; color: #ef4444;">❌ No</td>
                                <td style="padding: 10px; color: #10b981;">✅ Yes</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                <td style="padding: 10px; font-weight: 600;">Selection</td>
                                <td style="padding: 10px; color: #ef4444;">❌ No</td>
                                <td style="padding: 10px; color: #10b981;">✅ Yes</td>
                                <td style="padding: 10px; color: #ef4444;">❌ No</td>
                                <td style="padding: 10px; color: #ef4444;">❌ No</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                <td style="padding: 10px; font-weight: 600;">Insertion</td>
                                <td style="padding: 10px; color: #10b981;">✅ Yes</td>
                                <td style="padding: 10px; color: #10b981;">✅ Yes</td>
                                <td style="padding: 10px; color: #ef4444;">❌ No</td>
                                <td style="padding: 10px; color: #10b981;">✅ Yes</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                <td style="padding: 10px; font-weight: 600;">Merge</td>
                                <td style="padding: 10px; color: #10b981;">✅ Yes</td>
                                <td style="padding: 10px; color: #ef4444;">❌ No</td>
                                <td style="padding: 10px; color: #10b981;">✅ Yes</td>
                                <td style="padding: 10px; color: #ef4444;">❌ No</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                <td style="padding: 10px; font-weight: 600;">Quick</td>
                                <td style="padding: 10px; color: #ef4444;">❌ No</td>
                                <td style="padding: 10px; color: #10b981;">✅ Yes</td>
                                <td style="padding: 10px; color: #10b981;">✅ Yes</td>
                                <td style="padding: 10px; color: #ef4444;">❌ No</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                <td style="padding: 10px; font-weight: 600;">Heap</td>
                                <td style="padding: 10px; color: #ef4444;">❌ No</td>
                                <td style="padding: 10px; color: #10b981;">✅ Yes</td>
                                <td style="padding: 10px; color: #ef4444;">❌ No</td>
                                <td style="padding: 10px; color: #ef4444;">❌ No</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                <td style="padding: 10px; font-weight: 600;">Counting</td>
                                <td style="padding: 10px; color: #10b981;">✅ Yes</td>
                                <td style="padding: 10px; color: #ef4444;">❌ No</td>
                                <td style="padding: 10px; color: #ef4444;">❌ No</td>
                                <td style="padding: 10px; color: #ef4444;">❌ No</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                <td style="padding: 10px; font-weight: 600;">Radix</td>
                                <td style="padding: 10px; color: #10b981;">✅ Yes</td>
                                <td style="padding: 10px; color: #ef4444;">❌ No</td>
                                <td style="padding: 10px; color: #ef4444;">❌ No</td>
                                <td style="padding: 10px; color: #ef4444;">❌ No</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                <td style="padding: 10px; font-weight: 600;">Bucket</td>
                                <td style="padding: 10px; color: #60a5fa;">Depends</td>
                                <td style="padding: 10px; color: #ef4444;">❌ No</td>
                                <td style="padding: 10px; color: #60a5fa;">Depends</td>
                                <td style="padding: 10px; color: #60a5fa;">Depends</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                <td style="padding: 10px; font-weight: 600;">Shell</td>
                                <td style="padding: 10px; color: #ef4444;">❌ No</td>
                                <td style="padding: 10px; color: #10b981;">✅ Yes</td>
                                <td style="padding: 10px; color: #ef4444;">❌ No</td>
                                <td style="padding: 10px; color: #60a5fa;">Partially</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            ]
        },
        {
            heading: "Mental Maps & Mnemonics",
            items: [
                `<strong>Quick Memory Keys:</strong><br>
                <div style="overflow-x: auto; margin: 10px 0;">
                    <table class="dsa-table" style="width:100%; border-collapse: collapse; font-size: 0.95rem; text-align: left; min-width: 400px;">
                        <thead>
                            <tr style="border-bottom: 2px solid var(--glass-border);">
                                <th style="padding: 10px; font-weight: 700; color: #60a5fa; width: 30%;">Algorithm</th>
                                <th style="padding: 10px; font-weight: 700; color: #60a5fa; width: 70%;">Remember As</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 10px; font-weight: 600;">Bubble</td><td style="padding: 10px;"><strong>Swap adjacent elements</strong></td></tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 10px; font-weight: 600;">Selection</td><td style="padding: 10px;"><strong>Find minimum each pass</strong></td></tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 10px; font-weight: 600;">Insertion</td><td style="padding: 10px;"><strong>Insert like playing cards</strong></td></tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 10px; font-weight: 600;">Merge</td><td style="padding: 10px;"><strong>Divide → Sort → Merge</strong></td></tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 10px; font-weight: 600;">Quick</td><td style="padding: 10px;"><strong>Pivot → Partition → Recurse</strong></td></tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 10px; font-weight: 600;">Heap</td><td style="padding: 10px;"><strong>Build heap → Delete root repeatedly</strong></td></tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 10px; font-weight: 600;">Counting</td><td style="padding: 10px;"><strong>Count frequencies</strong></td></tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 10px; font-weight: 600;">Radix</td><td style="padding: 10px;"><strong>Sort digit by digit</strong></td></tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 10px; font-weight: 600;">Bucket</td><td style="padding: 10px;"><strong>Group into buckets</strong></td></tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 10px; font-weight: 600;">Shell</td><td style="padding: 10px;"><strong>Insertion sort with gaps</strong></td></tr>
                        </tbody>
                    </table>
                </div>`
            ]
        },
        {
            heading: "Interview Revision Table",
            items: [
                `<strong>Comparison Table for Core Interview Sorting Algorithms:</strong><br>
                <div style="overflow-x: auto; margin: 10px 0;">
                    <table class="dsa-table" style="width:100%; border-collapse: collapse; font-size: 0.9rem; text-align: left; min-width: 600px;">
                        <thead>
                            <tr style="border-bottom: 2px solid var(--glass-border);">
                                <th style="padding: 10px; font-weight: 700; color: #60a5fa;">Algorithm</th>
                                <th style="padding: 10px; font-weight: 700; color: #60a5fa;">Best TC</th>
                                <th style="padding: 10px; font-weight: 700; color: #60a5fa;">Average TC</th>
                                <th style="padding: 10px; font-weight: 700; color: #60a5fa;">Worst TC</th>
                                <th style="padding: 10px; font-weight: 700; color: #60a5fa;">Space</th>
                                <th style="padding: 10px; font-weight: 700; color: #60a5fa;">Stable</th>
                                <th style="padding: 10px; font-weight: 700; color: #60a5fa;">In-Place</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                <td style="padding: 10px; font-weight: 600;">Bubble Sort</td>
                                <td style="padding: 10px; color: #10b981; font-weight: 600;">O(n)</td>
                                <td style="padding: 10px; color: #f59e0b;">O(n²)</td>
                                <td style="padding: 10px; color: #ef4444;">O(n²)</td>
                                <td style="padding: 10px;">O(1)</td>
                                <td style="padding: 10px; color: #10b981;">✅</td>
                                <td style="padding: 10px; color: #10b981;">✅</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                <td style="padding: 10px; font-weight: 600;">Selection Sort</td>
                                <td style="padding: 10px; color: #ef4444;">O(n²)</td>
                                <td style="padding: 10px; color: #ef4444;">O(n²)</td>
                                <td style="padding: 10px; color: #ef4444;">O(n²)</td>
                                <td style="padding: 10px;">O(1)</td>
                                <td style="padding: 10px; color: #ef4444;">❌</td>
                                <td style="padding: 10px; color: #10b981;">✅</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                <td style="padding: 10px; font-weight: 600;">Insertion Sort</td>
                                <td style="padding: 10px; color: #10b981; font-weight: 600;">O(n)</td>
                                <td style="padding: 10px; color: #f59e0b;">O(n²)</td>
                                <td style="padding: 10px; color: #ef4444;">O(n²)</td>
                                <td style="padding: 10px;">O(1)</td>
                                <td style="padding: 10px; color: #10b981;">✅</td>
                                <td style="padding: 10px; color: #10b981;">✅</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                <td style="padding: 10px; font-weight: 600;">Merge Sort</td>
                                <td style="padding: 10px; color: #10b981; font-weight: 600;">O(n log n)</td>
                                <td style="padding: 10px; color: #10b981; font-weight: 600;">O(n log n)</td>
                                <td style="padding: 10px; color: #10b981; font-weight: 600;">O(n log n)</td>
                                <td style="padding: 10px; color: #f59e0b;">O(n)</td>
                                <td style="padding: 10px; color: #10b981;">✅</td>
                                <td style="padding: 10px; color: #ef4444;">❌</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                <td style="padding: 10px; font-weight: 600;">Quick Sort</td>
                                <td style="padding: 10px; color: #10b981; font-weight: 600;">O(n log n)</td>
                                <td style="padding: 10px; color: #10b981; font-weight: 600;">O(n log n)</td>
                                <td style="padding: 10px; color: #ef4444;">O(n²)</td>
                                <td style="padding: 10px; color: #60a5fa;">O(log n)</td>
                                <td style="padding: 10px; color: #ef4444;">❌</td>
                                <td style="padding: 10px; color: #10b981;">✅</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                <td style="padding: 10px; font-weight: 600;">Heap Sort</td>
                                <td style="padding: 10px; color: #10b981; font-weight: 600;">O(n log n)</td>
                                <td style="padding: 10px; color: #10b981; font-weight: 600;">O(n log n)</td>
                                <td style="padding: 10px; color: #10b981; font-weight: 600;">O(n log n)</td>
                                <td style="padding: 10px;">O(1)</td>
                                <td style="padding: 10px; color: #ef4444;">❌</td>
                                <td style="padding: 10px; color: #10b981;">✅</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            ]
        },
        {
            heading: "Code",
            items: [
                `<strong>1. Bubble Sort</strong><br>
                <em>Idea:</em> Compare adjacent elements and swap if they are in the wrong order.
                <pre><code>public class BubbleSort {

    static void bubbleSort(int[] arr) {
        int n = arr.length;

        for (int i = 0; i &lt; n - 1; i++) {
            boolean swapped = false;

            for (int j = 0; j &lt; n - i - 1; j++) {

                if (arr[j] &gt; arr[j + 1]) {

                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;

                    swapped = true;
                }
            }

            if (!swapped)
                break;
        }
    }

    public static void main(String[] args) {

        int[] arr = {5, 2, 4, 1, 3};

        bubbleSort(arr);

        for (int x : arr)
            System.out.print(x + " ");
    }
}</code></pre>
                Time Complexity: Best O(n), Average/Worst O(n²)`,

                `<strong>2. Selection Sort</strong><br>
                <em>Idea:</em> Find the smallest element and place it at the beginning.
                <pre><code>public class SelectionSort {

    static void selectionSort(int[] arr) {

        int n = arr.length;

        for (int i = 0; i &lt; n - 1; i++) {

            int minIndex = i;

            for (int j = i + 1; j &lt; n; j++) {

                if (arr[j] &lt; arr[minIndex]) {
                    minIndex = j;
                }
            }

            int temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    public static void main(String[] args) {

        int[] arr = {5, 2, 4, 1, 3};

        selectionSort(arr);

        for (int x : arr)
            System.out.print(x + " ");
    }
}</code></pre>
                Time Complexity: O(n²)`,

                `<strong>3. Insertion Sort</strong><br>
                <em>Idea:</em> Insert each element into its correct position in the sorted portion.
                <pre><code>public class InsertionSort {

    static void insertionSort(int[] arr) {

        int n = arr.length;

        for (int i = 1; i &lt; n; i++) {

            int key = arr[i];
            int j = i - 1;

            while (j &gt;= 0 &amp;&amp; arr[j] &gt; key) {

                arr[j + 1] = arr[j];
                j--;
            }

            arr[j + 1] = key;
        }
    }

    public static void main(String[] args) {

        int[] arr = {5, 2, 4, 1, 3};

        insertionSort(arr);

        for (int x : arr)
            System.out.print(x + " ");
    }
}</code></pre>
                Time Complexity: Best O(n), Average/Worst O(n²)`,

                `<strong>4. Merge Sort</strong><br>
                <em>Idea:</em> Divide the array into halves, sort each half, then merge.
                <pre><code>public class MergeSort {

    static void merge(int[] arr, int left, int mid, int right) {

        int n1 = mid - left + 1;
        int n2 = right - mid;

        int[] L = new int[n1];
        int[] R = new int[n2];

        for (int i = 0; i &lt; n1; i++)
            L[i] = arr[left + i];

        for (int j = 0; j &lt; n2; j++)
            R[j] = arr[mid + 1 + j];

        int i = 0, j = 0, k = left;

        while (i &lt; n1 &amp;&amp; j &lt; n2) {

            if (L[i] &lt;= R[j])
                arr[k++] = L[i++];
            else
                arr[k++] = R[j++];
        }

        while (i &lt; n1)
            arr[k++] = L[i++];

        while (j &lt; n2)
            arr[k++] = R[j++];
    }

    static void mergeSort(int[] arr, int left, int right) {

        if (left &lt; right) {

            int mid = left + (right - left) / 2;

            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);

            merge(arr, left, mid, right);
        }
    }

    public static void main(String[] args) {

        int[] arr = {5, 2, 4, 1, 3};

        mergeSort(arr, 0, arr.length - 1);

        for (int x : arr)
            System.out.print(x + " ");
    }
}</code></pre>
                Time Complexity: O(n log n)`,

                `<strong>5. Quick Sort</strong><br>
                <em>Idea:</em> Choose a pivot and place smaller elements on the left and larger on the right.
                <pre><code>public class QuickSort {

    static int partition(int[] arr, int low, int high) {

        int pivot = arr[high];
        int i = low - 1;

        for (int j = low; j &lt; high; j++) {

            if (arr[j] &lt; pivot) {

                i++;

                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;

        return i + 1;
    }

    static void quickSort(int[] arr, int low, int high) {

        if (low &lt; high) {

            int pi = partition(arr, low, high);

            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

    public static void main(String[] args) {

        int[] arr = {5, 2, 4, 1, 3};

        quickSort(arr, 0, arr.length - 1);

        for (int x : arr)
            System.out.print(x + " ");
    }
}</code></pre>
                Time Complexity: Average O(n log n), Worst O(n²)`,

                `<strong>6. Heap Sort</strong><br>
                <em>Idea:</em> Build a max heap and repeatedly move the largest element to the end.
                <pre><code>public class HeapSort {

    static void heapify(int[] arr, int n, int i) {

        int largest = i;
        int left = 2 * i + 1;
        int right = 2 * i + 2;

        if (left &lt; n &amp;&amp; arr[left] &gt; arr[largest])
            largest = left;

        if (right &lt; n &amp;&amp; arr[right] &gt; arr[largest])
            largest = right;

        if (largest != i) {

            int temp = arr[i];
            arr[i] = arr[largest];
            arr[largest] = temp;

            heapify(arr, n, largest);
        }
    }

    static void heapSort(int[] arr) {

        int n = arr.length;

        // Build Max Heap
        for (int i = n / 2 - 1; i &gt;= 0; i--)
            heapify(arr, n, i);

        // Extract Elements
        for (int i = n - 1; i &gt; 0; i--) {

            int temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;

            heapify(arr, i, 0);
        }
    }

    public static void main(String[] args) {

        int[] arr = {5, 2, 4, 1, 3};

        heapSort(arr);

        for (int x : arr)
            System.out.print(x + " ");
    }
}</code></pre>
                Time Complexity: O(n log n)`
            ]
        }
    ],
    mcqs: {
        easy: [],
        medium: [],
        hard: []
    }
};
