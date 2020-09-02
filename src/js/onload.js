var FILES_TOTAL_COUNT = 0;

var txtDataToSign = "Hello World";
document.getElementById("SignatureTxtBox").innerHTML = "";
var canPromise = !!window.Promise;
if(isEdge()) {
    ShowEdgeNotSupported();
} else {
    if(canPromise) {
        document.getElementById('openFileButton').setAttribute('disabled', 'disabled');
        document.getElementById('CertListBox').setAttribute('disabled', 'disabled');
        document.getElementById('SignBtn').setAttribute('disabled', 'disabled');

        cadesplugin.then(function () {
                document.getElementById('openFileButton').removeAttribute('disabled');
                document.getElementById('CertListBox').removeAttribute('disabled');
                document.getElementById('SignBtn').removeAttribute('disabled');
                Common_CheckForPlugIn();
            },
            function(error) {
                document.getElementById('documents-list-text-container').innerHTML = "Плагин не найден!";
                alert('Плагин CryptoPro Extension for CAdES Browser Plug-in не найден');
            }
        );
    } else {
        window.addEventListener("message", function (event){
                document.getElementById('CertListBox').setAttribute('disabled', 'disabled');
                document.getElementById('SignBtn').setAttribute('disabled', 'disabled');
                if (event.data === "cadesplugin_loaded") {
                    document.getElementById('CertListBox').removeAttribute('disabled');
                    document.getElementById('SignBtn').removeAttribute('disabled');
                    CheckForPlugIn_NPAPI();
                } else if(event.data === "cadesplugin_load_error") {document.getElementById('openFileButton').setAttribute('disabled', 'disabled');
                    alert('Плагин CryptoPro Extension for CAdES Browser Plug-in не найден');
                    document.getElementById('documents-list-text-container').innerHTML = "Плагин не найден!";
                }
            },
            false);
        window.postMessage("cadesplugin_echo_request", "*");
    }
}

window.onload = function() {

}
