// navbar
window.onscroll= function(){
    const header = document.querySelector('header');
    const headertop = header.offsetTop;

    if(window.pageYOffset > headertop){
        header.classList.add('navbar-blur');
    } else{
        header.classList.remove('navbar-blur');
    }
};

// humberger
const humberger = document.getElementById("humberger");
const navmenu= document.querySelector("#navmenu")

humberger.addEventListener('click', function(){
    humberger.classList.toggle('humberger-active');
    navmenu.classList.toggle('hidden');
});

