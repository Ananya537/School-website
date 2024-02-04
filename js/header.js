//-----------------------------Permanent values------------------------------------//
var nav = document.querySelector('nav');
var banner = document.querySelector('.banner-image');
var navLinks = document.querySelectorAll('.nav-link');
var navDropdownLinks = document.querySelectorAll('.dropdown-menu a');
var buffer = 7;
//--------------------------------------------------------------------------------//




//--------------------------Makes the header transparent-------------------------------//
function makeHeaderTransparent(){

    var bannerHeight = banner.clientHeight;
    var navbarHeight = nav.clientHeight;
    var imageOffsetTop = banner.offsetTop;


    if (imageOffsetTop <= navbarHeight) {
        console.log("Banner Height:", bannerHeight);
        console.log("Navbar Height:", navbarHeight);
        console.log("Window Scroll Y:", window.scrollY);

        if (window.scrollY > bannerHeight - navbarHeight + buffer) {
            nav.classList.add('bg-white', 'shadow');
            nav.classList.remove('bg-transparent');
            
            navLinks.forEach(link => {
                link.classList.remove('text-white');
                link.classList.add('nav-link-black');
            });
            
        } 
        
        else {
            if(screen.width <= 991 || window.innerWidth <= 991){
                nav.classList.add('navbar-color');
                nav.classList.remove('bg-transparent');
            }
            else{
                nav.classList.add('bg-transparent');
            }
            nav.classList.remove('bg-white', 'shadow');
            
            
            navLinks.forEach(link => {
                link.classList.add('text-white');
                link.classList.remove('nav-link-black');
                
            });
            navDropdownLinks.forEach(link => {
                link.classList.remove('text-white');
                link.classList.add('dropdown-menu-black');
            });
        }
    }

    else{ nav.classList.add('bg-white', 'shadow');
            nav.classList.remove('bg-transparent');
            
            navLinks.forEach(link => {
                link.classList.remove('text-white');
                link.classList.add('nav-link-black');
                link.classList.add('nav-link-black:hover');
            });
            
    }

}
//---------------------------------------------------------------------------------//




//-------------------------Header with transparent background-----------------------//
function initializeHeader_transparent() {
    window.addEventListener('scroll', makeHeaderTransparent);
}
//---------------------------------------------------------------------------------//




//------------------------------Header with white background-----------------------//
function initializeHeader(){
    var nav = document.querySelector('nav');
    var navLinks = document.querySelectorAll('.nav-link');
    nav.classList.add('bg-white', 'shadow');
    banner.classList.add('banner-image-sizeChange');
    nav.classList.remove('bg-transparent');
    navLinks.forEach(link => {
        link.classList.remove('text-white');
        link.classList.add('nav-link-black');
        link.classList.add('nav-link-black:hover');
    });
}
//---------------------------------------------------------------------------------//