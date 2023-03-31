const toggleBtn = document.getElementById('main-header__sidebar-toggle');

const sideBarToggle = () => {
    document.body.classList.toggle('sidebar-open')
    console.log(document.body.classList)
}

// must come after initialization of function
toggleBtn.addEventListener('click', sideBarToggle)

// Theme switcher function
const switchTheme = () => {
    const rootEl = document.documentElement;
    let dataTheme = rootEl.getAttribute('data-theme');
    let newTheme;
    newTheme = (dataTheme === 'light') ? 'dark' : 'light'

    // set the new html attribute
    rootEl.setAttribute('data-theme', newTheme)

    // set the new local storage item
    localStorage.setItem('theme', newTheme)
}

const themeSwitchBtn = document.getElementById('sidebar__theme-switcher')

themeSwitchBtn.addEventListener('click', switchTheme)

// collapse function
const sideBarCollapseBtn = document.getElementById('sidebar__collapse')

const sideBarCollapse = () => {
    document.body.classList.toggle('sidebar-collapsed')
}

sideBarCollapseBtn.addEventListener('click', sideBarCollapse)