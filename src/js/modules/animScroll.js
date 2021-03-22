function animScroll() {
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

    function anim() {
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

    function listener() {
        anim();
    }

    anim();
}

export default animScroll;