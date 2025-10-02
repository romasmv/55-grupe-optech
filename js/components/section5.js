import { section5Data } from "../data/section5Data.js";


export function section5() {

    let s5cardsHTML = '';

    for (let i = 0; i < section5Data.length; i++) {
        let sectionCards = section5Data[i];
        s5cardsHTML += `
            <div class="col-12 col-md-6 col-lg-6 col-xl-4 s5-card ">
                <img class="s5-foto" src="./img/section-5/${sectionCards.img}" alt="${sectionCards.imgAlt}">
                <div class="col-12  s5-content">
                    <a href="${sectionCards.link}">
                        <h2>${sectionCards.title}</h2>
                    </a>
                    <p>${sectionCards.description}</p>
                </div>
            </div>`;
        }
        
        
    const HTML = `    
    <div class="container bg-container">
        <div class="row">
            <h1 class="s5-title col-12">Explore our recent projects</h1>

            ${s5cardsHTML}

            <div class="col-12 col-xl-8 s5-card ">
                <img class="s5-foto" src="./img/section-5/project-marketing.webp" alt="Project for marketing">
                <div class="col-12 s5-content">
                    <a href="#">
                        <h2>Project for marketing</h2>
                    </a>
                    <p>Marketing, buisness</p>
                </div>
            </div>
            <div class="row s5-btn">
                <a class="col-12 m-3 col-lg-6 m-lg-5  m-md-4 " href="#">View our all works</a>
            </div>
        </div>
    </div>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
};
