public class BitManipulation {

    // 🔹 Get i-th bit
    public static int getIthBit(int n, int i) {
        return (n >> i) & 1;
    }

    // 🔹 Set i-th bit (make it 1)
    public static int setIthBit(int n, int i) {
        return n | (1 << i);
    }

    // 🔹 Clear i-th bit (make it 0)
    public static int clearIthBit(int n, int i) {
        return n & ~(1 << i);
    }

    // 🔹 Update i-th bit (set to 0 or 1)
    public static int updateIthBit(int n, int i, int newBit) {
        n = clearIthBit(n, i);
        return n | (newBit << i);
    }

    // 🔹 Clear last i bits
    public static int clearLastIBits(int n, int i) {
        return n & (~0 << i);
    }

    // 🔹 Clear bits in range [i, j]
    public static int clearRangeBits(int n, int i, int j) {
        int a = (~0 << (j + 1));
        int b = (1 << i) - 1;
        return n & (a | b);
    }

    // 🔹 Count set bits (Brian Kernighan’s Algorithm)
    public static int countSetBits(int n) {
        int count = 0;
        while (n > 0) {
            n = n & (n - 1); // remove last set bit
            count++;
        }
        return count;
    }

    // 🔹 Fast Exponentiation (Binary Exponentiation)
    public static long fastExpo(long a, long b) {
        long res = 1;
        while (b > 0) {
            if ((b & 1) == 1) {
                res = res * a;
            }
            a = a * a;
            b = b >> 1;
        }
        return res;
    }

    // 🔹 Modular Exponentiation
    public static long modExpo(long a, long b, long m) {
        long res = 1;
        a %= m;

        while (b > 0) {
            if ((b & 1) == 1) {
                res = (res * a) % m;
            }
            a = (a * a) % m;
            b = b >> 1;
        }
        return res;
    }

    public static int addWithoutPlus(int a, int b) {
        while (b != 0) {
            int carry = a & b; // carry contains common set bits of a and b
            a = a ^ b; // sum of bits of a and b where at least one of the bits is not set
            b = carry << 1; // carry is shifted by one so that adding it to a gives the required sum
        }
        return a;
    }
    // 🔥 MAIN METHOD (Test all)
    public static void main(String[] args) {
        int n = 10; // 1010

        System.out.println("Get 2nd bit: " + getIthBit(n, 2));
        System.out.println("Set 1st bit: " + setIthBit(n, 1));
        System.out.println("Clear 3rd bit: " + clearIthBit(n, 3));
        System.out.println("Update 1st bit to 1: " + updateIthBit(n, 1, 1));
        System.out.println("Clear last 2 bits: " + clearLastIBits(n, 2));
        System.out.println("Clear bits from 1 to 3: " + clearRangeBits(n, 1, 3));
        System.out.println("Count set bits: " + countSetBits(n));
        System.out.println("Fast Expo (2^10): " + fastExpo(2, 10));
        System.out.println("Mod Expo (2^10 % 1000): " + modExpo(2, 10, 1000));

        System.out.println("add 1 without + operator: " + addWithoutPlus(5, 3));
    }

}