uDlg = new Window('dialog','サンプル',[100,100,505,220]);
uDlg.pBar = uDlg.add("progressbar",[10,30,10+384,30+15], 0, 100);
uDlg.okBtn = uDlg.add("button",[130,80,225,80+25], "OK!", { name:"ok"});
uDlg.pBar.value = 10;
uDlg.show();