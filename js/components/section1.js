export function section1() {
    const HTML = `<section class="conteiner">
            
            
        <div class="blue1 row">

            <div class="leftsec1-main col-12 col-lg-6">
            <h5 class="tagline">We provide professional IT services</h5>
            
            <h1 class="hero-title">Delivering tech solutions for your startups</h1>
            
            <p class="hero-description">
                We transform businesses of most major sectors with powerful and adaptable digital solutions that satisfy the needs of today.
            </p>
            
            <div class="cta-buttons">
                <a href="#contact" class="btn btn-primary">Work With Us</a>
                <a href="#services" class="btn btn-secondary">View Services</a>
            </div>
        </div>
        
        <div rightsec1-main>
            <div class="hero-image col-12 col-lg-12 col-xl-12  col-s-12">
            
                <img src="./img/hero-thumb1.png" alt="hero-tumbl1" class="col-12">
            </div>
        </div>
    </section>`

      document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}