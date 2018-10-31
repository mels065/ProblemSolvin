
def problem01(arr, input):
	return arr[(input % len(arr)) - 1]  

arr = ["Bhin Bhin", "Atung", "Kaka", "Hodori", "Pan Pan", "Appu", "Lulu", "Orry", "Mei Mei"]
arr2 = ["Haha", "Hihi", "Huhu", "Hoho"]
print("TestCase01: ")
print(problem01(arr,5))
print(problem01(arr,3))
print(problem01(arr,13))
print(problem01(arr,20))
print(problem01(arr,28))

print("\nTestCase02: ")
print(problem01(arr2,5))
print(problem01(arr2,3))
print(problem01(arr2,13))
print(problem01(arr2,20))
print(problem01(arr2,26))

