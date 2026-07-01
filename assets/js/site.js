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

  /* ---------- Publication resource links ---------- */
  const PUB_LINK_ICONS = {
    paper: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>`,
    code: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 4.6 18 4.9 18 4.9c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>`,
    hf: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.025 1.13c-5.77 0-10.449 4.647-10.449 10.378 0 1.112.178 2.181.503 3.185.064-.222.203-.444.416-.577a.96.96 0 0 1 .524-.15c.293 0 .584.124.84.284.278.173.48.408.71.694.226.282.458.611.684.951v-.014c.017-.324.106-.622.264-.874s.403-.487.762-.543c.3-.047.596.06.787.203s.31.313.4.467c.15.257.212.468.233.542.01.026.653 1.552 1.657 2.54.616.605 1.01 1.223 1.082 1.912.055.537-.096 1.059-.38 1.572.637.121 1.294.187 1.967.187.657 0 1.298-.063 1.921-.178-.287-.517-.44-1.041-.384-1.581.07-.69.465-1.307 1.081-1.913 1.004-.987 1.647-2.513 1.657-2.539.021-.074.083-.285.233-.542.09-.154.208-.323.4-.467a1.08 1.08 0 0 1 .787-.203c.359.056.604.29.762.543s.247.55.265.874v.015c.225-.34.457-.67.683-.952.23-.286.432-.52.71-.694.257-.16.547-.284.84-.285a.97.97 0 0 1 .524.151c.228.143.373.388.43.625l.006.04a10.3 10.3 0 0 0 .534-3.273c0-5.731-4.678-10.378-10.449-10.378M8.327 6.583a1.5 1.5 0 0 1 .713.174 1.487 1.487 0 0 1 .617 2.013c-.183.343-.762-.214-1.102-.094-.38.134-.532.914-.917.71a1.487 1.487 0 0 1 .69-2.803m7.486 0a1.487 1.487 0 0 1 .689 2.803c-.385.204-.536-.576-.916-.71-.34-.12-.92.437-1.103.094a1.487 1.487 0 0 1 .617-2.013 1.5 1.5 0 0 1 .713-.174m-10.68 1.55a.96.96 0 1 1 0 1.921.96.96 0 0 1 0-1.92m13.838 0a.96.96 0 1 1 0 1.92.96.96 0 0 1 0-1.92M8.489 11.458c.588.01 1.965 1.157 3.572 1.164 1.607-.007 2.984-1.155 3.572-1.164.196-.003.305.12.305.454 0 .886-.424 2.328-1.563 3.202-.22-.756-1.396-1.366-1.63-1.32q-.011.001-.02.006l-.044.026-.01.008-.03.024q-.018.017-.035.036l-.032.04a1 1 0 0 0-.058.09l-.014.025q-.049.088-.11.19a1 1 0 0 1-.083.116 1.2 1.2 0 0 1-.173.18q-.035.029-.075.058a1.3 1.3 0 0 1-.251-.243 1 1 0 0 1-.076-.107c-.124-.193-.177-.363-.337-.444-.034-.016-.104-.008-.2.022q-.094.03-.216.087-.06.028-.125.063l-.13.074q-.067.04-.136.086a3 3 0 0 0-.135.096 3 3 0 0 0-.26.219 2 2 0 0 0-.12.121 2 2 0 0 0-.106.128l-.002.002a2 2 0 0 0-.09.132l-.001.001a1.2 1.2 0 0 0-.105.212q-.013.036-.024.073c-1.139-.875-1.563-2.317-1.563-3.203 0-.334.109-.457.305-.454m.836 10.354c.824-1.19.766-2.082-.365-3.194-1.13-1.112-1.789-2.738-1.789-2.738s-.246-.945-.806-.858-.97 1.499.202 2.362c1.173.864-.233 1.45-.685.64-.45-.812-1.683-2.896-2.322-3.295s-1.089-.175-.938.647 2.822 2.813 2.562 3.244-1.176-.506-1.176-.506-2.866-2.567-3.49-1.898.473 1.23 2.037 2.16c1.564.932 1.686 1.178 1.464 1.53s-3.675-2.511-4-1.297c-.323 1.214 3.524 1.567 3.287 2.405-.238.839-2.71-1.587-3.216-.642-.506.946 3.49 2.056 3.522 2.064 1.29.33 4.568 1.028 5.713-.624m5.349 0c-.824-1.19-.766-2.082.365-3.194 1.13-1.112 1.789-2.738 1.789-2.738s.246-.945.806-.858.97 1.499-.202 2.362c-1.173.864.233 1.45.685.64.451-.812 1.683-2.896 2.322-3.295s1.089-.175.938.647-2.822 2.813-2.562 3.244 1.176-.506 1.176-.506 2.866-2.567 3.49-1.898-.473 1.23-2.037 2.16c-1.564.932-1.686 1.178-1.464 1.53s3.675-2.511 4-1.297c.323 1.214-3.524 1.567-3.287 2.405.238.839 2.71-1.587 3.216-.642.506.946-3.49 2.056-3.522 2.064-1.29.33-4.568 1.028-5.713-.624"/></svg>`,
  };

  const PUB_LINK_META = {
    paper:   { cls: "pub-link-paper", icon: "paper", label: "Paper",   title: "Read the paper on arXiv" },
    code:    { cls: "pub-link-code",  icon: "code",  label: "Code",    title: "View the code on GitHub" },
    dataset: { cls: "pub-link-hf",    icon: "hf",    label: "Dataset", title: "Dataset on Hugging Face" },
    models:  { cls: "pub-link-hf",    icon: "hf",    label: "Models",  title: "Models on Hugging Face" },
  };

  function pubLinksHtml(links) {
    if (!links) return "";
    const order = ["paper", "code", "dataset", "models"];
    const btns = order
      .filter((k) => links[k])
      .map((k) => {
        const m = PUB_LINK_META[k];
        return `<a class="pub-link ${m.cls}" href="${links[k]}" target="_blank" rel="noopener" title="${m.title}">${PUB_LINK_ICONS[m.icon]}<span>${m.label}</span></a>`;
      })
      .join("");
    return btns ? `<div class="pub-links">${btns}</div>` : "";
  }

  function pubItemHtml(p, idx) {
    const note = p.note ? `<span class="pub-note-inline">${p.note}</span>` : "";
    return `<li class="pub-item">
      <div class="pub-num">${idx}</div>
      <div>
        <p class="pub-title">${p.title}</p>
        <p class="pub-authors">${p.authors}</p>
        <span class="pub-venue">${p.venue}</span>${note}
        ${pubLinksHtml(p.links)}
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
