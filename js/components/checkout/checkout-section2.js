export function checkoutsection2() {

    let HTML =  `
        <div class="container back21">
        <div class="row top-check2">
            <p class="fa fa-info-circle"> Have a coupon?</p>
            <a href="../shop/index.html">Click here to enter your code</a>
        </div>
        <div class="row checksec2">
            <div class="faq-sec35 col-12 col-lg-6">
                <h2 class="section-title">Billing Details</h2>
                <form class="form faqsec2">
                    <div class="form-row">
                        <div class="form-group">
                            <p>Firs name</p>
                            <label for="first-name"></label>
                            <input type="text" id="first-name" name="name" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <p>Last name</p>
                            <label for="last-name"></label>
                            <input type="text" id="last-name" name="name" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <p>Company name (optional)</p>
                            <label for="company-name"></label>
                            <input type="text" id="company-name" name="name" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group region">
                            <p>Country / Region</p>
                            <label for="country"></label>
                              <div class="countdet">
                               <div>Select an option...</div>
                               <i class="fa fa-angle-down"></i>
                             </div>
                            <div class="country-det">
                              <p>Lithuania</p>
                              <p>Latvia</p>
                              <p>Estonia</p>
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <p>Street address</p>
                            <label for="house-number"></label>
                            <input type="text" id="house-number" name="house" placeholder="House number and street name" required>
                            <label for="apartament"></label>
                            <input type="text" id="apartament" name="apartament" placeholder="Apartament, suite, uniq, etc.(optional)" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group region">
                            <p>Town / City</p>
                            <label for="town"></label>
                              <div class="countdet">
                               <div>Select an option...</div>
                               <i class="fa fa-angle-down"></i>
                             </div>
                            <div class="country-det2">
                              <p>Vilnius</p>
                              <p>Riga</p>
                              <p>Talin</p>
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <p>State</p>
                            <label for="state"></label>
                            <input type="text" id="state" name="state" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <p>ZIP Code</p>
                            <label for="zip-code"></label>
                            <input type="text" id="zip-code" name="zip-code" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <p>Phone</p>
                            <label for="phone"></label>
                            <input type="text" id="phone" name="phone" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <p>Email address</p>
                            <label for="Email"></label>
                            <input type="text" id="email" email="email" maxlength="50"required>
                        </div>
                     </div>
                    <div class="form-row">
                        <div class="form-group">
                            <h2>Additional Information</h2>
                            <p>Order notes (optional)</p>
                            <label for="message"></label>
                            <textarea id="message" name="message" maxlength="1000" minlength="20" placeholder="Notes about your order, e.g. special notes for delivery" required ></textarea>
                        </div>
                     </div>
                </form>
            </div>
            <div class="faq-sec36 col-12 col-lg-6">
                <h2 class="section-title">Your Order</h2>
                <div class="right-faqsec25">
                    <p>Product</p>
                    <p>Subtotal</p>
                </div>
                <div class="right-faqsec26">
                    <p>Total</p>
                    <span>$0.00</span>
                </div>
                <div class="right-faqsec27">
                  <input type="radio" name="radio" value="radio">
                  <label class="cash-button">Cash on delivery</label>
                </div>
                <h3>Pay with cash upon delivery.</h3>
                <p class="right-faqp">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>   
                <form class="form">
                    <div class="form-row check-5">
                        <button type="submit">Place Order</button>
                    </div>
                </form>
            </div>
        </div>    
    </div>`

    document.getElementById('app').insertAdjacentHTML('beforeend', HTML);

const buttonsDOM = document.querySelectorAll('.region');
let activeIndex = 0;

for (let itemDOM of buttonsDOM) {
  const pushBtn = itemDOM.querySelector('.countdet');
  if (pushBtn) {
    pushBtn.addEventListener('click', () => {
      if (activeIndex % 2 === 0) {
        itemDOM.classList.add('show1');
      } else {
        itemDOM.classList.remove('show1');
      }
      activeIndex++;
    });
  }
}

   const regions = document.querySelectorAll('.region');

for (let i = 0; i < regions.length; i++) {
  const region = regions[i];
  const display = region.querySelector('.countdet');

  const countryOptions = region.querySelectorAll('.country-det p');
  for (let j = 0; j < countryOptions.length; j++) {
    const option = countryOptions[j];
    option.addEventListener('click', () => {
      display.innerHTML = option.textContent ;
      region.classList.remove('show1');
    });
  }

  const cityOptions = region.querySelectorAll('.country-det2 p');
  for (let j = 0; j < cityOptions.length; j++) {
    const option = cityOptions[j];
    option.addEventListener('click', () => {
      display.innerHTML = option.textContent ;
      region.classList.remove('show1');
    });
  }
}

}