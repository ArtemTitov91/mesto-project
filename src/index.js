import "./index.css";


const container = document.querySelector(".container");
// open 'name' window form
function openPopup(popupElement) {
  popupElement.classList.remove("popup_closed");
  popupElement.classList.add("page__trasition");
}

const editPopupButton = document.querySelector(".profile__edit-button");
const editPopup = document.querySelector(".popup_name");
const mainName = document.querySelector(".profile__title");
const mainJob = document.querySelector(".profile__subtitle");
const formPopupName = document.querySelector(".popup__form");
const nameInput = formPopupName.querySelector(".popup__list-edit_elem_name");
const jobInput = formPopupName.querySelector(".popup__list-edit_elem_profession");
const popup = document.querySelector('.popup');


editPopupButton.addEventListener("click", function () {
  nameInput.value = mainName.textContent;
  jobInput.value = mainJob.textContent;
  openPopup(editPopup);
});
//open 'place' window form
const addPopupButton = document.querySelector(".profile__add-button");
const addPopup = document.querySelector(".popup_place");
addPopupButton.addEventListener("click", function () {
  openPopup(addPopup);
});
//close 'name' window form
function closePopup(popupClose) {
  popupClose.classList.add("popup_closed");
}

popup.addEventListener('click', (event) => {
  if (event.target.classList.contains("popup__img") || event.target.classList.contains('popup')) {
    closePopup(editPopup); 
  }
});

//close 'place' window form
const closeButtonPlace = document.querySelector(".popup__close-icon-place");
addPopup.addEventListener('click', (event) => {
  if (event.target.classList.contains("popup__img") || event.target.classList.contains('popup_place')) {
    closePopup(addPopup);
  }
});

// save information writes in input


function handleProfileSubmit(evt) {
  evt.preventDefault();

  const mainName = document.querySelector(".profile__title");
  const mainJob = document.querySelector(".profile__subtitle");

  mainName.textContent = nameInput.value;
  mainJob.textContent = jobInput.value;

  closePopup(editPopup);
}

formPopupName.addEventListener("submit", handleProfileSubmit);

//  six cards are for join
const cards = [
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

const element = document.querySelector(".element");
const cardTemplate = document.querySelector(".place-template").content;
const cardImage = document.querySelector(".element__image");
const bigTitle = document.querySelector(".popup__big-picture-title");
const bigOpened = document.querySelector(".popup__big-picture");
const bigPicture = document.querySelector(".popup__big-picture-image");
const cardGroup = document.querySelector(".element__group");

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

// add cards

const formPopupPlace = document.querySelector(".popup__form_place");
const nameInputPlace = document.querySelector(
  ".popup__list-edit_elem_name_place"
);
const jobInputPlace = document.querySelector(
  ".popup__list-edit_elem_profession_place"
);

function handleCardSubmit(evt) {
  evt.preventDefault();

  const objCard = {
    name: nameInputPlace.value,
    link: jobInputPlace.value,
  };

  const newCard = createCard(objCard);
  addCard(newCard, element);
  closePopup(addPopup);

  const formElement = document.querySelector(".popup__form_place");
  formElement.reset();
  console.log();
}

formPopupPlace.addEventListener("submit", handleCardSubmit);

const coverImage = document.querySelector('.popup__cover-image');

coverImage.addEventListener('click', (event) => {
  if (event.target.classList.contains("popup__img") || event.target.classList.contains('popup')) {
    closePopup(bigOpened); 
  }
});

// close Esc 


const  escClose = (evt) => {
  if (evt.key === 'Escape') {
    closePopup(addPopup);
    closePopup(editPopup);
    closePopup(bigOpened);
  }
};
document.addEventListener('keydown', escClose);

// valid 

// formPopupName
// const nameInput
// const jobInput




const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__form_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`); 
  inputElement.classList.remove('popup__form_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}; 

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add('popup__button_inactive');
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove('popup__button_inactive');
  }
}; 

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};
 


const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__list-edit'));
  const buttonElement = formElement.querySelector('.popup__button');
  toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        isValid(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
    });
  });
}; 

setEventListeners(formPopupName);
setEventListeners(formPopupPlace);

const enableValidation = () => {

  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

setEventListeners(formPopupName);
setEventListeners(formPopupPlace);
  });
};

enableValidation(); 

const button = document.querySelector('button');

function handleClick(evt) {
 evt.preventDefault()
  }


button.addEventListener('click', handleClick); 