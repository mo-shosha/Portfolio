// Portfolio Component
function createPortfolio(portfolioData) {
  const portfolio = document.createElement('article');
  portfolio.className = 'portfolio';
  portfolio.setAttribute('data-page', 'portfolio');

  portfolio.innerHTML = `
    <header>
      <h2 class="h2 article-title">Portfolio</h2>
    </header>

    <section class="projects">
      <ul class="filter-list">
        <li class="filter-item">
          <button class="active" data-filter-btn data-category="all">All</button>
        </li>
        ${portfolioData.categories
          .filter(cat => cat !== 'all')
          .map(category => `
            <li class="filter-item">
              <button data-filter-btn data-category="${category}">
                ${category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
              </button>
            </li>
          `).join('')}
      </ul>

      <ul class="project-list">
        ${portfolioData.projects.map(project => `
          <li class="project-item active" data-filter-item data-category="${project.category}">
            <a href="${project.liveDemo || '#'}" target="_blank">
              <figure class="project-img">
                <div class="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>
                <img src="${project.image}" alt="${project.title}" loading="lazy">
              </figure>
              <h3 class="project-title">${project.title}</h3>
              <p class="project-category">${project.category.replace('-', ' ')}</p>
            </a>
          </li>
        `).join('')}
      </ul>
    </section>
  `;

  return portfolio;
}

export { createPortfolio };
