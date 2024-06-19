document.querySelectorAll('.submenu a').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.submenu a').forEach(el => el.classList.remove('selected'));
        this.classList.add('selected');
    });
});
