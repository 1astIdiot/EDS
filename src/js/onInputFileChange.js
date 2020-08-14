var openFile = function (event) {
    fileContent = [];
    var input = event.target;
    var filesDataArray = [];
    var header = ";base64,";
    FILES_TOTAL_COUNT = input.files.length;

    for (var i = 0; i < FILES_TOTAL_COUNT; i++) {
        var reader = new FileReader();
        reader.readAsDataURL(input.files[i]);
        filesDataArray[i] = reader.result;
        fileContent[i] = filesDataArray[i].substr(filesDataArray[i].indexOf(header) + header.length);
    }

    // reader.readAsDataURL(input.files[0]);
    // reader.onload = function () {
    //     var fileData = reader.result;
    //     fileContent = fileData.substr(fileData.indexOf(header) + header.length);
    // };
};