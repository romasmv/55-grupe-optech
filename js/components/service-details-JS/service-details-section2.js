import { serviceDetailsSection2Data } from "../../data/service-details-Data/service-details-section2-Data.js";

export function serviceDetailsSection2 () {
    let linksSD2HTML = '';

    for (let i = 0; i < 6; i++) {
          const serviceDetailsSection2 = serviceDetailsSection2Data[i];
          linksSD2HTML += `
          <a class="serviceD-sidebar-menu-link" href="${serviceDetailsSection2.href}">${serviceDetailsSection2.name} <svg xmlns="http://www.w3.org/2000/svg" width="19px" height="19px" fill="currentColor"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></a>`
    }

    let HTML =  `
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-8 serviceD-left">
                    <img class="serviceD-photo" src="../img/service-details-section2/service-deatils.webp" alt="work"/>
                <div class="serviceD-content">
                    <h3 class="serviceD-title">Overview</h3>
                    <p class="serviceD-text">A content management system helps you create, manage, and publish content on the web. It also keep content organized and accessible so it can be used and repurposed effectively. There are various kinds of content management systems available—from cloud-based to a headless</p>
                    <p class="serviceD-text">CMS provides user-friendly features for easy editing and is compatible with installing plugins and tools that provide even more features for advanced functions. API CMS’s are built to have an excellent user-friendly interface that is easy to use.</p>
                </div>
                <div class="serviceD-content">
                    <h3 class="serviceD-title">Features</h3>
                    <p class="serviceD-text">A content management system (CMS) is an application that is used to manage content, allowing multiple contributors to create, edit and publish. Content in a CMS is typically stored in a database and displayed in a presentation layer based on a set of templates like a website.</p>
                    <div class="serviceD-list">
                        <p class="serviceD-list-text"><i class="fa2 fa fa-check"></i>Creating and editing content</p>                        
                        <p class="serviceD-list-text"><i class="fa2 fa fa-check"></i>Workflows, reporting, and content organization</p>                        
                        <p class="serviceD-list-text"><i class="fa2 fa fa-check"></i>User & role-based administration and security</p>                        
                        <p class="serviceD-list-text"><i class="fa2 fa fa-check"></i>Flexibility, scalability, and performance and analysis</p>                       
                        <p class="serviceD-list-text"><i class="fa2 fa fa-check"></i>Multilingual content capabilities</p>
                    </div>
                </div>
                <div class="serviceD-content">
                    <h3 class="serviceD-title">Goal</h3>
                    <p class="serviceD-text">A content management system (CMS) is an application that is used to manage content, allowing multiple contributors to create, edit and publish. Content in a CMS is typically stored in a database and displayed in a presentation layer based on a set of templates like a website.</p>
                </div>
            </div>
            <div class="col-12 col-lg-4 serviceD-links">
                <div class="serviceD-sidebar">
                    <div class="serviceD-sidebar-menu">
                        <div class="serviceD-sidebar-menu-list">${linksSD2HTML}
                        </div>
                    </div>
                    <div class="serviceD-contact">
                        <div class="serviceD-icon" >
                            <img src="../img/service-details-section2/icon-5.png" alt="icon"></img>
                        </div>
                        <h3 class="serviceD-contact-title">Don't hesitate to contact us</h3>
                        <p class="serviceD-contact-text">At our IT solution company, we are committed to exceptional</p>
                        <button class="btn">Get in Touch</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`

    document.getElementById('app').insertAdjacentHTML('beforeend', HTML);
}