This free consulting project will help you in understanding the usage of Aspose.BarCode for Node.js via Java. You can take a picture of a barcode and then display the decoded string in browser.

# 1. Environment Settings

You need to install Java, Python, Node.js and Formidable to run this sample application. The latest versions are recommended. Follow the below steps to establish the environment:

  
## 1.1 Install Java

- Download the latest Java from the following link:

[https://www.oracle.com/java/technologies/javase-jdk15-downloads.html](https://www.oracle.com/java/technologies/javase-jdk15-downloads.html)

![](RackMultipart20210323-4-2oiyp1_html_7aa697a294b913f1.gif)

- Install latest version of JAVA SE Development Kit by executing &quot;jdk-15.0.2\_windows-x64\_bin.exe&quot;. (Current Version is 15.0.2).

![](RackMultipart20210323-4-2oiyp1_html_65b0b2445d8dbbf4.gif)

- Press Yes and proceed with the Wizard with default options. It will install latest JDK as shown below.

![](RackMultipart20210323-4-2oiyp1_html_471388eab2d40427.gif)

- Add or Set the environment variable JAVA\_HOME in your operating system as follows:

![](RackMultipart20210323-4-2oiyp1_html_905756e190e1d93e.gif)

- Add this value to &quot;path&quot; by adding new entry as shown below:

![](RackMultipart20210323-4-2oiyp1_html_19f116655985ce1a.gif)

- Alternatively, you may install Java using npm as follows:

- npm I java

  
## 1.2 Install Python

- Download the latest version of Python from the following link:

[https://www.python.org/downloads/](https://www.python.org/downloads/)

![](RackMultipart20210323-4-2oiyp1_html_ea79c69e1be94791.png)

- Install Python using python-3.9.2-amd64.exe (Current version is 3.9.2).

![](RackMultipart20210323-4-2oiyp1_html_bdc7c4d39dd8e2bf.gif)

- Alternatively you may install Python from npm as follows:

- npm i python

  
## 1.3 Install Node.js

- Download the latest version from the following link:

[https://nodejs.org/en/download/](https://nodejs.org/en/download/)

![](RackMultipart20210323-4-2oiyp1_html_598a610a1132c764.png)

- Install the latest version of Node.js using &quot;node-v14.16.0-x64.msi&quot;. (Current version is 14.16.0). Following options will be displayed by the Wizard. Select the default options as shown in sequence of images below:

![](RackMultipart20210323-4-2oiyp1_html_903be751120e3fa0.gif)

![](RackMultipart20210323-4-2oiyp1_html_2b5813e0f4b8a8c3.gif)

![](RackMultipart20210323-4-2oiyp1_html_7e56f26ebae815b0.gif)

![](RackMultipart20210323-4-2oiyp1_html_8301773e77b9f0e1.gif)

Press Next and complete the Node.js installation.

  
## 1.4 Install Formidable

Formidable is required to upload file in this application. Use npm to install formidable from the command window as follows:

![](RackMultipart20210323-4-2oiyp1_html_f1af7947d62a82b1.png)

  
## 1.5 Use the package to test the application

We have prepared a complete package that contains all the dependencies required to run this application. You just need to install Python, Node.js, Formidable and Java and then follow the steps below to run this application.

- Create folder &quot;C:\TestFolder&quot;
- Copy package contents in this folder as follows:

![](RackMultipart20210323-4-2oiyp1_html_1ea5ece584c62ad0.gif)

Following are the details of contents of this package:

  - **sample2.png –** This is a sample barcode image that can be used with this sample application.

![](RackMultipart20210323-4-2oiyp1_html_5cd82d25095cc95e.gif)

  - **lib Folder Contents–** This folder contains fileUpload.js file that works as follows:
    - This application will run using http protocol
    - It uses formidable library to upload the image file
    - First a file is loaded and saved in a folder named &quot;Images&quot;
    - This image file is read by AsposeBarCode.Reader and all the barcodes are read from this image and displayed on the web page.
  - **fileUpload.js – Application Code**

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

  - **Node\_modules –** It contains all the required assemblies to run the aspose.barcode related code and loading the file to browser page.
  - **Images –** This folder will be used to save the uploaded images
  - **Run\_file\_upload.cmd –** This file contains command to run the .js file in lib folder. You may double click it and .js file should be executed as follows:

![](RackMultipart20210323-4-2oiyp1_html_1a82e68a39419be4.gif)

    - Now open the browser and enter htpp://localhost:8080 that will open a page as follows:

![](RackMultipart20210323-4-2oiyp1_html_40e0af89ae28b8c7.gif)

    - Click on &quot;Choose File&quot; and select the image containing barcoded.
    - Press &quot;Submit&quot; once the image is uploaded.
    - It will read the image and render the decoded string.

![](RackMultipart20210323-4-2oiyp1_html_3a8e59714a539bc7.gif)

  
## 1.6 Interested in Aspose free consulting project?

[If you are also interested in a free consulting project by Aspose team then please view details on this page](https://aspose-free-consulting.github.io/)

If you have any questions about Aspose APIs, please feel free to [post your query in Aspose file format APIs Forums](https://forum.aspose.com/).

Also, you can keep in touch with the latest developments in [file format APIs offered by Aspose at our Blog](https://blog.aspose.com/).

  
## 1.7 This free consulting project is based on the following issue:
[https://github.com/aspose-free-consulting/projects/issues/119](https://github.com/aspose-free-consulting/projects/issues/119)
