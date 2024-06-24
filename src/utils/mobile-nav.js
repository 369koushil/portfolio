const mobile_menu_load=()=>{
    let menu=document.body.querySelector(".header__hamburger");
let mobile_nav=document.body.querySelector(".mobile-nav");
let links=document.body.querySelectorAll(".mobile-nav__link");
let isMenuOpen=false;

menu.addEventListener("click",()=>{
    if(!isMenuOpen){
        mobile_nav.style.display="flex";
        document.body.style.overflow="hidden";
        isMenuOpen=true;
    }
else{
    mobile_nav.style.display="none";
    document.body.style.overflow="scroll";
    isMenuOpen=false;
}
})


for(let link of links){
    link.addEventListener("click",()=>{
        mobile_nav.style.display="none";
        document.body.style.overflow="scroll";
    })
}
}

export default mobile_menu_load;