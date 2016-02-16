var num = "{index}.png";
var nameIndex = 4;
for (var i = 0; i > 5; i++) {
	alert(num.replace("{index}", ("0" + nameIndex).slice(-2)));
	nameIndex += 1;
}
alert(num.replace("{index}", ("0000" + nameIndex).slice(-3)));
