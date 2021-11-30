const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
};

const config = {
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-3/",
  headers: {
    authorization: "cd4147fa-ca61-452f-8003-be9546316754",
    "Content-Type": "application/json",
  },
};
const array = [];

export const queryLoadCards = () => {
  return fetch(`${config.baseUrl}cards`, {
    headers: config.headers,
  }).then(checkResponse);
};

export const queryUser = () => {
  return fetch(`${config.baseUrl}users/me`, {
    headers: config.headers,
  }).then(checkResponse);
};

export const editProfile = (name, about) => {
  return fetch(`${config.baseUrl}users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: name.value,
      about: about.value,
    }),
  }).then(checkResponse);
};

export const addNewCard = (name, about) => {
  return fetch(`${config.baseUrl}cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: about,
      likes: [],
    }),
  }).then(checkResponse);
};

export const deleteCards = (cardId) => {
  return fetch(`${config.baseUrl}cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(checkResponse);
};

export const sumLike = (cardId) => {
  return fetch(`${config.baseUrl}cards/likes/${cardId}`, {
    headers: config.headers,
  }).then(checkResponse);
};

export const likeCard = (cardId) => {
  return fetch(`${config.baseUrl}cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  }).then(checkResponse);
};

export const deleteCardsLike = (cardId) => {
  return fetch(`${config.baseUrl}cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(checkResponse);
};

// deleteCardsLike(cardId)

export const getIdCard = () => {
  return fetch(`${config.baseUrl}cards`, {
    headers: config.headers,
  })
    .then(checkResponse)
    .then((res) => {
      return console.log(res);
    });
};

export const replaceAvatar = (link) => {
  return fetch(`${config.baseUrl}users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: link,
    })
  }).then(checkResponse);
};