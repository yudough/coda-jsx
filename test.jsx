var doc, saveFile, folder, fsName, tmpFileName, saveOpt,extType,w, h, res;
#include "learnFunc.jsx"
doc = app.activeDocument;
docName = app.activeDocument.name;
extType = "png";//拡張子の種類
tmpFileName = splitExt(fileName); //拡張子を抜き取る
folder = Folder.selectDialog("保存先フォルダの選択してください");
splitExt(); 

//スナップショットを作成

takeSnapShot(doc); //スナップショット
//画像を統合する
	doc.mergeVisibleLayers(); 
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
	//copyDoc = app.activeDocument.duplicate(activeDocument.name.slice(0, -4) + '.copy.psd');
	copyDoc = app.activeDocument;
	docInfo();
	var copyDocHisObj = copyDoc.activeHistoryState;
	saveFile = new File(folder.fsName + "/" + tmpFileName[0] + "." + extType); //ファイル名と保存場所の設定
	saveOpt= exportPNG24(saveOpt);
	copyDoc.resizeImage(UnitValue(50, "percent"), UnitValue(50, "percent") , res , ResampleMethod.BICUBIC );
	copyDoc.exportDocument(saveFile, ExportType.SAVEFORWEB, saveOpt);
	copyDoc.activeHistoryState = copyDocHisObj;
	return copyDoc.close(SaveOptions.DONOTSAVECHANGES);
}
copyDoc();
//先ほどのドキュメントをアクティブにする
activeDocument = doc;
//スナップショットから戻る
revertToSnapshot(doc);
alert(decodeURIComponent(saveFile + "\nに書き出しました"));

