import './index.css';
import '../components/api.js'
import '../components/modal.js';
import '../components/validate.js';
import '../components/cards.js';


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
    formPopupName,
    addPopupButton,
    deletePopup,
    avatar,
    avatarPopup,
    avatarInput,
    avatarForm,
    popupDelete,
    popupDeleteButton,
    submitButton
} from "../utils/constants.js";

import {
    openPopup,
    closePopup
   } from "../components/modal.js";


   import {
    createCard,
   } from "../components/cards.js";

   import {
    enableValidation,

   } from "../components/validate.js";

   import {
    queryLoadCards,
    addNewCard,
    replaceAvatar,
    queryUser,
    editProfile
   } from "../components/api.js";
   
   queryUser()
   .then((result) => {
    mainName.textContent = result.name;
    mainJob.textContent = result.about;
    avatar.style = result.avatar;
    avatar.style.backgroundImage = `url(${result.avatar})`
})
.catch((err) => {
  console.log("Don't load profile", err);
});



export const addCard = (card, container) => {
    container.prepend(card);

  };
  export const loadCards = () =>{
  queryLoadCards()
  .then((result) => {
    for(let key in result){
      let obj = {
          name: result[key].name,
          link: result[key].link,
          id: result[key]._id,
          likes: result[key].likes.length,
          person: result[key].owner.name
        };
        addCard(createCard(obj), element);
    }
    return cards;
  })
  .catch((err) => {
  console.log("Don't load cards", err);
  });
};
loadCards();

  function handleCardSubmit(evt) {
    evt.preventDefault();
    addNewCard(nameInputPlace.value, jobInputPlace.value)
    .then ((data) => data)
   .catch ((err) => {"Don't load card", err})
   .finally (() =>{NotloaderText();
    const objCard = {
      name: nameInputPlace.value,
      link: jobInputPlace.value,
    };
    const newCard = createCard(objCard);
    addCard(newCard, element);
    
    
    
    closePopup(addPopup);
  
    formPopupPlace.reset();
  })

  }
  const handleAvatarButton = (evt) => {
    evt.preventDefault();
    replaceAvatar(avatarInput.value)
    .then((res) =>{
      avatar.style.backgroundImage = `url(${res.avatar})`

    })
    .catch((err) => {
      console.log("Can't load avatar", err);
    })
    .finally (() =>{ NotloaderText();closePopup(avatarPopup);})
    
  }

  avatarForm.addEventListener("submit", handleAvatarButton);

  formPopupPlace.addEventListener("submit", handleCardSubmit);
  
  bigOpened.addEventListener("click", handlePopupClick);

   // open 'name' window form
  editPopupButton.addEventListener("click", function () {
    nameInput.value = mainName.textContent;
    jobInput.value = mainJob.textContent;
    openPopup(editPopup);
  });
  
  // open avatar
  avatar.addEventListener('click', () =>{
    openPopup(avatarPopup);
  })

        // close 'name' window form
        popup.addEventListener('click', handlePopupClick);

        //close 'place' window form
        addPopup.addEventListener('click', handlePopupClick);

        //close 'avatar' window form
        avatarPopup.addEventListener('click', handlePopupClick);

        formPopupName.addEventListener('submit', handleProfileSubmit);

        deletePopup.addEventListener('click', handlePopupClick);
        // close overlay and cross

export function handlePopupClick(event) {
    if (event.target.classList.contains("popup__img") || event.target.classList.contains('popup')) {
      closePopup(event.target.closest('.popup'));
    }
  }
  
export const loaderText = () => {
  const openModalWindow = document.querySelector('.page__trasition');
  const popupButton = openModalWindow.querySelector('.popup__button');
  preloaderText(popupButton)
}
export const NotloaderText = () => {
  const openModalWindow = document.querySelector('.page__trasition');
  const popupButton = openModalWindow.querySelector('.popup__button');
  initinalText(popupButton)
  
}

const preloaderText = (text ) => {
  text.textContent = "Сохранение..."
  text.disabled = true;
}

const initinalText = (text) => {
  text.textContent = "Сохранить"
  text.disabled = false;
}

  //open 'place' window form
  addPopupButton.addEventListener("click", function () {
    openPopup(addPopup);
  });
  // save information writes in input

function handleProfileSubmit(evt) {
  evt.preventDefault();

  mainName.textContent = nameInput.value;
  mainJob.textContent = jobInput.value;
  editProfile()
    .then ((result) =>{
      mainName.textContent = result.name;
      mainJob.textContent = result.about;
    })
    .catch((err) => {
      console.log("Don't sent profile", err);
    })
    .finally (() => NotloaderText()
    )

  closePopup(editPopup);
}





enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__list-edit",
  buttonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__input-error",
  errorClass: "popup__form_error"
});


// function deleteCard (event) {
//   if (event.target.classList.contains("popup__button") ||
//    event.target.classList.contains('popup')) {
//     closePopup(event.target.closest('.popup'));
//   }
// }


export const deleteCard = (cardId) => {
  const openModalWindow = document.querySelector('.page__trasition');
  const popupButton = openModalWindow.querySelector('.popup__button');
  
  }