var idMk = charIDToTypeID( "Mk  " );
    var desc = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref = new ActionReference();
//         var idSnpS = charIDToTypeID( "SnpS" );
        ref.putClass(charIDToTypeID( "SnpS" ));
    desc.putReference( idnull, ref );
    var idFrom = charIDToTypeID( "From" );
        var ref3 = new ActionReference();
        var idHstS = charIDToTypeID( "HstS" );
        var idCrnH = charIDToTypeID( "CrnH" );
        ref3.putProperty( idHstS, idCrnH );
    desc.putReference( idFrom, ref3 );
/*スナップショットの保存名（ない場合は自動で名前がつくので不要）
    var idNm = charIDToTypeID( "Nm  " );
    desc.putString( idNm, """うんち""" );
    var idUsng = charIDToTypeID( "Usng" );
    var idHstS = charIDToTypeID( "HstS" );
    var idFllD = charIDToTypeID( "FllD" );

    desc.putEnumerated( idUsng, idHstS, idFllD );
 */
executeAction( idMk, desc, DialogModes.NO );