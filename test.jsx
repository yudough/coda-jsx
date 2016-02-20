var num = "{index}.png";
for (var i = 0; i <= 5; i++) { //iが5以下の場合
	alert(num.replace("{index}", ("0" + i).slice(-2)));
}
//alert(num.replace("{index}", ("0000" + nameIndex).slice(-3)));

