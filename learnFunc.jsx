var fileName, pngOpt, jpgOpt, gifOpt, hisObj;
//ドキュメントの名前を取得して拡張子を削除
function splitExt(fileName) {
	fileName = activeDocument.name; 
	return fileName.split(/\.(?=[^.]+$)/);
}
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
	jpgOpt.lossy = 0;
	jpgOpt.optimized = true;
	jpgOpt.quality = 100;
	jpgOpt.matteColor = new RGBColor();
	jpgOpt.matteColor.red = 255;
	jpgOpt.matteColor.green = 255;
	jpgOpt.matteColor.blue = 255; 
	return jpgOpt;
}
//GIF
function exportGIF(gifOpt) {
	gifOpt = new ExportOptionsSaveForWeb();
	gifOpt.format = SaveDocumentType.GIF;
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