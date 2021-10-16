function load() {
    var menuItems = Array.from(document.querySelectorAll('.megamenu-navitem'))
    var submenus = Array.from(document.querySelectorAll('.megamenu-section'))

    menuItems.forEach((menuItem, index) => {
        let parentElement = menuItem.parentNode
        menuItem.addEventListener('click', function(event) {
            // reset all parent submenus
            submenus.forEach((submenu, index) => {
                submenu.classList.remove('active')
            })

            // Add active menu for the item clicked
            if(!parentElement.classList.contains('active')) {
                parentElement.classList.add('active')
            }
        })
    })
    submenus.forEach((submenu) => {
        // Bind escape key to close and handle focus
        submenu.addEventListener('keyup', (event) => {
            if (event.key === 'Escape' && submenu.classList.contains('active')) {
                submenu.classList.remove('active')
                submenu.querySelector('.megamenu-navitem').focus()
            }
        })
    })
}

document.addEventListener('DOMContentLoaded', load)