export function footer(isMainPage = false) {
    const path = isMainPage ? './' : '../';
    const logoPath = isMainPage ? `${path}img/Logo-main.webp`: `${path}img/logo-white.svg`;

    let HTML =  `
            <footer class="container1 footer footer-blue">
            <div class="row footer-top">
                <div class="col-12 col-md-12 col-lg-4 footer-first-column">
                    <img src="${logoPath}" alt="Logo">
                    <p>Each demo built with Teba will look different. You can customize almost anything in the appearance of your website with only a few</p>
                    <div>
                     <a href="#" class="fa fa-facebook"></a>
                     <a href="#" class="fa fa-linkedin"></a>
                     <a href="#" class="fa fa-twitter"></a>
                     <a href="#" class="fa fa-instagram"></a>
                    </div>
                </div>
                <div class="col-12 col-md-4 col-lg-3 footer-second-column footer-design">
                    <p>Quick Links</p>
                    <a href="#">About Us</a>
                    <a href="#">Our Team</a>
                    <a href="#">Pricing</a>
                    <a href="#">Blogs</a>
                    <a href="#">Contact Us</a>
                </div>
                <div class="col-12 col-md-4 col-lg-2 footer-third-column footer-design">
                    <p>Services</p>
                    <a href="#">UI/UX Design</a>
                    <a href="#">App Development</a>
                    <a href="#">Digital Marketing</a>
                    <a href="#">Web Development</a>
                    <a href="#">Cyber Security</a>
                </div>
                <div class="col-12 col-md-4 col-lg-3 footer-fourth-column footer-design">
                    <p>Information</p>
                    <a href="#">Working Process</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Faqs</a>
                </div>
            </div>
            <div class="row footer-bottom">
                <p class="col-12">Copyright &copy; 2024 Qubohub. All rights reserved.</p>
            </div>
        </footer>`

    document.getElementById('app').insertAdjacentHTML('beforeend', HTML);
}