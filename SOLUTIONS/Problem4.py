number = int(input("Input number: "))

math = ["+","-","*","/"]
string = []
count = 0

if number == 0:
    print (":(")

for x in range(number):
    string.append(math[count])
    count += 1
    if count >= 4:
        count = 0
string = "".join(string)
print(string)