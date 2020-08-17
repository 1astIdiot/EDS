function doctorSig(attr) {
    document.getElementById('main-section').setAttribute('class', 'main-section semi-invisible');

    if ('' === openFileButton.value)
    { alert('Файлы не выбраны.'); return; }
    else
    if ('' === fileContent[0])
    {
        console.log(fileContent);
        alert('Выбран пустой файл');
        return;
    }
    else {
        document.getElementById('diagram-progress').setAttribute('class', 'diagram progress visible');
        Common_SignCadesBES_File('CertListBox')
    }

    // function progressView(){
    //     let diagramBox = document.querySelectorAll('.diagram.progress');
    //     diagramBox.forEach((box) => {
    //         let deg = (360 * box.dataset.percent / 100) + 180;
    //         if(box.dataset.percent >= 50){
    //             box.classList.add('over_50');
    //         }else{
    //             box.classList.remove('over_50');
    //         }
    //         box.querySelector('.piece.right').style.transform = 'rotate('+deg+'deg)';
    //     });
    // }
    progressView();

    document.getElementById('CertListBox').setAttribute('disabled', 'disabled');
    document.getElementById('SignBtn').setAttribute('disabled', 'disabled');
    document.getElementById('organization-name').setAttribute('class', 'currentStep');
    document.getElementById('second-step').setAttribute('class', 'nextStep');
    document.getElementById('third-step').setAttribute('class', 'currentStep');
}

