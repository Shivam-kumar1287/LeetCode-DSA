class HeapCheck {

    // ---------- CHECK MIN HEAP ----------
    static int isMinHeap(int array[], int n) {
        for (int i = 0; i <= (n / 2) - 1; i++) {
            int l = 2 * i + 1;
            int r = 2 * i + 2;

            if (l < n && array[i] > array[l]) {
                return 0;
            }
            if (r < n && array[i] > array[r]) {
                return 0;
            }
        }
        return 1;
    }

    // ---------- CHECK MAX HEAP ----------
    static int isMaxHeap(int array[], int n) {
        for (int i = 0; i <= (n / 2) - 1; i++) {
            int l = 2 * i + 1;
            int r = 2 * i + 2;

            if (l < n && array[i] < array[l]) {
                return 0;
            }
            if (r < n && array[i] < array[r]) {
                return 0;
            }
        }
        return 1;
    }

    // ---------- MAIN (TESTING) ----------
    public static void main(String[] args) {

        int[] minHeap = {5, 10, 20, 30, 40};
        int[] maxHeap = {50, 30, 40, 10, 5};

        System.out.println("Is Min Heap: " + isMinHeap(minHeap, minHeap.length));
        System.out.println("Is Max Heap: " + isMaxHeap(maxHeap, maxHeap.length));
    }
}
