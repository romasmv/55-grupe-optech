import { shopSection2Data } from "../../data/shop-Data/shop-section2Data.js";

export function shopSection2 () {

    let shopSection2HTML = '';
    let shop1Section2HTML = '';

    for (let i = 1; i < 7; i++) {
        let shopCards = shopSection2Data[i];
            shopSection2HTML += `
            <div class="col-12 col-md-6 col-lg-4 col-xl-3 shop-section2-clm">
                <img class="col-12" src="../img/shop/${shopCards.img}" alt="${shopCards.imgAlt}">
                <h2 class="col-12">${shopCards.title}</h2>
                <h3 class="col-12">${shopCards.price}</h3>
                <a class="col-12 prcS2-btn" href="${shopCards.link}">${shopCards.btn}</a>
            </div>`;
}
    for (let i = 8; i < shopSection2Data.length - 1; i++) {
        let shopCards1 = shopSection2Data[i];
            shop1Section2HTML += `
            <div class="col-12 col-md-6 col-lg-4 col-xl-3 shop-section2-clm">
                <img class="col-12" src="../img/shop/${shopCards1.img}" alt="${shopCards1.imgAlt}">
                <h2 class="col-12">${shopCards1.title}</h2>
                <h3 class="col-12">${shopCards1.price}</h3>
                <a class="col-12 prcS2-btn" href="${shopCards1.link}">${shopCards1.btn}</a>
            </div>`;
}

    let HTML = `
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6 col-lg-4 col-xl-3 shop-section2-clm">
                <img class="col-12" src="../img/shop/shop01.webp" alt="#">
                <a class="sale-logo" href="#">Sale</a>
                <h2 class="col-12">Black Headphone</h2>
                <h3 class="col-12">$39.00 <span>$44.00</span></h3>
                <a class="col-12 prcS2-btn" href="#">Add to Cart</a>
            </div>

        ${shopSection2HTML}

            <div class="col-12 col-md-6 col-lg-4 col-xl-3 shop-section2-clm">
                <img class="col-12" src="../img/shop/shop8.webp" alt="Logitech Mouse">
                <a class="sale-logo" href="#">Sale</a>
                <h2 class="col-12">Logitech Mouse</h2>
                <h3 class="col-12">$19.00 <span>$24.00</span></h3>
                <a class="col-12 prcS2-btn" href="#">Add to Cart</a>
            </div>
        ${shop1Section2HTML}

            <div class="col-12 col-md-6 col-lg-4 col-xl-3 shop-section2-clm">
                <img class="col-12" src="../img/shop/shop11.webp" alt="Compact Microphone">
                <a class="sale-logo" href="#">Sale</a>
                <h2 class="col-12">Compact Microphone</h2>
                <h3 class="col-12">$99.00 <span>$120.00</span></h3>
                <a class="col-12 prcS2-btn" href="#">Add to Cart</a>
            </div>
            <div class="nav-btn col-12 m-sm-1">   
                <a class="fa fa-angle-left" href="#"></a>
                <a class="active" href="#">1</a>
                <a class="" href="#">2</a>
                <a class="" href="#">3</a>
                <a class="fa fa-angle-right" href="#"></a>
            </div>
        </div>
    </div>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
};