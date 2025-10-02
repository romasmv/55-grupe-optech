export function error404 () {

    let HTML = `
        <div class="container">
        <div class="row">
            <div class="clm-404 col-12">
                <img class="col-12 col-lg-8 m-lg-2 col-xl-6 m-xl-3" src="../img/utility-404/errors404.svg" alt="#">
                <h2 class="title-404">Oops, this page is not found</h2>
                <p class="desc-404 col-12 col-lg-8 m-lg-2 col-xxl-6 m-xxl-3">The page you're looking for can't be found. Double-check the URL and try again. we invite you to visit our homepage.</p>
                <div class="btn-404">
                    <a href="#">Back to Homepage</a>
                </div>
            </div>
        </div>
    </div>
    `;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
};