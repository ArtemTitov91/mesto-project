
import {
  cardTemplate,
  bigTitle,
  bigOpened,
  bigPicture,
  mainName,
  mainJob,
  deletePopup,
  PopupDeleteButton,
  submitButton
} from '../utils/constants.js';

import {
  closePopup,
   openPopup,
  } from "./modal.js";

  import {
    likeCard,
    deleteCardsLike,
    queryUser
   } from "./api.js";

//   cards are for join

  
  export const createCard = (dataCard) => {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImg = cardElement.querySelector(".element__image");
    const cardTitle = cardElement.querySelector(".element__title");
    const btnLike = cardElement.querySelector(".element__like");
    const likeCounter = cardElement.querySelector(".element__countLike");
    const deleteButton = cardElement.querySelector(".element__delete");

    cardTitle.textContent = dataCard.name;
    cardImg.alt = dataCard.name;
    cardImg.src = dataCard.link;
    likeCounter.textContent = dataCard.likes;

  
    btnLike.addEventListener("click", (evt) => {
      evt.target.classList.toggle("element__like_active");
      if (btnLike.classList.contains('element__like_active')){
        likeCard(dataCard.id)
        .then(newLike =>{
          likeCounter.textContent = newLike.likes.length;
        })
      } else {
        deleteCardsLike(dataCard.id)
        .then(deleteLikes =>{
          likeCounter.textContent = deleteLikes.likes.length;
        })
      }
  });
  
    cardImg.addEventListener("click", function () {
      bigPicture.setAttribute("src", dataCard.link); 
      bigPicture.setAttribute("alt", dataCard.name); 
      bigTitle.textContent = dataCard.name; 
      openPopup(bigOpened);
    });
    
 
     const deletebutton = () => {
      if (dataCard.person !== mainName.textContent) {
        deleteButton.remove()
      } 
      deleteButton.addEventListener("click", function () { 

        openPopup(deletePopup);
        const openModalWindow = document.querySelector('.page__trasition');
      const popupButton = openModalWindow.querySelector('.popup__button');
        popupButton.classList.add("popup__button_delete");
      })
      };
      deletebutton()
      return cardElement;
  };



