/* =========================================================================
   Renders shared chrome (navbar, footer) and per-page content from SITE.
   ========================================================================= */
(function () {
  const S = window.SITE;
  const page = document.body.getAttribute("data-page") || "about";

  const NAV = [
    { id: "about", label: "About", href: "index.html" },
    { id: "publications", label: "Publications", href: "publications.html" },
    { id: "awards", label: "Awards", href: "awards.html" },
    { id: "talks", label: "Talks", href: "talks.html" },
    { id: "teaching", label: "Teaching", href: "teaching.html" },
    { id: "service", label: "Service", href: "service.html" },
    { id: "cv", label: "CV", href: "cv.html" },
  ];

  /* ---------- Navbar ---------- */
  function renderNav() {
    const links = NAV.map(
      (n) => `<li><a href="${n.href}" class="${n.id === page ? "active" : ""}">${n.label}</a></li>`
    ).join("");
    const html = `
      <nav class="navbar">
        <div class="navbar-inner">
          <a class="navbar-brand" href="index.html">${S.name}</a>
          <button class="nav-toggle" aria-label="Toggle navigation">&#9776;</button>
          <ul class="nav-links">${links}</ul>
        </div>
      </nav>`;
    const mount = document.getElementById("nav");
    if (mount) {
      mount.innerHTML = html;
      const toggle = mount.querySelector(".nav-toggle");
      const list = mount.querySelector(".nav-links");
      toggle.addEventListener("click", () => list.classList.toggle("open"));
    }
  }

  /* ---------- Footer ---------- */
  function renderFooter() {
    const mount = document.getElementById("footer");
    if (mount) {
      mount.innerHTML = `<footer><div class="container">
        &copy; ${new Date().getFullYear()} ${S.name}. Built as a static site, hosted on GitHub Pages.
      </div></footer>`;
    }
  }

  /* ---------- Socials ---------- */
  function socialsHtml() {
    const l = S.links;
    const items = [
      l.email ? `<a href="mailto:${l.email}" title="Email"><i class="fas fa-envelope"></i></a>` : "",
      l.homepage ? `<a href="${l.homepage}" target="_blank" rel="noopener" title="Homepage"><i class="fas fa-globe"></i></a>` : "",
      l.scholar ? `<a href="${l.scholar}" target="_blank" rel="noopener" title="Google Scholar"><i class="fas fa-graduation-cap"></i></a>` : "",
      l.linkedin ? `<a href="${l.linkedin}" target="_blank" rel="noopener" title="LinkedIn"><i class="fab fa-linkedin"></i></a>` : "",
      l.github ? `<a href="${l.github}" target="_blank" rel="noopener" title="GitHub"><i class="fab fa-github"></i></a>` : "",
    ].join("");
    return `<div class="socials">${items}</div>`;
  }

  /* ---------- About page ---------- */
  function renderAbout() {
    const mount = document.getElementById("about");
    if (!mount) return;
    const bio = S.bio.map((p) => `<p>${p}</p>`).join("");
    const news = S.news
      .map((n) => `<div class="news-row"><div class="news-date">${n.date}</div><p class="news-body">${n.html}</p></div>`)
      .join("");

    const selectedHtml = renderSelectedPubs();

    mount.innerHTML = `
      <section class="hero">
        <div class="hero-text">
          <h1 class="hero-name">${S.name}</h1>
          <p class="hero-roles">${S.roles.map((r) => `<span>${r}</span>`).join("")}</p>
          <div class="bio">${bio}</div>
        </div>
        <aside class="profile">
          <img src="${S.profilePic}" alt="${S.name}" onerror="this.src='assets/img/prof_pic.svg'">
          ${socialsHtml()}
          <div class="contact-loc"><i class="fas fa-map-marker-alt"></i> ${S.location}</div>
        </aside>
      </section>

      <h2 class="section-heading">News</h2>
      <div class="news-table">${news}</div>

      <h2 class="section-heading">Selected Publications</h2>
      <p class="pub-note">See the full list on the <a href="publications.html">publications</a> page.</p>
      ${selectedHtml}
    `;
  }

  function pubItemHtml(p, idx) {
    const badge = /ICLR|ICCV|EMNLP|NAACL|ACL|COLING|COLM|NeurIPS|ICML|ECAI|LREC|BigComp|KDD/i.test(p.venue)
      ? "" : "";
    const note = p.note ? `<span class="pub-note-inline">${p.note}</span>` : "";
    return `<li class="pub-item">
      <div class="pub-num">${idx}</div>
      <div>
        <p class="pub-title">${p.title}</p>
        <p class="pub-authors">${p.authors}</p>
        <span class="pub-venue">${p.venue}</span>${note}
      </div>
    </li>`;
  }

  function findPub(id) {
    const all = [...S.publications.conference, ...S.publications.journal, ...S.publications.workshop];
    return all.find((p) => p.id === id || p.aliasId === id);
  }

  function renderSelectedPubs() {
    const items = S.publications.selected
      .map((id) => findPub(id))
      .filter(Boolean)
      .map((p, i) => pubItemHtml(p, i + 1))
      .join("");
    return `<ol class="pub-list">${items}</ol>`;
  }

  /* ---------- Publications page ---------- */
  function renderPublications() {
    const mount = document.getElementById("publications");
    if (!mount) return;
    const block = (title, arr) =>
      arr && arr.length
        ? `<h3 class="pub-cat">${title}</h3><ol class="pub-list">${arr.map((p, i) => pubItemHtml(p, i + 1)).join("")}</ol>`
        : "";
    mount.innerHTML = `
      <h1 class="page-title">Publications</h1>
      <p class="pub-note">${S.publications.note}</p>
      ${block("Conference Papers", S.publications.conference)}
      ${block("Journal Articles", S.publications.journal)}
      ${block("Workshop Papers", S.publications.workshop)}
    `;
  }

  /* ---------- Awards + Patents page ---------- */
  function renderAwards() {
    const mount = document.getElementById("awards");
    if (!mount) return;
    const awards = S.awards
      .map((a) => `<div class="news-row"><div class="news-date">${a.date}</div><p class="news-body">${a.html}</p></div>`)
      .join("");
    const patents = S.patents
      .map(
        (p, i) => `<li class="pub-item">
          <div class="pub-num">${i + 1}</div>
          <div>
            <p class="pub-title">${p.title}</p>
            <p class="pub-authors">${p.inventors}</p>
            <span class="pub-venue">${p.status}</span><span class="pub-note-inline">${p.year}</span>
          </div>
        </li>`
      )
      .join("");
    mount.innerHTML = `
      <h1 class="page-title">Honors &amp; Awards</h1>
      <div class="news-table">${awards}</div>
      <h2 class="section-heading">Patents</h2>
      <ol class="pub-list">${patents}</ol>
    `;
  }

  /* ---------- Talks page ---------- */
  function renderTalks() {
    const mount = document.getElementById("talks");
    if (!mount) return;
    const talks = S.talks
      .map(
        (t) => `<div class="entry">
          <div class="entry-head">
            <p class="entry-title">${t.venue}</p>
            <span class="entry-meta">${t.location} &middot; ${t.date}</span>
          </div>
          <p class="entry-sub">${t.role}</p>
          <p class="entry-talk-title">${t.title}</p>
        </div>`
      )
      .join("");
    mount.innerHTML = `<h1 class="page-title">Invited Talks</h1>${talks}`;
  }

  /* ---------- Teaching page ---------- */
  function renderTeaching() {
    const mount = document.getElementById("teaching");
    if (!mount) return;
    const rows = S.teaching
      .map(
        (t) => `<div class="entry">
          <div class="entry-head">
            <p class="entry-title">${t.title}</p>
            <span class="entry-meta">${t.date}</span>
          </div>
          <p class="entry-sub">${t.org}</p>
        </div>`
      )
      .join("");
    mount.innerHTML = `<h1 class="page-title">Teaching Experience</h1>${rows}`;
  }

  /* ---------- Service page ---------- */
  function renderService() {
    const mount = document.getElementById("service");
    if (!mount) return;
    const rows = S.service
      .map((s) => `<div class="news-row"><div class="news-date">${s.year}</div><p class="news-body">${s.html}</p></div>`)
      .join("");
    mount.innerHTML = `<h1 class="page-title">Academic Service</h1><div class="news-table">${rows}</div>`;
  }

  /* ---------- CV page ---------- */
  function renderCV() {
    const mount = document.getElementById("cv");
    if (!mount) return;
    const edu = S.education
      .map(
        (e) => `<div class="entry">
          <div class="entry-head"><p class="entry-title">${e.school}</p><span class="entry-meta">${e.location}</span></div>
          ${e.lines.map((l) => `<div class="entry-head"><p class="entry-sub">${l.left}</p><span class="entry-meta">${l.right}</span></div>`).join("")}
        </div>`
      )
      .join("");
    const exp = S.experience
      .map(
        (x) => `<div class="entry">
          <div class="entry-head"><p class="entry-title">${x.org}</p><span class="entry-meta">${x.location} &middot; ${x.date}</span></div>
          <p class="entry-sub">${x.title}</p>
          ${x.items.length ? `<ul>${x.items.map((i) => `<li>${i}</li>`).join("")}</ul>` : ""}
        </div>`
      )
      .join("");
    const skills = S.skills
      .map((s) => `<div class="skill-row"><div class="skill-label">${s.label}</div><div>${s.value}</div></div>`)
      .join("");

    mount.innerHTML = `
      <h1 class="page-title">Curriculum Vitae</h1>
      <p><a class="btn" href="${S.cvPdf}" target="_blank" rel="noopener"><i class="fas fa-file-pdf"></i> Download PDF</a></p>
      <p class="muted-note">Tip: compile your LaTeX CV and place the resulting PDF at <code>${S.cvPdf}</code> to enable the download button and embedded preview.</p>

      <h2 class="section-heading">Education</h2>
      ${edu}
      <h2 class="section-heading">Experience</h2>
      ${exp}
      <h2 class="section-heading">Skills</h2>
      ${skills}
    `;
  }

  /* ---------- Boot ---------- */
  renderNav();
  renderFooter();
  renderAbout();
  renderPublications();
  renderAwards();
  renderTalks();
  renderTeaching();
  renderService();
  renderCV();
})();
