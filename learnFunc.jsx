/*
	This file is Libraly for include file
	このスクリプトはインクルード用のライブラリです。
<javascriptresource>
<name>ExportWebImage</name>
<menu>help</menu>
<about>jsxでイメージをjpgかpngでプレビューなしで書き出します。</about>
<category>Qscript</category>
<enableinfo>true</enableinfo>
</javascriptresource>
*/


var fileName, pngOpt, jpgOpt, gifOpt, hisObj;

//PNG24
function exportPNG24(pngOpt) { 
	pngOpt = new ExportOptionsSaveForWeb();
	pngOpt.format = SaveDocumentType.PNG;
	pngOpt.optimized = true;
	pngOpt.interlaced = false;
	pngOpt.PNG8 = false;
	return pngOpt;
}
//JPG
function exportJPG(jpgOpt) {
	jpgOpt = new ExportOptionsSaveForWeb();
	jpgOpt.format = SaveDocumentType.JPEG;
	jpgOpt.includeProfile = false;
	jpgOpt.interlaced = false;
	jpgOpt.optimized = true;
	jpgOpt.quality = 70;
	jpgOpt.blur = 0;
	jpgOpt.matteColor = new RGBColor();
	jpgOpt.matteColor.red = 255;
	jpgOpt.matteColor.green = 255;
	jpgOpt.matteColor.blue = 255;
	return jpgOpt;
}
//GIF
function exportGIF() {
	gifOpt = new ExportOptionsSaveForWeb();
	gifOpt.format = SaveDocumentType.COMPUSERVEGIF;
}

//スナップショットを作成
function takeSnapShot(doc) {
	hisObj = app.activeDocument.activeHistoryState; //現在のスナップショット
	}
/*
	var desc = new ActionDescriptor();
	var ref = new ActionReference();
	ref.putClass(charIDToTypeID( "SnpS" ));  //snapshot
	desc.putReference(charIDToTypeID( "null" ), ref );
	var ref3 = new ActionReference();
	ref3.putProperty(charIDToTypeID( "HstS" ), charIDToTypeID( "CrnH" ) );// Historystate, CurrentHistorystate
	desc.putReference( charIDToTypeID( "From" ), ref3 ); // From Current Historystate
	/*スナップショットの保存名（ない場合は自動で名前がつくので不要）
	    var idNm = charIDToTypeID( "Nm  " );
	    desc.putString( idNm, """うんち""" );
	    var idUsng = charIDToTypeID( "Usng" );
	    var idHstS = charIDToTypeID( "HstS" );
	    var idFllD = charIDToTypeID( "FllD" );
	
	    desc.putEnumerated( idUsng, idHstS, idFllD );
	 */
/*
	executeAction( charIDToTypeID( "Mk  " ), desc, DialogModes.NO );
*/
//	return doc;


//スナップショットから戻る
function revertToSnapshot(doc) {
  app.activeDocument.activeHistoryState = hisObj;
}
//キャンバスサイズを取得
function docInfo(){
	w = activeDocument.width.value; //ドキュメントの横幅
	h = activeDocument.height.value; //ドキュメンドの縦幅
	res = activeDocument.resolution; //解像度
}
//ドキュメントの長辺を取得
function docLongSide(){
	if(w >= h){longSide = w; shortSide = h;}
	 else if(h >= w) {longSide = h; shortSide = w;}
	 else {
		 alert("ドキュメントのサイズ情報が正しく取得できませんでした。")
		 return false;
	 }
	 //alert("長辺は" + longSide +"pxと短辺は"+ shortSide + "px");
}

//長辺からリサイズの割合を割り出す
function resizeFix(resizeLong){
		resizeLong = longSideNum / longSide * 100;
		return resizeLong;
		}
function extTypeCount() {}

//ドキュメントの名前を取得して拡張子を削除
function splitExt() {
	fileName = activeDocument.name; 
	return fileName.split(/\.(?=[^.]+$)/);
}
//セーブオプション------------------------------------------//
function exportFile() {
	tmpFileName = splitExt(fileName); //拡張子を抜き取る
	folder = Folder.selectDialog("保存先フォルダの選択してください");
	saveFile = new File(folder.fsName + "/" + tmpFileName[0] + "." + extType); //ファイル名と保存場所の設定
	takeSnapShot(doc);
	doc.resizeImage(UnitValue(exportDoc,"percent"), UnitValue(exportDoc,"percent") , res , ResampleMethod.BICUBIC );
	doc.exportDocument(saveFile, ExportType.SAVEFORWEB, saveOpt);
	revertToSnapshot(doc);
	alert(decodeURIComponent(saveFile + "\nに書き出しました"));
}
//-------------------------------------------------------//
function saveOption(){
	takeSnapShot(doc);
	tmpFileName = splitExt(fileName); //拡張子を抜き取る
	folder = Folder.selectDialog("保存先フォルダの選択してください");
	
}
function saveToFile(){
	saveFile = new File(folder.fsName + "/" + tmpFileName[0] + "." + extType); //ファイル名と保存場所の設定
	doc.resizeImage(UnitValue(exportDoc, "percent"), UnitValue(exportDoc, "percent") , res , ResampleMethod.BICUBIC );
	doc.exportDocument(saveFile, ExportType.SAVEFORWEB, saveOpt);
}