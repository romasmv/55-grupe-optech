import { section7Data} from "../../data/section7Data.js";

export function testimonialSection2 () {
   
    let cardsTestHTML = '';

   for (let i = 0; i < 9; i++) {
      const testimonialCards = section7Data[i];
      cardsTestHTML += `        
               <div class="col-12 col-md-6 col-xl-4 testimonial-card-block">
                   <div class="testimonials">
                       <div class="stars">
                           <i class="fa fa-star testimonials-star"></i>
                           <i class="fa fa-star testimonials-star"></i>
                           <i class="fa fa-star testimonials-star"></i>
                           <i class="fa fa-star testimonials-star"></i>
                           <i class="fa fa-star testimonials-star"></i>
                       </div>
                       <p class="testimonials-text">${testimonialCards.description}</p>
                       <div class="name-quotes">
                           <div>
                               <h5 class="testimonials-name">${testimonialCards.name}</h5>
                               <p class="testimonials-position">${testimonialCards.position}</p>
                           </div>
                           <div class="quotes-section-card">
                               <img class="quotes-card" src="../img/section-7/${testimonialCards.img}" alt="${testimonialCards.imgAlt}">
                           </div>
                       </div>
                   </div>
                   
               </div>`;
   }

   let HTML = `
   <div class="container back7">
           <div class="row section-7">${cardsTestHTML}</div>
    </div>`;
        
    
        document.getElementById('app').insertAdjacentHTML('beforeend', HTML);
}