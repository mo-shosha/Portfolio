// Contact Component
function createContact(contactData) {
  const contact = document.createElement('article');
  contact.className = 'contact';
  contact.setAttribute('data-page', 'contact');

  contact.innerHTML = `
    <header>
      <h2 class="h2 article-title">Contact</h2>
    </header>

    <section class="mapbox" data-mapbox>
      <figure>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110449.3188130178!2d31.2243002!3d30.0334477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60e7b69a1%3A0xe4d9e3b2c42a7c66!2z2YXYsdmD2LIg2KfZhNmF2YjYp9mF!5e0!3m2!1sen!2seg!4v1718041226674!5m2!1sen!2seg"
          width="400"
          height="300"
          loading="lazy">
        </iframe>
      </figure>
    </section>

    <section class="contact-form">
      <h3 class="h3 form-title">Contact Form</h3>

      <form class="form" data-form>
        <div class="input-wrapper">
          <input type="text" name="fullname" class="form-input" placeholder="Full name" required data-form-input>
          <input type="email" name="email" class="form-input" placeholder="Email address" required data-form-input>
        </div>

        <textarea name="message" class="form-input" placeholder="Your Message" required data-form-input></textarea>

        <button class="form-btn" type="submit" disabled data-form-btn>
          <ion-icon name="paper-plane"></ion-icon>
          <span>Send Message</span>
        </button>
      </form>
    </section>
  `;

  return contact;
}

export { createContact }; 