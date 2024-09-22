function openPage(pageName, event) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  document.getElementById(pageName).classList.add("active");
  event.currentTarget.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("defaultOpen").click();
});
