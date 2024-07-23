// Get tab elements
const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");

// Tab toggle function
function openTab(tabName, e) {
  // Remove active classes
  for (let tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (let tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  // Add active classes to clicked tab and content
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}
// ----------open and close menubar--------------
const sideMenu = document.getElementById("sideMenu");
const openIcon = document.querySelector(".fa-bars");
const closeIcon = document.querySelector(".fa-xmark");
openIcon.addEventListener("click", () => {
  openMenu();
});
closeIcon.addEventListener("click", () => {
  closeMenu();
});
const openMenu = () => {
  sideMenu.style.right = "0";
};

const closeMenu = () => {
  sideMenu.style.right = "-200px";
};

// --------Submit a Form to Google Sheets-------------
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzJB3GXTebEKbHvIJigwhK_IWR8_pXoiYYGyxi-sPQofRt8yQDwScGAyImsTdYdnGke/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message submitted successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
