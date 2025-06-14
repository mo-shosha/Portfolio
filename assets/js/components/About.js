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

    <section class="testimonials">
      <h3 class="h3 testimonials-title">Testimonials</h3>
      <ul class="testimonials-list has-scrollbar">
        ${testimonials.map(testimonial => `
          <li class="testimonials-item">
            <div class="content-card" data-testimonials-item>
              <figure class="testimonials-avatar-box">
                <img src="${testimonial.avatar}" alt="${testimonial.name}" width="60" data-testimonials-avatar>
              </figure>
              <h4 class="h4 testimonials-item-title" data-testimonials-title>${testimonial.name}</h4>
              <div class="testimonials-info">
                <p class="testimonials-job-title" data-testimonials-job-title>${testimonial.jobTitle}</p>
                <a href="${testimonial.linkedin}" class="testimonials-linkedin" data-testimonials-linkedin target="_blank">
                  LinkedIn
                </a>
              </div>
              <div class="testimonials-text" data-testimonials-text>
                <p>${testimonial.text}</p>
              </div>
            </div>
          </li>
        `).join('')}
      </ul>
    </section>
  `;

  return about;
}

export { createAbout }; 