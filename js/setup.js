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


var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');


var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var heroes = [
  {
    name: names[randomInteger(0, names.length - 1)] + ' ' + lastNames[randomInteger(0, names.length - 1)],
    coatColor: coatColors[randomInteger(0, coatColors.length - 1)],
    eyesColor: eyeColors[randomInteger(0, eyeColors.length - 1)]
  },
  {
    name: names[randomInteger(0, names.length - 1)] + ' ' + lastNames[randomInteger(0, names.length - 1)],
    coatColor: coatColors[randomInteger(0, coatColors.length - 1)],
    eyesColor: eyeColors[randomInteger(0, eyeColors.length - 1)]
  },
  {
    name: names[randomInteger(0, names.length - 1)] + ' ' + lastNames[randomInteger(0, names.length - 1)],
    coatColor: coatColors[randomInteger(0, coatColors.length - 1)],
    eyesColor: eyeColors[randomInteger(0, eyeColors.length - 1)]
  },
  {
    name: names[randomInteger(0, names.length - 1)] + ' ' + lastNames[randomInteger(0, names.length - 1)],
    coatColor: coatColors[randomInteger(0, coatColors.length - 1)],
    eyesColor: eyeColors[randomInteger(0, eyeColors.length - 1)]
  }
];


var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < heroes.length; i++) {
  fragment.appendChild(renderWizard(heroes[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

function randomInteger(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
}
