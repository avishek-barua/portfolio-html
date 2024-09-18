const navs = document.querySelectorAll('.nav-btns li');
const curve = document.querySelector('.curve');


navs.forEach((link) => {


    link.addEventListener('click', function changeActive() {

        navs.forEach((link) => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });

})


function openPage(pageName) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent;

    tabcontent = document.getElementsByClassName("content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove('active');
    }



    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
    document.getElementById(pageName).classList.add('active');

}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();