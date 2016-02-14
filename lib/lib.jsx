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

//初期化設定---------------------------------------------------
function initialization() {

}
//ドキュメントの情報を取得---------------------------------------------------
function docInfo(){
	w = activeDocument.width.value; //ドキュメントの横幅
	h = activeDocument.height.value; //ドキュメンドの縦幅
	res = activeDocument.resolution; //解像度
	//画像の縦横比を取得してdocSizeを長辺
}
function resizeASP(docSize){
	var docAPS = app.activeDocument;
	var docW = parseFloat(docAPS.width.as("px"));
	var docH = parseFloat(docAPS.height.as("px"));
	if(docW > docH) {
		docAPS.resizeImage(UnitValue(docSize, "px"));
	} else {
		docAPS.resizeImage(undefined, UnitValue(docSize, "px"),);
	}
}

//PNG24---------------------------------------------------
function exportPNG24(pngOpt) { 
	pngOpt = new ExportOptionsSaveForWeb();
	pngOpt.format = SaveDocumentType.PNG;
	pngOpt.optimized = true;
	pngOpt.interlaced = false;
	pngOpt.PNG8 = false;
	return pngOpt;
}
//JPG---------------------------------------------------
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
//GIF---------------------------------------------------
function exportGIF(gifOpt) {
	gifOpt = new ExportOptionsSaveForWeb();
	gifOpt.format = SaveDocumentType.COMPUSERVEGIF;
}

//スナップショットを作成---------------------------------------------------
function takeSnapShot(doc) {
	hisObj = app.activeDocument.activeHistoryState; //現在のスナップショット
	}
//スナップショットから戻る---------------------------------------------------
function revertToSnapshot(doc) {
  app.activeDocument.activeHistoryState = hisObj;
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

//長辺からリサイズの割合を割り出す---------------------------------------------------
function resizeFix(resizeLong){
		resizeLong = longSideNum / longSide * 100;
		return resizeLong;
		}
function extTypeCount() {}

//ドキュメントの名前を取得して拡張子を削除---------------------------------------------------
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
function saveToFile(doc){
	saveFile = new File(folder.fsName + "/" + tmpFileName[0] + "." + extType); //ファイル名と保存場所の設定
	doc.resizeImage(UnitValue(exportDoc, "percent"), UnitValue(exportDoc, "percent") , res , ResampleMethod.BICUBIC );
	doc.exportDocument(saveFile, ExportType.SAVEFORWEB, saveOpt);
}
//-------------------------------------------------------//
 //ドキュメントを複製して戻るまで
function copyDoc(){
	//ドキュメントを複製
	var idMk = charIDToTypeID( "Mk  " );
    var desc = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref = new ActionReference();
        var idDcmn = charIDToTypeID( "Dcmn" );
        ref.putClass( idDcmn );
    desc.putReference( idnull, ref );
    var idNm = charIDToTypeID( "Nm  " );
    desc.putString( idNm, activeDocument.name.slice(0, -4) + '.copy.psd' );
    var idUsng = charIDToTypeID( "Usng" );
        var ref1 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref1.putEnumerated( idLyr, idOrdn, idTrgt );
    desc.putReference( idUsng, ref1 );
    var idVrsn = charIDToTypeID( "Vrsn" );
    desc.putInteger( idVrsn, 5 );
executeAction( idMk, desc, DialogModes.NO );

	var copyDoc;
	copyDoc = app.activeDocument;
	var copyDocHisObj = copyDoc.activeHistoryState;
	saveFile = new File(folder.fsName + "/" + tmpFileName[0] + "." + extType); //ファイル名と保存場所の設定
		//拡張子別に書き出し
		if(extTypePNG == true) {
			extType = "png";
			saveOpt = exportPNG24(saveOpt);
			alert("PNGで書き出します");
			saveToFile(copyDoc);
		}
		if(extTypeJPG == true) {
			extType = "jpg";
			saveOpt = exportJPG(saveOpt);
			alert("JPGで書き出します");
			saveToFile(copyDoc);
		}
	copyDoc.activeHistoryState = copyDocHisObj;
	return copyDoc.close(SaveOptions.DONOTSAVECHANGES);
}