console.log('im work');
var menu = document.querySelector('.menu')
var menuOpener = document.querySelector('.menu-opener')
 console.log(menu,menuOpener)

 menuOpener.addEventListener('click',function () {
   menu.classList.toggle('active')
 })
