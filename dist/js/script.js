window.addEventListener('DOMContentLoaded', () => {

    // Dropdown in Trade Section

    const dropdownParent = document.querySelector('.trade__th'),
          hashrate = dropdownParent.querySelector('.trade__hr'),
          dropdown = document.querySelector('.trade__dropdown');
    

    dropdownParent.addEventListener('click', () => {
        dropdown.classList.toggle('displaynone');
    });

    // trade calc 

    const dropdownItems = dropdown.querySelectorAll('.trade__dropdown-item'),
          inputHash = document.querySelector('.trade__hashrate'),
          calcButton = document.querySelector('.trade__calculate'),
          tradeETH = document.querySelector('.trade__ethTXT'),
          trade__USD = document.querySelector('.usd');


    let tradeOptions = {
        hashrate: 'TH/S',
        ratio: 0.2412,
        usdValue: 300,

        changeHashrate(hr) {
            if (hr == 'TH/s') {
                this.ratio = 0.2412;
            } else if (hr == 'MH/s') {
                this.ratio = 0.35; 
            } else if (hr == 'GH/s') {
                this.ratio = 0.4;
            } else if (hr == 'PH/s') {
                this.ratio = 0.5;
            } else if (hr == 'EH/s') {
                this.ratio = 0.6;
            } else if (hr == 'KH/s') {
                this.ratio = 0.2;
            }
        }
    }

    dropdown.addEventListener('click', (e) => {
        if (e.target.classList.contains('trade__dropdown-item')) {
            dropdownItems.forEach(item => {
                if (item == e.target) {
                    hashrate.textContent = `${item.textContent}`;
                    tradeOptions.changeHashrate(`${item.textContent}`);
                }
            });
        }
    });

    function updateRevenue() {
        if (inputHash.value != '') {
            tradeETH.textContent = `${(tradeOptions.ratio * inputHash.value).toFixed(2)} ETH`;
            trade__USD.textContent = `$${(tradeETH.textContent.replace(/ETH/i, '')  * tradeOptions.usdValue).toFixed()}`;
        } else {
            tradeETH.textContent = 'Enter data';
            trade__USD.textContent = '($0)';
        }
    }

    calcButton.addEventListener('click', () => {
        updateRevenue();
    });

    document.body.addEventListener('keydown', (e) => {
        if (e.code == 'Enter') {
            updateRevenue();
        }
    });

    // menu 

    const menu = document.querySelector('.menu');

    menu.style.height = `${document.documentElement.clientHeight}px`;

    // Navbar in scroll

    const header = document.querySelector('.header'),
          hamburger = header.querySelector('.header__hamburger');

    let scrollTopNow;

    function updateNavbar() {
        if (document.documentElement.clientWidth > 900) {
            scrollTopNow = window.pageYOffset;
            if (scrollTopNow > 50) {
                header.style.paddingTop = `15px`;
                header.style.borderBottom = '1px solid rgba(242, 242, 242, .3)';
            } else if (scrollTopNow <= 50) {
                header.style.paddingTop = `60px`;
                header.style.borderBottom = 'none';
            }
        }
    }

    updateNavbar();

    window.addEventListener('scroll', () => {
        updateNavbar();
    });

    hamburger.addEventListener('click', () => {
        if (hamburger.classList.contains('hamburger_out')) {
            hamburger.children[0].classList.remove('firstspanIn');
            hamburger.children[2].classList.remove('thirdspanIn');
            hamburger.children[0].classList.add('firstspanOut');
            hamburger.children[2].classList.add('thirdspanOut');
            hamburger.classList.remove('hamburger_out');
            menu.style.height = `${document.documentElement.clientHeight}px`;
            menu.style.right = '0';
            document.body.style.overflow = 'hidden';
        } else {
            hamburger.children[0].classList.remove('firstspanOut');
            hamburger.children[0].classList.add('firstspanIn');
            hamburger.children[2].classList.remove('thirdspanOut');
            hamburger.children[2].classList.add('thirdspanIn');
            hamburger.classList.add('hamburger_out');
            menu.style.height = `${document.documentElement.clientHeight}px`;
            menu.style.right = '-100%';
            document.body.style.overflow = 'visible';
        }
    });

    // piano 

    const footerLinks = document.querySelector('.footer__links'),
          footerResources = document.querySelector('.footer__resources');
    
    function piano(item, otherItem) {
        item.addEventListener('click', () => {
            item.classList.toggle('piano');
            if (otherItem.classList.contains('piano')) {
                otherItem.classList.remove('piano');
            }
        });
        
    }

    piano(footerLinks, footerResources);
    piano(footerResources, footerLinks);

    // modal

    const modalEmail = document.querySelector('.modal__email');

    function showEmailModal() {
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



    


    // form
    
    const forms = document.querySelectorAll('form');

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

    // scrollAnim
    
    const animItems = document.querySelectorAll('.anim');
    

    function isPartiallyVisible(el) {
        let elementBoundary = el.getBoundingClientRect();     
        let top = elementBoundary.top;
        let bottom = elementBoundary.bottom;
        let height = elementBoundary.height;
     
        return ((top <= window.innerHeight - 100) && (height + window.innerHeight >= bottom));
    }

    window.addEventListener('scroll', listener);

    function listener() {
        animItems.forEach((item) => {
            if (isPartiallyVisible(item)){
                if (item.classList.contains('anim4')) {
                    item.classList.add('animate__fadeInRight');
                } else if (item.classList.contains('anim5')){
                    item.classList.add('animate__fadeInLeft');
                } else if (item.classList.contains('anim6')){
                    item.classList.add('animate__fadeInRight');
                } else {
                    item.classList.add('animate__fadeInUp');
                }
            }
        });
    }

    animItems.forEach((item) => {
        if (isPartiallyVisible(item)){
            if (item.classList.contains('anim4')) {
                item.classList.add('animate__fadeInRight');
            } else if (item.classList.contains('anim5')){
                item.classList.add('animate__fadeInLeft');
            } else if (item.classList.contains('anim6')){
                item.classList.add('animate__fadeInRight');
            } else {
                item.classList.add('animate__fadeInUp');
            }
        }
    });

    



});