import { pricingSection2Data } from "../../data/pricing-section/pricing-Section2Data.js";

export function pricingSection2() {

    let pricingS2cardsHTML = '';

    for (let i = 0; i < pricingSection2Data.length; i++) {
        let sectionCards = pricingSection2Data[i];

        pricingS2cardsHTML += `
        <div class="prcS2-clm col-12 col-md-6 col-xl-4 ${i === 1 ? 'active' : ''} ">
            <h2 class="prcs2-clm-title ">${sectionCards.title}</h2>
            <p class="prcS2-clm-p">${sectionCards.description}</p>
            <div>
                <h3 class="prcS2-h3">${sectionCards.plan}
                    <span>/month</span>
                </h3>
            </div>
            <div>
                <div class="prcS2-clm-list">
                    <i class="fa fa-check"></i>
                    <span>${sectionCards.diskSpace}</span>
                </div>
                <div class="prcS2-clm-list">
                    <i class="fa fa-check"></i>
                    <span>${sectionCards.NVMe}</span>
                </div>
                <div class="prcS2-clm-list">
                    <i class="fa fa-check"></i>
                    <span>${sectionCards.platform}</span>
                </div>
                <div class="prcS2-clm-list">
                    <i class="fa fa-check"></i>
                    <span>${sectionCards.updates}</span>
                </div>
                <div class="prcS2-clm-list">
                    <i class="fa fa-check"></i>
                    <span>${sectionCards.support}</span>
                </div>
            </div>
                <a class="col-12 prcS2-btn" href="#">${sectionCards.btn}</a>
        </div>`
    };

    const HTML = ` 
    <div class="container">
        <div class="row">
    ${pricingS2cardsHTML}
    </div>
    </div>
`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);

};