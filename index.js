var popBuffer = require("pop-buffer");
var fs = require("fs");

var encoded;
var decoded = [];
var levels;

function encode(cells, positions, maxLevel){
	levels = maxLevel;
	encoded = popBuffer.encode(cells, positions, maxLevel);
	for(var i = 1; i <= levels; i++){
		var pb = {
			bounds: encoded.bounds,
			levels: encoded.levels.slice(0, i)
		};
		decoded.push(popBuffer.decode(pb));
	}
}

function getDecoded(){
	return decoded;
}

function writeToFile(filename){
	//fs.writeFile("")
	console.log("not implemented yet");
}

module.exports = {
	encode: encode,
	getDecoded: getDecoded,
	writeToFile: writeToFile
}
