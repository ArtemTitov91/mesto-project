
import {
  cardTemplate,
  bigTitle,
  bigOpened,
  bigPicture,
} from '../utils/constants.js';

import {
   openPopup,
  } from "./modal";

//   cards are for join

  export const createCard = (dataCard) => {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImg = cardElement.querySelector(".element__image");
    const cardTitle = cardElement.querySelector(".element__title");
    const btnLike = cardElement.querySelector(".element__like");
  
    cardTitle.textContent = dataCard.name;
    cardImg.alt = dataCard.name;
    cardImg.src = dataCard.link;
  
    btnLike.addEventListener("click", (evt) =>
      evt.target.classList.toggle("element__like_active")
    );
  
    const deleteButton = cardElement.querySelector(".element__delete");
    deleteButton.addEventListener("click", function () {
      const deleteElement = deleteButton.closest(".element__group");
      deleteElement.remove();
    });
  
    cardImg.addEventListener("click", function () {
      bigPicture.setAttribute("src", dataCard.link); 
      bigPicture.setAttribute("alt", dataCard.name); 
      bigTitle.textContent = dataCard.name; 
      openPopup(bigOpened);
    });
  
    return cardElement;
  };



