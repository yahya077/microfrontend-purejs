import renderDashboard from './dashboard/render.js';

const $app = document.getElementById('app');

window.addEventListener('popstate', () => {
  console.log(window.location.pathname.substr(1))
  reRender();
});

function reRender() {
  $app.innerHTML = renderDashboard();
}