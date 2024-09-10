const clearDom = () => {
  document.querySelector('#vocab-page').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#login-form-container').innerHTML = '';
};

export default clearDom;
