// import { headerMenuData } from "../data/headerMenuData.js";

export function header(isMainPage = false) {
    const path = isMainPage ? './' : '../';

   const headerMenuData = [
        { href: `${path}`, text: 'Home'},
        { href: `#`,
          text: `Pages`,
            sub1Menu: [
            { href: `${path}aboutUs/`, text: 'About Us'},
            { href: `${path}pricing/`, text: 'Pricing'},
            { href: `#`,
              text: `Service`,
              sub2Menu: [
                    { href: `${path}service/`, text: 'Service'},
                    { href: `${path}service-details/`, text: 'Service Details'},
                   ]},
            { href: `#`,
              text: 'Team',
              sub2Menu: [
                    { href: `${path}team/`, text: 'Team'},
                    { href: `${path}team-details/`, text: 'Team Details'},
                   ]},
            { href: `#`,
              text: 'Utility',
              sub2Menu: [
                    { href: `${path}utility-faq/`, text: 'Faq'},
                    { href: `${path}utility-404/`, text: '404'},
                    { href: `${path}utility-testimonial/`, text: 'Testimonial'},
                   ]},
            { href: `#`, 
              text: 'Shop',
              sub2Menu: [
                    { href: `${path}shop/`, text: 'Shop'},
                    { href: `${path}shop-details/`, text: 'Shop Details'},
                    { href: `${path}my-cart/`, text: 'My Cart'},
                    { href: `${path}checkout/`, text: 'Checkout'},
                   ]},
             ]},
        { href: `#`, 
         text: 'Portfolio',
         sub1Menu: [
            { href: `${path}portfolio-grid/`, text: 'Portfolio Grid'},
            { href: `${path}portfolio-masonry/`, text: 'Portfolio Masonry'},
            { href: `${path}single-portfolio/`, text: 'Single Portfolio'},
            ]},
        { href: `#`,
          text: 'Blog',
          sub1Menu: [
            { href: `${path}blog/`, text: 'Blog'},
            { href: `${path}blog-grid/`, text: 'Blog Grid'},
            { href: `${path}blog-details/`, text: 'Blog Details'},
            ]},
        { href: `${path}contact/`, text: 'Contact'},
    ];

 
    const HTML = `
    <div class="container1 header-row header-white">
         <div class="row1">
            <div class="top-header">
                <div class="left-row-topheader">
                        <p class="fa fa-map-marker "> 2774 Oak Drive, Plattsburgh, New York</p>
                </div>
                <div class="right-row-topheader">
                      <a href="#" class="fa fa-phone "> 518-564-3200</a>
                      <a href="#" class="fa fa-envelope-o " > tecbolt@example.com</a>
                </div>
            </div>
         </div>
    </div>
    <div class="container1 main-header header-white-btm">
        <div class="row1">
          <div class="botm-part">
            <div class="left-row-header">
                <img src="${path}img/Logo-main.webp" alt="logo"
                <nav class="submeniu">${headerMenu(headerMenuData)}</nav>
            </div>
            <div class="right-row-header">
                <a href="#" class="fa fa-search"></a>
                <a href="${path}">Get in Touch</a>
                <div class="burger fa fa-bars"></div>
                </div>
          </div>
        </div>
    </div>
    <div class="mobile-main-header">
        <img src="${path}img/Logo-main.webp" alt="logo">
        <i class="fa fa-times close"></i>
        <nav> ${mobileHeaderMenu(headerMenuData)}</nav>
    </div>`

    document.getElementById('app').insertAdjacentHTML('beforeend', HTML);

    const hamburgerDOM = document.querySelector('.burger');
    const mobileHeaderDOM = document.querySelector('.mobile-main-header')
    const closeDOM = document.querySelector('.close')

    hamburgerDOM.addEventListener('click',() =>{
    mobileHeaderDOM.classList.add('show');
    });

    closeDOM.addEventListener('click',() =>{
    mobileHeaderDOM.classList.remove('show');
    });
    
    
    window.addEventListener('keydown',event => {
        if(event.key === 'Escape')
            mobileHeaderDOM.classList.remove('show')    
    })

   
    const buttonpushDOM = document.querySelectorAll('.mobile-has-submenu');
    const showsubDOM = document.querySelectorAll('.mobile-submenu');

    for (let i = 0; i < buttonpushDOM.length; i++) {
    let clickCount = 0;

    buttonpushDOM[i].addEventListener('click', () => {
        if (clickCount++ % 2 === 0) {
            showsubDOM[i].classList.add('show');
        } else {
            showsubDOM[i].classList.remove('show');
        }
    });
   }

    const buttonpush2hDOM = document.querySelectorAll('.mobile-sub1-with-sub2');
    const showsub2DOM = document.querySelectorAll('.mobile-sub2menu');

    for (let i = 0; i < buttonpush2hDOM.length; i++) {
    let clickCount = 0;

    buttonpush2hDOM[i].addEventListener('click', (event) => {
        event.stopPropagation();
        if (clickCount++ % 2 === 0) {
            showsub2DOM[i].classList.add('show');
        } else {
            showsub2DOM[i].classList.remove('show');
        }
    });
    }
   
    }


function headerMenu(data) {
    let navHTML = '';

    for (const link of data) {
        if (link.sub1Menu) {
            let sub1HTML = '';

            for (const sub1 of link.sub1Menu) {
                if (sub1.sub2Menu) {
                    let sub2HTML = '';
                    for (const sub2 of sub1.sub2Menu) {
                        sub2HTML += `<a class="sub2" href="${sub2.href}">${sub2.text}</a>`;
                    }

                    sub1HTML += `
                        <div class="sub1-with-sub2">
                            <a class="sub1" href="${sub1.href}">${sub1.text} <i class="fa fa-caret-right"></i></a>
                            <div class="sub2menu">${sub2HTML}</div>
                        </div>`;
                } else {
                    sub1HTML += `<a class="sub1" href="${sub1.href}">${sub1.text}</a>`;
                }
            }

            navHTML += `
                <div class="has-submenu">
                    <a class="" href="${link.href}">${link.text}<i class="fa fa-caret-down"></i></a>
                    <div class="submenu sub1menu">${sub1HTML}</div>
                </div>`;
        } else {
            navHTML += `<a class="" href="${link.href}">${link.text}</a>`;
        }
    }

    return navHTML;
}

function mobileHeaderMenu(data) {
    let navHTML = '';

    for (const link of data) {
        if (link.sub1Menu) {
            let sub1HTML = '';

            for (const sub1 of link.sub1Menu) {
                if (sub1.sub2Menu) {
                    let sub2HTML = '';
                    for (const sub2 of sub1.sub2Menu) {
                        sub2HTML += `<a class="mobile-sub2" href="${sub2.href}">${sub2.text}</a>`;
                    }

                    sub1HTML += `
                        <div class="mobile-sub1-with-sub2">
                            <a class="mobile-sub1" href="${sub1.href}">${sub1.text} <i class="fa fa-angle-right"></i></a>
                            <div class="mobile-sub2menu">${sub2HTML}</div>
                        </div>`;
                } else {
                    sub1HTML += `<a class="mobile-sub1" href="${sub1.href}">${sub1.text}</a>`;
                }
            }

            navHTML += `
                <div class="mobile-has-submenu">
                    <a class="mobile-gap" href="${link.href}">${link.text}<i class="fa fa-angle-right"></i></a>
                    <div class="mobile-submenu mobile-sub1menu">${sub1HTML}</div>
                </div>`;
        } else {
            navHTML += `<a class="" href="${link.href}">${link.text}</a>`;
        }
    }

    return navHTML;
}