const openSearchButton = document.querySelector('.popup-search__open');
const popupSearchForm = document.querySelector('.popup-search__form');
const dateInInput = document.querySelector('#popup-date-in');
const dateOutInput = document.querySelector('#popup-date-out');
const adultsInput = document.querySelector('.adults-input');
const childrenInput = document.querySelector('.children-input');



openSearchButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupSearchForm.classList.toggle('popup-search__form--show');
  dateInInput.focus();
});

popupSearchForm.addEventListener('submit', function(evt) {
  if (!dateInInput.value || !dateOutInput.value || !adultsInput.value) {
    evt.preventDefault();
  } else {
    localStorage.setItem("adults", adultsInput.value);
    localStorage.setItem("children", childrenInput.value);
  }

});


