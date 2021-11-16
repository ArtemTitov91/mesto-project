
// valid 

 export const showInputError = (formElement, inputElement, errorMessage, selectors) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(`${selectors.errorClass}`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(`${selectors.inputErrorClass}`);
  };
  
  export const hideInputError = (formElement, inputElement, selectors) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`); 
    inputElement.classList.remove(`${selectors.errorClass}`);
    errorElement.classList.remove(`${selectors.inputErrorClass}`);
    errorElement.textContent = '';
  };
  
  export const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }; 

export const toggleButtonState = (inputList, buttonElement, selectors) => {
    if (hasInvalidInput(inputList)) {
      
      buttonElement.disabled = true;
      buttonElement.classList.add(`${selectors.inactiveButtonClass}`);
    } else {
      buttonElement.disabled = false;
      buttonElement.classList.remove(`${selectors.inactiveButtonClass}`);
    }
  }; 
  
  export const isValid = (formElement, inputElement, selectors) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage , selectors);
    } else {
      hideInputError(formElement, inputElement, selectors);
    }
  };
   
  
  
  export const setEventListeners = (formElement, selectors) => {
    const inputList = Array.from(formElement.querySelectorAll(`${selectors.inputSelector}`));
    const buttonElement = formElement.querySelector(`${selectors.buttonSelector}`);
    toggleButtonState(inputList, buttonElement, selectors);
      inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          isValid(formElement, inputElement, selectors);
          toggleButtonState(inputList, buttonElement, selectors);
      });
    });
  };
  
  
  
export const enableValidation = (selectors) => {
  
    const formList = Array.from(document.querySelectorAll(`${selectors.formSelector}`));
    
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      ;
      setEventListeners(formElement, selectors)
    }); 
  };
