const hexMappings = {"10": "A", "11": "B", "12": "C", "13": "D", "14": "E", "15": "F"}

var main = function(binaryString){
	var hexadecimalOutput = "";
	// Should there be a remainder, the first binary substring will not have 4-bits
	var remainder = binaryString.length % 4;
	if (remainder != 0){
		// Sanitize the string that does not contain 4-bits
		var binarySubstring = sanitizeBinaryString(binaryString.slice(0, remainder));
		binaryString = binarySubstring + binaryString.slice(remainder, binaryString.length)
	}
	var binaryStringArray = binaryString.match(/.{4}/g);
	for (var i = 0; i <= binaryStringArray.length - 1; i++){
		hexadecimalOutput += binaryToSum(binaryStringArray[i])
	}
	return hexadecimalOutput
}

var sanitizeBinaryString = function(parsed){
	var missingDigits = "0".repeat(4 - parsed.length);
	return missingDigits + parsed;
}

var binaryToSum = function(binary){
	var total = 0;
	for (var i = 0; i <= binary.length - 1; i++){
		if (binary.charAt(i) == 1){
			total += Math.pow(2, binary.length - 1 - i);
		}
	}
	if (total > 9){
		return hexMappings[total];
	}
	return String(total);
}

module.exports = {convert: main};