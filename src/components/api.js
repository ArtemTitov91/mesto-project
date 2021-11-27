import {
    mainName,
    mainJob,
} from "../utils/constants.js";

import {
    loaderText,
} from "../pages/index.js";


const array = [];

export const queryLoadCards = () =>{
return fetch('https://nomoreparties.co/v1/plus-cohort-3/cards', {
  headers: {
    authorization: 'cd4147fa-ca61-452f-8003-be9546316754'
  }
})
.then((res) => {
  if (res.ok) {
    return res.json();
  } else {
  return Promise.reject(`Ошибка: ${res.status}`);
  }
})
};


export const queryUser = () => {
    return fetch ('https://nomoreparties.co/v1/plus-cohort-3/users/me',{
        headers: {
            authorization: 'cd4147fa-ca61-452f-8003-be9546316754'
          }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
      return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
};



export const editProfile = () => {
  loaderText()
    return fetch('https://nomoreparties.co/v1/plus-cohort-3/users/me', {
  method: 'PATCH',
  headers: {
    authorization: 'cd4147fa-ca61-452f-8003-be9546316754',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: mainName.textContent,
    about: mainJob.textContent,
  })
})
.then((res) => {
  if (res.ok) {
    return res.json();
  } else {
  return Promise.reject(`Ошибка: ${res.status}`);
  }
})
};


export const addNewCard = (name, about) => {
  loaderText()
  return fetch('https://nomoreparties.co/v1/plus-cohort-3/cards', {
    method : 'POST',
    headers: {
      authorization: 'cd4147fa-ca61-452f-8003-be9546316754',
      'Content-Type': 'application/json',
    },
    body : JSON.stringify({
      name: name,
      link: about,
      likes: []
    }),
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
    return Promise.reject(`Ошибка: ${res.status}`);
    }
  })
};

export const deleteCards = (cardId) => {
  // loaderText()
  return fetch(`https://nomoreparties.co/v1/plus-cohort-3/cards/${cardId}`, {
    method : 'DELETE',
    headers: {
      authorization: 'cd4147fa-ca61-452f-8003-be9546316754',
    },
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
    return Promise.reject(`Ошибка: ${res.status}`);
    }
  })
}



export const  sumLike  = (cardId) => {
  return fetch(`https://nomoreparties.co/v1/plus-cohort-3/cards/likes/${cardId}`,{
    headers: {
        authorization: 'cd4147fa-ca61-452f-8003-be9546316754',
        'Content-Type': 'application/json'
      }
})
.then((res) => {
  if (res.ok) {
    return res.json();
  } else {
  return Promise.reject(`Ошибка: ${res.status}`);
  }
})
};

export const likeCard = (cardId) => {
  return fetch(`https://nomoreparties.co/v1/plus-cohort-3/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: {
      authorization: 'cd4147fa-ca61-452f-8003-be9546316754',
      'Content-Type': 'application/json'
    },
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
    return Promise.reject(`Ошибка: ${res.status}`);
    }
  })
}



export const deleteCardsLike = (cardId) => {
  return fetch(`https://nomoreparties.co/v1/plus-cohort-3/cards/likes/${cardId}`, {
    method : 'DELETE',
    headers: {
      authorization: 'cd4147fa-ca61-452f-8003-be9546316754',
      'Content-Type': 'application/json'
    },
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
    return Promise.reject(`Ошибка: ${res.status}`);
    }
  })
}

// deleteCardsLike(cardId)

export const getIdCard = () => {
  return fetch('https://nomoreparties.co/v1/plus-cohort-3/cards', {
  headers: {
    authorization: 'cd4147fa-ca61-452f-8003-be9546316754',
      "Content-Type": "application/json",
  },
})
.then((res) => {
  if (res.ok) {
    return res.json();
  } else {
  return Promise.reject(`Ошибка: ${res.status}`);
  }
})
.then ((res) => {
  return console.log(res)
})
};

export const replaceAvatar = (link) => {
  loaderText()
  return fetch('https://nomoreparties.co/v1/plus-cohort-3/users/me/avatar ', {
method: 'PATCH',
headers: {
  authorization: 'cd4147fa-ca61-452f-8003-be9546316754',
  'Content-Type': 'application/json'
},
body: JSON.stringify({
  avatar: link
})
})
.then((res) => {
if (res.ok) {
  return res.json();
} else {
return Promise.reject(`Ошибка: ${res.status}`);
}
})

};
