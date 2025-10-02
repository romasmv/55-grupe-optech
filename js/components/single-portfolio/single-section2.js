export function singlePortfolioSection2 () {
   
   let HTML = `
    <div class="container">
        <div class="row">
            <img class="col-12 singleP-photo" src="../img/single-portfolio/p_details.webp" alt="Presentation"/>
            <div class="col-12 col-lg-8 singleP-left">
                <div class="singleP-content">
                    <h3 class="singleP-title">Project overview</h3>
                    <p class="singleP-text">A content management system helps you create, manage, and publish content on the web. It also keep content organized and accessible so it can be used and repurposed effectively. There are various kinds of content management systems available—from cloud-based to a headless</p>
                    <p class="singleP-text">CMS provides user-friendly features for easy editing and is compatible with installing plugins and tools that provide even more features for advanced functions. API CMS’s are built to have an excellent user-friendly interface that is easy to use.</p>
                </div>
                <div class="singleP-content">
                    <h3 class="singleP-title">The challenge of project</h3>
                    <p class="singleP-text">A content management system (CMS) is an application that is used to manage content, allowing multiple contributors to create, edit and publish. Content in a CMS is typically stored in a database and displayed in a presentation layer based on a set of templates like a website.</p>
                    <div class="col-lg-12 singleP-content-photos">
                        <div class="col-12 col-md-6">
                            <img src="../img/single-portfolio/p1.webp" alt="working process"/>
                        </div>
                        <div class="col-12 col-md-6">
                            <img src="../img/single-portfolio/p2.webp" alt="working process"/>
                        </div>
                    </div>
                    <p class="singleP-text">CMS provides user-friendly features for easy editing and is compatible with installing plugins and tools that provide even more features for advanced functions. API CMS’s are built to have an excellent user-friendly interface that is easy to use.</p>
                    <div class="singleP-list">
                        <p class="singleP-list-text"><i class="fa2 fa fa-check"></i>Creating and editing content</p>                        
                        <p class="singleP-list-text"><i class="fa2 fa fa-check"></i>Workflows, reporting, and content organization</p>                        
                        <p class="singleP-list-text"><i class="fa2 fa fa-check"></i>User & role-based administration and security</p>                        
                        <p class="singleP-list-text"><i class="fa2 fa fa-check"></i>Flexibility, scalability, and performance and analysis</p>                       
                        <p class="singleP-list-text"><i class="fa2 fa fa-check"></i>Multilingual content capabilities</p>
                    </div>
                </div>
                <div class="singleP-content">
                    <h3 class="singleP-title">Final results</h3>
                    <p class="singleP-text">Having a content management system for your website allows you to have control of your content. It means having the ability to update, change or delete any images, text, video, or audio. It allows you to keep your site organized, up to date and looking.</p>
                </div>
            </div>
            <div class="col-12 col-lg-4 singleP-links">
                <div class="singleP-sidebar">
                    <div class="singleP-sidebar-menu">
                        <h4 class="singleP-title">Project Details</h4>
                        <div class="singleP-project-details">
                            <div class="singleP-sidebar-subtitle">
                                <h5 class="singleP-subtitle">Client:</h5>
                                <h5 class="singleP-subtitle">Category:</h5>
                                <h5 class="singleP-subtitle">Date:</h5>
                                <h5 class="singleP-subtitle">Website:</h5>
                            </div>
                            <div class="singleP-sidebar-text">
                                <p class="singleP-text">Porter Victoria</p>
                                <p class="singleP-text">Web Development</p>
                                <p class="singleP-text">20 January, 2023</p>
                                <a class="singleP-text" href="#">example@gmail.com</a>
                            </div>
                        </div>
                        <div class="singleP-social">
                            <a href="#" class="fa fa-facebook"></a>
                            <a href="#" class="fa fa-linkedin"></a>
                            <a href="#" class="fa fa-twitter"></a>
                            <a href="#" class="fa fa-instagram"></a>
                        </div>
                    </div>
                    <div class="singleP-contact">
                        <div class="singleP-icon" >
                            <img src="../img/service-details-section2/icon-5.png" alt="icon"></img>
                        </div>
                        <h3 class="singleP-contact-title">Don't hesitate to contact us</h3>
                        <p class="singleP-contact-text">At our IT solution company, we are committed to exceptional</p>
                        <button class="btn">Get in Touch</button>
                    </div>
                </div>
            </div>
            <div class="col-lg-12 singleP-bottom-bar">
                <div class="singleP-bottom">
                    <a href="#" class="fa fa-angle-left"></a>
                    <div>
                        <p class="singleP-prev-text">Prev Project</p>
                        <h3 class="singleP-prev-subtitle">CMS Software Solution</h3>
                    </div>
                </div>
                <div class="singleP-bottom">
                    <div>
                        <p class="singleP-prev-text">Next Project</p>
                        <h3 class="singleP-prev-subtitle">Health App Development</h3>
                    </div>
                <a href="#" class="fa fa-angle-right"></a>
                </div>
            </div>
        </div>
    </div>`;
        
    
        document.getElementById('app').insertAdjacentHTML('beforeend', HTML);
}