'use strict';
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyeColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848' 
];


var userDialog = document.querySelector('.setup');
var userDialogOpen = document.querySelector('.setup-open');
var userDialogClose = userDialog.querySelector('.setup-close');
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var onDialogEscPress = function(evt) {
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

userDialogClose.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closeDialog();
  }
});

var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var setupFireball = document.querySelector('.setup-fireball-wrap');
var inputFireballColor = setupFireball.querySelector('[name=fireball-color]');
var userDialog = document.querySelector('.setup');
var inputWizardCoat = userDialog.querySelector('[name=coat-color]');
var inputWizardEyes = userDialog.querySelector('[name=eyes-color]');


wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = coatColors[randomInteger(0, coatColors.length - 1)];
  inputWizardCoat.value = wizardCoat.style.fill;
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = eyeColors[randomInteger(0, eyeColors.length - 1)];
  inputWizardEyes.value = wizardEyes.style.fill;
});

setupFireball.addEventListener('click', function () {
  inputFireballColor.value = fireballColors[randomInteger(0, fireballColors.length - 1)];
  setupFireball.style.background = inputFireballColor.value;
});

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var heroes = [];

for (var i = 0; i < 4; i++) {
  heroes.push({
    name: names[randomInteger(0, names.length - 1)] + ' ' + lastNames[randomInteger(0, names.length - 1)],
    coatColor: coatColors[randomInteger(0, coatColors.length - 1)],
    eyesColor: eyeColors[randomInteger(0, eyeColors.length - 1)]
  });
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var j = 0; j < heroes.length; j++) {
  fragment.appendChild(renderWizard(heroes[j]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

function randomInteger(min, max) {
  var rand = Math.floor(min + Math.random() * (max - min + 1));
  rand = Math.round(rand);
  return rand;
}
