import menuImage from "./menu.jpg";

export default function menuDetails(existingContent) {
    
    function backgroundImageFn() {
        existingContent.style.backgroundImage = `url(${menuImage})`;;
        existingContent.style.backgroundSize = 'cover';  // Adjust to your preference
        existingContent.style.backgroundPosition = 'center';  // Adjust to your preference

        return existingContent
    }
    backgroundImageFn();
    function menuText() {
        const menu = document.createElement("div");
        menu.classList.add("menu-div");
        const menuHead = document.createElement("div");
        menuHead.innerHTML = `<h1> MENU CARD </h1>`;
        menu.appendChild(menuHead);
        const menuItems = document.createElement("div");
        menuItems.classList.add("menu-items");
        menuItems.innerHTML =  `
        <ol>
        <li>Chowmein = $1.50</li>
        <li>MoMo = $1.90</li>
        <li>Burger = $2.50</li>
        <li>Pizza = $3.50</li>
        </ol>`;
        menu.appendChild(menuItems);
        menuHead.classList.add("menu-head");
        

        return menu;
    }
    existingContent.appendChild(menuText());

}