arr1 = ["Bhin Bhin", "Atung", "Kaka", "Hodori", "Pan Pan", "Appu", "Lulu", "Orry", "Mei Mei"];
arr2 = ["Haha", "Hihi", "Huhu", "Hoho"];

given = int(input())

given1 = given % len(arr1)
given2 = given % len(arr2)

if given1 == 0 :
    print (arr1[len(arr1)-1])
else:
    print (arr1[given1-1])
if given2 == 0 :
    print (arr2[len(arr2)-1])
else:
    print (arr2[given2-1])

