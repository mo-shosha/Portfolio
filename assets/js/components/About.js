// About Component
function createAbout(aboutData, testimonials) {
  const about = document.createElement('article');
  about.className = 'about active';
  about.setAttribute('data-page', 'about');

  about.innerHTML = `
    <header>
      <h2 class="h2 article-title">About me</h2>
    </header>

    <section class="about-text">
      ${aboutData.description.map(paragraph => `<p>${paragraph}</p>`).join('')}
    </section>

    <section class="service">
      <h3 class="h3 service-title">What i'm doing</h3>
      <ul class="service-list">
        ${aboutData.services.map(service => `
          <li class="service-item">
            <div class="service-icon-box">
              <img src="${service.icon}" alt="${service.title} icon" width="40">
            </div>
            <div class="service-content-box">
              <h4 class="h4 service-item-title">${service.title}</h4>
              <p class="service-item-text">${service.description}</p>
            </div>
          </li>
        `).join('')}
      </ul>
    </section>
  `;

  return about;
}

export { createAbout }; 