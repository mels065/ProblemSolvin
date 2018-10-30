function problem(num,arr) {
    let x =  Math.round(num%arr.length) <= 0 ? arr[arr.length-1] : arr[Math.round(num%arr.length)-1]
    return x
}


const arr1 = ["Bhin Bhin", "Atung", "Kaka", "Hodori", "Pan Pan", "Appu", "Lulu", "Orry", "Mei Mei"];
const arr2 = ["Haha", "Hihi", "Huhu", "Hoho"];

console.log(problem(24,arr1))