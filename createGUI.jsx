// 単位を px に変更
preferences.rulerUnits = Units.PIXELS;

//PNGで保存
#include "learnFunc.jsx" //ファンクションのロード
var extType, doc, saveFile, folder, fsName, tmpFileName, saveOpt,resize,width, height;
extType = ".png"//拡張子のタイプ
doc = app.activeDocument;
tmpFileName = splitExt(tmpFileName); //拡張子を抜き取る
folder = Folder.selectDialog("保存先フォルダの選択してください");
//セーブオプション----------------------------------------------------
saveFile = new File(folder.fsName + "/" + tmpFileName[0] + extType); //ファイル名と保存場所の設定
saveOpt = exportPNG24(saveOpt);//画像の種類の指
takeSnapShot(doc);
doc.resizeImage(UnitValue(width,"percent") , UnitValue(height,"percent") , null , ResampleMethod.BICUBIC );
doc.exportDocument(saveFile, ExportType.SAVEFORWEB, saveOpt,resize);
revertToSnapshot(doc);
//-----------------------------------------------------------------
alert(decodeURIComponent(saveFile + "\nに書き出しました"));
