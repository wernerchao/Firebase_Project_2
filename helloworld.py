"""print "Hello World!"
x = int(input("Please enter an integer:"))
if x < 0:
    x = 0;
    print('Negative changed to zero')
elif x == 0:
    print('Zero')
elif x== 1:
    print('Single')
else:
    print('More')"""

"""#a Fibonacci series function
def fib(n):
    a, b = 0, 1
    while a < n:
        print(a)
        a, b = b, a+b

fib(2000)"""

class Person:
    def __init__(anything, ha):
        anything.name = ha
    def sayHi(self):
        print 'Hello, my name is', self.name

Person('swaroop').sayHi()


