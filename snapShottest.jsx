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
executeAction( charIDToTypeID( "Mk  " ), desc, DialogModes.NO );
var doc = app.activeDocument.activeHistoryState;
alert(doc);