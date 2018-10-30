PROBLEM#2
Type your keyboard (10 finger type pattern), then you can solve this case.

TestCase:
#--------------------------#
| Case | Input    | Output | 
#--------------------------#
| #01  | starwars | true   |
| #02  | lampung  | false  |
| #03  | secret   | true   |
| #04  | ilmu     | true   |
| #05  | pony     | true   |
#--------------------------#

const problem = (input) => {
	const leftPattern = ['q', 'w', 'r', 't', 'a', 's', 'd', 'f', 'g', 
	'z', 'x', 'c', 'v', 'b'];
	const rightPattern = ['y', 'u', 'i', 'o', 'p', 'h', 'j', 'k', 'l',
	'n', 'm'];
	let data = input.toLowerCase();
	let leftTotal = 0;
	let rightTotal = 0;
	for (let i = 0, len = data.length; i < len; i++) {
		if(leftPattern.indexOf(data.charAt(i))) leftTotal ++;
		if(rightPattern.indexOf(data.charAt(i))) rightTotal ++;
	}
	if(leftTotal === input.length || rightTotal === input.length) return true;
	return false;
	
}