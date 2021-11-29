import "./index.css";
import "../components/api.js";
import "../components/modal.js";
import "../components/validate.js";
import "../components/cards.js";

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
    avatar.style.backgroundImage = `url(${userData.avatar})`;
    for (let key in cards) {
      const obj = {
        name: cards[key].name,
        link: cards[key].link,
        id: cards[key]._id,
        likes: cards[key].likes,
        person: cards[key].owner.name,
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
  addNewCard(nameInputPlace.value, jobInputPlace.value, loaderText())
    .then((data) => {
      const objCard = {
        name: data.name,
        link: data.link,
        likes: data.likes,
        person: data.owner.name,
        id: data._id,
      };
      const newCard = createCard(objCard);
      addCard(newCard, element);
      closePopup(addPopup);
    })
    .catch((err) => {
      "Don't load card", err;
    })
    .finally(() => {
      NotloaderText();
      nameInputPlace.value = "";
      jobInputPlace.value = "";
      // formPopupPlace.reset();
    });
}
const handleAvatarButton = (evt) => {
  evt.preventDefault();
  replaceAvatar(avatarInput.value, loaderText())
    .then((res) => {
      avatar.style.backgroundImage = `url(${res.avatar})`;
      closePopup(avatarPopup);
    })
    .catch((err) => {
      console.log("Can't load avatar", err);
    })
    .finally(() => {
      NotloaderText();
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

export const loaderText = () => {
  const popupButton = document.querySelector(".popup__button");
  preloaderText(popupButton);
};
export const NotloaderText = () => {
  const popupButton = document.querySelector(".popup__button");
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
  enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__list-edit",
    buttonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_inactive",
    inputErrorClass: "popup__input-error",
    errorClass: "popup__form_error",
  });
  openPopup(addPopup);
});
// save information writes in input

function handleProfileSubmit(evt) {
  evt.preventDefault();
  editProfile(mainName, mainJob, loaderText())
    .then((result) => {
      mainName.textContent = result.name;
      mainJob.textContent = result.about;
      closePopup(editPopup);
    })
    .catch((err) => {
      console.log("Don't sent profile", err);
    })
    .finally(() => {
      NotloaderText();
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
