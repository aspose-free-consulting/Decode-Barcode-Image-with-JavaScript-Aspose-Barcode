var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

const barcode = require("aspose.barcode");
const barcode_ = barcode.AsposeBarcode;
const QualitySettings = barcode_.Reader.QualitySettings;
let Reader = barcode.AsposeBarcode.Reader;
let BarcodeReader = barcode.AsposeBarcode.Reader.BarcodeReader;

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
	var newpath = '/TestFolder/Images/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
	let full_path = newpath;
	let reader = new BarcodeReader(full_path, null, null);
	reader.setQualitySettings(QualitySettings.getHighPerformance());	
	let results = reader.readBarCodes();
	if(results != null)
	{
		results.forEach(myFunction);
		function myFunction(result)
		{	
			res.write('Barcode text is:');
    			res.write(result.getCodeText());
    			res.write("\n");
		}
	}

	res.write('Reading completed\n');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);