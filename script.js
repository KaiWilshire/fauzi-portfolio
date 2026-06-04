/*
  =========================
  EDIT HERE
  =========================
  Change the text and links below. The website updates automatically.
*/
const SITE_SETTINGS = {
  // CHANGE TEXT HERE - Main home heading
  introTitle: "Unsaid Exhibition",

  // CHANGE TEXT HERE - Fauzi intro text
  introText:
    "Current exhibition at Stamford University, from 8 to 9 June. A quiet presentation of poems, memory, and the words left just beneath the surface.",

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
  feedbackFormUrl: "https://forms.gle/ZqKjU5CNuK7ikUdF7",

  // CHANGE BOOK BUY LINK HERE - Buy button URL
  bookBuyUrl: "https://example.com/buy-fauzi-book",

  // CHANGE IMAGE URL HERE - Home background image
  heroImageUrl: "images/BG.jpeg",

  // CHANGE IMAGE URL HERE - Sharp cutout image layered over the blurred background
  heroCutoutImageUrl: "images/fauzi-cutout.png",

  // CHANGE IMAGE URL HERE - Book cover image
  bookCoverImageUrl: "images/book.png",

  // CHANGE TEXT HERE / CHANGE POEM IMAGE URL HERE - Selected poems and explanations
  selectedPoems: [
    {
      title: "Unsaid",
      imageUrl: "images/Unsaid.png",
      fullPoemImageUrl: "images/V-2- Unsaid.png",
      explanation:
        "Written for the words that stay in the chest: the almost-confessions, the paused messages, and the feelings that become heavier when they are never spoken.",
    },
    {
      title: "Muse",
      imageUrl: "images/Muse.png",
      fullPoemImageUrl: "images/V-4- Muse.png",
      explanation:
        "A reflection on inspiration as something tender and human, not distant. This poem looks at how a presence can quietly shape a whole inner world.",
    },
    {
      title: "Modern",
      imageUrl: "images/Modern.png",
      fullPoemImageUrl: "images/V-3- Modern.png",
      explanation:
        "Written from the tension of living softly in a fast world. It asks what parts of ourselves survive when everything around us keeps changing.",
    },
    {
      title: "Chronically Online",
      imageUrl: "images/Chronically online.png",
      fullPoemImageUrl: "images/V-1- Chronically.png",
      explanation:
        "A poem about digital noise, attention, and the strange loneliness of always being connected while still wanting to be truly seen.",
    },
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

// Creates the selected poem explanations from the editable poem array above.
function buildPoemSections() {
  const poemsList = document.getElementById("poems-list");

  SITE_SETTINGS.selectedPoems.forEach((poem, index) => {
    const poemItem = document.createElement("article");
    poemItem.className = "selected-poem";

    const number = String(index + 1).padStart(2, "0");

    poemItem.innerHTML = `
      <button class="selected-poem-image" type="button" data-poem-image="${poem.fullPoemImageUrl}" data-poem-title="${poem.title}">
        <!-- CHANGE POEM IMAGE URL HERE -->
        <img src="${poem.imageUrl}" alt="${poem.title} poem image">
      </button>

      <div class="selected-poem-copy">
        <span>${number}</span>
        <!-- CHANGE TEXT HERE -->
        <h3>${poem.title}</h3>
        <!-- CHANGE TEXT HERE -->
        <p>${poem.explanation}</p>
        <button class="text-link poem-read-button" type="button" data-poem-image="${poem.fullPoemImageUrl}" data-poem-title="${poem.title}">Read Full Poem</button>
      </div>
    `;

    poemsList.appendChild(poemItem);
  });
}

// Opens a minimal full-screen reader when a poem image is clicked.
function setupPoemDialog() {
  const dialog = document.getElementById("poem-dialog");
  const dialogImage = document.getElementById("dialog-image");
  const closeButton = document.getElementById("dialog-close");

  document.querySelectorAll("[data-poem-image]").forEach((button) => {
    button.addEventListener("click", () => {
      dialogImage.src = button.dataset.poemImage;
      dialogImage.alt = `${button.dataset.poemTitle} full poem`;
      dialog.showModal();
    });
  });

  closeButton.addEventListener("click", () => dialog.close());

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
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

        document.body.dataset.section = entry.target.id;
      });
    },
    { rootMargin: "-35% 0px -55% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

fillPageContent();
buildPoemSections();
setupPoemDialog();
buildContactDetails();
setupMobileNavigation();
setupActiveNavigation();
