console.log("модал подключен");
// open popup
import {editPopupButton, 
  editPopup,
  formPopupName, 
  addPopupButton, 
  addPopup,
  closeButtonPlace,  
  mainName, 
  mainJob, 
  nameInput, 
  jobInput,
  openModalWindow,
} from '../utils/constants.js';


export function openPopup(popupElement) {
    popupElement.classList.remove("popup_closed");
    popupElement.classList.add("page__trasition");
    document.addEventListener('keydown', escClose);
  }

  // open 'name' window form
    editPopupButton.addEventListener("click", function () {
    nameInput.value = mainName.textContent;
    jobInput.value = mainJob.textContent;
    openPopup(editPopup);
  });

//open 'place' window form
  addPopupButton.addEventListener("click", function () {
    openPopup(addPopup);
  });

// close popup
  function closePopup(popupClose) {
    popupClose.classList.add("popup_closed");
    popupClose.classList.remove("page__trasition");
    document.removeEventListener('keydown', escClose);
  }
  
      // close 'name' window form
  popup.addEventListener('click', handlePopupClick);

  //close 'place' window form
  closeButtonPlace.addEventListener("click", function () {
    closePopup(addPopup);
  });
  
// save information writes in input

function handleProfileSubmit(evt) {
  evt.preventDefault();

  mainName.textContent = nameInput.value;
  mainJob.textContent = jobInput.value;

  closePopup(editPopup);
}

formPopupName.addEventListener("submit", handleProfileSubmit);

//push ESC for close popup

const  escClose = (evt) => {
  if (evt.key === 'Escape') {
    closePopup(openModalWindow);
  }
};
document.addEventListener('keydown', escClose);

// close overlay and cross

function handlePopupClick(event) {
  if (event.target.classList.contains("popup__img") || event.target.classList.contains('popup')) {
    closePopup(event.target.closest('.popup'));
  }
}