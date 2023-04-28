const openPopupBtn = document.querySelector('.open-popup');
const popup = document.querySelector('.popup');
const closePopupBtns = document.querySelectorAll('.cancelarbtn, .overlay');

openPopupBtn.addEventListener('click', () => {
  popup.classList.add('active');
});

closePopupBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    popup.classList.remove('active');
  });
});