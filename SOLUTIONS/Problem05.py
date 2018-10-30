"""
Problem05

How many round did i need to win (find the minimum solution)?
Once upon a time, there is a game with condition:
1) bet 1 point.
2) all in bet point is double.
"""

def problem05(n,k):
  if (n <=2 ):
    return 1
  return 1 + (problem05(n/2, k-1) if k>0 and n%2 == 0 else problem05(n-1, k))

print('Case#1:')
print(problem05(8, 0))
print('\nCase#2:')
print(problem05(10, 0))
print('\nCase#3:')
print(problem05(10, 2))
print('\nCase#4:')
print(problem05(18, 2))
print('\nCase#5:')
print(problem05(18, 5))

