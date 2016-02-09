/*==============================================================================
  File Name: シェイプ作成.jsx
  Title: シェイプ作成
  Version: 1.0.0
  Author: Stocker.jp
  Author URI: http://stocker.jp/

==============================================================================*/
 #target photoshop
 
// 単位を px に変更
preferences.rulerUnits = Units.PIXELS;

// 実行フラグ
var do_flag = 1;

/* ダイアログ関係 */

// ダイアログオブジェクト = new Window("dialog",タイトル,[左座標,上座標,右座標,下座標])
uDlg = new Window('dialog','シェイプ作成',[100,100,440,255]);
// ダイアログを画面に対して中央揃えに
uDlg.center();

// ラベル W
uDlg.sText = uDlg.add("statictext",[20,23,275,10+15], "W");
// テキスト入力 W
uDlg.w = uDlg.add("edittext",[40,20,110,15+25], "100");
// ラベル H
uDlg.sText = uDlg.add("statictext",[130,23,275,10+15], "H");
// テキスト入力 H
uDlg.h = uDlg.add("edittext",[150,20,220,15+25], "100");
// ラベル R
uDlg.sText = uDlg.add("statictext",[260,23,275,20+15], "R");
// テキスト入力 R
uDlg.r = uDlg.add("edittext",[280,20,320,15+25], "0");
// ラベル X
uDlg.sText = uDlg.add("statictext",[20,73,275,10+15], "X");
// テキスト入力 X
uDlg.x = uDlg.add("edittext",[40,70,110,0+90], "0");
// ラベル Y
uDlg.sText = uDlg.add("statictext",[130,70,275,10+15], "Y");
// テキスト入力 Y
uDlg.y = uDlg.add("edittext",[150,70,220,0+90], "0");

// OKボタン
uDlg.okBtn = uDlg.add("button",[70,115,160,115+25], "作成", { name:"ok"});
// キャンセルボタン
uDlg.cancelBtn = uDlg.add("button", [180,115,270,115+25], "キャンセル", {name: "cancel"});

// キャンセルボタンが押されたらキャンセル処理（ESCキー含む）
uDlg.cancelBtn.onClick = function() {
	// 実行フラグに0を代入
	do_flag = 0;
	// ダイアログを閉じる
	uDlg.close();
}

// ダイアログを表示
uDlg.show();

// =======================================================

/* シェイプを作成し、レイヤー名をリネーム */

// 実行フラグが1（キャンセルボタンが押されていない）であれば
if (do_flag == 1) {
	// シェイプを作成する関数（75行目）を実行
	draw_shape();
	// アクティブレイヤーをリネームする関数（122行目）を実行
	rename_layer();
}

// =======================================================
/* 以下関数 */

/* シェイプを作成する関数
 * 88、92行目等: eval(変数) とすると、変数の値が "100+20" のような演算子入りのものであった場合計算する
 */
function draw_shape() {
	var idMk = charIDToTypeID( "Mk  " );
	var desc58 = new ActionDescriptor();
	var idnull = charIDToTypeID( "null" );
	var ref31 = new ActionReference();
	var idcontentLayer = stringIDToTypeID( "contentLayer" );
	ref31.putClass( idcontentLayer );
	desc58.putReference( idnull, ref31 );
	var idUsng = charIDToTypeID( "Usng" );
	var desc59 = new ActionDescriptor();
	var idType = charIDToTypeID( "Type" );
	var idsolidColorLayer = stringIDToTypeID( "solidColorLayer" );
	desc59.putClass( idType, idsolidColorLayer );
	var idShp = charIDToTypeID( "Shp " );
	var desc60 = new ActionDescriptor();
	var idTop = charIDToTypeID( "Top " );
	var idRlt = charIDToTypeID( "#Rlt" );
	// Y座標1
	desc60.putUnitDouble( idTop, idRlt, eval(uDlg.y.text) );
	var idLeft = charIDToTypeID( "Left" );
	var idRlt = charIDToTypeID( "#Rlt" );
	// X座標
	desc60.putUnitDouble( idLeft, idRlt, eval(uDlg.x.text) );
	var idBtom = charIDToTypeID( "Btom" );
	var idRlt = charIDToTypeID( "#Rlt" );
	// Y座標2
	shapey = eval(uDlg.y.text) + eval(uDlg.h.text);
	desc60.putUnitDouble( idBtom, idRlt, shapey );
	var idRght = charIDToTypeID( "Rght" );
	var idRlt = charIDToTypeID( "#Rlt" );
	// X座標2
	shapex = eval(uDlg.x.text) + eval(uDlg.w.text);
	desc60.putUnitDouble( idRght, idRlt, shapex );
	var idRds = charIDToTypeID( "Rds " );
	var idRlt = charIDToTypeID( "#Rlt" );
	// R角丸
	desc60.putUnitDouble( idRds, idRlt, eval(uDlg.r.text) );
	var idRctn = charIDToTypeID( "Rctn" );
	desc59.putObject( idShp, idRctn, desc60 );
	var idcontentLayer = stringIDToTypeID( "contentLayer" );
	desc58.putObject( idUsng, idcontentLayer, desc59 );
	executeAction( idMk, desc58, DialogModes.NO );
}

/* アクティブレイヤーのレイヤー名変更する関数 */
function rename_layer() {
	// 右側が新しいレイヤー名（例: W 100   H 100   R 0）
	activeDocument.activeLayer.name = "W " + parseInt(eval(uDlg.w.text)) + "   H " + parseInt(eval(uDlg.h.text)) + "   R " + parseInt(eval(uDlg.r.text));
}