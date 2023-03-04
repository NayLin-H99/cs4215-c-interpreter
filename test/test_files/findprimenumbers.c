#include <stdbool.h>
#include <stdio.h>
#include <math.h>

#define MAX_NUMBER 100

void sieve_of_eratosthenes(bool primes[], int n) {
    for (int i = 2; i <= sqrt(n); i++) {
        if (primes[i]) {
            for (int j = i*i; j <= n; j += i) {
                primes[j] = false;
            }
        }
    }
}

int main() {
    bool primes[MAX_NUMBER + 1];

    // Initially, assume all numbers are prime
    for (int i = 0; i <= MAX_NUMBER; i++) {
        primes[i] = true;
    }

    // Mark non-primes
    sieve_of_eratosthenes(primes, MAX_NUMBER);

    // Print all prime numbers
    printf("Prime numbers up to %d:\n", MAX_NUMBER);
    for (int i = 2; i <= MAX_NUMBER; i++) {
        if (primes[i]) {
            printf("%d\n", i);
        }
    }

    return 0;
}
