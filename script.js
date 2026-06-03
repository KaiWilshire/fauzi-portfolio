/*
  =========================
  EDIT HERE
  =========================
  Change the text and links below. The website updates automatically.
*/
const SITE_SETTINGS = {
  // CHANGE TEXT HERE - Main home heading
  introTitle: "Poems for the places we keep inside.",

  // CHANGE TEXT HERE - Fauzi intro text
  introText:
    "Fauzi gathers memory, tenderness, and stillness into poems that feel close to the skin. Step into selected works, book notes, and quiet correspondence.",

  // CHANGE TEXT HERE - Book information
  bookTitle: "Finding Home and Soul",
  bookDescription:
    "A collection of thoughts, emotions, and quiet truths.",

  // CHANGE TEXT HERE - Contact details
  contactDetails: {
    email: "fauziyaphyu@gmail.com",
    instagram: "@zee.studio25",
    location: "Located in Bangkok and Available for readings, collaborations, and publishing inquiries.",
  },

  // CHANGE TEXT HERE - Contact section heading
  contactHeading: "For readings, publishing notes, and quiet correspondence.",

  // CHANGE GOOGLE FORM LINK HERE - Feedback button URL
  feedbackFormUrl: "https://forms.gle/your-placeholder-google-form",

  // CHANGE BOOK BUY LINK HERE - Buy button URL
  bookBuyUrl: "https://example.com/buy-fauzi-book",

  // CHANGE IMAGE URL HERE - Home background image
  heroImageUrl: "images/BG.jpeg",

  // CHANGE IMAGE URL HERE - Sharp cutout image layered over the blurred background
  heroCutoutImageUrl: "images/fauzi-cutout.png",

  // CHANGE IMAGE URL HERE - Book cover image
  bookCoverImageUrl: "images/book.png",

  // CHANGE POEM IMAGE URL HERE - Replace these with your final poem image URLs
  poemImages: [
    "images/1.png",
    "images/2.png",
    "images/3.png",
    "images/4.png",
    "images/5.png",
    "images/6.png",
    "images/7.png",
    "images/8.png",
    "images/9.png",
    "images/10.png",
  ],

  // CHANGE POEM IMAGE URL HERE - Mobile-only vertical poem images
  poemImagesVertical: [
    "images/vertical/1.png",
    "images/vertical/2.png",
    "images/vertical/3.png",
    "images/vertical/4.png",
    "images/vertical/5.png",
    "images/vertical/6.png",
    "images/vertical/7.png",
    "images/vertical/8.png",
    "images/vertical/9.png",
    "images/vertical/10.png",
  ],
};

// Adds the editable text and image URLs to the page.
function fillPageContent() {
  document.getElementById("intro-title").textContent = SITE_SETTINGS.introTitle;
  document.getElementById("intro-text").textContent = SITE_SETTINGS.introText;
  document.getElementById("book-title").textContent = SITE_SETTINGS.bookTitle;
  document.getElementById("book-description").textContent = SITE_SETTINGS.bookDescription;
  document.getElementById("contact-heading").textContent = SITE_SETTINGS.contactHeading;

  document.getElementById("hero-background").style.backgroundImage = `url("${SITE_SETTINGS.heroImageUrl}")`;
  document.getElementById("hero-person").src = SITE_SETTINGS.heroCutoutImageUrl;
  document.getElementById("book-cover-image").src = SITE_SETTINGS.bookCoverImageUrl;

  document.getElementById("feedback-button").href = SITE_SETTINGS.feedbackFormUrl;
  document.getElementById("book-buy-button").href = SITE_SETTINGS.bookBuyUrl;
}

// Creates the ten full-screen poem image sections from the editable poem array above.
function buildPoemSections() {
  const poemsList = document.getElementById("poems-list");

  SITE_SETTINGS.poemImages.forEach((imageUrl, index) => {
    const poemItem = document.createElement("article");
    poemItem.className = "poem-panel";

    const number = String(index + 1).padStart(2, "0");
    const verticalImageUrl = SITE_SETTINGS.poemImagesVertical[index] || imageUrl;

    poemItem.innerHTML = `
      <figure class="poem-frame">
        <!-- CHANGE POEM IMAGE URL HERE -->
        <picture>
          <!-- CHANGE POEM IMAGE URL HERE -->
          <source media="(max-width: 700px)" srcset="${verticalImageUrl}">
          <img src="${imageUrl}" alt="Poem ${number}">
        </picture>
      </figure>
    `;

    poemsList.appendChild(poemItem);
  });
}

// Adds the contact details from SITE_SETTINGS.
function buildContactDetails() {
  const contactDetails = document.getElementById("contact-details");

  contactDetails.innerHTML = `
    <div class="contact-row">
      <span class="contact-label">Email</span>
      <!-- CHANGE TEXT HERE -->
      <a href="mailto:${SITE_SETTINGS.contactDetails.email}">${SITE_SETTINGS.contactDetails.email}</a>
    </div>
    <div class="contact-row">
      <span class="contact-label">Instagram</span>
      <!-- CHANGE TEXT HERE -->
      <span>${SITE_SETTINGS.contactDetails.instagram}</span>
    </div>
    <div class="contact-row">
      <span class="contact-label">Location / Notes</span>
      <!-- CHANGE TEXT HERE -->
      <span>${SITE_SETTINGS.contactDetails.location}</span>
    </div>
  `;
}

// Opens and closes the mobile navigation menu.
function setupMobileNavigation() {
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");

  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Highlights the navigation link for the section currently in view.
function setupActiveNavigation() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".site-nav a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navLinks.forEach((link) => {
          const matchesSection = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("is-active", matchesSection);
        });
      });
    },
    { rootMargin: "-35% 0px -55% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

fillPageContent();
buildPoemSections();
buildContactDetails();
setupMobileNavigation();
setupActiveNavigation();
