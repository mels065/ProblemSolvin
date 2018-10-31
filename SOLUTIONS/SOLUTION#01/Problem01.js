function answer(numb, arr){
    let result = numb % arr.length;

    if(result == 0){
        console.log( arr[arr.length-1]);
    }
    else{
        console.log(arr[result-1]);
    }
}

const arr1 = ["Bhin Bhin", "Atung", "Kaka", "Hodori", "Pan Pan", "Appu", "Lulu", "Orry", "Mei Mei"];
const arr2 = ["Haha", "Hihi", "Huhu", "Hoho"];

answer(26, arr2);