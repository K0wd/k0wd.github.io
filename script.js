document.addEventListener('DOMContentLoaded', function() {
    renderHeroStats();
    renderProofStrip();
    renderHiring();
    renderConsulting();
    initTimeline();
    renderProjects();
    renderExpertise();
    renderTools();
    renderContactInfo();
    renderFooterContact();
    initContactForm();
    initScrollTop();
    initDemoEmbed();
});

// --- SVG Icon Helper ---

function svgIcon(paths, size) {
    size = size || 20;
    return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + paths + '</svg>';
}

var icons = {
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',
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
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>'
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

// --- Proof strip (companies) ---

function renderProofStrip() {
    var el = document.getElementById('proof-strip');
    if (!el || !portfolioData.companyLogos) return;
    el.innerHTML = portfolioData.companyLogos.map(function(c) {
        return '<span class="proof-chip">' + c.name + '</span>';
    }).join('');
}

// --- What I do: dual track ---

function renderHiring() {
    var el = document.getElementById('hiring-list');
    if (!el) return;
    var items = [
        'Own QA strategy, automation, and release confidence',
        'Design AI-augmented test pipelines — ticket to results',
        'Build Playwright / Selenium / Cypress frameworks from scratch',
        'Integrate tests into CI/CD and cut release-blocker bugs',
        'Mentor engineers and raise the team quality bar'
    ];
    el.innerHTML = items.map(function(t) {
        return '<li><span class="track-check">' + svgIcon(icons.check, 14) + '</span> ' + t + '</li>';
    }).join('');
}

function renderConsulting() {
    var el = document.getElementById('consulting-list');
    if (!el || !portfolioData.services) return;
    el.innerHTML = portfolioData.services.map(function(s) {
        return '<li><span class="track-check">' + svgIcon(icons.check, 14) + '</span> ' + s.tagline + '</li>';
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

        var demoLink = p.demo
            ? '<a href="' + p.demo + '" class="project-demo-link">View Demo ' + svgIcon('<polyline points="9 18 15 12 9 6"></polyline>', 14) + '</a>'
            : '';

        return '<div class="project-card">'
            + '<div class="project-header" style="background: ' + p.iconBg + '">'
            + '<span class="project-badge" style="background: ' + p.badgeColor + '">' + p.badge + '</span>'
            + '<div class="project-icon">' + getIcon(p.icon, 28) + '</div>'
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

// --- Expertise (skills tags, certs, credentials line) ---

function renderExpertise() {
    var skillsEl = document.getElementById('skills-tags');
    if (skillsEl && portfolioData.coreSkills) {
        var skills = portfolioData.coreSkills.map(function(s) {
            return '<span class="tag">' + s.name + '</span>';
        }).join('');
        var traits = (portfolioData.traits || []).map(function(t) {
            return '<span class="tag tag-soft">' + t + '</span>';
        }).join('');
        skillsEl.innerHTML = skills + traits;
    }

    var certsEl = document.getElementById('certs-row');
    if (certsEl && portfolioData.certifications) {
        certsEl.innerHTML = portfolioData.certifications.map(function(c) {
            return '<span class="cert-chip" style="border-color:' + c.color + '55">'
                + '<span class="cert-abbr" style="background:' + c.color + '22;color:' + c.color + '">' + c.abbr + '</span>'
                + c.title + '</span>';
        }).join('');
    }

    var credEl = document.getElementById('cred-line');
    if (credEl) {
        var parts = [];
        var e = (portfolioData.education && portfolioData.education[0]) || null;
        if (e) {
            var grad = e.date.indexOf(' — ') > -1 ? e.date.split(' — ')[1] : e.date;
            parts.push('<strong>Education:</strong> ' + e.degree + ', ' + e.institution + ' (' + grad + ')');
        }
        var langs = (portfolioData.languages || []).map(function(l) { return l.name + ' (' + l.level + ')'; }).join(', ');
        if (langs) parts.push('<strong>Languages:</strong> ' + langs);
        credEl.innerHTML = parts.join(' &nbsp;·&nbsp; ');
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

// --- Contact Info ---

function renderContactInfo() {
    var el = document.getElementById('contact-info');
    if (!el || !portfolioData.personal) return;
    var p = portfolioData.personal;

    var html = '<div class="contact-info-card">'
        + '<div class="contact-info-icon" style="background: #6366f112; color: #7c6cf0">' + getIcon('mail', 20) + '</div>'
        + '<div><div class="contact-info-label" style="color: #7c6cf0">EMAIL</div>'
        + '<div class="contact-info-value">' + p.email + '</div></div>'
        + '</div>';

    if (p.phone) {
        html += '<div class="contact-info-card">'
            + '<div class="contact-info-icon" style="background: #14b8a612; color: #06d6a0">' + getIcon('phone', 20) + '</div>'
            + '<div><div class="contact-info-label" style="color: #06d6a0">PHONE</div>'
            + '<div class="contact-info-value">' + p.phone + '</div></div>'
            + '</div>';
    }

    html += '<div class="contact-info-card">'
        + '<div class="contact-info-icon" style="background: #f59e0b12; color: #f59e0b">' + getIcon('mappin', 20) + '</div>'
        + '<div><div class="contact-info-label" style="color: #f59e0b">LOCATION</div>'
        + '<div class="contact-info-value">' + p.location + '</div></div>'
        + '</div>'
        + '<div class="contact-social-label">FOLLOW &amp; CONNECT</div>'
        + '<div class="contact-social-icons">'
        + '<a href="https://www.linkedin.com/in/kim-bandeleon" target="_blank" rel="noopener noreferrer" class="contact-social-icon" aria-label="LinkedIn">' + getIcon('linkedin', 20) + '</a>'
        + '<a href="https://github.com/k0wd" target="_blank" rel="noopener noreferrer" class="contact-social-icon" aria-label="GitHub">' + getIcon('github', 20) + '</a>'
        + '</div>';

    el.innerHTML = html;
}

// --- Footer Contact ---

function renderFooterContact() {
    var el = document.getElementById('footer-contact');
    if (!el || !portfolioData.personal) return;
    var p = portfolioData.personal;

    var html = '<div class="footer-contact-item">' + getIcon('mail', 14) + ' ' + p.email + '</div>';
    if (p.phone) html += '<div class="footer-contact-item">' + getIcon('phone', 14) + ' ' + p.phone + '</div>';
    html += '<div class="footer-contact-item">' + getIcon('mappin', 14) + ' ' + p.location + '</div>';
    el.innerHTML = html;
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

// --- Live demo embed (sync iframe height to its content) ---

function initDemoEmbed() {
    var frame = document.getElementById('demo-frame');
    if (!frame) return;

    var inView = false;

    function triggerRun() {
        try { frame.contentWindow.postMessage({ taRun: true }, '*'); } catch (e) {}
    }

    window.addEventListener('message', function(e) {
        if (!e.data) return;
        if (typeof e.data.taHeight === 'number' && e.data.taHeight > 0) {
            frame.style.height = e.data.taHeight + 'px';
        }
        if (e.data.taReady && inView) triggerRun();
    });

    if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function(entries) {
            entries.forEach(function(en) {
                if (en.isIntersecting) { inView = true; triggerRun(); }
                else { inView = false; }
            });
        }, { threshold: 0.35 });
        io.observe(frame);
    } else {
        frame.addEventListener('load', triggerRun);
    }
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
