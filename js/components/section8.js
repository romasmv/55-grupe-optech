import { section8Data } from "../data/section8Data.js";

export function section8() {
   let cards8HTML = '';

   for (let i = 0; i < 3; i++) {
      const section8 = section8Data[i];
      cards8HTML += `
            <div class="col-12 col-md-6 col-xl-4 cards8">
                <div class="card8-img">
                    <img src="./img/section-8/${section8.img}" alt="${section8.imgAlt}">
                </div>
                <div class="card8-text">
                    <div class="card8-tech">
                        <p>${section8.text}</p></p>
                        <div class="dot-position">
                            <p class="dot">
                        </div>
                        <p class="card8-date">${section8.date}</p>
                    </div>
                    <h5 class="card8-title">${section8.title}</h5>
                    <a href="#" class="card8-link">Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/></svg>
                    </a>
                </div>
            </div>`
   }
let HTML =  `
    <div class="container section-8">
        <div class="row">
            <div class="blog-top">
                <h2 class="col-md-10 col-lg-8 col-xxl-6 m-md-1 m-lg-0 blog-title">Recent blog &amp; articles about technology</h2>
                
            </div>
        </div>
        <div class="row blog">${cards8HTML}</div>
    </div>`

    document.getElementById('app').insertAdjacentHTML('beforeend', HTML);
}

