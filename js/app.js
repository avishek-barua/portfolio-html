document.addEventListener('DOMContentLoaded', () => {
    const tablinks = document.querySelectorAll('.tablink');
    const contents = document.querySelectorAll('.content');

    tablinks.forEach(tab => {
        tab.addEventListener('click', () => {
            tablinks.forEach(link => link.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));

            document.getElementById(tab.innerHTML.toLowerCase()).classList.add('active');
            tab.classList.add('active');
        });
    });

    document.querySelector('.tablink.active').click();
});
