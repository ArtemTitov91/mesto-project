// open popup

export function openPopup(popupElement) {
    popupElement.classList.remove("popup_closed");
    popupElement.classList.add("page__trasition");
    document.addEventListener('keydown', escClose);
  }


// close popup
export function closePopup(popupClose) {
    popupClose.classList.add("popup_closed");
    popupClose.classList.remove("page__trasition");
    document.removeEventListener('keydown', escClose);
    
  }


//push ESC for close popup
const  escClose = (evt) => {
  if (evt.key === 'Escape') {
  const openModalWindow = document.querySelector('.page__trasition');
    closePopup(openModalWindow);
  }
};
