timeSum = 0;
let openFile = function (event) {

    fileContent = [];
    let input = event.target;
    let filesDataArray = [];
    let header = ";base64,";
    let a = document.getElementsByClassName("documents-list-text-container")[0];
    FILES_TOTAL_COUNT = input.files.length;


    let tmpStr = '';
    for (let i = 0; i < FILES_TOTAL_COUNT; i++) {
        let reader = new FileReader();
        tmpStr += '<p>' + input.files[i].name + '</p>';
        fileNames[i] = input.files[i].name;
        (function (file) {
            reader.readAsDataURL(file);
            reader.onload = function () {
                for (let j = 0; j < FILES_TOTAL_COUNT; j++) {
                    filesDataArray[j] = reader.result;
                    fileContent[j] = filesDataArray[j].substr(filesDataArray[j].indexOf(header) + header.length);
                }
            }
        })(input.files[i]);
    }

    document.getElementById('first-step').setAttribute('class', 'step nextStep');
    document.getElementById('second-step').setAttribute('class', 'step currentStep');
    a.innerHTML = tmpStr;

};
