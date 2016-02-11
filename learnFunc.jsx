/*
	This file is Libraly for include file
	このスクリプトはインクルード用のライブラリです。
<javascriptresource>
<name>ExportWebImage</name>
<menu>automate</menu>
<about>jsxでイメージをjpgかpngでプレビューなしで書き出します。</about>
<category>Qscript</category>
<enableinfo>true</enableinfo>
</javascriptresource>
*/


var fileName, pngOpt, jpgOpt, gifOpt, hisObj;
//ドキュメントの名前を取得して拡張子を削除
function splitExt() {
	fileName = activeDocument.name; 
	return fileName.split(/\.(?=[^.]+$)/);
}
//PNG24
function exportPNG24() { 
	pngOpt = new ExportOptionsSaveForWeb();
	pngOpt.format = SaveDocumentType.PNG;
	pngOpt.optimized = true;
	pngOpt.interlaced = false;
	pngOpt.PNG8 = false;
}
//JPG
function exportJPG() {
	jpgOpt = new ExportOptionsSaveForWeb();
	jpgOpt.format = SaveDocumentType.JPEG;
	jpgOpt.includeProfile = false;
	jpgOpt.interlaced = false;
	jpgOpt.optimized = true;
	jpgOpt.quality = 100;
	jpgOpt.blur = 0;
	jpgOpt.matteColor = new RGBColor();
	jpgOpt.matteColor.red = 255;
	jpgOpt.matteColor.green = 255;
	jpgOpt.matteColor.blue = 255; 
}
//GIF
function exportGIF() {
	gifOpt = new ExportOptionsSaveForWeb();
	gifOpt.format = SaveDocumentType.COMPUSERVEGIF;
}

//スナップショットを作成
function takeSnapShot() {
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
function revertToSnapshot() {
  doc.activeHistoryState = hisObj;
}