fetch('menu.json')
.then(response => response.json())
.then(data => {
    const nav = document.getElementById('nav-place');
    nav.innerHTML = '';
    const logoDiv = document.createElement('div');
    logoDiv.className = 'logo';
    logoDiv.innerHTML = `
      <img src="${data.logo}" alt="Logo" style="width:60%;">
      <a>${data.userRole}</a>
    `;
    nav.appendChild(logoDiv);

    const contentNav = document.createElement('div');
    contentNav.className = 'content-nav';

    data.menu.forEach(item => {
      const navItem = document.createElement('div');
      navItem.className = 'nav-item';
      navItem.innerHTML = `
        <img src="${item.icon}" alt="${item.label}" style="width:20px; margin-right:10px;">
        <a>${item.label}</a>`;
        navItem.style.cursor = 'pointer'; //nantimah tambahin href aja di a nya
        navItem.addEventListener('click', function() {
        const headerTitle = document.querySelector('.header-title');
          headerTitle.innerHTML = item.label;
          $('#main-content-place').load(item.link);

          if (window.innerWidth <= 768){
            $('#nav-place').removeClass('active');
          }
        });
      contentNav.appendChild(navItem);
    });

    nav.appendChild(contentNav);
  })
  .catch(error => {
    console.error('hayoloh eror :', error);
  });

  // burger
$('.burger').click(function() {
    $('#nav-place').toggleClass('active');
});
$('#main-content-place').load('dashboard.html');