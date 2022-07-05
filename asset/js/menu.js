var menu = document.querySelector('.list-menu');


menu.onclick = function() {
    var submenu = document.querySelector('.list-submenu');
    if (submenu.style.display === 'none') {
        submenu.style.display = 'flex';
    } else {
        submenu.style.display = 'none';
    }
}









const activeMenus = document.querySelectorAll('.activeLI');

activeMenus.forEach(function(activeMenu) {
    activeMenu.onclick = function(e) {
        const classActiveMenus = document.querySelector('.activeLI.active');
        if(!this.classList.contains('active')){
            classActiveMenus.classList.remove('active');
            this.classList.add('active');
        };
        e.preventDefault();
    }
})









const titles = document.querySelectorAll('.title-menu-news');

titles.forEach(function(title) {
    title.onclick = function(e) {
        const titlesAc = document.querySelector('.title-menu-news.active');
        if(!this.classList.contains('active')){
            titlesAc.classList.remove('active');
            this.classList.add('active');
        };
        e.preventDefault();
    }
})

const search = document.querySelector('.input-header');
const divSearch = document.querySelector('.value-input');
search.onfocus = function(){
    divSearch.style.display = 'block';
    
}

search.onfocusout = function() {
    divSearch.style.display = 'none';
}
