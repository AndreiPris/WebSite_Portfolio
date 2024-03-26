const goToPositionHome = document.getElementById("home");
const goToPositionSkills = document.getElementById("skills");
const goToPositionExperience = document.getElementById("experience");
const goToPositionPortfolio = document.getElementById("porfolio");
const goToPositionContacts = document.getElementById("contacts");
const goToTopButton = document.getElementById("go-to-top-button");



goToPositionHome.onclick = () => {
    window.scroll({
        top: 100,
        behavior: "smooth",
    });
};

goToPositionContacts.onclick = () => {
    window.scroll({
        top: document.body.scrollHeight,
        behavior: "smooth",
    });
};

goToPositionContacts.onclick = () => {
    window.scroll({
        top: document.body.scrollHeight,
        behavior: "smooth",
    });
};

goToPositionContacts.onclick = () => {
    window.scroll({
        top: document.body.scrollHeight,
        behavior: "smooth",
    });
};

goToPositionContacts.onclick = () => {
    window.scroll({
        top: document.body.scrollHeight,
        behavior: "smooth",
    });
};

window.onscroll = () => {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (
        document.body.scrollTop > 700 ||
        document.documentElement.scrollTop > 700
    ) {
        goToTopButton.style.display = "block";
    } else {
        goToTopButton.style.display = "none";
    }
  }

  goToTopButton.onclick = () => {
    goToTopButton.style.display = "none";
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
};
