var decoder = {
	'n' : 'a',
	'o' : 'b',
	'p' : 'c',
	'q' : 'd',
	'r' : 'e',
	's' : 'f',
	't' : 'g',
	'u' : 'h',
	'v' : 'i',
	'w' : 'j',
	'x' : 'k',
	'y' : 'l',
	'z' : 'm',
	'a' : 'n',
	'b' : 'o',
	'c' : 'p',
	'd' : 'q',
	'e' : 'r',
	'f' : 's',
	'g' : 't',
	'h' : 'u',
	'i' : 'v',
	'j' : 'w',
	'k' : 'x',
	'l' : 'y',
	'm' : 'z',
	' ' : ' '
};

var encoder = {
	'a' : 'n',
	'b' : 'o',
	'c' : 'p',
	'd' : 'q',
	'e' : 'r',
	'f' : 's',
	'g' : 't',
	'h' : 'u',
	'i' : 'v',
	'j' : 'w',
	'k' : 'x',
	'l' : 'y',
	'm' : 'z',
	'n' : 'a',
	'o' : 'b',
	'p' : 'c',
	'q' : 'd',
	'r' : 'e',
	's' : 'f',
	't' : 'g',
	'u' : 'h',
	'v' : 'i',
	'w' : 'j',
	'x' : 'k',
	'y' : 'l',
	'z' : 'm',
	' ' : ' '
};

var decrypt =  function (message) {
	var decoded = "";
	for (var i = 0; i <= message.length - 1; i++) {
		var letter = message[i].toLowerCase();
		decoded += decoder[letter];
	}
	return decoded;
};

var encrypt = function (message) {
	var encoded = "";
	for (var i = 0; i <= message.length - 1; i++) {
		var letter = message[i].toLowerCase();
		encoded += encoder[letter];
	}
	return encoded;
};

module.exports = {
	decrypt : decrypt,
	encrypt : encrypt
	};