import "./index.css";
import "../components/api.js";
import "../components/modal.js";
import "../components/validate.js";
import "../components/cards.js";

import {
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
  formPopupPlaceSubmit,
  avatarSubmit
} from "../utils/constants.js";

import { openPopup, closePopup } from "../components/modal.js";

import { createCard } from "../components/cards.js";

import { enableValidation } from "../components/validate.js";

import {
  queryLoadCards,
  addNewCard,
  replaceAvatar,
  queryUser,
  editProfile,
} from "../components/api.js";


Promise.all([queryUser(), queryLoadCards()])
  .then(([userData, cards]) => {
    mainName.textContent = userData.name;
    mainJob.textContent = userData.about;
    avatarPopup.id = userData._id;
    avatar.style.backgroundImage = `url(${userData.avatar})`;
    for (let key in cards) {
      const obj = {
        name: cards[key].name,
        link: cards[key].link,
        id: cards[key]._id,
        likes: cards[key].likes,
        profile: cards[key].owner._id,
      };
      addCard(createCard(obj), element);
    }
    return cards;
  })
  .catch((err) => {
    console.log(err);
  });

export const addCard = (card, container) => {
  container.prepend(card);
};

function handleCardSubmit(evt) {
  evt.preventDefault();
  loaderText(formPopupPlace)
  addNewCard(nameInputPlace.value, jobInputPlace.value)
    .then((data) => {
      const objCard = {
        name: data.name,
        link: data.link,
        likes: data.likes,
        id: data._id,
        profile: data.owner._id,
      };
console.log(data);
      const newCard = createCard(objCard);
      addCard(newCard, element);
      closePopup(addPopup);
      nameInputPlace.value = "";
      jobInputPlace.value = "";
      formPopupPlaceSubmit.classList.add("popup__button_inactive");
      formPopupPlaceSubmit.disabled = true;
    })
    .catch((err) => {
      "Don't load card", err;
    })
    .finally(() => {
      NotloaderText(formPopupPlace);
      // formPopupPlace.reset();
    });
}

const handleAvatarButton = (evt) => {
  evt.preventDefault();
  loaderText(avatarPopup)
  replaceAvatar(avatarInput.value)
    .then((res) => {
      avatar.style.backgroundImage = `url(${res.avatar})`;
      closePopup(avatarPopup);
      avatarInput.value = '';
      avatarSubmit.classList.add("popup__button_inactive");
      avatarSubmit.disabled = true;
    })
    .catch((err) => {
      console.log("Can't load avatar", err);
    })
    .finally(() => {
      NotloaderText(avatarPopup);
    });
};

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
avatar.addEventListener("click", () => {
  openPopup(avatarPopup);
});

// close 'name' window form
popup.addEventListener("click", handlePopupClick);

//close 'place' window form
addPopup.addEventListener("click", handlePopupClick);

//close 'avatar' window form
avatarPopup.addEventListener("click", handlePopupClick);

formPopupName.addEventListener("submit", handleProfileSubmit);

deletePopup.addEventListener("click", handlePopupClick);
// close overlay and cross

export function handlePopupClick(event) {
  if (
    event.target.classList.contains("popup__img") ||
    event.target.classList.contains("popup")
  ) {
    closePopup(event.target.closest(".popup"));
  }
}

export const loaderText = (popup) => {
  const popupButton = popup.querySelector(".popup__button");
  preloaderText(popupButton);
};
export const NotloaderText = (popup) => {
  const popupButton = popup.querySelector(".popup__button");
  initinalText(popupButton);
};

const preloaderText = (text) => {
  text.textContent = "Сохранение...";
  text.disabled = true;
};

const initinalText = (text) => {
  text.textContent = "Сохранить";
  text.disabled = false;
};

//open 'place' window form
addPopupButton.addEventListener("click", function () {
  openPopup(addPopup);
});
// save information writes in input

function handleProfileSubmit(evt) {
  evt.preventDefault();
  loaderText(formPopupName)
  editProfile(nameInput, jobInput)
    .then((result) => {
      console.log(result);
      mainName.textContent = result.name;
      mainJob.textContent = result.about;
      closePopup(editPopup);
    })
    .catch((err) => {
      console.log("Don't sent profile", err);
    })
    .finally(() => {
      NotloaderText(formPopupName);
    });
}

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__list-edit",
  buttonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__input-error",
  errorClass: "popup__form_error",
});

// function deleteCard (event) {
//   if (event.target.classList.contains("popup__button") ||
//    event.target.classList.contains('popup')) {
//     closePopup(event.target.closest('.popup'));
//   }
// }

export const deleteCard = (cardId) => {
  const openModalWindow = document.querySelector(".page__trasition");
  const popupButton = openModalWindow.querySelector(".popup__button");
};
