document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    renderHeroStats();
    renderAbout();
    renderServices();
    renderSkills();
    renderTools();
    initTimeline();
    renderProjects();
    initTestimonials();
    renderWhyHireMe();
    renderInfoCards();
    renderContactInfo();
    renderFooterContact();
    initContactForm();
    initScrollTop();
});

// --- Theme Switcher ---

function initTheme() {
    var saved = localStorage.getItem('theme') || 'galaxy';
    applyTheme(saved);

    var switcher = document.getElementById('theme-switcher');
    if (!switcher) return;
    switcher.addEventListener('click', function(e) {
        var btn = e.target.closest('.theme-btn');
        if (!btn) return;
        var theme = btn.getAttribute('data-theme');
        applyTheme(theme);
        localStorage.setItem('theme', theme);
    });
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var btns = document.querySelectorAll('.theme-btn');
    btns.forEach(function(b) {
        b.classList.toggle('active', b.getAttribute('data-theme') === theme);
    });
}

// --- SVG Icon Helper ---

function svgIcon(paths, size) {
    size = size || 20;
    return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + paths + '</svg>';
}

var icons = {
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',
    heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>',
    strategy: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
    bot: '<rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/>',
    check: '<polyline points="20 6 9 17 4 12"/>',
    store: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    scan: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>',
    award: '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',
    zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    message: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    globe: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    mappin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    education: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
    languages: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'
};

function getIcon(name, size) {
    return svgIcon(icons[name] || icons.code, size);
}

// --- Hero Stats ---

function renderHeroStats() {
    var el = document.getElementById('hero-stats');
    if (!el || !portfolioData.heroStats) return;
    el.innerHTML = portfolioData.heroStats.map(function(s) {
        return '<div class="hero-stat">'
            + '<span class="hero-stat-number">' + s.number + '</span>'
            + '<span class="hero-stat-label">' + s.label + '</span>'
            + '</div>';
    }).join('');
}

// --- About ---

function renderAbout() {
    var bio = document.getElementById('about-bio');
    var bio2 = document.getElementById('about-bio2');
    var stats = document.getElementById('about-stats');
    if (!portfolioData.personal) return;

    if (bio) bio.innerHTML = portfolioData.personal.bio;
    if (bio2) bio2.textContent = portfolioData.personal.bio2;

    if (stats && portfolioData.aboutStats) {
        stats.innerHTML = portfolioData.aboutStats.map(function(s) {
            var bgLight = s.color + '15';
            return '<div class="about-stat-card">'
                + '<div class="about-stat-icon" style="background: ' + bgLight + '; color: ' + s.color + '">' + getIcon(s.icon) + '</div>'
                + '<div class="about-stat-number">' + s.number + '</div>'
                + '<div class="about-stat-label">' + s.label + '</div>'
                + '</div>';
        }).join('');
    }
}

// --- Services ---

function renderServices() {
    var el = document.getElementById('services-grid');
    if (!el || !portfolioData.services) return;

    el.innerHTML = portfolioData.services.map(function(s) {
        var items = s.items.map(function(item) {
            return '<li><span class="service-check">' + svgIcon(icons.check, 14) + '</span> ' + item + '</li>';
        }).join('');

        var colors = { code: '#6366f1', cpu: '#14b8a6', strategy: '#f59e0b', bot: '#8b5cf6' };
        var bg = (colors[s.icon] || '#6366f1') + '12';
        var fg = colors[s.icon] || '#6366f1';

        return '<div class="service-card">'
            + '<div class="service-icon" style="background: ' + bg + '; color: ' + fg + '">' + getIcon(s.icon, 24) + '</div>'
            + '<div class="service-name">' + s.name + '</div>'
            + '<div class="service-tagline">' + s.tagline + '</div>'
            + '<ul class="service-items">' + items + '</ul>'
            + '</div>';
    }).join('');
}

// --- Core Skills ---

function renderSkills() {
    var barsEl = document.getElementById('skills-bars');
    var traitsEl = document.getElementById('skills-traits');
    if (!portfolioData.coreSkills || !portfolioData.traits) return;

    if (barsEl) {
        barsEl.innerHTML = portfolioData.coreSkills.map(function(s) {
            return '<div class="skill-bar-item">'
                + '<div class="skill-bar-header">'
                + '<span class="skill-bar-name">' + s.name + '</span>'
                + '<span class="skill-bar-pct">' + s.level + '%</span>'
                + '</div>'
                + '<div class="skill-bar-track">'
                + '<div class="skill-bar-fill" style="width: ' + s.level + '%"></div>'
                + '</div>'
                + '</div>';
        }).join('');
    }

    if (traitsEl) {
        traitsEl.innerHTML = portfolioData.traits.map(function(t) {
            return '<span class="trait-badge"><span class="trait-dot"></span> ' + t + '</span>';
        }).join('');
    }
}

// --- Tools ---

function renderTools() {
    var el = document.getElementById('tools-grid');
    if (!el || !portfolioData.tools) return;

    el.innerHTML = portfolioData.tools.map(function(t) {
        var initial = t.name.charAt(0).toUpperCase();
        return '<div class="tool-card">'
            + '<div class="tool-icon" style="background: ' + t.color + '18; color: ' + t.color + '">'
            + '<span style="font-weight:700;font-size:1.25rem">' + initial + '</span>'
            + '</div>'
            + '<div class="tool-name">' + t.name + '</div>'
            + '</div>';
    }).join('');
}

// --- Timeline (Paginated) ---

var tlPage = 0;
var tlPerPage = 5;

function initTimeline() {
    if (!portfolioData.experience) return;
    renderTimelinePage();

    var prev = document.getElementById('tl-prev');
    var next = document.getElementById('tl-next');
    if (prev) prev.addEventListener('click', function() {
        if (tlPage > 0) { tlPage--; renderTimelinePage(); }
    });
    if (next) next.addEventListener('click', function() {
        var maxPage = Math.ceil(portfolioData.experience.length / tlPerPage) - 1;
        if (tlPage < maxPage) { tlPage++; renderTimelinePage(); }
    });
}

function renderTimelinePage() {
    var el = document.getElementById('timeline');
    if (!el) return;

    var total = portfolioData.experience.length;
    var maxPage = Math.ceil(total / tlPerPage) - 1;
    var start = tlPage * tlPerPage;
    var slice = portfolioData.experience.slice(start, start + tlPerPage);

    el.innerHTML = slice.map(function(exp, i) {
        var globalIdx = start + i;
        var dotClass = globalIdx === 0 ? 'tl-dot current' : 'tl-dot past';
        if (globalIdx === 1) dotClass = 'tl-dot past current';

        var bullets = exp.bullets.map(function(b) {
            return '<li><span class="tl-bullet"></span> ' + b + '</li>';
        }).join('');

        return '<div class="tl-item">'
            + '<div class="tl-left">'
            + '<span class="tl-date">' + exp.date + '</span>'
            + '<div class="tl-role">' + exp.role + '</div>'
            + '<div class="tl-company">' + exp.company + '</div>'
            + '</div>'
            + '<div class="tl-dot-wrap"><div class="' + dotClass + '"></div></div>'
            + '<div class="tl-right">'
            + '<div class="tl-card"><ul>' + bullets + '</ul></div>'
            + '</div>'
            + '</div>';
    }).join('');

    var prevBtn = document.getElementById('tl-prev');
    var nextBtn = document.getElementById('tl-next');
    var info = document.getElementById('tl-info');
    if (prevBtn) prevBtn.disabled = (tlPage === 0);
    if (nextBtn) nextBtn.disabled = (tlPage >= maxPage);
    if (info) info.textContent = (tlPage + 1) + ' / ' + (maxPage + 1);
}

// --- Projects ---

function renderProjects() {
    var el = document.getElementById('projects-grid');
    if (!el || !portfolioData.projects) return;

    el.innerHTML = portfolioData.projects.map(function(p) {
        var tags = p.tags.map(function(t) {
            return '<span class="project-tag">' + t + '</span>';
        }).join('');

        var headerBg = 'linear-gradient(135deg, #e8e8ff 0%, #d0f0eb 100%)';

        var demoLink = p.demo
            ? '<a href="' + p.demo + '" class="project-demo-link">View Demo ' + svgIcon('<polyline points="9 18 15 12 9 6"></polyline>', 14) + '</a>'
            : '';

        return '<div class="project-card">'
            + '<div class="project-header" style="background: ' + headerBg + '">'
            + '<span class="project-badge" style="background: ' + p.badgeColor + '">' + p.badge + '</span>'
            + '<div class="project-icon" style="background: ' + p.iconBg + '">' + getIcon(p.icon, 28) + '</div>'
            + '</div>'
            + '<div class="project-body">'
            + '<div class="project-name">' + p.name + '</div>'
            + '<div class="project-desc">' + p.description + '</div>'
            + '<div class="project-tags">' + tags + '</div>'
            + demoLink
            + '</div>'
            + '</div>';
    }).join('');
}

// --- Testimonials ---

var testimonialIndex = 0;

function initTestimonials() {
    if (!portfolioData.testimonials || !portfolioData.testimonials.length) return;
    renderTestimonial(0);
    renderTestimonialDots();

    var prev = document.getElementById('test-prev');
    var next = document.getElementById('test-next');
    if (prev) prev.addEventListener('click', function() {
        testimonialIndex = (testimonialIndex - 1 + portfolioData.testimonials.length) % portfolioData.testimonials.length;
        renderTestimonial(testimonialIndex);
        updateDots();
    });
    if (next) next.addEventListener('click', function() {
        testimonialIndex = (testimonialIndex + 1) % portfolioData.testimonials.length;
        renderTestimonial(testimonialIndex);
        updateDots();
    });
}

function renderTestimonial(idx) {
    var el = document.getElementById('testimonial-card');
    if (!el) return;
    var t = portfolioData.testimonials[idx];
    var stars = '';
    for (var i = 0; i < t.rating; i++) stars += '<span class="star">&#9733;</span>';
    var initials = t.name.split(' ').map(function(w) { return w[0]; }).join('');

    el.innerHTML = '<div class="testimonial-quote-icon">&ldquo;</div>'
        + '<div class="testimonial-stars">' + stars + '</div>'
        + '<div class="testimonial-text">&ldquo;' + t.quote + '&rdquo;</div>'
        + '<div class="testimonial-author">'
        + '<div class="testimonial-avatar">' + initials + '</div>'
        + '<div class="testimonial-author-info">'
        + '<div class="testimonial-author-name">' + t.name + '</div>'
        + '<div class="testimonial-author-role">' + t.role + '</div>'
        + '</div></div>';
}

function renderTestimonialDots() {
    var el = document.getElementById('testimonial-dots');
    if (!el) return;
    el.innerHTML = portfolioData.testimonials.map(function(_, i) {
        return '<span class="t-dot' + (i === 0 ? ' active' : '') + '" data-idx="' + i + '"></span>';
    }).join('');
    el.addEventListener('click', function(e) {
        var dot = e.target.closest('.t-dot');
        if (!dot) return;
        testimonialIndex = parseInt(dot.getAttribute('data-idx'));
        renderTestimonial(testimonialIndex);
        updateDots();
    });
}

function updateDots() {
    var dots = document.querySelectorAll('.t-dot');
    dots.forEach(function(d, i) {
        d.classList.toggle('active', i === testimonialIndex);
    });
}

// --- Why Hire Me ---

function renderWhyHireMe() {
    var el = document.getElementById('why-grid');
    if (!el || !portfolioData.whyHireMe) return;

    el.innerHTML = portfolioData.whyHireMe.map(function(w) {
        return '<div class="why-card">'
            + '<div class="why-icon">' + getIcon(w.icon, 22) + '</div>'
            + '<div class="why-title">' + w.title + '</div>'
            + '<div class="why-desc">' + w.description + '</div>'
            + '</div>';
    }).join('');
}

// --- Info Cards (Education, Availability, Languages) ---

function renderInfoCards() {
    var eduCard = document.getElementById('edu-card');
    var availCard = document.getElementById('avail-card');
    var langCard = document.getElementById('lang-card');

    if (eduCard && portfolioData.education && portfolioData.education[0]) {
        var e = portfolioData.education[0];
        eduCard.innerHTML = '<div class="info-card-header">'
            + '<div class="info-card-icon" style="background: #6366f115; color: #6366f1">' + getIcon('education', 18) + '</div>'
            + '<div class="info-card-title" style="color: #6366f1">EDUCATION</div>'
            + '</div>'
            + '<h3>' + e.degree + '</h3>'
            + '<p>' + e.institution + '</p>'
            + '<p>Graduated ' + e.date.split(' — ')[1] + '</p>';
    }

    if (availCard && portfolioData.availabilityOptions) {
        var items = portfolioData.availabilityOptions.map(function(a) {
            return '<div class="avail-item"><span class="avail-dot"></span> ' + a + '</div>';
        }).join('');
        availCard.innerHTML = '<div class="info-card-header">'
            + '<div class="info-card-icon" style="background: #14b8a615; color: #14b8a6">' + getIcon('calendar', 18) + '</div>'
            + '<div class="info-card-title" style="color: #14b8a6">AVAILABILITY</div>'
            + '</div>'
            + '<p style="margin-bottom:12px">Currently accepting new clients for:</p>'
            + items;
    }

    if (langCard && portfolioData.languages) {
        var langs = portfolioData.languages.map(function(l) {
            return '<div class="lang-item">'
                + '<div class="lang-header"><span class="lang-name">' + l.name + '</span><span class="lang-level">' + l.level + '</span></div>'
                + '<div class="lang-bar"><div class="lang-fill" style="width:' + l.percent + '%"></div></div>'
                + '</div>';
        }).join('');
        langCard.innerHTML = '<div class="info-card-header">'
            + '<div class="info-card-icon" style="background: #f59e0b15; color: #f59e0b">' + getIcon('languages', 18) + '</div>'
            + '<div class="info-card-title" style="color: #f59e0b">LANGUAGES</div>'
            + '</div>'
            + langs;
    }
}

// --- Contact Info ---

function renderContactInfo() {
    var el = document.getElementById('contact-info');
    if (!el || !portfolioData.personal) return;
    var p = portfolioData.personal;

    el.innerHTML = '<div class="contact-info-card">'
        + '<div class="contact-info-icon" style="background: #6366f112; color: #6366f1">' + getIcon('mail', 20) + '</div>'
        + '<div><div class="contact-info-label" style="color: #6366f1">EMAIL</div>'
        + '<div class="contact-info-value">' + p.email + '</div></div>'
        + '</div>'
        + '<div class="contact-info-card">'
        + '<div class="contact-info-icon" style="background: #14b8a612; color: #14b8a6">' + getIcon('phone', 20) + '</div>'
        + '<div><div class="contact-info-label" style="color: #14b8a6">PHONE</div>'
        + '<div class="contact-info-value">' + p.phone + '</div></div>'
        + '</div>'
        + '<div class="contact-info-card">'
        + '<div class="contact-info-icon" style="background: #f59e0b12; color: #f59e0b">' + getIcon('mappin', 20) + '</div>'
        + '<div><div class="contact-info-label" style="color: #f59e0b">LOCATION</div>'
        + '<div class="contact-info-value">' + p.location + '</div></div>'
        + '</div>'
        + '<div class="contact-social-label">FOLLOW & CONNECT</div>'
        + '<div class="contact-social-icons">'
        + '<a href="https://www.linkedin.com/in/kim-bandeleon" target="_blank" rel="noopener noreferrer" class="contact-social-icon" aria-label="LinkedIn">' + getIcon('linkedin', 20) + '</a>'
        + '<a href="https://github.com/k0wd" target="_blank" rel="noopener noreferrer" class="contact-social-icon" aria-label="GitHub">' + getIcon('github', 20) + '</a>'
        + '</div>';
}

// --- Footer Contact ---

function renderFooterContact() {
    var el = document.getElementById('footer-contact');
    if (!el || !portfolioData.personal) return;
    var p = portfolioData.personal;

    el.innerHTML = '<div class="footer-contact-item">' + getIcon('mail', 14) + ' ' + p.email + '</div>'
        + '<div class="footer-contact-item">' + getIcon('phone', 14) + ' ' + p.phone + '</div>'
        + '<div class="footer-contact-item">' + getIcon('mappin', 14) + ' ' + p.location + '</div>';
}

// --- Contact Form (Web3Forms) ---

function initContactForm() {
    var form = document.getElementById('contact-form');
    var status = document.getElementById('contact-status');
    var submitBtn = document.getElementById('contact-submit');
    if (!form) return;

    var ak = document.getElementById('contact-ak');
    if (ak) ak.value = ['99899ae5','a70f','426c','b17e','9625cee0faa6'].join('-');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        status.textContent = '';
        status.className = 'contact-status';

        var formData = new FormData(form);

        fetch(form.action, { method: 'POST', body: formData })
            .then(function(res) { return res.json(); })
            .then(function(data) {
                if (data.success) {
                    status.textContent = "Message sent! I'll get back to you soon.";
                    status.className = 'contact-status success';
                    form.reset();
                } else {
                    status.textContent = 'Something went wrong. Please try again.';
                    status.className = 'contact-status error';
                }
            })
            .catch(function() {
                status.textContent = 'Network error. Please try again.';
                status.className = 'contact-status error';
            })
            .finally(function() {
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Send Message ' + svgIcon('<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>', 14);
            });
    });
}

// --- Scroll to Top ---

function initScrollTop() {
    var btn = document.getElementById('scroll-top');
    if (!btn) return;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
