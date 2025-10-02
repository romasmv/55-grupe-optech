export function section2() {

    let HTML =  `
    <div class="container back2">
                <div class="row">
                    <div class="col-12 col-md-6 col-xl-4 trio">
                      <img class="col-3 col-md-4 col-lg-3 col-xl-4 col-xxl-3 icon" src="./img/icon-1.png" alt="icon1">
                      <div class="col-md-8 col-lg-8 trio-text">
                        <h3 class="trio-title">Highly Expert Team</h3>
                        <p>We provide the most responsive and functional IT design</p>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-xl-4 trio">
                       <img class="col-3 col-md-4 col-lg-3 col-xl-4 col-xxl-3 icon" src="./img/icon-2.png" alt="icon2">
                          <div class="col-md-8 col-lg-8 trio-text">
                            <h3 class="trio-title">24/7 Customer Service</h3>
                            <p>We provide the most responsive and functional IT design</p>
                          </div>
                    </div>
                    <div class="col-12 col-md-6 col-xl-4 trio">
                       <img class="col-3 col-md-4 col-lg-3 col-xl-4 col-xxl-3 icon" src="./img/icon-3.png" alt="icon3">
                          <div class="col-md-8 col-lg-8 trio-text">
                            <h3 class="trio-title">Competitive Pricing</h3>
                            <p>We provide the most responsive and functional IT design</p>
                          </div>
                    </div>
                </div>
                <div class="row section2">                   
                    <div class="col-lg-6 foto">
                        <img class="foto1" src="./img/thumb1.webp" alt="thumb1">
                        <img class="foto2" src="./img/thumb2.webp" alt="thumb2">
                        <img class="foto3" src="./img/shape1.png" alt="taskeliai">
                        <img class="foto4" src="./img/shape2.png" alt="taskeliai">
                    </div>                   
                    <div class="col-lg-6 right-section">
                        <h1 class="title">More than 25+ years we provide IT solutions</h1>
                        <h3 class="subtitle">During this time, we’ve built a reputation for excellent clients satisfaction as evidenced by our</h3>
                        <p class="text">Each demo built with Teba will look different. You can customize almost anything in the appearance of your website with only a few clicks. Each demo built with Teba will look different.</p>
                        <div>
                            <button class="btn">More About Us</button>
                        </div>
                    </div>
                </div>
        </div>`

    document.getElementById('app').insertAdjacentHTML('beforeend', HTML);
}