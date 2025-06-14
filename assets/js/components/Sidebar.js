// Sidebar Component
function createSidebar(personalInfo) {
  const sidebar = document.createElement('aside');
  sidebar.className = 'sidebar';
  sidebar.setAttribute('data-sidebar', '');

  sidebar.innerHTML = `
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="${personalInfo.avatar}" alt="${personalInfo.name}" width="80">
      </figure>

      <div class="info-content">
        <h6 class="name" title="${personalInfo.name}"><small>${personalInfo.name}</small></h6>
        <p class="title">${personalInfo.title}</p>
      </div>

      <button class="info_more-btn" data-sidebar-btn>
        <span>Show Contacts</span>
        <ion-icon name="chevron-down"></ion-icon>
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator"></div>

      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="mail-outline"></ion-icon>
          </div>
          <div class="contact-info">
            <p class="contact-title">Email</p>
            <a href="mailto:${personalInfo.email}" class="contact-link">${personalInfo.email}</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="phone-portrait-outline"></ion-icon>
          </div>
          <div class="contact-info">
            <p class="contact-title">Phone</p>
            <a href="tel:${personalInfo.phone}" class="contact-link">${personalInfo.phone}</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="location-outline"></ion-icon>
          </div>
          <div class="contact-info">
            <p class="contact-title">Location</p>
            <address>${personalInfo.location}</address>
          </div>
        </li>
      </ul>

      <div class="separator"></div>

      <ul class="social-list">
        ${personalInfo.socialLinks.map(social => `
          <li class="social-item">
            <a href="${social.url}" class="social-link" title="${social.name}" target="_blank">
              <img src="${social.icon}" alt="${social.name}" width="24" height="24">
            </a>
          </li>
        `).join('')}
      </ul>
    </div>
  `;

  return sidebar;
}

export { createSidebar }; 