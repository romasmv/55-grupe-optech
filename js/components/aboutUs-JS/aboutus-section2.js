export function aboutUsSection2 () {
    let HTML =  `
    <div class="container back2">
                <div class="row about-us-section2">                   
                    <div class="col-lg-6 foto">
                        <img class="foto1" src="../img/aboutus-section2/aboutus-section2-1.webp" alt="thumb1">
                        <img class="foto2" src="../img/aboutus-section2/aboutus-section2-2.webp" alt="thumb2">
                        <img class="foto3" src="../img/shape1.png" alt="taskeliai">
                        <img class="foto4" src="../img/shape2.png" alt="taskeliai">
                    </div>                   
                    <div class="col-lg-6 about-us-right-section2">
                        <h1 class="title">Exclusive technology to provide IT solutions</h1>
                        <p class="text">Each demo built with Teba will look different. You can customize almost anything in the appearance of your website with only a few clicks. Each demo built with Teba will look different.</p>              
                        <div class="font-text">
                            <i class="fa2 fa fa-check"></i>
                            <p class="about-us-subtitle2">Easily Build Custom Reports And Dashboards</p>
                        </div>
                        <div class="font-text">
                            <i class="fa2 fa fa-check"></i>
                            <p class="about-us-subtitle2">Legacy Software Modernization</p>
                        </div>
                        <div class="font-text">
                            <i class="fa2 fa fa-check"></i>
                            <p class="about-us-subtitle2">Software For The Open Enterprise</p>
                        </div>
                        <div>
                            <button class="btn">More About Us</button>
                        </div>
                    </div>
                </div>
        </div>`

    document.getElementById('app').insertAdjacentHTML('beforeend', HTML);
}