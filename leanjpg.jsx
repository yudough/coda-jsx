//jpgで保存
#include "learnFunc.jsx" //ファンクションのロード
var extType, doc, saveFile, folder, fsName, tmpFileName, saveOpt;
extType = ".jpg"//拡張子のタイプ
doc = app.activeDocument;
tmpFileName = splitExt(tmpFileName); //拡張子を抜き取る
folder = Folder.selectDialog("保存先フォルダの選択してくだしあ；");
//セーブオプション----------------------------------------------------
saveFile = new File(folder.fsName + "/" + tmpFileName[0] + extType); //ファイル名と保存場所の設定
saveOpt = exportJPG(saveOpt);
doc.exportDocument(saveFile, ExportType.SAVEFORWEB, saveOpt);
//-----------------------------------------------------------------
alert(decodeURIComponent(saveFile + "\nに書き出しました"));