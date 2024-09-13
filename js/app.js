const navs = document.querySelectorAll('.nav-btns li');

navs.forEach((link) => {
    link.addEventListener('click', function changeActive() {
        navs.forEach((link) => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
})