window.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.trade__th');

    dropdown.addEventListener('click', () => {
        dropdown.querySelector('.trade__dropdown').classList.toggle('displaynone');
    });
});