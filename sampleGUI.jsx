uDlg = new Window('dialog','サンプル',[200,100,580,245]);
uDlg.okBtn = uDlg.add("button",[130,80,225,80+25], "OK!", { name:"ok"});
uDlg.cBox1 = uDlg.add("checkbox",[100,10,275,10+25], "JPEG形式でも保存する");
uDlg.cBox2 = uDlg.add("checkbox",[100,30,275,30+25], "GIF形式でも保存する");
uDlg.show();
alert("CheckBox 1 : "+uDlg.cBox1.value);
alert("CheckBox 2 : "+uDlg.cBox2.value);