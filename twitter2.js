const logoutbutton = document.getElementById('logoutbutton');
logoutbutton.addEventListener('click', (event) => {
  window.location.assign('TwitterLandingPage.html')
  event.preventDefault();
})