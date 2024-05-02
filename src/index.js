
import './styles/style-default.scss';
import './styles/main.scss';
import bwinLogo from './assets/bwincom-logo-light.svg';

const bwinLogoImg = document.getElementById('bwinLogo');
bwinLogoImg.src = bwinLogo;

let block = document
                .getElementById('product')
                .getElementsByClassName("more-info")[0];

let textInfoBtn = document
                .getElementById('product')
                .getElementsByClassName("body__more-info-btn")[0];

product.addEventListener('click', {
    handleEvent(e) {
        if (e.target.className == "body__more-info-btn" 
         || e.target.className == "body__text-btn"
         || e.target.className == "show"
         || e.target.className == "hide") {
            block.classList.toggle('active');
            textInfoBtn.classList.toggle('active');
        }
    }
});