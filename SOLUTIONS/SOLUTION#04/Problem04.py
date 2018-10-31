def out(n):
    # Edge case
    if n < 1:
        return ':('
    
    result = ''
    for i in range(n):
        result += '+-*/'[i%4]
    
    return result

# Test Case
if __name__ == '__main__':
    In = [1, 5, 7, 0, 10]
    for n in In:
        print('{}: {}'.format(n, out(n)))
