function dropdown() {
    // Dropdown in Trade Section

    const dropdownParent = document.querySelector('.trade__th'),
          hashrate = dropdownParent.querySelector('.trade__hr'),
          dropdown = document.querySelector('.trade__dropdown');
    

    dropdownParent.addEventListener('click', () => {
        dropdown.classList.toggle('displaynone');
    });
}

export default dropdown;