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
    avatar,
    editPopup,
    popup,
    formPopupName,
    addPopupButton,
} from "../utils/constants.js";

import {
    addCard,
    loaderText,
    NotloaderText
} from "../pages/index.js";

import {
  createCardWithoutDelete
   } from "../components/cards.js";

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
  .then((result) => {
      for(let key in result){
        let obj = {
            name: result[key].name,
            link: result[key].link,
            id: result[key]._id
          };
          addCard(createCardWithoutDelete(obj), element);
      }
      
      return cards;
  }); 
};


const queryUser = () => {
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
    .then((result) => {
        mainName.textContent = result.name;
        mainJob.textContent = result.about;
        avatar.style = result.avatar;
        avatar.style.backgroundImage = `url(${result.avatar})`
    })
};

queryUser();

const editProfile = () => {
    return fetch('https://nomoreparties.co/v1/plus-cohort-3/users/me', {
  method: 'PATCH',
  headers: {
    authorization: 'cd4147fa-ca61-452f-8003-be9546316754',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Marie Skłodowska Curie',
    about: 'Physicist and Chemist'
  })
})
.then((res) => {
  if (res.ok) {
    return res.json();
  } else {
  return Promise.reject(`Ошибка: ${res.status}`);
  }
})
    .then ((data) =>{
      return data;
    })
}

editProfile();

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
      link: about
    }),
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
    return Promise.reject(`Ошибка: ${res.status}`);
    }
  })
  .then ((data) =>{
   console.log(data);
})
.finally (() => NotloaderText())
};

const deleteCards = () => {
  return fetch('https://nomoreparties.co/v1/plus-cohort-3/cards/61978f00ed37330012be8661', {
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
  .then ((data) => {
    console.log(data);
  })
}

// deleteCards()

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

// likeCard(cardId)

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
    authorization: 'cd4147fa-ca61-452f-8003-be9546316754'
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
.finally (() => NotloaderText())
};

const preloadForm = () => {

}