try{var docRef=app.activeDocument,savedLayer=docRef.activeLayer,desc=new ActionDescriptor,ref=new ActionReference;ref.putEnumerated(charIDToTypeID("HstS"),charIDToTypeID("Ordn"),charIDToTypeID("Prvs"));desc.putReference(charIDToTypeID("null"),ref);executeAction(charIDToTypeID("slct"),desc,DialogModes.NO);docRef.activeLayer=savedLayer}catch(a){};