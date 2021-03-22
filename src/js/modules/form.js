import {showEmailModal} from './modal';

function form() {
    // form
    
    const forms = document.querySelectorAll('form'),
          modalEmail = document.querySelector('.modal__email');

    forms.forEach(item => {
        if (item.getAttribute('data-news') == 'news') {
            postData(item, 'news');
        } else {
            postData(item, 'reg');
        }
    });

    const message = {
        access: 'Thank you for subscribing to our newsletter!',
        fail: 'Ooops, something went wrong',
    }

    function postData(form, name) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            const postData = async (url, data) => {
                
                const res = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: data,
                });

                if (!res.ok) {
                    throw new Error(`Could not fetch ${url}, status ${res.status}`);
                }

                return await res.json();
            }
            
            if (name == 'news') {
                postData('http://localhost:3000/emails', json)
                .then(() => {
                    modalEmail.textContent = message.access;
                    showEmailModal();
                })
                .catch(() => {
                    modalEmail.textContent = message.fail;
                    showEmailModal();
                })
                .finally(() => {
                    form.reset();
                });
            } else if (name == 'reg') {
                postData('http://localhost:3000/reg', json)
                .then(() => {
                    regis();
                })
                .catch(() => {
                    
                })
                .finally(() => {
                    form.reset();
                });
            }

            
        });
    }
}

export default form;