import _ from 'lodash';
import './style.css';

import homeDetails from './home.js';
import Icon from './logo.png';

import aboutDetails from './about.js';
import menuDetails from './menu.js';


const nav = document.querySelector("nav");

function navButton(text, className) {
    const buttons = document.createElement("button");
    buttons.innerText = text;

    buttons.classList.add(className);
    buttons.style.width = "12vw";
    buttons.style.margin = "0px 10px";

    return buttons
}

function divButton() {
    const divbtn = document.createElement("div");
    divbtn.classList.add("divBtn");
    return divbtn
    
}

function logo(){
    const logos = document.createElement("div");
    logos.classList.add("logo");
    logos.innerHTML = `<h3 class="logo-text">Restaurant Page</h3> `;

    const myIcon = new Image();
    myIcon.src = Icon
    myIcon.className = "logopng";
    logos.appendChild(myIcon);

    return logos
}

nav.appendChild(logo());
nav.appendChild(divButton());
const divBtn = document.querySelector(".divBtn");
divBtn.appendChild(navButton("Home", "home"));
divBtn.appendChild(navButton("Menu", "menu"));
divBtn.appendChild(navButton("About", "about"));

const content = document.querySelector("#content");
homeDetails(content);

const homes = document.querySelector(".home");
const menus = document.querySelector(".menu");
const abouts= document.querySelector(".about");

homes.addEventListener("click", () => {
    content.innerHTML = "";
    homeDetails(content);
});

menus.addEventListener("click", () => {
    content.innerHTML = "";
    menuDetails(content);
})

abouts.addEventListener("click", () => {
    content.innerHTML = "";
    aboutDetails(content);
})