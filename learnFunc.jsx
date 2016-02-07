var fileName, pngOpt, jpgOpt, gifOpt;
//ドキュメントの名前を取得して拡張子を削除
function splitExt(fileName) {
	fileName = activeDocument.name; 
	return fileName.split(/\.(?=[^.]+$)/);
}
//PNG24
function exportPNG24(pngOpt) { 
	pngOpt = new ExportOptionsSaveForWeb();
	pngOpt.format = SaveDocumentType.PNG;
	pngOpt.optimized = true;
	pngOpt.interlaced = false;
	pngOpt.PNG8 = false;
	return pngOpt;
}
//JPG
function exportJPG(jpgOpt) {
	jpgOpt = new ExportOptionsSaveForWeb();
	jpgOpt.format = SaveDocumentType.JPEG;
	jpgOpt.includeProfile = false;
	jpgOpt.interlaced = false;
	jpgOpt.lossy = 0;
	jpgOpt.optimized = true;
	jpgOpt.quality = 100;
	jpgOpt.matteColor = new RGBColor();
	jpgOpt.matteColor.red = 255;
	jpgOpt.matteColor.green = 255;
	jpgOpt.matteColor.blue = 255; 
	return jpgOpt;
}
//GIF
function exportGIF(gifOpt) {
	gifOpt = new ExportOptionsSaveForWeb();
	gifOpt.format = SaveDocumentType.GIF;
}