//全てのレイヤー/レイヤーセットをファイル名に書き出す
var fileObj = File.saveDialog("保存ファイル名を指定して下さい","result.txt");
if (fileObj != null ) { //保存先が指定されたら
	var flag = fileObj.open("w"); //書き込みモードで開く
	if(flag) { //書き込める状態の場合は以下の処理を行う
		var list = getAllLayerAndLayerSet(app.activeDocument, []); //全てのレイヤーを取得する
		for (var i = 0; i < list.length; i++) {
			if(!list[i].kind) { //レイヤーセットの場合は先頭に空白スペースを付加する
				fileObj.write("　");
			}
			fileObj.writeln(list[i].name); //レイヤー名を書き出す
		}
		fileObj.close(); //ファイルを閉じる
	}else{
		alert("ファイルが開けません。書き込み禁止になっている可能性があります");
	}

}
//全てのレイヤー/レイヤーセットオブジェクトを取得する
// IN : レイヤー/レイヤーセットオブジェクト,配列オブジェクト
// OUT : レイヤー/レイヤーセットオブジェクトを格納した配列オブジェクト
function getAllLayerAndLayerSet(obj,ary){
	for (var i = 0; i<obj.layers.length; i++) {
		ary.push(obj.layers[i]);
		if(!obj.layers[i].kind) { //レイヤーセットの場合
			getAllLayerAndLayerSet(obj.layers[i],ary);
		}
	}
	return ary; // 結果は配列で返す
}