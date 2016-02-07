//PNG24で保存
#include "learnFunc.jsx" //ファンクションのロード
extType = ".png"//拡張子のタイプ
doc = app.activeDocument;
var saveFile,folder,fsName,tmpFileName,saveOpt;
fileName = activeDocument.name; //ドキュメントの名前を取得
tmpFileName = splitExt(fileName); //拡張子を抜き取る
folder = Folder.selectDialog("保存先フォルダの選択");
//セーブオプション----------------------------------------------------
saveFile = new File(folder.fsName + "/" + tmpFileName[0] + extType); //ファイル名と保存場所の設定
saveOpt = exportPNG24(saveOpt);
doc.exportDocument(saveFile, ExportType.SAVEFORWEB, saveOpt);
//-----------------------------------------------------------------
alert("complete！！");