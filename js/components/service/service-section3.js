import { section3Data } from "../../data/section3Data.js";

export function serviceSection3() {

    let s3cardsHTML = '';

    for (let i = 0; i < section3Data.length; i++) {
        let serviceSectionCards = section3Data[i];
        s3cardsHTML += `
            <div class="service-s3-column  row-cards col-12">
                <div class="service-s3-icons">
                    <img class="s3-img-color" src="../img/section-3/${serviceSectionCards.img}" alt="${serviceSectionCards.imgAlt}">
                </div>
                <div>
                    <h2 class="service-clm-title">${serviceSectionCards.title}</h2>
                    <p class="clm-p">${serviceSectionCards.description}</p>
                    <a class="clm-a " href="${serviceSectionCards.link}">Learn More</a>
                </div>
            </div>`;
    }


    let HTML = `
    <div class="container bg-container">
        <div class="row">
            <h1 class="service-s3-title col-12 col-lg-6 m-md-1 m-lg-3 s3-titleMD">Our awesome services to give you
                success</h1>
         </div>
         <div class="row">
         ${s3cardsHTML}
        </div>`;
    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
};