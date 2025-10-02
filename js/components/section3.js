import { section3Data } from "../data/section3Data.js";

export function section3() {

    let s3cardsHTML = '';

    for (let i = 0; i < 4; i++) {
        let sectionCards = section3Data[i];
        s3cardsHTML += `
            <div class="s3-column col-12 col-md-6 col-xl-4 col-xxl-3 row-cards">
                <div class="s3-icons">
                    <img src="./img/section-3/${sectionCards.img}" alt="${sectionCards.imgAlt}">
                </div>
                <h2 class="clm-title">${sectionCards.title}</h2>
                <p class="clm-p">${sectionCards.description}</p>
                <a class="clm-a" href="${sectionCards.link}">Learn More</a>
            </div>
        `;
    }


    let HTML = `
<div class="container bg-container">
        <div class="row">
            <h1 class="s3-title col-12 col-lg-8 m-md-1 m-lg-3">Our awesome services to give you success</h1>
        </div>

        ${s3cardsHTML}`;


    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
};