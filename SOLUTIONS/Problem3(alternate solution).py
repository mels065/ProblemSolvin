from collections import OrderedDict 
s = input()
s=s.lower()
alpha = 'a'
lists = [0] * 26
etc = 0
for c in s:
    if(c.isalpha()):
        lists[ord(c)-97]=lists[ord(c)-97]+1
    else:
        etc=etc+1
s = "".join(OrderedDict.fromkeys(s))
print(s)
print("{")
for c in s:
    if(c.isalpha()):
        print("%s: %s"%(c ,lists[ord(c)-97]))
print("etc: %s"%(etc))
print("}")
        
        
