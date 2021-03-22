function showEmailModal() {
    const modalEmail = document.querySelector('.modal__email');
    modalEmail.classList.add('displayblock');
    modalEmail.classList.add('opacityIn');
    setTimeout(() => {
        modalEmail.classList.remove('opacityIn');
        modalEmail.classList.add('opacityOut');
        setTimeout(() => {
            modalEmail.classList.remove('displayblock');
            modalEmail.classList.remove('opacityOut');
        }, 500);
    }, 4000);
}

function modal() {
    // modal


    const modalReg = document.querySelector('.modal__reg'),
          modalRegClose = modalReg.querySelector('.modal__reg-close'),
          buttonsForOpenModalReg = document.querySelectorAll('[data-reg]');
    

    buttonsForOpenModalReg.forEach(item => {
        item.addEventListener('click', () => {
            showRegModal();
        });
    });

    modalRegClose.addEventListener('click', () => {
        removeReg();
    });
    
    
    function showRegModal() {
        modalReg.classList.add('displayflex');
        modalReg.classList.add('opacityIn');
        document.body.style.overflow = 'hidden';
    }

    function removeReg() {
        modalReg.classList.remove('opacityIn');
        modalReg.classList.add('opacityOut');
        setTimeout(() => {
            modalReg.classList.remove('displayflex');
            document.body.style.overflow = 'visible';
            modalReg.classList.remove('opacityOut');
        }, 500);
    }

    function regis() {
        function toggle(text) {
            modalReg.querySelector('.modal__reg-title').textContent = text;
            modalReg.querySelectorAll('input').forEach(item => {item.classList.toggle('displaynone');});
            modalReg.querySelector('button').classList.toggle('displaynone');
        }
        toggle('Yay, you are registered!');
        setTimeout(() => {
            removeReg();
            setTimeout(() => {
                toggle('Hello!');
            }, 500);
        }, 2000);
    }
}

export default modal;
export {showEmailModal};