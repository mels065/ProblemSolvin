# Problem01

Where am I?
Note: Make it dynamic as possible you can.

Given array with data: [“Bhin Bhin”, “Atung”, “Kaka”, “Hodori”, “Pan Pan”, “Appu”, “Lulu”, “Orry”, “Mei Mei”]
TestCase01:
#--------------------------#
| Case | Input | Output    |
#--------------------------#
| #01  | 5     | Pan Pan   |
| #02  | 3     | Kaka      |
| #03  | 13    | Hodori    |
| #04  | 20    | Atung     |
| #05  | 28    | Bhin Bhin |
#--------------------------#

Given array with data: [“Haha”, “Hihi”, “Huhu”, “Hoho”]
TestCase02:
#-----------------------#
| Case | Input | Output |
#-----------------------#
| #01  | 5     | Haha   |
| #02  | 3     | Huhu   |
| #03  | 13    | Haha   |
| #04  | 20    | Hoho   |
| #05  | 26    | Hihi   |
#-----------------------#

const problem = (data, input) => {
	const dataLength = data.length;
	const modulusData = input % dataLength;
	return modulusData > 0 ? data[modulusData-1] : data[modulusData];
}

console.log(problem(TestCase01, 5));
console.log(problem(TestCase01, 3));
console.log(problem(TestCase01, 13));
console.log(problem(TestCase01, 20));
console.log(problem(TestCase01, 28));


console.log(problem(TestCase02, 5));
console.log(problem(TestCase02, 3));
console.log(problem(TestCase02, 13));
console.log(problem(TestCase02, 20));
console.log(problem(TestCase02, 28));