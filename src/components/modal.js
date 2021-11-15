
// open popup
import { 
  editPopup,
  addPopupButton, 
  addPopup, 
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

//open 'place' window form
  addPopupButton.addEventListener("click", function () {
    openPopup(addPopup);
  });

// close popup
export function closePopup(popupClose) {
    popupClose.classList.add("popup_closed");
    popupClose.classList.remove("page__trasition");
  }

// save information writes in input

export function handleProfileSubmit(evt) {
  evt.preventDefault();

  mainName.textContent = nameInput.value;
  mainJob.textContent = jobInput.value;

  closePopup(editPopup);
}

//push ESC for close popup
const  escClose = (evt) => {
  if (evt.key === 'Escape') {
    closePopup(openModalWindow);
  }
};
