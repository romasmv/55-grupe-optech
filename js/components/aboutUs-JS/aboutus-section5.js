export function aboutussection5() {

    let HTML =  `
            <div class="container back">
            <div class="row aboutus-sec5">
                <div class="left-column-section4 col-12 sm-col-6 aboutus-sec5-inside">
                    <h1 class="title">Let's build an awesome project together</h1>
                    <p class="aboutus-section5-p">Each demo built with Teba will look different. You can customize almost anything in the appearance of your website with only a few clicks. Each demo built with Teba will look different</p>
                    <div class="due-aboutus">
                        <div class="due-inside">
                            <a href="#" class="fa fa-map-marker"></a>
                            <p>Address</p>
                            <p>1791 Yorkshire Circle Kitty Hawk, NC 279499</p>
                        </div>
                        <div class="due-inside">
                             <a href="#" class="fa fa-envelope-o abc"></a>
                             <p>Contact</p>
                             <a class="sec5-a" href="#">info@example.com</a>
                             <a class="sec5-a" href="#">518-564-3200</a>   
                        </div>
                    </div>
                    <p class="sec5-p">Office Hours: Mon – Sat: 8:00 AM – 10:00 PM</p>
                </div>
                <div class="right-column-section4 col-12 sm-col-6">
            <div class="column-aboutus-section5">
                <h2 class="section-title">Fill The Contact Form</h2>
                <p class="section-description">Feel free to contact with us, we don't spam your email</p>
                <form class="form">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="first-name"></label>
                            <input type="text" id="first-name" name="name" placeholder="Your Name" required>
                        </div>
                         <div class="form-group">
                            <label for="Phone-number"></label>
                            <input type="text" id="Phone-number" name="Phone number" placeholder="Phone number" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="Email"></label>
                            <input type="text" id="email" email="email" maxlength="50" placeholder="Email address"required>
                        </div>
                     </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="message"></label>
                            <textarea id="message" name="message" maxlength="1000" minlength="20" placeholder="Write your message" required ></textarea>
                        </div>
                     </div>
                    <div class="form-row">
                        <button type="submit">Send message</button>
                    </div>
                </form>
            </div>
                </div>
            </div>
        </div>`

    document.getElementById('app').insertAdjacentHTML('beforeend', HTML);
}