export function singlesection1() {

    let HTML =  `
    <div class="aboutus-section1">
         <div class="aboutus-section1-inside abt-sec1-in2">
            <h1>Cyber Security Analysis</h1>
            <div class="aboutUs-sec1">
                <a href="../">Home</a>
                <p class="fa fa-chevron-right"></p>
                <a href="../">Portfolio</a>
                <p class="fa fa-chevron-right"></p>
                <p href="#">Cyber Security Analysis</p>
            </div>
        </div>
    </div>`

    document.getElementById('app').insertAdjacentHTML('beforeend', HTML);
}