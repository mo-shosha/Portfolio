// Navbar Component
function createNavbar() {
  const navbar = document.createElement('nav');
  navbar.className = 'navbar';

  navbar.innerHTML = `
    <ul class="navbar-list">
      <li class="navbar-item">
        <button class="navbar-link active" data-nav-link>About</button>
      </li>
      <li class="navbar-item">
        <button class="navbar-link" data-nav-link>Resume</button>
      </li>
      <li class="navbar-item">
        <button class="navbar-link" data-nav-link>Portfolio</button>
      </li>
      <li class="navbar-item">
        <button class="navbar-link" data-nav-link>Contact</button>
      </li>
    </ul>
  `;

  return navbar;
}

export { createNavbar };