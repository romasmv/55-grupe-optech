export function serviceSection1 () {

    let HTML =  `
    <div class="aboutus-section1">
         <div class="aboutus-section1-inside abt-sec1-in2">
            <h1>Our Services</h1>
            <div class="aboutUs-sec1">
                <a href="../">Home</a>
                <P class="fa fa-chevron-right"></P>
                <P href="#">Our Services</P>
            </div>
        </div>
    </div>`

    document.getElementById('app').insertAdjacentHTML('beforeend', HTML);
}