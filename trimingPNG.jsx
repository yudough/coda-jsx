//jpgで保存
#include "learnFunc.jsx" //ファンクションのロード
var extType, doc, saveFile, folder, fsName, tmpFileName, saveOpt;
extType = ".png"//拡張子のタイプ
doc = app.activeDocument;
tmpFileName = splitExt(tmpFileName); //拡張子を抜き取る
folder = Folder.selectDialog("保存先フォルダの選択してください");
//セーブオプション----------------------------------------------------
saveFile = new File(folder.fsName + "/" + tmpFileName[0] + extType); //ファイル名と保存場所の設定
saveOpt = exportPNG24(saveOpt);//画像の種類の指定
doc.trim(TrimType.TRANSPARENT);
doc.exportDocument(saveFile, ExportType.SAVEFORWEB, saveOpt);
//-----------------------------------------------------------------
alert(decodeURIComponent(saveFile + "\nに書き出しました"));
