import {
    cards,
    element,
    addPopup,
    formPopupPlace,
    nameInputPlace,
    jobInputPlace,
    bigOpened,
    editPopupButton,
    nameInput,
    jobInput,
    mainName,
    mainJob,
    editPopup,
    popup,
    formPopupName
} from "../utils/constants.js";

import {
    handleProfileSubmit,
    openPopup,
    closePopup
   } from "../components/modal.js";


   import {
    createCard
   } from "../components/cards.js"

const addCard = (card, container) => {
    container.prepend(card);
  };
  
  cards.forEach(function (item) {
    const card = createCard(item);
    addCard(card, element);
  });
  function handleCardSubmit(evt) {
    evt.preventDefault();
    const objCard = {
      name: nameInputPlace.value,
      link: jobInputPlace.value,
    };
  
    const newCard = createCard(objCard);
    addCard(newCard, element);
    closePopup(addPopup);
  
    formPopupPlace.reset();
  }

  formPopupPlace.addEventListener("submit", handleCardSubmit);
  
  bigOpened.addEventListener("click", handlePopupClick);

   // open 'name' window form
  editPopupButton.addEventListener("click", function () {
    nameInput.value = mainName.textContent;
    jobInput.value = mainJob.textContent;
    openPopup(editPopup);
  });
        // close 'name' window form
        popup.addEventListener('click', handlePopupClick);

        //close 'place' window form
        addPopup.addEventListener("click", handlePopupClick);

        formPopupName.addEventListener("submit", handleProfileSubmit);

        // close overlay and cross

export function handlePopupClick(event) {
    if (event.target.classList.contains("popup__img") || event.target.classList.contains('popup')) {
      closePopup(event.target.closest('.popup'));
    }
  }
  

import './index.css';
import '../components/modal.js';
import '../components/validate.js';
import '../components/cards.js';



