export function blogdetailssection1() {

    let HTML =  `
    <div class="aboutus-section1">
         <div class="aboutus-section1-inside abt-sec1-in2">
            <h1 class="blogdet">Technology support allows erie non-profit to serve</h1>
            <div class="aboutUs-sec1 blogdet1">
                <a href="../">Home</a>
                <P class="fa fa-chevron-right"></P>
                <a href="../blog/">Blog</a>
                <P class="fa fa-chevron-right"></P>
                <P href="#">Technology support allows erie non-profit to serve</P>
            </div>
        </div>
    </div>`

    document.getElementById('app').insertAdjacentHTML('beforeend', HTML);
}