import java.math.BigInteger;
import java.util.*;

public class FibonacciPartialSum {

    private static final BigInteger[][] MATRIX = { { BigInteger.ONE, BigInteger.ONE },
            { BigInteger.ONE, BigInteger.ZERO } };

    public static BigInteger f(long n) {
        if (n == 0)
            return BigInteger.ZERO;
        if (n == 1)
            return BigInteger.ONE;
        return power(MATRIX, n - 1)[0][0];
    }

    private static BigInteger[][] power(BigInteger[][] m, long power) {
        if (power == 1)
            return m;
        BigInteger[][] sub = power(m, power / 2);
        if (power % 2 == 0) {
            return multiply(sub, sub);
        } else {
            return multiply(multiply(sub, sub), m);
        }
    }

    private static BigInteger[][] multiply(BigInteger[][] m1, BigInteger[][] m2) {
        return new BigInteger[][] {
                { m1[0][0].multiply(m2[0][0]).add(m1[0][1].multiply(m2[1][0])),
                        m1[0][0].multiply(m2[0][1]).add(m1[0][1].multiply(m2[1][1])) },
                { m1[1][0].multiply(m2[0][0]).add(m1[1][1].multiply(m2[1][0])),
                        m1[1][0].multiply(m2[0][1]).add(m1[1][1].multiply(m2[1][1])) }
        };
    }

    // Computes value of first Fibonacci numbers
    static BigInteger calculateSum(long n) {
        return f(n + 2).subtract(BigInteger.ONE);
    }

    private static long getFibonacciPartialSumNaive(long from, long to) {
        BigInteger sum1 = calculateSum(from - 1);
        BigInteger sum2 = calculateSum(to);

        BigInteger modulo = BigInteger.valueOf(10);
        return sum2.subtract(sum1).mod(modulo).intValue();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        long from = scanner.nextLong();
        long to = scanner.nextLong();
        System.out.println(getFibonacciPartialSumNaive(from, to));
    }
}
