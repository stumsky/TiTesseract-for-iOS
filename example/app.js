// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.

var TiTesseract = require('net.appios.titesseract');
Ti.API.log("module is => " + TiTesseract);

var ocrImage = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory + '/ocr.png');
Ti.API.log('ocrImage.nativePath:'+ocrImage.nativePath);

var win = Ti.UI.createWindow({
	backgroundColor:'#fdfdfd',
	layout: 'vertical'
});
var title = Ti.UI.createLabel({
	top: 40, left: 20,
	font: { fontSize:36, fontFamily:'HelveticaNeue-UltraLight' },
	textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
	text: 'TiTesseract for iOS'
});
win.add(title);
var image = Titanium.UI.createImageView({
	image:ocrImage.toBlob(),
	width: 280,
	top: 30,
	height: Ti.UI.SIZE,
	borderColor: '#909090',
});
win.add(image);


// whitelist1
var whitelist = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
var label = createWhitelistLabel(whitelist);
var recognized = createRecognizedLabel('#16a085');
recognized.text = TiTesseract.recognizedText(ocrImage.toBlob(), 'eng', whitelist);
win.add(label);
win.add(recognized);


// whitelist2
var whitelist2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var label2 = createWhitelistLabel(whitelist2);
var recognized2 = createRecognizedLabel('#f39c12');
recognized2.text = TiTesseract.recognizedText(ocrImage.toBlob(), 'eng', whitelist2);
win.add(label2);
win.add(recognized2);


// whitelist3
var whitelist3 = '0123456789';
var label3 = createWhitelistLabel(whitelist3);
var recognized3 = createRecognizedLabel('#2980b9');
recognized3.text = TiTesseract.recognizedText(ocrImage.toBlob(), 'eng', whitelist3);
win.add(label3);
win.add(recognized3);


win.open();


function createWhitelistLabel(whitelist) {
	var label = Ti.UI.createLabel({
		top: 20, left: 20,
		font: { fontSize:16, fontFamily:'HelveticaNeue-Light' },
		textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
		text: 'whitelist: '+whitelist
	});
	return label;
}

function createRecognizedLabel(color) {
	var label = Ti.UI.createLabel({
		top: 0, left: 20,
		color: color,
		font: { fontSize:24, fontFamily:'HelveticaNeue-Light' },
	});
	return label;
}