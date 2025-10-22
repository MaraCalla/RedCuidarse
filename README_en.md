# RedCuidarse

RedCuidarse is a website focused on promoting mental health care among young people. The project brings together resources, tools and community participation channels to facilitate access to information, support and guidance.

## Main features

- Home page (`index.html`) with clear navigation to the main sections: Home, About Us, Community, Tools and Emergencies.
- Integration of external resources:
  - "Phrase of the day" via an embedded Padlet.
  - Embedded feedback form (Google Forms) to collect opinions and suggestions.
  - Links to posts and social networks to extend reach.
- News carousel to highlight posts, events or recent resources (implemented with HTML/CSS/JS).
- Responsive mobile menu and navigation effects: hamburger menu, smooth scrolling and animations using Intersection Observer (implemented in `java.js`).
- Contact section and footer with organization information, email and social media links.

## Project importance

RedCuidarse aims to lower barriers to access to mental health information and create a safe space where young people can learn, participate and find support. Benefits include:

- Accessibility to relevant and up-to-date resources.
- Promotion of community participation through interactive spaces (Padlet, forms, social links).
- Responsive design to reach young people on mobile devices, where they often look for information.

## Notable qualities

- Simple and modular code: HTML, CSS and JavaScript separated by sections (`Comunidad`, `Herramientas`, `Emergencias`, `Nosotros`).
- Use of secure embeds (Padlet, Google Forms) to keep content dynamic without exposing additional infrastructure.
- Usability-focused: clear navigation, news carousel and feedback form.
- Easy to adapt and extend: new posts, blog entries or resources can be added without restructuring the site base.

## Repository structure

- `index.html` – Main page.
- `style.css` – Global styles.
- `java.js` – Interaction logic (mobile menu, animations, carousel, smooth scroll).
- `Comunidad/`, `Herramientas/`, `Emergencias/`, `Nosotros/` – Folders with HTML, CSS and JS for each section.
- `IMAGENESCU/` – Images used on the website.
- `test/` – Contains a sample Java project (appears to be a demo or unit tests) that is not part of the main frontend.

## How to run locally

1. Open `index.html` in a modern browser (Chrome, Edge, Firefox).
2. Make sure the folder structure and images remain in the same relative locations so resources load correctly.

Note: No server is required for the static version; for local development with reload use a static server (for example, `Live Server` in VS Code).

## Best practices and recommendations

- Validate and sanitize any user-generated content before publishing.
- Optimize images (webp / reduced sizes) to improve mobile performance.
- Add descriptive `alt` attributes to all images to improve accessibility.
- Add meta tags for SEO and Open Graph to improve social sharing.

## How to contribute

1. Fork the repository and create a branch for your improvement: `feature/your-improvement`.
2. Open a Pull Request describing the changes and the purpose.
3. If you want to propose content (phrases, resources), use the `Comunidad` section or open an issue.

## Ideas for future improvements

- Add a lightweight blog or CMS module to manage posts from the site.
- Implement visual integration tests (for example with Playwright) to ensure key components work on mobile and desktop.
- Add a local form (with backend) to collect feedback without relying on external services.
- Internationalization (i18n) to support more languages.

---


