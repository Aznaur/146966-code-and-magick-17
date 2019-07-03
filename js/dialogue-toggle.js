"use strict";

(function () {
    window.userDialog = document.querySelector('.setup');
    var userDialogOpen = document.querySelector('.setup-open');
    var userDialogClose = userDialog.querySelector('.setup-close');
    var ESC_KEYCODE = 27;
    var ENTER_KEYCODE = 13;
    
    var onDialogEscPress = function (evt) {
      if (evt.keyCode === ESC_KEYCODE) {
        closeDialog();
      }
    };
    
    var openDialog = function () {
      userDialog.classList.remove('hidden');
      document.addEventListener('keydown', onDialogEscPress);
    };
    
    var closeDialog = function () {
      userDialog.classList.add('hidden');
      document.removeEventListener('keydown', onDialogEscPress);
      userDialog.style.top = '';
      userDialog.style.left = '';
    };
    
    userDialogOpen.addEventListener('click', function () {
      openDialog();
    });
    
    userDialogOpen.addEventListener('keydown', function (evt) {
      if (evt.keyCode === ENTER_KEYCODE) {
        openDialog();
      }
    });
    
    userDialogClose.addEventListener('click', function () {
      closeDialog();
    });
    
    userDialogClose.addEventListener('keydown', function (evt) {
      if (evt.keyCode === ENTER_KEYCODE) {
        closeDialog();
      }
    });
})();