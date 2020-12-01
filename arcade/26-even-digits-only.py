""" 26: EVEN DIGITS ONLY
Check if all digits of the given integer are even.

Example
For n = 248622, the output should be
evenDigitsOnly(n) = true;
For n = 642386, the output should be
evenDigitsOnly(n) = false.

Input/Output
[execution time limit] 4 seconds (py3)

[input] integer n

Guaranteed constraints:
1 ≤ n ≤ 109.

[output] boolean

true if all digits of n are even, false otherwise.
"""


def evenDigitsOnly(n):
    return all(int(digit) % 2 == 0 for digit in str(n))


# Older Solution
def evenDigitsOnly(n):
    num = n
    while num >= 1:
        ones_digit = num % 10
        if ones_digit % 2 != 0:
            return False
        num = math.floor(num / 10)
    
    return True
