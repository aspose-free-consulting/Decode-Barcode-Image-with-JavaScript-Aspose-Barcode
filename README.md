This free consulting project will help you in understanding the usage of Aspose.BarCode for Node.js via Java. You can take a picture of a barcode and then display the decoded string in browser.

# 1. Environment Settings

You need to install Java, Python, Node.js and Formidable to run this sample application. The latest versions are recommended. Follow the below steps to establish the environment:

  
## 1.1 Install Java

- Download the latest Java from the following link:

[https://www.oracle.com/java/technologies/javase-jdk15-downloads.html](https://www.oracle.com/java/technologies/javase-jdk15-downloads.html)
<img src="https://github.com/ahsaniqbalsidiqui/Decode-Barcode-Image-with-JavaScript-Aspose-Barcode-1/blob/main/ReadMe-Images/01-Install%20Java%201.png" alt="Download Java">

- Install latest version of JAVA SE Development Kit by executing &quot;jdk-15.0.2\_windows-x64\_bin.exe&quot;. (Current Version is 15.0.2).

<img src="https://github.com/ahsaniqbalsidiqui/Decode-Barcode-Image-with-JavaScript-Aspose-Barcode-1/blob/main/ReadMe-Images/02-Install%20Java%202.png" alt="Install Java">

- Press Yes and proceed with the Wizard with default options. It will install latest JDK as shown below.

<img src="https://github.com/ahsaniqbalsidiqui/Decode-Barcode-Image-with-JavaScript-Aspose-Barcode-1/blob/main/ReadMe-Images/03-Install%20Java%203.png" alt="Install Java">

- Add or Set the environment variable JAVA\_HOME in your operating system as follows:

<img src="https://github.com/ahsaniqbalsidiqui/Decode-Barcode-Image-with-JavaScript-Aspose-Barcode-1/blob/main/ReadMe-Images/04-Install%20Java%204.png" alt="Install Java">

- Add this value to &quot;path&quot; by adding new entry as shown below:

<img src="https://github.com/ahsaniqbalsidiqui/Decode-Barcode-Image-with-JavaScript-Aspose-Barcode-1/blob/main/ReadMe-Images/05-Install%20Java%205.png" alt="Install Java">

- Alternatively, you may install Java using npm as follows:

- npm I java

  
## 1.2 Install Python

- Download the latest version of Python from the following link:

[https://www.python.org/downloads/](https://www.python.org/downloads/)

<img src="https://github.com/ahsaniqbalsidiqui/Decode-Barcode-Image-with-JavaScript-Aspose-Barcode-1/blob/main/ReadMe-Images/06-Python%201.png" alt="Install Java">

- Install Python using python-3.9.2-amd64.exe (Current version is 3.9.2).

<img src="https://github.com/ahsaniqbalsidiqui/Decode-Barcode-Image-with-JavaScript-Aspose-Barcode-1/blob/main/ReadMe-Images/07-Python%202.png" alt="Install Java">

- Alternatively you may install Python from npm as follows:

- npm i python

  
## 1.3 Install Node.js

- Download the latest version from the following link:

[https://nodejs.org/en/download/](https://nodejs.org/en/download/)

<img src="https://github.com/ahsaniqbalsidiqui/Decode-Barcode-Image-with-JavaScript-Aspose-Barcode-1/blob/main/ReadMe-Images/08-Node-00.png" alt="Install Java">

- Install the latest version of Node.js using &quot;node-v14.16.0-x64.msi&quot;. (Current version is 14.16.0). Following options will be displayed by the Wizard. Select the default options as shown in sequence of images below:

<img src="https://github.com/ahsaniqbalsidiqui/Decode-Barcode-Image-with-JavaScript-Aspose-Barcode-1/blob/main/ReadMe-Images/09-Node-01.png" alt="Install Java">

<img src="https://github.com/ahsaniqbalsidiqui/Decode-Barcode-Image-with-JavaScript-Aspose-Barcode-1/blob/main/ReadMe-Images/10-Node-02.png" alt="Install Java">

<img src="https://github.com/ahsaniqbalsidiqui/Decode-Barcode-Image-with-JavaScript-Aspose-Barcode-1/blob/main/ReadMe-Images/11-Node-03.png" alt="Install Java">

<img src="https://github.com/ahsaniqbalsidiqui/Decode-Barcode-Image-with-JavaScript-Aspose-Barcode-1/blob/main/ReadMe-Images/12-Node-js%2004%20-%20Installation.png" alt="Install Java">

Press Next and complete the Node.js installation.

  
## 1.4 Install Formidable

Formidable is required to upload file in this application. Use npm to install formidable from the command window as follows:

<img src="https://github.com/ahsaniqbalsidiqui/Decode-Barcode-Image-with-JavaScript-Aspose-Barcode-1/blob/main/ReadMe-Images/13-Formidable.png" alt="Install Java">

  
## 1.5 Use the package to test the application

We have prepared a complete package that contains all the dependencies required to run this application. You just need to install Python, Node.js, Formidable and Java and then follow the steps below to run this application.

- Create folder &quot;C:\TestFolder&quot;
- Copy package contents in this folder as follows:

<img src="https://github.com/ahsaniqbalsidiqui/Decode-Barcode-Image-with-JavaScript-Aspose-Barcode-1/blob/main/ReadMe-Images/14-Package%20Contents.png" alt="Install Java">

Following are the details of contents of this package:

  - **sample2.png –** This is a sample barcode image that can be used with this sample application.

<img src="https://github.com/ahsaniqbalsidiqui/Decode-Barcode-Image-with-JavaScript-Aspose-Barcode-1/blob/main/ReadMe-Images/15-Sample%20Image.svg" alt="Install Java">

  - **lib Folder Contents–** This folder contains fileUpload.js file that works as follows:
    - This application will run using http protocol
    - It uses formidable library to upload the image file
    - First a file is loaded and saved in a folder named &quot;Images&quot;
    - This image file is read by AsposeBarCode.Reader and all the barcodes are read from this image and displayed on the web page.
  - **fileUpload.js – Application Code**
```
var http = require(&#39;http&#39;);

var formidable = require(&#39;formidable&#39;);

var fs = require(&#39;fs&#39;);

const barcode = require(&quot;aspose.barcode&quot;);

const barcode\_ = barcode.AsposeBarcode;

const QualitySettings = barcode\_.Reader.QualitySettings;

let Reader = barcode.AsposeBarcode.Reader;

let BarcodeReader = barcode.AsposeBarcode.Reader.BarcodeReader;

http.createServer(function (req, res) {

if (req.url == &#39;/fileupload&#39;) {

var form = new formidable.IncomingForm();

form.parse(req, function (err, fields, files) {

var oldpath = files.filetoupload.path;

var newpath = &#39;/TestFolder/Images/&#39; + files.filetoupload.name;

fs.rename(oldpath, newpath, function (err) {

if (err) throw err;

let full\_path = newpath;

let reader = new BarcodeReader(full\_path, null, null);

reader.setQualitySettings(QualitySettings.getHighPerformance());

let results = reader.readBarCodes();

if(results != null)

{

results.forEach(myFunction);

function myFunction(result)

{

res.write(&#39;Barcode text is:&#39;);

res.write(result.getCodeText());

res.write(&quot;\n&quot;);

}

}

res.write(&#39;Reading completed\n&#39;);

res.end();

});

});

} else {

res.writeHead(200, {&#39;Content-Type&#39;: &#39;text/html&#39;});

res.write(&#39;\&lt;form action=&quot;fileupload&quot; method=&quot;post&quot; enctype=&quot;multipart/form-data&quot;\&gt;&#39;);

res.write(&#39;\&lt;input type=&quot;file&quot; name=&quot;filetoupload&quot;\&gt;\&lt;br\&gt;&#39;);

res.write(&#39;\&lt;input type=&quot;submit&quot;\&gt;&#39;);

res.write(&#39;\&lt;/form\&gt;&#39;);

return res.end();

}

}).listen(8080);
```
  - **Node\_modules –** It contains all the required assemblies to run the aspose.barcode related code and loading the file to browser page.
  - **Images –** This folder will be used to save the uploaded images
  - **Run\_file\_upload.cmd –** This file contains command to run the .js file in lib folder. You may double click it and .js file should be executed as follows:

<img src="https://github.com/ahsaniqbalsidiqui/Decode-Barcode-Image-with-JavaScript-Aspose-Barcode-1/blob/main/ReadMe-Images/16-Run%20Application.png" alt="Install Java">

    - Now open the browser and enter htpp://localhost:8080 that will open a page as follows:

<img src="https://github.com/ahsaniqbalsidiqui/Decode-Barcode-Image-with-JavaScript-Aspose-Barcode-1/blob/main/ReadMe-Images/17-Run%20Application%202.png" alt="Install Java">

    - Click on &quot;Choose File&quot; and select the image containing barcoded.
    - Press &quot;Submit&quot; once the image is uploaded.
    - It will read the image and render the decoded string.

<img src="https://github.com/ahsaniqbalsidiqui/Decode-Barcode-Image-with-JavaScript-Aspose-Barcode-1/blob/main/ReadMe-Images/18-Program%20Output.png" alt="Install Java">

  
## 1.6 Interested in Aspose free consulting project?

[If you are also interested in a free consulting project by Aspose team then please view details on this page](https://aspose-free-consulting.github.io/)

If you have any questions about Aspose APIs, please feel free to [post your query in Aspose file format APIs Forums](https://forum.aspose.com/).

Also, you can keep in touch with the latest developments in [file format APIs offered by Aspose at our Blog](https://blog.aspose.com/).

  
## 1.7 This free consulting project is based on the following issue:
[https://github.com/aspose-free-consulting/projects/issues/119](https://github.com/aspose-free-consulting/projects/issues/119)
