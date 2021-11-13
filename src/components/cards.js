
import {
  element,
  cardTemplate,
  addPopup,
  bigTitle,
  bigOpened,
  bigPicture,
  formPopupPlace
} from '../utils/constants.js';

import {
   openPopup,
   closePopup,
   handlePopupClick
  } from "./modal";

//   cards are for join

export const cards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    },
  ];
  
 
  
  const createCard = (dataCard) => {
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
      const pictureLink = cardImg.getAttribute("src");
      bigPicture.setAttribute("src", pictureLink);
      bigPicture.setAttribute("alt", "картинка места");
      bigTitle.textContent = cardTitle.textContent;
      openPopup(bigOpened);
    });
  
    return cardElement;
  };
  
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
  


