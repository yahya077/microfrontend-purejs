const navList = {
  lists: [
    {
      title: 'Product',
      link: '/product',
    },
    {
      title: 'Blog',
      link: '/blog',
    },
    {
      title: 'Ticket',
      link: '/ticket',
    },
  ],
};

function renderListItem(list) {
  const active = list.link === '/product' ? 'active' : '';
  return `
    <li class="sidenav__list-item">
      <a href="${list.link}" class="${active}">
        ${list.title}
      </a>
    </li>
  `;
}

export default function renderDashboard() {
  return `
    <div class="grid-container">
        <custom-header id="customHeader"><!--#include virtual="/header" --></custom-header>
        <aside class="sidenav">
          <div class="sidenav__close-icon">
            <i class="fas fa-times sidenav__brand-close"></i>
          </div>
            <div class="logo-wrapper">
                <img src="/layout/images/demo-logo.jpeg" alt=""> 
            </div>
            <ul class="sidenav__list">
              ${navList.lists.map((list) => renderListItem(list)).join('')}
            </ul>
        </aside>
        <custom-body id="customBody"><!--#include virtual="/body" --></custom-body>
    </div>
  `;
}