/*
<javascriptresource>
<name>ExportWebImage</name>
<menu>automate</menu>
<about>jsxでイメージをjpgかpngでプレビューなしで書き出します。</about>
<category>Qscript</category>
<enableinfo>true</enableinfo>
</javascriptresource>
*/

//初期化設定
#include "learnFunc.jsx" //ファンクションのロード
preferences.rulerUnits = Units.PIXELS;// 単位を px に変更
doc = app.activeDocument;
var doc, saveFile, folder, fsName, tmpFileName, saveOpt,resize,width, height,w, h, res, saveGUI, extType, w, h, res, saveGUI;
doc = app.activeDocument;
//ダイアログボックスを表示------------------------------------------//
//キャンバスサイズを取得
	w = activeDocument.width.value; //ドキュメントの横幅
	h = activeDocument.height.value; //ドキュメンドの縦幅
	res = activeDocument.resolution; //解像度
	//ダイアログボックスを表示
	saveGUI = new Window("dialog", "書き出しオプション", [0,100,402,100+226]);
	//中央に配置
	saveGUI.center(); 
	//パネルの作成
	saveGUI.btnPnl = saveGUI.add("panel",[10,10,402-10,226-10],"");
	saveGUI.btnPnl = saveGUI.add("panel",[29,20,29+170,226-63],"サイズ設定");
	saveGUI.btnPnl = saveGUI.add("panel",[402-180,20,402-30,226-63],"拡張子設定")
	//幅の指定
	saveGUI.sText = saveGUI.add("statictext",[50,48,40+52,48+20], "Width:");
	saveGUI.w = saveGUI.add("edittext",[107,45,97+76,45+20],w);
	//長さの指定
	saveGUI.sText = saveGUI.add("statictext",[50,68+10,40+52,78+20], "Height:");
	saveGUI.h = saveGUI.add("edittext",[107,65+10,97+76,75+20],h);
	//単位の指定
	saveGUI.sText = saveGUI.add("statictext",[50,98+10,50+42,108+10], "Unit:");
	saveGUI.rBtn1 = saveGUI.add("radiobutton",[107,105,107+50,105+20], "px");
	saveGUI.rBtn2 = saveGUI.add("radiobutton",[107,128,107+50,128+20], "%");
	alert("Radio Button 1 : "+saveGUI.rBtn2.value);
	
	//書き出すファイルの種類の指定
	saveGUI.cBox1 = saveGUI.add("checkbox",[240,45,262+50,45+20], "PNG");
	saveGUI.cBox2 = saveGUI.add("checkbox",[240,75,262+50,75+20], "JPG");
	
/*
	saveGUI.sText = saveGUI.add("statictext",[20,35+80,20+200,35+25+80], "書き出すファイルの種類");
	saveGUI.dList = saveGUI.add("dropdownlist",[180,30+80,200+50,30+25+80],["JPG","PNG","-"]);
*/
	
	//OKボタンの作成
	saveGUI.okBtn = saveGUI.add("button",[242,170,242+100,170+35],"いいと思います",{name:"ok"}); 
	//キャンセルボタン
	saveGUI.cancelBtn = saveGUI.add("button",[61,170,61+100,170+35], "ダメですね", {name: "cancel"});
	//OKボタン押した後のチェック
	saveGUI.okBtn.onClick = function okBtn() {
		function exportFile() {
			if(saveGUI.dList.selection == null ) {
					alert("拡張子が選択されてません。\n拡張子を選択してください。");
					saveGUI.close();
				}
			else {
					switch(saveGUI.dList.selection.toString()) {
						case "JPG" :
							extType = "jpg"
							saveOpt = exportJPG(saveOpt);//画像の種類
							break;
						case "PNG" :
							extType = "png"
							saveOpt = exportPNG24(saveOpt);//画像の種類
							break;
						case "GIF" :
							extType = "gif"
							saveOpt = exportGIF(saveOpt);//画像の種類
							break;
						default :
							alert("何も選択されておりません。\nもう一度やり直してみてください。");
							break;
					}
				}
			if(saveGUI.w.text == null) {
				alert("widthの数値を入力してください");
				saveGUI.close();
			} else {
				width = saveGUI.w.text;
				//alert("widthは" + width);
			}
			if(saveGUI.h.text == null) {
				//alert("heightの数値を入力してください");
				saveGUI.close();
			} else {
				height = saveGUI.h.text
				//alert("heightは" + height);
			}
				//alert("widhtは" + saveGUI.w.text + "px、heightは" + saveGUI.h.text + "px、種類は" + extType + "で書き出します。" );
	tmpFileName = splitExt(tmpFileName); //拡張子を抜き取る
	folder = Folder.selectDialog("保存先フォルダの選択してください");
	//セーブオプション----------------------------------------------------
	saveFile = new File(folder.fsName + "/" + tmpFileName[0] + "." + extType); //ファイル名と保存場所の設定
	takeSnapShot(doc);
	widPer = width / w * 100;
	heiPer = height / h * 100;
	//alert(widPer + "and" + heiPer);
	doc.resizeImage(UnitValue(widPer,"percent") , UnitValue(heiPer,"percent") , res , ResampleMethod.BICUBIC );
	doc.exportDocument(saveFile, ExportType.SAVEFORWEB, saveOpt,resize);
	revertToSnapshot(doc);
	//-----------------------------------------------------------------
	alert(decodeURIComponent(saveFile + "\nに書き出しました"));
	}
				saveGUI.close();
			
		}
	
	//キャンセル処理
	saveGUI.cancelBtn.onClick = saveGUI.close();
	saveGUI.show(); //表示する
//ダイアログボックスを表示------------------------------------------//