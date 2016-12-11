var doc = app.activeDocument;
var newLayer = doc.artLayers;
var addLayer = newLayer.add();
addLayer.kind = LayerKind.colorBalance;