
const NavLink = (login) => {

  if (login) {
    return (
      [
        {
          title: 'FORSIDE',
          url: '/',
          cName: 'nav-links home',
        },
        {
          title: 'OM BOSS',
          url: '/about',
          cName: 'nav-links about',
        },
        {
          title: 'KONTAKT',
          url: '/contact',
          cName: 'nav-links contact',
        },
        {
          title: 'FORUM',
          url: '/forum',
          cName: 'nav-links forum',
        },
        {
          title: 'LOG UD',
          url: '/logout',
          cName: 'nav-links fill'
        }
      ]
    )
  } else {
    return (
      [
        {
          title: 'FORSIDE',
          url: '/',
          cName: 'nav-links home'
        },
        {
          title: 'OM BOSS',
          url: '/about',
          cName: 'nav-links about'
        },
        {
          title: 'KONTAKT',
          url: '/contact',
          cName: 'nav-links contact'
        },
        {
          title: 'LOG IND',
          url: '/login',
          cName: 'nav-links fill'
        }
      ]
    )
  }
}  

export default NavLink;
