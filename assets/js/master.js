const _li = document.querySelectorAll('#list>li')
const listmenu = document.querySelectorAll('#listmenu1>div')
function menu(x) {
    listmenu.forEach((val) => {
        val.style.display = 'none'
    })
    listmenu[x].style.display = 'flex'
    _li.forEach((item) => {
        item.style.backgroundColor = 'rgb(224 242 254)'
        item.style.color = 'rgb(234 88 12)'
    })
    _li[x].style.backgroundColor = 'rgb(234 88 12)'
    _li[x].style.color = 'white'

}