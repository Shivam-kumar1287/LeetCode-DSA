# Sorting Algorithms Reference

This folder contains implementations and cheat sheets for major sorting algorithms used in DSA interviews.

---

## 1. Cheat Sheets & Comparisons

### Master Sorting Table

| Sorting Algorithm | Definition | Best Time | Average Time | Worst Time | Space Complexity | Stable | In-Place | Use Case |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Bubble Sort** | Repeatedly swaps adjacent elements if they are in the wrong order. | $O(n)$ | $O(n^2)$ | $O(n^2)$ | $O(1)$ | ✅ Yes | ✅ Yes | Small arrays, learning |
| **Selection Sort** | Repeatedly selects the minimum element and places it at the beginning. | $O(n^2)$ | $O(n^2)$ | $O(n^2)$ | $O(1)$ | ❌ No | ✅ Yes | Small datasets, few swaps |
| **Insertion Sort** | Builds the sorted array one element at a time by inserting elements into their correct position. | $O(n)$ | $O(n^2)$ | $O(n^2)$ | $O(1)$ | ✅ Yes | ✅ Yes | Nearly sorted arrays |
| **Merge Sort** | Divides the array into halves, sorts them recursively, and merges them. | $O(n \log n)$ | $O(n \log n)$ | $O(n \log n)$ | $O(n)$ | ✅ Yes | ❌ No | Large datasets, linked lists |
| **Quick Sort** | Chooses a pivot and partitions elements around it recursively. | $O(n \log n)$ | $O(n \log n)$ | $O(n^2)$ | $O(\log n)$ | ❌ No | ✅ Yes | Fastest general-purpose sorting |
| **Heap Sort** | Uses a binary heap to repeatedly extract the maximum/minimum element. | $O(n \log n)$ | $O(n \log n)$ | $O(n \log n)$ | $O(1)$ | ❌ No | ✅ Yes | Memory-efficient sorting |
| **Counting Sort** | Counts occurrences of each value and reconstructs the sorted array. | $O(n + k)$ | $O(n + k)$ | $O(n + k)$ | $O(k)$ | ✅ Yes | ❌ No | Small integer ranges |
| **Radix Sort** | Sorts numbers digit by digit using a stable sorting algorithm. | $O(d(n + k))$ | $O(d(n + k))$ | $O(d(n + k))$ | $O(n + k)$ | ✅ Yes | ❌ No | Large integers, IDs |
| **Bucket Sort** | Distributes elements into buckets, sorts each bucket, then combines them. | $O(n + k)$ | $O(n + k)$ | $O(n^2)$ | $O(n + k)$ | Depends | ❌ No | Uniformly distributed data |
| **Shell Sort** | Improves insertion sort by comparing elements far apart first. | $O(n \log n)$ (depends) | $\approx O(n^{1.5})$ | $O(n^2)$ | $O(1)$ | ❌ No | ✅ Yes | Medium-sized arrays |

### Quick Comparison

| Algorithm | Stable | In-Place | Recursive | Adaptive |
| :--- | :--- | :--- | :--- | :--- |
| **Bubble** | ✅ | ✅ | ❌ | ✅ |
| **Selection** | ❌ | ✅ | ❌ | ❌ |
| **Insertion** | ✅ | ✅ | ❌ | ✅ |
| **Merge** | ✅ | ❌ | ✅ | ❌ |
| **Quick** | ❌ | ✅ | ✅ | ❌ |
| **Heap** | ❌ | ✅ | ❌ | ❌ |
| **Counting** | ✅ | ❌ | ❌ | ❌ |
| **Radix** | ✅ | ❌ | ❌ | ❌ |
| **Bucket** | Depends | ❌ | Depends | Depends |
| **Shell** | ❌ | ✅ | ❌ | Partially |

### Remember As Cheat Sheet

| Sorting | Remember As |
| :--- | :--- |
| **Bubble** | **Swap adjacent elements** |
| **Selection** | **Find minimum each pass** |
| **Insertion** | **Insert like playing cards** |
| **Merge** | **Divide → Sort → Merge** |
| **Quick** | **Pivot → Partition → Recurse** |
| **Heap** | **Build heap → Delete root repeatedly** |
| **Counting** | **Count frequencies** |
| **Radix** | **Sort digit by digit** |
| **Bucket** | **Group into buckets** |
| **Shell** | **Insertion sort with gaps** |

---

## 2. Core Sorting Algorithms & Implementation

### Running All Algorithms
To compile and run all implementations simultaneously to verify correctness, you can use the custom runner class:
*   **Runner Code:** [SortingRunner.java](file:///c:/Users/Shivam/OneDrive/Desktop/MYFiles/leetcode/sorting/SortingRunner.java)
*   **Compile & Execute Command:**
    ```bash
    javac *.java && java SortingRunner
    ```

---

### 1. Bubble Sort
* **Idea:** Compare adjacent elements and swap if they are in the wrong order.
* **Code:** [BubbleSort.java](file:///c:/Users/Shivam/OneDrive/Desktop/MYFiles/leetcode/sorting/BubbleSort.java)
```java
public class BubbleSort {

    static void bubbleSort(int[] arr) {
        int n = arr.length;

        for (int i = 0; i < n - 1; i++) {
            boolean swapped = false;

            for (int j = 0; j < n - i - 1; j++) {

                if (arr[j] > arr[j + 1]) {

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
}
```
* **Time Complexity:** Best $O(n)$, Average/Worst $O(n^2)$

---

### 2. Selection Sort
* **Idea:** Find the smallest element and place it at the beginning.
* **Code:** [SelectionSort.java](file:///c:/Users/Shivam/OneDrive/Desktop/MYFiles/leetcode/sorting/SelectionSort.java)
```java
public class SelectionSort {

    static void selectionSort(int[] arr) {

        int n = arr.length;

        for (int i = 0; i < n - 1; i++) {

            int minIndex = i;

            for (int j = i + 1; j < n; j++) {

                if (arr[j] < arr[minIndex]) {
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
}
```
* **Time Complexity:** $O(n^2)$

---

### 3. Insertion Sort
* **Idea:** Insert each element into its correct position in the sorted portion.
* **Code:** [InsertionSort.java](file:///c:/Users/Shivam/OneDrive/Desktop/MYFiles/leetcode/sorting/InsertionSort.java)
```java
public class InsertionSort {

    static void insertionSort(int[] arr) {

        int n = arr.length;

        for (int i = 1; i < n; i++) {

            int key = arr[i];
            int j = i - 1;

            while (j >= 0 && arr[j] > key) {

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
}
```
* **Time Complexity:** Best $O(n)$, Average/Worst $O(n^2)$

---

### 4. Merge Sort
* **Idea:** Divide the array into halves, sort each half, then merge.
* **Code:** [MergeSort.java](file:///c:/Users/Shivam/OneDrive/Desktop/MYFiles/leetcode/sorting/MergeSort.java)
```java
public class MergeSort {

    static void merge(int[] arr, int left, int mid, int right) {

        int n1 = mid - left + 1;
        int n2 = right - mid;

        int[] L = new int[n1];
        int[] R = new int[n2];

        for (int i = 0; i < n1; i++)
            L[i] = arr[left + i];

        for (int j = 0; j < n2; j++)
            R[j] = arr[mid + 1 + j];

        int i = 0, j = 0, k = left;

        while (i < n1 && j < n2) {

            if (L[i] <= R[j])
                arr[k++] = L[i++];
            else
                arr[k++] = R[j++];
        }

        while (i < n1)
            arr[k++] = L[i++];

        while (j < n2)
            arr[k++] = R[j++];
    }

    static void mergeSort(int[] arr, int left, int right) {

        if (left < right) {

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
}
```
* **Time Complexity:** $O(n \log n)$

---

### 5. Quick Sort
* **Idea:** Choose a pivot and place smaller elements on the left and larger on the right.
* **Code:** [QuickSort.java](file:///c:/Users/Shivam/OneDrive/Desktop/MYFiles/leetcode/sorting/QuickSort.java)
```java
public class QuickSort {

    static int partition(int[] arr, int low, int high) {

        int pivot = arr[high];
        int i = low - 1;

        for (int j = low; j < high; j++) {

            if (arr[j] < pivot) {

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

        if (low < high) {

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
}
```
* **Time Complexity:** Average $O(n \log n)$, Worst $O(n^2)$

---

### 6. Heap Sort
* **Idea:** Build a max heap and repeatedly move the largest element to the end.
* **Code:** [HeapSort.java](file:///c:/Users/Shivam/OneDrive/Desktop/MYFiles/leetcode/sorting/HeapSort.java)
```java
public class HeapSort {

    static void heapify(int[] arr, int n, int i) {

        int largest = i;
        int left = 2 * i + 1;
        int right = 2 * i + 2;

        if (left < n && arr[left] > arr[largest])
            largest = left;

        if (right < n && arr[right] > arr[largest])
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
        for (int i = n / 2 - 1; i >= 0; i--)
            heapify(arr, n, i);

        // Extract Elements
        for (int i = n - 1; i > 0; i--) {

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
}
```
* **Time Complexity:** $O(n \log n)$

---

## 3. Interview Revision Table

| Algorithm | Best TC | Average TC | Worst TC | Space | Stable | In-Place |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Bubble Sort** | $O(n)$ | $O(n^2)$ | $O(n^2)$ | $O(1)$ | ✅ | ✅ |
| **Selection Sort** | $O(n^2)$ | $O(n^2)$ | $O(n^2)$ | $O(1)$ | ❌ | ✅ |
| **Insertion Sort** | $O(n)$ | $O(n^2)$ | $O(n^2)$ | $O(1)$ | ✅ | ✅ |
| **Merge Sort** | $O(n \log n)$ | $O(n \log n)$ | $O(n \log n)$ | $O(n)$ | ✅ | ❌ |
| **Quick Sort** | $O(n \log n)$ | $O(n \log n)$ | $O(n^2)$ | $O(\log n)$ | ❌ | ✅ |
| **Heap Sort** | $O(n \log n)$ | $O(n \log n)$ | $O(n \log n)$ | $O(1)$ | ❌ | ✅ |

These six algorithms are the ones most frequently covered in DSA interviews at companies ranging from product-based firms to service-based companies.
