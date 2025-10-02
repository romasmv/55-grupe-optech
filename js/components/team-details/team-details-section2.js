export function teamdetailssection2() {

    let HTML =  `
    <div class="container back2">
                <div class="row  teamdet-sec21">
                <div class="teamdet-sec2">                   
                    <div class="col-lg-6 teamdet2">
                        <img class="details-foto1" src="../img/team-details/team-details.webp" alt="thumb1">
                    </div>                   
                    <div class="col-lg-6">
                    <div class="col-12 col-md-12 col-lg-12 teamdetails-first-column">
                     <h2>Sophia Rodriguez</h2>
                     <p>CEO & Founder</p>
                     <p>A content management system helps you create, manage, and publish content on the web. It also keep content organized and accessible so it can be used and repurposed effectively.</p>
                      <a href="#" class="fa fa-phone teamdet5 "> 518-564-3200</a>
                      <a href="#" class="fa fa-envelope-o "> qubohub@example.com</a>
                     <div class="detsoc">
                       <a href="#" class="fa fa-facebook"></a>
                       <a href="#" class="fa fa-linkedin"></a>
                       <a href="#" class="fa fa-twitter"></a>
                       <a href="#" class="fa fa-instagram"></a>
                    </div>
                    <h2 class="section-title deth2">Fill The Contact Form</h2>
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
                      <div class="form-row teamdet3">
                        <button type="submit">Send message</button>
                      </div>
                    </form>
                </div>
                    </div>
                </div>
        </div>`

    document.getElementById('app').insertAdjacentHTML('beforeend', HTML);
}