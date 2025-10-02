import { section7Data } from "../data/section7Data.js";

export function section7() {
   let cards7HTML = '';

   for (let i = 0; i < 2; i++) {
      const section7 = section7Data[i];
      cards7HTML += `
         <div class="col-12 col-lg-6 testimonials-block">
            <div class="quotes-section">
               <img class="quotes" src="./img/section-7/${section7.img}" alt="${section7.imgAlt}">
            </div>
            <div class="testimonials">
               <p class="testimonials-text">${section7.description}</p>
               <div class="stars">
                  <i class="fa fa-star testimonials-star"></i>
                  <i class="fa fa-star testimonials-star"></i>
                  <i class="fa fa-star testimonials-star"></i>
                  <i class="fa fa-star testimonials-star"></i>
                  <i class="fa fa-star testimonials-star"></i>
               </div>
               <h5 class="testimonials-name">${section7.name}</h5>
               <p class="testimonials-position">${section7.position}</p>
            </div>
         </div>`
   }
    let HTML =  `
    <div class="container back7">
       <div class="text7">
          <h2 class="col-12 col-lg-6 col-xxl-6 m-lg-3 m-xxl-3 dont">Don’t take our word, see what our customers say</h2>
       </div>
       <div class="row section-7">${cards7HTML}</div>
    </div>`
    

    document.getElementById('app').insertAdjacentHTML('beforeend', HTML);
}