# cook your dish here
x=input().upper()

n=len(x)
l=[]

for i in range(0,n):
    #appending all elements of string in a list
    if x[i]!=" "and (ord(x[i])>=65 and ord(x[i])<=90):
        l.append(x[i])
    else:
        l.append("etc")
# creating a as a set of unique ist elements    
a=set(l)
a=sorted(a)
for i in a:
    c=l.count(i)
    print(i,":",c)
    
