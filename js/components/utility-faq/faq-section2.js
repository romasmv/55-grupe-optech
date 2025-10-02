import { pricingsection3Data } from "../../data/prising-Data/pricing-section3Data.js";

export function faqsection2() {
       let cardspricingsection3HTML = '';
    
       for (let i = 0; i < 6; i++) {
          const pricingsection3 = pricingsection3Data[i];
          cardspricingsection3HTML  += `
                    <div class="pricingsec3">
                        <button class="prcsec3-inside">
                            <h5>${pricingsection3.h5}</h5>
                            <i class="fa fa-plus"></i>
                            <p class="pricinDisplayNone">${pricingsection3.p}</p>
                        </button>
                    </div> `
       }

    let HTML =  `
        <div class="container back">
            <div class="row aboutus-sec5 bca bca1">
                <div class="col-12 sm-col-6 right-column-prcsec3 faqsecup">${cardspricingsection3HTML}</div>
                <div class="col-12 sm-col-6 left-column-prcsec3 faqsecdown">
                    <h1 class="title">Still have questions?</h1>
                    <p class="aboutus-section5-p">Each demo built with Teba will look different. You can customize almost anything in the appearance of your website with only</p>
                    <a href="../../contact/" class="btn">Ask Any Question</a>                  
                </div>
            </div>
        </div>`

    document.getElementById('app').insertAdjacentHTML('beforeend', HTML);

    const buttonsDOM = document.querySelectorAll('.pricingsec3');
    buttonsDOM[0].classList.add('expand')

    let activeIndex = 0;

    for (let i=0; i < buttonsDOM.length; i++) {
     const itemDOM = buttonsDOM[i];
     itemDOM
       .querySelector('.prcsec3-inside')
       .addEventListener('click', () => {
         if (activeIndex === i) {
          itemDOM.classList.toggle('expand');
         } else {
          buttonsDOM [activeIndex].classList.remove('expand');
          activeIndex = i;
          itemDOM.classList.add('expand');
        }
    });
   }
        
    }