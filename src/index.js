import "./styles.css";
import setHomePage from "./homepage.js";
import setMenuPage from './menupage.js';
import setAboutPage from './aboutpage.js';

//setHomePage();
//setMenuPage();
//setAboutPage();
const content = document.querySelector('#content')
const buttons = document.querySelectorAll('button');
const buttonHome = document.querySelector('button#home');

function initialize(){
    for (let button of buttons)
    {
        button.addEventListener('click', function () {
            onButtonPress(button);
        });
    };
    onButtonPress(buttonHome);
};

function onButtonPress(button)
{
    makeButtonActive(button.id);
    switch (button.id) {
        case "home":
            clearContent();
            setHomePage();
            break;
        case "menu":
            clearContent();
            setMenuPage();
            break;
        case "about":
            clearContent();
            setAboutPage();
            break;
    }
};

function makeButtonActive(active){
    for (let button of buttons)
        button.id === active ? button.classList.add("active") : button.classList.remove("active");
};

function clearContent(){
    content.innerHTML = '';
}

initialize();

console.log("Hello world!");