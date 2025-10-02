
import { aboutussection42Data } from "../../data/about-us-Data/aboutus-section42Data.js";

export function aboutussection42() {
    let cardsHTML = '';

    for (let i = 0; i < 4; i++) {
        const section = aboutussection42Data[i];
        cardsHTML += `
            <div class="col-12 col-md-6 col-lg-3 section6-card">
                <div class="section6-img">
                    <img class="card-img" src="../img/section6/${section.img}" alt="${section.name}">
                </div>
                <div class="section6-text">
                    <h5 class="section6-name">${section.name}</h5>
                    <p class="section6-desc">${section.position}</p>
                </div>
            </div>
        `;
    }
    
    const HTML = `
        <div class="container6 section6">
            <div class="row">
                <div class="col-12 col-lg-6 m-lg-3 section-texts section-texts-center">
                    <h2 class="section6-title">Our expert team is always ready to help you</h2>
                </div>
            </div>
            <div class="row">${cardsHTML}</div>
        </div>
    `;
    
    
    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}