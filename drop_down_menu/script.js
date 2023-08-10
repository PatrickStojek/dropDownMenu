const menu = document.querySelector('.menu-context');



function removeMenu() {
    menu.style.left = '-9999px';
    menu.style.top = '-9999px';
}

function rightButton (e) {
    e.preventDefault();

    if(e.button == 2) {
        e.stopPropagation();
        menu.style.left = e.pageX + 10 + 'px';
        menu.style.top = e.pageY + 10 + 'px';
    }
}

document.querySelector(".blockRightBtn").addEventListener("mousedown", rightButton)

document.querySelector(".blockRightBtn").addEventListener("contextmenu", e => {
    e.preventDefault();
})

document.addEventListener("click", removeMenu);
document.addEventListener("scroll", removeMenu);


