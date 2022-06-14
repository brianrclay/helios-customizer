"use strict";

// BUTTONS
var buttons = document.getElementsByClassName('button');

function buttonBorderRadius(e) {
  var overrideValue = e.value;
  var codeTarget = document.getElementById('code-button-border-radius');
  codeTarget.innerHTML = '"' + overrideValue + ',"';

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.borderRadius = overrideValue + "px";
  }
}

function buttonTextColor(e) {
  var overrideValue = e.value;
  var codeTarget = document.getElementById('code-button-text-color');
  codeTarget.innerHTML = '"' + overrideValue + ',"';

  if (['transparent', 'Transparent'].indexOf(overrideValue) > -1) {
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].style.color = overrideValue;
    }
  } else {
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].style.color = "#" + overrideValue;
    }
  }
}

function buttonBackgroundColor(e) {
  var overrideValue = e.value;
  var codeTarget = document.getElementById('code-button-background-color');
  codeTarget.innerHTML = '"' + overrideValue + ',"';

  if (['transparent', 'Transparent'].indexOf(overrideValue) > -1) {
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = overrideValue;
    }
  } else {
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = "#" + overrideValue;
    }
  }
}

function buttonBorderColor(e) {
  var overrideValue = e.value;
  var codeTarget = document.getElementById('code-button-border-color');
  codeTarget.innerHTML = '"' + overrideValue + ',"';

  if (['transparent', 'Transparent'].indexOf(overrideValue) > -1) {
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].style.borderColor = overrideValue;
    }
  } else {
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].style.borderColor = "#" + overrideValue;
    }
  }
} // Inputs


var inputs = document.getElementsByClassName('input');

function inputBorderRadius(e) {
  var overrideValue = e.value;
  var codeTarget = document.getElementById('code-input-border-radius');
  codeTarget.innerHTML = '"' + overrideValue + ',"';
  console.log(overrideValue);

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].style.borderRadius = overrideValue + "px";
  }
}

function inputBorderColor(e) {
  var overrideValue = e.value;
  var codeTarget = document.getElementById('code-input-border-color');
  codeTarget.innerHTML = '"' + overrideValue + ',"';

  if (['transparent', 'Transparent'].indexOf(overrideValue) > -1) {
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].style.borderColor = overrideValue;
    }
  } else {
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].style.borderColor = "#" + overrideValue;
    }
  }
}

function inputTextColor(e) {
  var overrideValue = e.value;
  var codeTarget = document.getElementById('code-input-text-color');
  codeTarget.innerHTML = '"' + overrideValue + ',"';

  if (['transparent', 'Transparent'].indexOf(overrideValue) > -1) {
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].style.color = overrideValue;
    }
  } else {
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].style.color = "#" + overrideValue;
    }
  }
} // Background Image


var backgroundImageWrapper = document.getElementById('header-image');

function backgroundImage(e) {
  var overrideValue = e.value;
  var codeTarget = document.getElementById('code-input-bg-image');
  codeTarget.innerHTML = '"' + overrideValue + ',"';
  backgroundImageWrapper.style.backgroundImage = "url('" + overrideValue + "')";
}