
import {
  cardTemplate,
  bigTitle,
  bigOpened,
  bigPicture,
  deletePopup,
} from '../utils/constants.js';

import {
   openPopup,
  } from "./modal.js";

  import {
    likeCard,
    deleteCardsLike
   } from "./api.js";

//   cards are for join

  export const createCard = (dataCard) => {
    const cardElement = cardTemplate.cloneNode(true);
    const cardBoxDescription = cardElement.querySelector(".element__name");
    const cardImg = cardElement.querySelector(".element__image");
    const cardTitle = cardElement.querySelector(".element__title");
    const btnLike = cardElement.querySelector(".element__like");
    // const deleteButton = cardElement.querySelector(".element__delete");
    const likeCounter = cardElement.querySelector(".element__countLike");

    cardTitle.textContent = dataCard.name;
    cardImg.alt = dataCard.name;
    cardImg.src = dataCard.link;
    btnLike.setAttribute("id", dataCard.id);


    btnLike.addEventListener("click", (evt) => {
      evt.target.classList.toggle("element__like_active");
      if (btnLike.classList.contains('element__like_active')){
        likeCard(_id)
        .then(newLike =>{
          likeCounter.textContent = newLike.likes.length;
        })
      } else {
        deleteCardsLike(_id)
        .then(deleteLikes =>{
          likeCounter.textContent = deleteLikes.likes.length;
        })
      }
  });
  
    const deleteButton = document.createElement('button');
    cardBoxDescription.prepend(deleteButton);
    deleteButton.classList.add("element__delete")
    deleteButton.addEventListener("click", function () {
  openPopup(deletePopup)
    });

    
      


    // deleteButton.addEventListener("click", function () {
    //   const deleteElement = deleteButton.closest(".element__group");
    //   deleteElement.remove();
    // });
  
    cardImg.addEventListener("click", function () {
      bigPicture.setAttribute("src", dataCard.link); 
      bigPicture.setAttribute("alt", dataCard.name); 
      bigTitle.textContent = dataCard.name; 
      openPopup(bigOpened);
    });
  
    return cardElement;
  };

  export const createCardWithoutDelete = (dataCard) => {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImg = cardElement.querySelector(".element__image");
    const cardTitle = cardElement.querySelector(".element__title");
    const btnLike = cardElement.querySelector(".element__like");
    const likeCounter = cardElement.querySelector(".element__countLike");

    cardTitle.textContent = dataCard.name;
    cardImg.alt = dataCard.name;
    cardImg.src = dataCard.link;
    btnLike.setAttribute("id", dataCard.id);

  
    btnLike.addEventListener("click", (evt) => {
      evt.target.classList.toggle("element__like_active");
      if (btnLike.classList.contains('element__like_active')){
        likeCard(btnLike.id)
        .then(newLike =>{
          console.log(newLike);
          console.log(newLike.likes.length);
          likeCounter.textContent = newLike.likes.length;
        })
      } else {
        deleteCardsLike(btnLike.id)
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
  
    return cardElement;
  };



