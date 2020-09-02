function organizationSig() {
    document.getElementById('main-section').setAttribute('class', 'main-section semi-invisible');
    document.getElementById('CertListBox2').setAttribute('disabled', 'disabled');
    document.getElementById('SignBtn2').setAttribute('disabled', 'disabled');

    if ('' === openFileButton.value) {
        alert('Файлы не выбраны.');
        return;
    }
    else
        if ('' === fileContent[0]) {
            alert('Выбран пустой файл');
            return;
        }
        else {
            document.getElementById('diagram-span').innerHTML = '';
            document.getElementById('diagram-b').style.fontSize = '72px';
            document.getElementById('diagram-b').innerHTML = '';
            document.getElementById('diagram-progress').setAttribute('class', 'diagram progress visible');
            Common_SignCadesBES_File('CertListBox2')
        }
}
