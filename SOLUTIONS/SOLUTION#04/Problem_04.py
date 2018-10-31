z=["+","-","*","/"]
b=int(input("No. of test case you will enter: "))
for i in range(b):
  c=int(input("Enter no of input"))
  if c==0:
    print(":(")
  else:
    a=0
    j=0
    k=""
    while(a<c and j<len(z)):
      k+=z[j]
      j+=1
      a+=1
      if j==4:
        j=0
    print(k)
