$(document).ready(function() {
    const inputID = document.getElementById('id');
    const inputPW = document.getElementById('pw');
    const idPlaceholder = document.getElementById('id_placeholder');
    const pwPlaceholder = document.getElementById('pw_placeholder');

    if (inputID && inputPW) {
        inputID.addEventListener('focus', () => {
            $(idPlaceholder).addClass('focused');
        });
        inputID.addEventListener('blur', () => {
            if(inputID.value===null || inputID.value==='') {
                $(idPlaceholder).removeClass('focused');
            } else {
                $(idPlaceholder).addClass('focused');
            }
        });
        
        inputPW.addEventListener('focus', () => {
            $(pwPlaceholder).addClass('focused');
        });
        inputPW.addEventListener('blur', () => {
            if(inputID.value===null || inputID.value==='') {
                $(pwPlaceholder).removeClass('focused');
            } else {
                $(pwPlaceholder).addClass('focused');
            }
        });
    } else {
        console.log("해당 ID를 가진 요소가 존재하지 않습니다.");
    }
});

