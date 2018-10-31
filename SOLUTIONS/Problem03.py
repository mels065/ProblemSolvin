import collections

def print_out(text):
    count = collections.OrderedDict()

    for c in text.lower():
        if c.isalpha():
            key = c
        else:
            key = 'etc'
        
        # Init the dict
        if not count.get(key):
            count[key] = 0
        
        count[key] += 1
    
    print('Output:\n{')
    i = 0
    for key, cc in count.items():
        # Skip if key is etc
        if key == 'etc':
            continue
        
        print('  {}: {}'.format(key, cc), end='')

        # Determine whether to add comma
        if i < len(count) - 1:
            print(',')
        else:
            print()
        
        i += 1
    
    # Print etc at the end
    if i != len(count):
        print('  {}: {}'.format('etc', count['etc']))
    print('}')

if __name__ == '__main__':
    test_input = ['Asian Games 2018', 'Bubur 888']

    print('TestCase:')
    for i in range(len(test_input)):
        print('Case#{:02}'.format(i + 1))
        print('Input:')
        print(test_input[i])
        print_out(test_input[i])
        print()
