const navItems = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false })
navItems.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})

const navLinks = document.querySelectorAll('.nav-link')
navLinks.forEach((l) => {
    l.addEventListener('click', () => {
        navLinks.forEach((m) => {
            m.classList.remove('active')
        })
        l.classList.add('active')
    }
    )
})

