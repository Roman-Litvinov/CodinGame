/*
WHAT HAPPENS:
We get a standard "#ffffff" hex color value as input, and we output 3 RGB values
corresponding to the 3 parts of the hex color.

SAMPLE INPUT:
#ffffff

SAMPLE OUTPUT:
255
255
255

HOW WE'RE GOING TO DO THIS:
- break the hex color string into 3 parts, stripping the "#" initial part
- convert each substring into the decimal value,
- output each value on a separate line

*/

// sample hex colors array:
hexColors = ["#ff00ff", "#aabbcc", "#edef12", "#000000", "#000001", "#ffffff"];

// function to convert hex value into an array of 3 decimal values,
// parameter - hex color string in "#nnnnnn" where n is in 0-F range,
// returns - an array of 3 RGB values
function hex2RGB(hexColor) {
	result = [];
	// strip the string:
	let str = hexColor.slice(1);
	// take elements 12, 34, and 56, convert to decimal, and push into the result array:
	for (let i = 0; i < str.length / 2; i++) {
		result.push(parseInt(str.slice(i * 2, i * 2 + 2), 16));
	}
	return result;
}

// go through sample array, convert colors, and return RGB equivalents:
for (let j = 0; j < hexColors.length; j++) {
	console.log(`Hex color ${hexColors[j]} in RGB is: ${hex2RGB(hexColors[j])}.`);
	console.log(hex2RGB(hexColors[j]));
}
