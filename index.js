const alertBanner = document.getElementById('alert');
const trafficCanvas = document.getElementById('traffic-chart');


alertBanner.innerHTML =
  ` 
  <div class="alert-banner">
      <p><strong>Alert:</strong> You have unread messages</p>
      <p class="alert-banner-close">X</p>
  </div>
  `

alertBanner.addEventListener('click', e => {
  const element = e.target;
  if (element.classList.contains ("alert-banner-close")) {
    alertBanner.style.display = "none"
  }
});
