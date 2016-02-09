uDlg = new Window('dialog','サンプル',[100,100,480,245]);
uDlg.btnPnl = uDlg.add("panel",[10,10,370,135],"Alert Dialog Sample");
uDlg.btnPnl.okBtn = uDlg.btnPnl.add("button",[130,80,225,80+25], "OK!", { name:"ok"});
uDlg.show();