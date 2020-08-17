timeSum = 0;
var openFile = function(event) {
    fileContent = [];
    var input = event.target;
    var filesDataArray = [];
    var header = ";base64,";
    var a = document.getElementsByClassName("documents-list-text-container")[0];
    FILES_TOTAL_COUNT = input.files.length;


    var tmpStr = '';
    for (var i = 0; i < FILES_TOTAL_COUNT; i++) {
        let reader = new FileReader();
        tmpStr += '<p>' + input.files[i].name + '</p>';
        (function(file){
            reader.readAsDataURL(file);
            reader.onload = function () {
                for (var j = 0; j < FILES_TOTAL_COUNT; j++) {
                    filesDataArray[j] = reader.result;
                    fileContent[j] = filesDataArray[j].substr(filesDataArray[j].indexOf(header) + header.length);
                }
            }
        })(input.files[i]);
    }

    document.getElementById('first-step').setAttribute('class', 'nextStep');
    document.getElementById('second-step').setAttribute('class', 'currentStep');
    a.innerHTML = tmpStr;

};
