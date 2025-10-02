export function aboutussection4() {
   let HTML =  `
    
        <section class="stats-section">
        <div class="stats-container">
           
            <div class="stat-item col-12 col-md-6 col-xl-3">
                <div class="stat-icon">
                    <img src="../img/aboutus-section4/icon1.svg" alt="" width=36 height=36>
                </div>
                <div class="stat-content">
                    <div class="stat-number">1,800+</div>
                    <div class="stat-label">Happy Clients</div>
                </div>
            </div>

            <div class="stat-item col-12 col-md-6 col-xl-3">
                <div class="stat-icon">
                    <img src="../img/aboutus-section4/icon2.svg" alt="" width=36 height=36>
                </div>
                <div class="stat-content">
                    <div class="stat-number">120+</div>
                    <div class="stat-label">Finished Projects</div>
                </div>
            </div>

            <div class="stat-item col-12 col-md-6 col-xl-3">
                <div class="stat-icon">
                    <img src="../img/aboutus-section4/icon3.svg" alt="" width=36 height=36>
                </div>
                <div class="stat-content">
                    <div class="stat-number">150+</div>
                    <div class="stat-label">Skilled Experts</div>
                </div>
            </div>

            
            <div class="stat-item col-12 col-md-6 col-xl-3">
                <div class="stat-icon">
                    <img src="../img/aboutus-section4/icon4.svg" alt="" width=36 height=36>
                </div>
                <div class="stat-content">
                    <div class="stat-number">100%</div>
                    <div class="stat-label">Clients Satisfaction</div>
                </div>
            </div>
        </div>
    </section>`

   
document.getElementById('app').insertAdjacentHTML('beforeend', HTML);
}
