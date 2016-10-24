module.exports = function () {
  var dialog = document.querySelector('#user-add')
  var closeButton = document.querySelector('#user-add__close')
  var showButton = document.querySelector('#show-user-add')
  var saveButton = document.querySelector('#user-add__save')
  if (!dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
  }
  var closeClickHandler = function(event) {
    dialog.close();
  };
  var showClickHandler = function(event) {
    dialog.showModal();
  };
  saveButton.addEventListener('click', closeClickHandler)
  showButton.addEventListener('click', showClickHandler);
  closeButton.addEventListener('click', closeClickHandler);
}
