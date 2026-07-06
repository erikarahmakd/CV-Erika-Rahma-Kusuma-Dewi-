/* ============================================================
   KONFIGURASI
   Isi SHEET_ID dengan ID Google Spreadsheet kamu.
   Contoh URL: https://docs.google.com/spreadsheets/d/1AbCdEfGh.../edit
   -> SHEET_ID = "1AbCdEfGh..."
   Biarkan kosong ("") untuk memakai data bawaan di bawah.
   ============================================================ */
const SHEET_ID = "14uJh-tINVkab3BS3kZNjOqkL1lJRNbnKHuTzXZteHNQ";

/* Nama tab di spreadsheet (harus sama persis) */
const TABS = {
  profile: "Profile",
  experience: "Experience",
  education: "Education",
  training: "Training",
  organization: "Organization",
  skills: "Skills",
  languages: "Languages",
  gallery: "Gallery",
};

/* ============================================================
   DATA BAWAAN (fallback) — dipakai jika SHEET_ID kosong
   atau spreadsheet gagal dimuat.
   ============================================================ */
const DEFAULT_DATA = {
  profile: {
    name: "Erika Rahma Kusuma Dewi",
    title: "HR Generalist Supervisor",
    email: "erikarahmakd@gmail.com",
    phone: "+62 857-3363-1908",
    linkedin: "https://www.linkedin.com/in/erika-rahma-kusuma-dewi",
    location: "Sidoarjo, East Java",
    photo_url: "photo.jpg",
    stats: "4+|Years in HR;50+|Stores Nationwide;5|Companies Supported;2|HR Staff Led",
    summary:
      "Results-driven HR Generalist with 4+ years of experience managing end-to-end HR operations across retail and healthcare industries, including large-scale operations (50+ stores). Proven track record in accelerating recruitment processes, improving employee engagement, and optimizing HR policies and systems. Experienced in handling multi-entity operations, leading teams, and driving HR initiatives that support business growth and operational efficiency.",
  },
  experience: [
    {
      company: "PT Dream Dare Discover (Zuma Indonesia)",
      role: "Supervisor HR Generalist (Promotion)",
      period: "Dec 2024 - Now",
      bullets:
        "Lead and supervise a team of 2 HR staff to ensure effective HR & GA operations across 50 stores nationwide\nOversee and drive end-to-end recruitment strategy across multiple entities, ensuring timely fulfillment and quality of hire\nLead continuous improvement of HR policies, SOPs, and organizational structures to enhance operational efficiency and scalability\nEnsure accuracy and compliance of payroll, attendance, and HR administrative processes using HRIS (Mekari Talenta)\nHandle complex and escalated employee relations matters, including conflict resolution, counseling, and disciplinary actions\nDrive company-wide employee engagement initiatives to strengthen retention and organizational culture\nKey Achievement: Initiated, designed, and successfully implemented the Loyalty Allowance Program, which continues to run sustainably and supports long-term employee retention\nKey Achievement: Initiated and executed “Ruang Berlusa” program as an employee counseling and internal reporting platform\nKey Achievement: Improved recruitment effectiveness and hiring quality through structured supervision and process optimization across multiple locations",
    },
    {
      company: "PT Dream Dare Discover (Zuma Indonesia)",
      role: "HR Generalist Staff",
      period: "Jun 2023 - Nov 2024",
      bullets:
        "Executed end-to-end recruitment for staff to managerial level across 40+ stores, supporting high-volume hiring needs\nConducted candidate sourcing and screening through Jobstreet, LinkedIn, Indeed, and Glints\nCoordinated closely with hiring managers to ensure candidate quality and role fit\nManaged onboarding processes and supported overall employee lifecycle administration using HRIS (Mekari Talenta)\nAssisted in performance evaluation processes and employee development initiatives\nOrganized employee engagement programs and internal company events\nSupported development and implementation of HR policies, SOPs, and organizational structures",
    },
    {
      company: "PT Kreasi Tunas Digital (Looyal)",
      role: "Recruitment Specialist (Freelance)",
      period: "May 2023 - Aug 2023",
      bullets:
        "Managed full-cycle recruitment, from sourcing to offer stage across multiple roles\nBuilt and maintained a strong talent pipeline to support ongoing hiring needs\nConducted screening interviews and collaborated with hiring managers for candidate selection\nManaged offering and negotiation process to secure qualified candidates\nPerformed reference checks to ensure candidate quality and fit",
    },
    {
      company: "PT Wahana Gumilang Group",
      role: "HR Generalist",
      period: "Jan 2022 - May 2023",
      bullets:
        "Managed recruitment for 3 subsidiary companies (PT Wahana Rizky Gumilang, PT Wahana Meditek Indonesia, PT Pratamindo Mitra Rizky), covering entry-level to managerial roles\nDeveloped and implemented HR SOPs, company policies (PP), and organizational structures\nLed performance appraisal processes and employee development initiatives\nManaged HR budgeting and supported strategic workforce planning\nCoordinated management meetings to support HR-related decision-making\nHandled onboarding & offboarding processes to ensure smooth employee transitions",
    },
    {
      company: "BUMDes Lemujut Sejahtera",
      role: "Administrasi (Internship)",
      period: "Mar 2021 - Jun 2021",
      bullets:
        "Provided BRILink customer service in payment transactions, transfers and cash withdrawals\nResponsible for package delivery services and payments via POS or POS FIN",
    },
    {
      company: "UMKM Cici Factory",
      role: "Staff Marketing (Magang)",
      period: "Jul 2020 - Aug 2020",
      bullets:
        "Created and managed Instagram content for product marketing\nConducted product photoshoots and scheduled content posting",
    },
  ],
  education: [
    {
      school: "State University of Surabaya",
      degree: "Bachelor of Management",
      period: "2017 - 2021",
      detail: "GPA 3.65 / 4.00",
    },
  ],
  training: [
    { name: "Human Resource Management Training for Manager", organizer: "PT Magnet Solusi Integra", year: "2023" },
    { name: "Harisenin Career Conference Human Resources", organizer: "Harisenin.com", year: "2022" },
    { name: "Harisenin Career Camp Human Resource", organizer: "Harisenin.com", year: "2022" },
  ],
  organization: [
    {
      role: "Secretary",
      organization: "DPM Faculty of Economics and Business, State University of Surabaya",
      year: "2019",
      description:
        "Created and submitted proposals, accountability reports, and correspondence for each activity of the Student Representative Council.",
    },
    {
      role: "Participation Coordinator",
      organization: "Creative Business Competition",
      year: "2019",
      description:
        "Ensured participants and companions understood the competition flow, listed participant needs, and introduced the competition to schools.",
    },
    {
      role: "Equality Coordinator",
      organization: "National Moslem Talkshow",
      year: "2019",
      description: "Prepared participant attendance and correspondence required during the event.",
    },
  ],
  skills: [
    "Recruitment & Talent Acquisition",
    "Employee Engagement & Counseling",
    "HR Policy & SOP Development",
    "HR Budgeting & Compensation Planning",
    "Conflict Resolution & Employee Relations",
    "Time Management",
    "Teamwork",
    "Problem-Solving",
  ],
  languages: ["Indonesian", "English"],
  gallery: [],
};

/* ============================================================
   AMBIL DATA DARI GOOGLE SHEETS (endpoint gviz, tanpa API key)
   Syarat: spreadsheet dibagikan "Anyone with the link - Viewer"
   ============================================================ */
/* Dimuat lewat tag <script> (JSONP), bukan fetch(), supaya tetap jalan
   saat halaman dibuka langsung dari file (file://) — fetch() ke Google
   diblokir CORS pada kondisi itu. */
let jsonpCounter = 0;
function fetchTab(tabName) {
  return new Promise((resolve, reject) => {
    const cbName = `__gvizCb${jsonpCounter++}`;
    const script = document.createElement("script");
    const cleanup = () => {
      delete window[cbName];
      script.remove();
    };
    const timer = setTimeout(() => {
      cleanup();
      reject(new Error(`Timeout memuat tab "${tabName}"`));
    }, 15000);
    window[cbName] = (json) => {
      clearTimeout(timer);
      cleanup();
      if (!json.table) return reject(new Error(`Tab "${tabName}" kosong/tidak ditemukan`));
      resolve(parseTable(json.table));
    };
    script.src =
      `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq` +
      `?tqx=out:json;responseHandler:${cbName}&headers=1` +
      `&sheet=${encodeURIComponent(tabName)}&_=${Date.now()}`;
    script.onerror = () => {
      clearTimeout(timer);
      cleanup();
      reject(new Error(`Gagal memuat tab "${tabName}"`));
    };
    document.head.appendChild(script);
  });
}

/* Bersihkan teks dari spreadsheet:
   - karakter rusak akibat salah encoding saat impor CSV (mis. "â€”")
   - tanda pisah panjang (— / –) diganti "-" biasa */
function fixText(v) {
  return v
    .replace(/\u00E2\u20AC\u201D|\u00E2\u20AC\u201C/g, "-") // em/en dash rusak encoding ("a-topi euro kutip")
    .replace(/\u00E2\u20AC\u2122|\u00E2\u20AC\u02DC/g, "'") // kutip satu rusak
    .replace(/\u00E2\u20AC\u00A6/g, "...") // elipsis rusak
    .replace(/\u00E2\u20AC\u0153|\u00E2\u20AC[\u009D\u009C]?/g, '"') // kutip dua rusak + sisa varian
    .replace(/\u00C2(?=[\u00A0\s]|$)/g, "") // karakter \u00C2 nyasar sebelum spasi
    .replace(/[\u2014\u2013]/g, "-"); // em/en dash asli jadi "-"
}

function parseTable(table) {
  const cols = table.cols.map((c) => (c.label || "").trim().toLowerCase());
  return table.rows.map((row) => {
    const obj = {};
    row.c.forEach((cell, i) => {
      if (!cols[i]) return;
      let v = cell && cell.v != null ? fixText(String(cell.v).trim()) : "";
      if (v.startsWith("#") && v.endsWith("!")) v = ""; // nilai error Sheets (#ERROR!, #REF!, dll.)
      obj[cols[i]] = v;
    });
    return obj;
  });
}

/* Rapikan data pengalaman: jika nama perusahaan diakhiri
   "— Freelance/Internship/Magang", pindahkan kata itu ke sebelah
   jabatan dalam tanda kurung, sehingga baris bawah tinggal nama perusahaan. */
function normalizeExperience(jobs) {
  return jobs.map((job) => {
    const m = (job.company || "").match(
      /^(.*?)\s*(?:[—–-]|,)\s*(Freelance|Internship|Magang)\s*$/i
    );
    if (!m) return job;
    const type = m[2];
    let role = job.role || "";
    if (!new RegExp(type, "i").test(role)) role = `${role} (${type})`.trim();
    return { ...job, company: m[1].trim(), role };
  });
}

/* Tab Profile berbentuk key/value -> jadikan satu objek */
function rowsToProfile(rows) {
  const profile = {};
  rows.forEach((r) => {
    if (r.key) profile[r.key.toLowerCase()] = r.value || "";
  });
  return profile;
}

async function loadFromSheets() {
  const [profile, experience, education, training, organization, skills, languages, gallery] =
    await Promise.all([
      fetchTab(TABS.profile),
      fetchTab(TABS.experience),
      fetchTab(TABS.education),
      fetchTab(TABS.training),
      fetchTab(TABS.organization),
      fetchTab(TABS.skills),
      fetchTab(TABS.languages),
      fetchTab(TABS.gallery).catch(() => []), // tab Gallery opsional
    ]);
  return {
    profile: rowsToProfile(profile),
    experience: normalizeExperience(experience),
    education,
    training,
    organization,
    skills: skills.map((r) => r.skill).filter(Boolean),
    languages: languages.map((r) => r.language).filter(Boolean),
    gallery: gallery.filter((g) => g.image),
  };
}

/* ============================================================
   RENDER
   ============================================================ */
/* Ubah link share Google Drive menjadi link gambar langsung.
   Contoh: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
   ->      https://lh3.googleusercontent.com/d/FILE_ID
   Syarat: file di Drive dibagikan "Anyone with the link". */
function directImageUrl(url) {
  const m = (url || "").match(/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?.*id=)([\w-]+)/);
  return m ? `https://lh3.googleusercontent.com/d/${m[1]}` : url;
}

/* Atur pembingkaian foto di lingkaran hero.
   Foto portrait (badan penuh) otomatis di-zoom ke area wajah.
   Bisa diatur manual lewat tab Profile di spreadsheet dengan baris opsional:
     photo_zoom     -> perbesaran (mis. 2.5; 1 = tanpa zoom)
     photo_focus_x  -> posisi wajah dari kiri, dalam % (mis. 55)
     photo_focus_y  -> posisi wajah dari atas, dalam % (mis. 23) */
function framePhoto(img, p) {
  const portrait = img.naturalHeight / img.naturalWidth > 1.25;
  let zoom = parseFloat(p.photo_zoom);
  let fx = parseFloat(p.photo_focus_x);
  let fy = parseFloat(p.photo_focus_y);
  if (isNaN(zoom)) zoom = portrait ? 2.5 : 1;
  if (isNaN(fx)) fx = portrait ? 55 : 50;
  if (isNaN(fy)) fy = portrait ? 23 : 50;
  img.style.objectPosition = `${fx}% ${fy}%`;
  if (zoom > 1) {
    img.style.transformOrigin = `${fx}% ${fy}%`;
    img.style.transform = `translate(${50 - fx}%, ${50 - fy}%) scale(${zoom})`;
  }
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function render(data) {
  const p = data.profile;

  // Hero
  document.title = `${p.name} — ${p.title}`;
  document.getElementById("name").textContent = p.name || "";
  document.getElementById("title").textContent = p.title || "";
  document.getElementById("location").textContent = p.location || "";

  const photo = document.getElementById("photo");
  photo.innerHTML = "";
  if (p.photo_url) {
    const img = document.createElement("img");
    img.src = directImageUrl(p.photo_url);
    img.alt = p.name;
    img.onload = () => framePhoto(img, p);
    img.onerror = () => {
      photo.innerHTML = "";
      photo.textContent = (p.name || "").split(/\s+/).map((w) => w[0]).slice(0, 2).join("");
    };
    photo.appendChild(img);
  } else {
    const initials = (p.name || "").split(/\s+/).map((w) => w[0]).slice(0, 2).join("");
    photo.textContent = initials;
  }

  const contacts = document.getElementById("contacts");
  contacts.innerHTML = "";
  if (p.email) contacts.appendChild(link(`mailto:${p.email}`, `✉ ${p.email}`));
  if (p.phone) {
    const wa = p.phone.replace(/[^0-9]/g, "").replace(/^0/, "62");
    contacts.appendChild(link(`https://wa.me/${wa}`, `☎ ${p.phone}`));
  }
  if (p.linkedin) contacts.appendChild(link(p.linkedin, "in LinkedIn"));

  // Statistik (format: "4+|Years in HR;50+|Stores Nationwide")
  renderStats(p.stats !== undefined ? p.stats : DEFAULT_DATA.profile.stats);

  // Summary
  document.getElementById("summary").textContent = p.summary || "";

  // Experience — akordeon: klik judul pekerjaan untuk buka/tutup detail jobdesc
  const exp = document.getElementById("experience");
  exp.innerHTML = "";
  data.experience.forEach((job, idx) => {
    const card = el("div", "job");
    const top = el("div", "job-top");
    top.setAttribute("role", "button");
    top.setAttribute("tabindex", "0");
    const head = el("div", "job-head");
    head.appendChild(el("div", "job-role", job.role));
    const right = el("div", "job-head-right");
    head.appendChild(right);
    right.appendChild(el("div", "job-period", job.period));
    right.appendChild(el("span", "job-toggle", "▾"));
    top.appendChild(head);
    top.appendChild(el("div", "job-company", job.company));
    card.appendChild(top);

    const bullets = (job.bullets || "").split("\n").map((b) => b.trim()).filter(Boolean);
    if (bullets.length) {
      const wrap = el("div", "job-bullets");
      const ul = document.createElement("ul");
      bullets.forEach((b) => ul.appendChild(el("li", null, b)));
      wrap.appendChild(ul);
      card.appendChild(wrap);

      const setOpen = (open) => {
        card.classList.toggle("open", open);
        top.setAttribute("aria-expanded", String(open));
        wrap.style.maxHeight = open ? wrap.scrollHeight + "px" : "0px";
      };
      const toggle = () => setOpen(!card.classList.contains("open"));
      top.addEventListener("click", toggle);
      top.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      });
      setOpen(idx === 0); // pekerjaan terbaru terbuka, sisanya tertutup
    }
    exp.appendChild(card);
  });

  // Education
  const edu = document.getElementById("education");
  edu.innerHTML = "";
  data.education.forEach((e) => {
    const item = el("div", "row-item");
    const head = el("div", "row-head");
    head.appendChild(el("div", "row-title", `${e.degree} — ${e.school}`));
    head.appendChild(el("div", "row-year", e.period));
    item.appendChild(head);
    if (e.detail) item.appendChild(el("div", "row-sub", e.detail));
    edu.appendChild(item);
  });

  // Training
  const training = document.getElementById("training");
  training.innerHTML = "";
  data.training.forEach((t) => {
    const parts = [t.name, t.organizer, t.year].filter(Boolean);
    training.appendChild(el("li", null, parts.join(" — ")));
  });

  // Organization
  const org = document.getElementById("organization");
  org.innerHTML = "";
  data.organization.forEach((o) => {
    const item = el("div", "row-item");
    const head = el("div", "row-head");
    head.appendChild(el("div", "row-title", `${o.role} — ${o.organization}`));
    head.appendChild(el("div", "row-year", o.year));
    item.appendChild(head);
    if (o.description) item.appendChild(el("div", "row-sub", o.description));
    org.appendChild(item);
  });

  // Skills & languages
  const skills = document.getElementById("skills");
  skills.innerHTML = "";
  data.skills.forEach((s) => skills.appendChild(el("span", "chip", s)));

  const langs = document.getElementById("languages");
  langs.innerHTML = "";
  data.languages.forEach((l) => langs.appendChild(el("span", "chip", l)));

  // Galeri kegiatan
  renderGallery(data.gallery || []);

  document.getElementById("footer-note").textContent =
    `© ${new Date().getFullYear()} ${p.name} · ${
      data._source === "sheets" ? "Data: Google Sheets" : "Data: bawaan (spreadsheet tidak termuat)"
    }`;
}

/* ===== Statistik dengan animasi hitung naik ===== */
function renderStats(statsStr) {
  const wrap = document.getElementById("stats");
  if (!wrap) return;
  wrap.innerHTML = "";
  (statsStr || "")
    .split(";")
    .map((s) => s.trim())
    .filter(Boolean)
    .forEach((item) => {
      const [num, label] = item.split("|").map((s) => (s || "").trim());
      const stat = el("div", "stat");
      stat.appendChild(el("div", "stat-num", num));
      stat.appendChild(el("div", "stat-label", label));
      wrap.appendChild(stat);
    });
  animateStats(wrap);
}

function animateStats(wrap) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  wrap.querySelectorAll(".stat-num").forEach((node) => {
    const m = node.textContent.match(/^(\d+)(.*)$/);
    if (!m) return;
    const target = parseInt(m[1], 10);
    const suffix = m[2];
    const dur = 1200;
    const t0 = performance.now();
    const tick = (t) => {
      const k = Math.min((t - t0) / dur, 1);
      node.textContent = Math.round(target * (1 - Math.pow(1 - k, 3))) + suffix;
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

/* ===== Galeri + lightbox ===== */
let galleryItems = [];
let lbIndex = 0;

/* Baris Gallery tanpa kolom "company" dianggap milik perusahaan ini */
const DEFAULT_GALLERY_COMPANY = "PT Dream Dare Discover (Zuma Indonesia)";

function galleryCompany(g) {
  return (g.company || "").trim() || DEFAULT_GALLERY_COMPANY;
}

function renderGallery(items) {
  galleryItems = items;
  const grid = document.getElementById("gallery");
  const section = document.getElementById("gallery-section");
  if (!grid) return;
  grid.innerHTML = "";
  if (section) section.hidden = items.length === 0;

  // Kelompokkan highlight per perusahaan (kolom "company" opsional di tab Gallery)
  const groups = new Map();
  items.forEach((g, i) => {
    const company = galleryCompany(g);
    if (!groups.has(company)) groups.set(company, []);
    groups.get(company).push(i);
  });

  groups.forEach((indexes, company) => {
    const group = el("div", "gallery-group");
    group.appendChild(el("h3", "gallery-company", company));
    const list = el("div", "gallery-list");
    // Highlight: hanya judul + keterangan; foto muncul di lightbox saat diklik
    indexes.forEach((i) => {
      const g = items[i];
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "highlight-item";
      btn.appendChild(el("span", "hl-icon", "📷"));
      const text = el("span", "hl-text");
      text.appendChild(el("strong", null, g.title || "Dokumentasi kegiatan"));
      if (g.description) text.appendChild(el("span", null, g.description));
      btn.appendChild(text);
      btn.appendChild(el("span", "hl-view", "Lihat foto ›"));
      btn.addEventListener("click", () => openLightbox(i));
      list.appendChild(btn);
    });
    group.appendChild(list);
    grid.appendChild(group);
  });
}

function openLightbox(i) {
  const lb = document.getElementById("lightbox");
  if (!lb) return;
  lbIndex = i;
  const g = galleryItems[i];
  document.getElementById("lb-img").src = directImageUrl(g.image);
  document.getElementById("lb-title").textContent = g.title || "";
  document.getElementById("lb-desc").textContent =
    [galleryCompany(g), g.description].filter(Boolean).join(" · ");
  lb.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lb = document.getElementById("lightbox");
  if (!lb) return;
  lb.hidden = true;
  document.body.style.overflow = "";
}

function stepLightbox(dir) {
  if (!galleryItems.length) return;
  openLightbox((lbIndex + dir + galleryItems.length) % galleryItems.length);
}

function setupLightbox() {
  const lb = document.getElementById("lightbox");
  if (!lb) return;
  lb.querySelector(".lb-close").addEventListener("click", closeLightbox);
  lb.querySelector(".lb-prev").addEventListener("click", () => stepLightbox(-1));
  lb.querySelector(".lb-next").addEventListener("click", () => stepLightbox(1));
  lb.addEventListener("click", (e) => {
    if (e.target === lb) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") stepLightbox(-1);
    if (e.key === "ArrowRight") stepLightbox(1);
  });
}

/* ===== Animasi muncul saat scroll ===== */
function setupReveal() {
  const targets = document.querySelectorAll(".section, .job, .highlight-item");
  targets.forEach((t) => t.classList.add("reveal"));
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );
  targets.forEach((t) => io.observe(t));
}

function link(href, label) {
  const a = document.createElement("a");
  a.href = href;
  a.textContent = label;
  if (!href.startsWith("mailto:")) {
    a.target = "_blank";
    a.rel = "noopener";
  }
  return a;
}

/* ============================================================
   INIT
   ============================================================ */
(async function init() {
  let data = { ...DEFAULT_DATA, _source: "default" };
  if (SHEET_ID) {
    try {
      data = { ...(await loadFromSheets()), _source: "sheets" };
    } catch (err) {
      console.warn("Gagal memuat Google Sheets, memakai data bawaan:", err);
    }
  }
  render(data);
  document.getElementById("loading").hidden = true;
  document.getElementById("app").hidden = false;

  // Ukur ulang tinggi detail yang terbuka (saat render, halaman masih tersembunyi;
  // diulang setelah font web siap karena tinggi teks bisa berubah)
  const recalcOpen = () =>
    document.querySelectorAll(".job.open .job-bullets").forEach((w) => {
      w.style.maxHeight = w.scrollHeight + "px";
    });
  recalcOpen();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(recalcOpen);
  window.addEventListener("resize", recalcOpen);

  setupLightbox();
  setupReveal();
  const printBtn = document.getElementById("print-btn");
  if (printBtn) printBtn.addEventListener("click", () => window.print());
})();
