
def binet(n):
    sqrt5 = 5**0.5
    return int((((1 + sqrt5) ** n - (1 - sqrt5) ** n) / (2 ** n * sqrt5)))


def fibonacci_last_digit(n):
    fibRes = binet(n)

    # return fibRes % 10
    return fibRes


if __name__ == '__main__':
    n = int(input())
    print(fibonacci_last_digit(n))
