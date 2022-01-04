"use strict";

// CODE DRAWER
var codeDrawer = document.getElementById('code-drawer');
var scrim = document.getElementById('scrim');

function openCodeDrawer() {
  codeDrawer.classList.add('open');
  scrim.classList.add('open');
}

function closeCodeDrawer() {
  codeDrawer.classList.remove('open');
  scrim.classList.remove('open');
}