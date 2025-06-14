// Resume Component
function createResume(resumeData) {
  const resume = document.createElement('article');
  resume.className = 'resume';
  resume.setAttribute('data-page', 'resume');

  resume.innerHTML = `
    <header>
      <h2 class="h2 article-title">Resume</h2>
    </header>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline"></ion-icon>
        </div>
        <h3 class="h3">Education</h3>
      </div>

      <ol class="timeline-list">
        ${resumeData.education.map(edu => `
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">${edu.degree}</h4>
            <span>${edu.period}</span>
            <p class="timeline-text">${edu.institution}</p>
            <p class="timeline-text">${edu.description}</p>
          </li>
        `).join('')}
      </ol>
    </section>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="briefcase-outline"></ion-icon>
        </div>
        <h3 class="h3">Experience</h3>
      </div>

      <ol class="timeline-list">
        ${resumeData.experience.map(exp => `
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">${exp.position}</h4>
            <span>${exp.period}</span>
            <p class="timeline-text">${exp.company}</p>
            <p class="timeline-text">${exp.description}</p>
          </li>
        `).join('')}
      </ol>
    </section>

    <section class="skill">
      <h3 class="h3 skills-title">My skills</h3>

      <ul class="skills-list content-card">
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">Technical Skills</h5>
            <data value="80">80%</data>
          </div>
          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 80%;"></div>
          </div>
        </li>
      </ul>

      <div class="skills-categories">
        <div class="skills-category">
          <h4 class="h4">Technical Skills</h4>
          <ul class="skills-list">
            ${resumeData.skills.technical.map(skill => `
              <li class="skills-item">
                <div class="title-wrapper">
                  <h5 class="h5">${skill}</h5>
                </div>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="skills-category">
          <h4 class="h4">Tools & Technologies</h4>
          <ul class="skills-list">
            ${resumeData.skills.tools.map(tool => `
              <li class="skills-item">
                <div class="title-wrapper">
                  <h5 class="h5">${tool}</h5>
                </div>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    </section>
  `;

  return resume;
}

export { createResume }; 