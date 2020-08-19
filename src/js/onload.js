var FILES_TOTAL_COUNT = 0;

var txtDataToSign = "Hello World";
document.getElementById("SignatureTxtBox").innerHTML = "";
var canPromise = !!window.Promise;
if(isEdge()) {
    ShowEdgeNotSupported();
} else {
    if(canPromise) {
        cadesplugin.then(function () {
                Common_CheckForPlugIn();
            },
            function(error) {
                document.getElementById('openFileButton').setAttribute('disabled', 'disabled');
                document.getElementById('CertListBox').setAttribute('disabled', 'disabled');
                document.getElementById('SignBtn').setAttribute('disabled', 'disabled');
                document.getElementById('documents-list-text-container').innerHTML = "Плагин не найден!";
                alert('Плагин CryptoPro Extension for CAdES Browser Plug-in не найден');
            }
        );
    } else {
        window.addEventListener("message", function (event){
                if (event.data === "cadesplugin_loaded") {
                    CheckForPlugIn_NPAPI();
                } else if(event.data === "cadesplugin_load_error") {document.getElementById('openFileButton').setAttribute('disabled', 'disabled');
                    document.getElementById('CertListBox').setAttribute('disabled', 'disabled');
                    document.getElementById('SignBtn').setAttribute('disabled', 'disabled');
                    document.getElementById('documents-list-text-container').innerHTML = "Плагин не найден!";
                    alert('Плагин CryptoPro Extension for CAdES Browser Plug-in не найден');
                }
            },
            false);
        window.postMessage("cadesplugin_echo_request", "*");
    }
}

window.onload = function() {

}
