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
            console.log('Ошибка:');
            console.log(error);
            // document.getElementById('PluginEnabledImg').setAttribute("src", "Img/red_dot.png");
                // document.getElementById('PlugInEnabledTxt').innerHTML = error;
            }
        );
    } else {
        window.addEventListener("message", function (event){
                if (event.data == "cadesplugin_loaded") {
                    CheckForPlugIn_NPAPI();
                } else if(event.data == "cadesplugin_load_error") {
                    document.getElementById('PluginEnabledImg').setAttribute("src", "Img/red_dot.png");
                    document.getElementById('PlugInEnabledTxt').innerHTML = "Плагин не загружен";
                }
            },
            false);
        window.postMessage("cadesplugin_echo_request", "*");
    }
}

window.onload = function() {

}
