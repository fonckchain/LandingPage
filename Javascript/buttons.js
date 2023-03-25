
toggleBtn = document.querySelector(".toggle_btn");
toggleBtnIcon = document.querySelector(".toggle_btn i");
dropDownMenu = document.querySelector(".dropdown_menu");
toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
  toggleBtnIcon.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars";
};

const registerBtns = document.querySelectorAll('.login-btn');
const registerForm = document.querySelector('.login-form');

registerBtns.forEach(registerBtn => {
  registerBtn.addEventListener('click', function() {
    registerForm.style.display = 'block';
    registerForm.classList.add('popup');
  });
});