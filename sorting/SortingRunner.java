import java.util.Arrays;

public class SortingRunner {
    public static void main(String[] args) {
        int[] original = {5, 2, 4, 1, 3};
        System.out.println("Original Array: " + Arrays.toString(original));
        System.out.println("--------------------------------");

        // 1. Bubble Sort
        int[] arr1 = original.clone();
        BubbleSort.bubbleSort(arr1);
        System.out.println("Bubble Sort:    " + Arrays.toString(arr1));

        // 2. Selection Sort
        int[] arr2 = original.clone();
        SelectionSort.selectionSort(arr2);
        System.out.println("Selection Sort: " + Arrays.toString(arr2));

        // 3. Insertion Sort
        int[] arr3 = original.clone();
        InsertionSort.insertionSort(arr3);
        System.out.println("Insertion Sort: " + Arrays.toString(arr3));

        // 4. Merge Sort
        int[] arr4 = original.clone();
        MergeSort.mergeSort(arr4, 0, arr4.length - 1);
        System.out.println("Merge Sort:     " + Arrays.toString(arr4));

        // 5. Quick Sort
        int[] arr5 = original.clone();
        QuickSort.quickSort(arr5, 0, arr5.length - 1);
        System.out.println("Quick Sort:     " + Arrays.toString(arr5));

        // 6. Heap Sort
        int[] arr6 = original.clone();
        HeapSort.heapSort(arr6);
        System.out.println("Heap Sort:      " + Arrays.toString(arr6));
    }
}
