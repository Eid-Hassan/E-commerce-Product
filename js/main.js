// // ======= Start Nav Bar
// let linkes = document.getElementById( "nav-menu" ),
//     closeLink = document.getElementById( "close-link" ),
//     showLink = document.getElementById( "show-link" );
// // ======= Start Nav Bar Dark Mode
// let dark = document.getElementById( "dark" ),
//     moon = document.getElementById( "moon" ),
//     sun = document.getElementById( "sun" ),
//     option = document.getElementById( "option" ),
//     optionLi = document.getElementById( "option-li" );
// // ========== scroll info about
// let about = document.getElementById( "about" ),
//     aboutInfo = document.getElementById( "about-info" ),
//     skills = document.getElementById( "skills-up" ),
//     spans = document.querySelectorAll( ".the-progress > span" ),
//     education = document.getElementById( "education" ),
//     work = document.getElementById( "work" ),
//     dataEducation = document.getElementById( "data-education" ),
//     dataWork = document.getElementById( "data-work" ),
//     project = document.getElementById( "project" ),
//     projectButton = document.getElementById( "project-button" ),
//     testimonial = document.getElementById( "testimonial" ),
//     dataTestimonial = document.getElementById( "data-testimonial" ),
//     nav = document.getElementById( "nav" ),
//     footer = document.getElementById( "footer" );
// // ================= Function for Nav
// if ( showLink )
// {
//     showLink.addEventListener( "click", () =>
//     {
//         showLink.style.display = "none"
//         linkes.style.display = "flex"
//         closeLink.style.display = "block"
//     } )
// }
// if ( closeLink )
// {
//     closeLink.addEventListener( "click", () =>
//     {
//         linkes.style.display = "none"
//         closeLink.style.display = "none"
//         showLink.style.display = "block"
//     } )
// }
// // ============ Function For Dark Mode
// if ( moon )
// {
//     moon.addEventListener( "click", () =>
//     {
//         document.body.style.background = "#0f1012"
//         moon.style.display = "none"
//         sun.style.display = "block"
//     } )
// }
// if ( sun )
// {
//     sun.addEventListener( "click", () =>
//     {
//         document.body.style.background = "white"
//         sun.style.display = "none"
//         moon.style.display = "block"
//         optionLi.classList.remove( ".edit-color-after span" )
//     } )
// }
// // ================= Function for Qualification
// if ( education )
// {
//     education.addEventListener( "click", () =>
//     {
//         education.classList.add( "qualification-active" );
//         work.classList.remove( "qualification-active" );
//         dataEducation.classList.add( "qualification-active" );
//         dataWork.classList.remove( "qualification-active" );
//     } )
// }
// if ( work )
// {
//     work.addEventListener( "click", () =>
//     {
//         education.classList.remove( "qualification-active" );
//         work.classList.add( "qualification-active" );
//         dataEducation.classList.remove( "qualification-active" );
//         dataWork.classList.add( "qualification-active" );
//     } )
// }
// // ================= Functin For Scoll Window
// window.onscroll = function ()
// {
//     if ( window.scrollY >= about.offsetTop - 100 ) { aboutInfo.style.opacity = 1; }
//     else { aboutInfo.style.opacity = 0; }
//     if ( window.scrollY >= skills.offsetTop - 200 )
//     { spans.forEach( ( span ) => { span.style.width = span.dataset.width; } ) }
//     else { spans.forEach( ( span ) => { span.style.width = 0; } ) };
//     if ( window.scrollY >= project.offsetTop - 200 ) { projectButton.style.opacity = 1; }
//     else { projectButton.style.opacity = 0; }
//     if ( window.scrollY >= testimonial.offsetTop - 300 ) { dataTestimonial.style.opacity = 1; }
//     else { dataTestimonial.style.opacity = 0; }
//     if ( window.scrollY >= footer.offsetTop - 500 ) { nav.style.display = "none"; }
//     else { nav.style.display = "flex"; }
// }
let layOut = document.getElementById( "layout" );
let sideBar = document.getElementById( "sidebar" );
let showCar = document.getElementById( "car-shop" );
let empty = document.getElementById( "empty" );

function toggleMenu ( e )
{
    e.classList.toggle( "open" );
    layOut.classList.toggle( "show-lay" );
}

if ( showCar )
{
    showCar.addEventListener( "click", () =>
    {
        empty.classList.toggle( "show-shop" );
    } )
}
