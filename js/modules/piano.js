function piano() {
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
}

export default piano;