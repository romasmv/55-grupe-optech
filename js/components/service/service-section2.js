import { serviceSection2Data } from "../../data/service-Data/service-section2Data.js";

export function serviceSection2 () {
   let serviceCards2HTML = '';

   for (let i = 0; i < 3; i++) {
      const serviceSection2 = serviceSection2Data[i];
      serviceCards2HTML += `
        <div class="col-12 col-md-6 col-xl-4">
            <div class="service2-card-img">
                <img src="../img/service-section2/${serviceSection2.img}" alt="${serviceSection2.imgAlt}">
            </div>
            <div class="service2-card-content">
                <div class="service2-card-number">${serviceSection2.number}</div>
                <h4 class="service2-card-title">${serviceSection2.title}</h4>
                <p class="service2-card-text">${serviceSection2.text}</p>
            </div>
        </div>
            `
   }

let HTML =  `
    <div class="container">
        <div class="row">
            <h2 class="col-12 col-xl-8 m-xl-2 service2-title">Our working process on how to grow your business</h2>
        </div>
        <div class="row">${serviceCards2HTML}</div>
    </div>`
  

    document.getElementById('app').insertAdjacentHTML('beforeend', HTML);
}
