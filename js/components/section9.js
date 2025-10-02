export function section9() {
    let cardsHTML = '';


    
    const HTML = `

        <div class="section9">
            <div class="box9">
                <div class="together col-12">
                    <h1 class="section-title9">Let's work together</h1>
                    <p class="demo9">Each demo built with Teba will look different. You can customize anything appearance of your website with only a few clicks.</p>
                    <a href="#contact" class="cta-button9">Let's Start a Project</a>
                </div>
            </div>
            
        </div>
    `;
    
    
    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}

