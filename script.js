// Portfolio Script - Renders data from data.js

document.addEventListener('DOMContentLoaded', function() {
    // Render Projects
    renderProjects();
    
    // Render Work Experience
    renderWork();
    
    // Initialize Work Carousel
    initWorkCarousel();
    
    // Render Education
    renderEducation();
    
    // Render Certifications
    renderCertifications();

    // Render TestGenerator
    renderTestGenerator();

    // Setup collapsible toggle
    initTgToggle();

    // Hero terminal animation
    initHeroTerminal();
});

function renderProjects() {
    const projectsList = document.getElementById('projects-list');
    if (!projectsList || !portfolioData.projects) return;
    
    if (portfolioData.projects.length === 0) {
        projectsList.innerHTML = '<li class="item-list-item"><p style="color: var(--text-tertiary);">No projects listed yet.</p></li>';
        return;
    }
    
    projectsList.innerHTML = portfolioData.projects.map(project => `
        <li class="item-list-item">
            <a href="${project.url}" ${project.external ? 'target="_blank" rel="noopener noreferrer"' : ''}>
                <span class="item-title">
                    ${project.title}
                    ${project.external ? '<svg class="external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>' : ''}
                </span>
                <span class="item-description">${project.description}</span>
            </a>
        </li>
    `).join('');
}

function getInitial(name) {
    return name.charAt(0).toUpperCase();
}

function renderWork() {
    const workList = document.getElementById('work-list');
    if (!workList || !portfolioData.work) return;

    workList.innerHTML = portfolioData.work.map(job => {
        const topSkills = job.skills ? job.skills.slice(0, 4) : [];
        const skillsTags = topSkills.map(skill =>
            `<span class="work-skill-tag">${skill}</span>`
        ).join('');
        const bg = job.logoGradient || job.logoColor || '#4f8ff7';
        const label = job.logoText || getInitial(job.company);
        const smallClass = label.length > 1 ? ' logo-initial-sm' : '';
        const roundClass = job.logoRound ? ' work-logo-round' : '';

        return `
        <li class="work-item">
            <a href="${job.url}" target="_blank" rel="noopener noreferrer">
                <div class="work-logo${roundClass}" style="background: ${bg}">
                    <span class="logo-initial${smallClass}">${label}</span>
                </div>
                <div class="work-info">
                    <span class="work-company">${job.company}</span>
                    <span class="work-role">${job.role}</span>
                    <span class="work-date">${job.date}</span>
                    ${skillsTags ? `<div class="work-skills">${skillsTags}</div>` : ''}
                </div>
            </a>
        </li>
        `;
    }).join('');
}

function renderEducation() {
    const educationList = document.getElementById('education-list');
    if (!educationList || !portfolioData.education) return;

    educationList.innerHTML = portfolioData.education.map(edu => {
        var logoHtml;
        if (edu.logoImage) {
            logoHtml = '<img src="' + edu.logoImage + '" alt="' + edu.institution + '" class="edu-logo edu-logo-img">';
        } else {
            var color = edu.logoColor || '#4f8ff7';
            var initial = getInitial(edu.institution);
            logoHtml = '<div class="edu-logo" style="background: ' + color + '"><span class="logo-initial">' + initial + '</span></div>';
        }
        return `
        <li class="item-list-item edu-item">
            <a href="${edu.url}">
                ${logoHtml}
                <div class="edu-info">
                    <span class="item-title">${edu.degree}</span>
                    <span class="item-description">${edu.institution}</span>
                    <span class="item-meta">${edu.date}</span>
                </div>
            </a>
        </li>
        `;
    }).join('');
}

function renderSkills() {
    const skillsContent = document.getElementById('skills-content');
    if (!skillsContent || !portfolioData.skills) return;
    
    skillsContent.innerHTML = portfolioData.skills.map(skillGroup => `
        <div class="skills-group">
            <div class="skills-group-title">${skillGroup.category}</div>
            <ul class="skills-list">
                ${skillGroup.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

function getCertIcon(icon) {
    const icons = {
        shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
        layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
        sigma: '<path d="M18 7V4H6l6 8-6 8h12v-3"/>',
        cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>',
        lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
        zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'
    };
    return icons[icon] || icons.shield;
}

function renderCertifications() {
    const certificationsList = document.getElementById('certifications-list');
    if (!certificationsList || !portfolioData.certifications) return;

    var html = '';
    var currentRow = 1;
    portfolioData.certifications.forEach(function(cert) {
        if (cert.row && cert.row !== currentRow) {
            html += '<li class="cert-break"></li>';
            currentRow = cert.row;
        }
        html += '<li class="cert-tile">'
            + '<div class="cert-icon" style="background: ' + cert.color + '">'
            + '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + getCertIcon(cert.icon) + '</svg>'
            + '</div>'
            + '<span class="cert-label">' + cert.title + '</span>'
            + '</li>';
    });
    certificationsList.innerHTML = html;
}

function renderTestGenerator() {
    const pipeline = document.getElementById('tg-pipeline');
    if (!pipeline || !portfolioData.testGeneratorSteps) return;

    pipeline.innerHTML = portfolioData.testGeneratorSteps.map(s => `
        <div class="tg-step-card tg-status-${s.status || 'idle'}">
            <div class="tg-step-header">
                <span class="tg-step-label">STEP ${String(s.step).padStart(2, '0')}</span>
                <div class="tg-step-indicators">
                    <span class="tg-status-dot"></span>
                    <div class="tg-step-toggles">
                        <span class="tg-toggle"></span>
                        <span class="tg-toggle tg-toggle-on"></span>
                    </div>
                </div>
            </div>
            <div class="tg-step-title">${s.title}</div>
            <div class="tg-step-actions">
                <button class="tg-step-timer">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </button>
                <button class="tg-step-run">Run</button>
            </div>
        </div>
    `).join('');
}

function initHeroTerminal() {
    var body = document.getElementById('hero-term-body');
    if (!body) return;

    var sequences = [
        [
            { text: '<span class="cmd">$</span> <span class="info">npx playwright test</span>' },
            { text: '<span class="dim">───────────────────────────</span>' },
            { text: '<span class="pass">PASS</span>  <span class="info">auth/login.spec.ts</span>       <span class="dim">420ms</span>' },
            { text: '<span class="pass">PASS</span>  <span class="info">auth/session.spec.ts</span>     <span class="dim">310ms</span>' },
            { text: '<span class="pass">PASS</span>  <span class="info">api/users.spec.ts</span>        <span class="dim">280ms</span>' },
            { text: '<span class="fail">FAIL</span>  <span class="info">auth/callback.spec.ts</span>    <span class="dim">1.2s</span>' },
            { text: '<span class="pass">PASS</span>  <span class="info">ui/dashboard.spec.ts</span>     <span class="dim">390ms</span>' },
            { text: '<span class="dim">───────────────────────────</span>' },
            { text: '<span class="info">Results:</span> <span class="pass">4 passed</span> <span class="fail">1 failed</span> <span class="dim">2.6s</span>' }
        ],
        [
            { text: '<span class="cmd">$</span> <span class="info">pytest tests/ -v</span>' },
            { text: '<span class="dim">───────────────────────────</span>' },
            { text: '<span class="pass">PASS</span>  <span class="info">test_create_user</span>         <span class="dim">0.12s</span>' },
            { text: '<span class="pass">PASS</span>  <span class="info">test_update_profile</span>      <span class="dim">0.08s</span>' },
            { text: '<span class="pass">PASS</span>  <span class="info">test_delete_account</span>      <span class="dim">0.15s</span>' },
            { text: '<span class="pass">PASS</span>  <span class="info">test_list_permissions</span>    <span class="dim">0.09s</span>' },
            { text: '<span class="pass">PASS</span>  <span class="info">test_rate_limiter</span>        <span class="dim">0.22s</span>' },
            { text: '<span class="dim">───────────────────────────</span>' },
            { text: '<span class="info">Results:</span> <span class="pass">5 passed</span> <span class="dim">0.66s</span>' }
        ],
        [
            { text: '<span class="cmd">$</span> <span class="info">robot --suite smoke tests/</span>' },
            { text: '<span class="dim">───────────────────────────</span>' },
            { text: '<span class="pass">PASS</span>  <span class="info">Login With Valid Creds</span>    <span class="dim">1.1s</span>' },
            { text: '<span class="pass">PASS</span>  <span class="info">Navigate Dashboard</span>       <span class="dim">0.8s</span>' },
            { text: '<span class="pass">PASS</span>  <span class="info">Search Functionality</span>     <span class="dim">0.9s</span>' },
            { text: '<span class="pass">PASS</span>  <span class="info">Export Report CSV</span>        <span class="dim">1.3s</span>' },
            { text: '<span class="fail">FAIL</span>  <span class="info">Upload Large File</span>        <span class="dim">5.0s</span>' },
            { text: '<span class="dim">───────────────────────────</span>' },
            { text: '<span class="info">Results:</span> <span class="pass">4 passed</span> <span class="fail">1 failed</span> <span class="dim">9.1s</span>' }
        ]
    ];

    var seqIndex = 0;

    function runSequence() {
        body.innerHTML = '';
        var lines = sequences[seqIndex];
        seqIndex = (seqIndex + 1) % sequences.length;

        lines.forEach(function(line, i) {
            var el = document.createElement('div');
            el.className = 'hero-term-line';
            el.innerHTML = line.text;
            body.appendChild(el);

            setTimeout(function() {
                el.classList.add('visible');
            }, 200 + i * 300);
        });

        setTimeout(runSequence, lines.length * 300 + 4000);
    }

    setTimeout(runSequence, 800);
}

function initTgToggle() {
    var btn = document.getElementById('tg-toggle');
    var closeBtn = document.getElementById('tg-close');
    var panel = document.getElementById('tg-collapsible');
    var demoStarted = false;
    if (!btn || !panel || !closeBtn) return;

    var inquireBtn = document.querySelector('.tg-inquire-btn');

    function openDemo() {
        btn.classList.add('hidden');
        panel.classList.add('open');
        setTimeout(function() {
            closeBtn.classList.add('visible');
        }, 300);
        if (inquireBtn) {
            setTimeout(function() {
                inquireBtn.classList.add('visible');
            }, 400);
        }
        if (!demoStarted) {
            demoStarted = true;
            setTimeout(initPipelineDemo, 800);
        }
    }

    function closeDemo() {
        closeBtn.classList.remove('visible');
        if (inquireBtn) inquireBtn.classList.remove('visible');
        panel.classList.remove('open');
        setTimeout(function() {
            btn.classList.remove('hidden');
        }, 400);
    }

    btn.addEventListener('click', openDemo);
    closeBtn.addEventListener('click', closeDemo);
}

function initPipelineDemo() {
    var cards = document.querySelectorAll('.tg-step-card');
    var logBody = document.querySelector('.tg-log-body');
    var logTabs = document.querySelectorAll('.tg-log-tab');
    if (!cards.length || !logBody) return;

    var stepResults = { 7: 'fail', 10: 'warn' };
    var runCount = 0;
    var running = false;
    var currentTab = 'history';
    var runHistoryData = [];

    var logMessages = [
        [
            { text: '> jira auth --token ****redacted****', type: 'info' },
            { text: '  200 OK — session: usr_k0wd_4a82f', type: 'pass' }
        ],
        [
            { text: '> find ticket SM-4827', type: 'info' },
            { text: '  Found: SM-4827 "Login flow regression on /auth/callback"', type: 'pass' },
            { text: '  Priority: High | Sprint: 42 | Assignee: kim.b', type: 'info' }
        ],
        [
            { text: '> review ticket SM-4827', type: 'info' },
            { text: '  Acceptance Criteria: 4 items parsed', type: 'info' },
            { text: '  AC-1: User redirected to /dashboard after login', type: 'info' },
            { text: '  AC-2: Invalid credentials show error toast', type: 'info' },
            { text: '  AC-3: Session persists across page refresh', type: 'info' },
            { text: '  AC-4: OAuth callback handles state param', type: 'pass' }
        ],
        [
            { text: '> review code --pr #1847', type: 'info' },
            { text: '  Diff: +142 -38 across 6 files', type: 'info' },
            { text: '  src/auth/callback.ts  +87 -12', type: 'info' },
            { text: '  src/middleware/session.ts  +31 -8', type: 'info' },
            { text: '  Code review complete — no blockers', type: 'pass' }
        ],
        [
            { text: '> draft test-plan --scenarios auto', type: 'info' },
            { text: '  Scenario 1: Happy path login redirect', type: 'info' },
            { text: '  Scenario 2: Invalid credentials handling', type: 'info' },
            { text: '  Scenario 3: OAuth state validation', type: 'info' },
            { text: '  Scenario 4: Session persistence', type: 'info' },
            { text: '  Scenario 5: Rate limiting on /auth', type: 'info' },
            { text: '  Scenario 6: CSRF token rotation', type: 'info' },
            { text: '  Test plan generated — 6 scenarios', type: 'pass' }
        ],
        [
            { text: '> write gherkin --feature login', type: 'info' },
            { text: '  Feature: Login Authentication Flow', type: 'info' },
            { text: '    Given the user is on the login page', type: 'info' },
            { text: '    When they enter valid credentials', type: 'info' },
            { text: '    And click "Sign In"', type: 'info' },
            { text: '    Then they should be redirected to /dashboard', type: 'info' },
            { text: '  14 steps across 3 feature files', type: 'pass' }
        ],
        [
            { text: '> generate tests --framework playwright', type: 'info' },
            { text: '  Creating: test/auth/login.spec.ts', type: 'info' },
            { text: '  Creating: test/auth/oauth-callback.spec.ts', type: 'info' },
            { text: '  Creating: test/auth/session.spec.ts', type: 'info' },
            { text: '  8 test cases generated', type: 'pass' }
        ],
        [
            { text: '> execute tests --headless --parallel 4', type: 'info' },
            { text: '  Running 8 tests across 3 workers...', type: 'info' },
            { text: '  PASS  test_login_valid_credentials         420ms', type: 'pass' },
            { text: '  PASS  test_login_invalid_shows_error        310ms', type: 'pass' },
            { text: '  PASS  test_oauth_state_validation           280ms', type: 'pass' },
            { text: '  PASS  test_session_persists_refresh          390ms', type: 'pass' },
            { text: '  PASS  test_csrf_token_rotation              350ms', type: 'pass' },
            { text: '  FAIL  test_login_redirect                   1240ms', type: 'fail' },
            { text: '        Expected: 302 Found', type: 'fail' },
            { text: '        Received: 200 OK', type: 'fail' },
            { text: '        at callback.spec.ts:47:12', type: 'fail' },
            { text: '  PASS  test_rate_limit_auth                  510ms', type: 'pass' },
            { text: '  FAIL  test_redirect_preserves_query          980ms', type: 'fail' },
            { text: '        Expected: /dashboard?ref=email', type: 'fail' },
            { text: '        Received: /dashboard', type: 'fail' },
            { text: '  Result: 6 passed, 2 failed                  4.48s', type: 'fail' }
        ],
        [
            { text: '> determine results', type: 'info' },
            { text: '  Pass rate: 75% (6/8)', type: 'warn' },
            { text: '  Failures: test_login_redirect, test_redirect_preserves_query', type: 'fail' },
            { text: '  Root cause: callback.ts missing redirect status override', type: 'warn' }
        ],
        [
            { text: '> post results --target jira,slack', type: 'info' },
            { text: '  Comment posted to SM-4827', type: 'pass' },
            { text: '  Slack #qa-alerts notified', type: 'pass' }
        ],
        [
            { text: '> transition ticket SM-4827', type: 'info' },
            { text: '  WARNING: 2 test failures detected', type: 'warn' },
            { text: '  Ticket NOT transitioned — requires manual review', type: 'warn' },
            { text: '  Label added: needs-fix', type: 'warn' }
        ]
    ];

    function switchTab(tabName) {
        currentTab = tabName;
        logTabs.forEach(function(t) {
            t.classList.toggle('active', t.textContent.trim().toLowerCase().includes(tabName === 'logs' ? 'live' : 'history'));
        });
    }

    function clearAllStates() {
        cards.forEach(function(card) {
            card.classList.remove('tg-status-pass', 'tg-status-fail', 'tg-status-warn', 'tg-demo-active', 'tg-demo-processing');
            card.classList.add('tg-status-idle');
        });
    }

    function timestamp() {
        return new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }

    function typeText(el, text, speed, cb) {
        var i = 0;
        el.textContent = '';
        function tick() {
            if (i < text.length) {
                el.textContent += text.charAt(i);
                i++;
                setTimeout(tick, speed + Math.random() * speed * 0.5);
            } else if (cb) {
                cb();
            }
        }
        tick();
    }

    function showLiveLog(stream, msgs, idx, done) {
        if (idx >= msgs.length) { if (done) done(); return; }
        var msg = msgs[idx];
        var line = document.createElement('div');
        line.className = 'tg-log-line tg-log-' + msg.type;
        var timeSpan = '<span class="tg-log-time">' + timestamp() + '</span> ';
        var textSpan = document.createElement('span');
        line.innerHTML = timeSpan;
        line.appendChild(textSpan);
        stream.appendChild(line);
        line.offsetHeight;
        line.classList.add('tg-log-visible');
        stream.scrollTop = stream.scrollHeight;
        var isCmd = msg.text.startsWith('>');
        var speed = isCmd ? 25 : 8;
        typeText(textSpan, msg.text, speed, function() {
            var delay = isCmd ? 300 : (80 + Math.random() * 150);
            setTimeout(function() { showLiveLog(stream, msgs, idx + 1, done); }, delay);
        });
    }

    function renderRunHistory() {
        var html = '<div class="tg-run-history">';
        runHistoryData.forEach(function(run) {
            var statusClass = run.failed > 0 ? 'fail' : 'pass';
            var statusLabel = run.failed > 0 ? 'FAILED' : 'PASSED';
            html += '<div class="tg-history-row tg-history-' + statusClass + '">'
                + '<span class="tg-history-id">#' + run.id + '</span>'
                + '<span class="tg-history-ticket">' + run.ticket + '</span>'
                + '<span class="tg-history-result tg-log-' + statusClass + '">' + statusLabel + '</span>'
                + '<span class="tg-history-stats">' + run.passed + ' passed, ' + run.failed + ' failed</span>'
                + '<span class="tg-history-time">' + run.time + '</span>'
                + '</div>';
        });
        html += '</div>';
        logBody.innerHTML = html;
    }

    function runDemo() {
        if (running) return;
        running = true;
        runCount++;
        clearAllStates();
        switchTab('logs');
        logBody.innerHTML = '<div class="tg-log-stream"></div>';
        var stream = logBody.querySelector('.tg-log-stream');
        var step = 0;
        var hasFail = false;

        function processStep() {
            if (step >= cards.length) {
                var run = {
                    id: runCount,
                    ticket: 'SM-' + (4820 + runCount * 7),
                    passed: hasFail ? 6 : 8,
                    failed: hasFail ? 2 : 0,
                    time: timestamp()
                };
                runHistoryData.unshift(run);
                if (runHistoryData.length > 5) runHistoryData.pop();

                setTimeout(function() {
                    switchTab('history');
                    renderRunHistory();
                    setTimeout(function() {
                        running = false;
                        clearAllStates();
                        setTimeout(runDemo, 3000);
                    }, 5000);
                }, 1500);
                return;
            }

            var card = cards[step];
            card.classList.remove('tg-status-idle');
            card.classList.add('tg-demo-processing');

            var msgs = logMessages[step] || [];
            var result = stepResults[step] || 'pass';
            if (result === 'fail') hasFail = true;

            showLiveLog(stream, msgs, 0, function() {
                card.classList.remove('tg-demo-processing');
                card.classList.add('tg-status-' + result, 'tg-demo-active');
                step++;
                var delay = 200 + Math.random() * 400;
                if (result === 'fail') delay = 600;
                setTimeout(processStep, delay);
            });
        }

        processStep();
    }

    logTabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            if (tab.textContent.trim().toLowerCase().includes('live')) {
                switchTab('logs');
                if (!running) logBody.innerHTML = '<div class="tg-log-stream"><div class="tg-log-line tg-log-visible tg-log-info"><span class="tg-log-time">' + timestamp() + '</span> Waiting for run...</div></div>';
            } else {
                switchTab('history');
                if (runHistoryData.length > 0) renderRunHistory();
                else logBody.innerHTML = '<span class="tg-log-empty">No runs yet</span>';
            }
        });
    });

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting && !running) {
                runDemo();
            }
        });
    }, { threshold: 0.2 });

    observer.observe(document.getElementById('tg-pipeline'));
}

// Work Carousel - 3 items per page
function initWorkCarousel() {
    var workList = document.getElementById('work-list');
    var workContainer = workList ? workList.closest('.work-container') : null;
    var prevBtn = document.getElementById('work-prev');
    var nextBtn = document.getElementById('work-next');

    if (!workList || !workContainer || !prevBtn || !nextBtn) return;

    var items = workList.querySelectorAll('.work-item');
    var itemsPerPage = 3;
    var totalPages = Math.ceil(items.length / itemsPerPage);

    if (items.length <= itemsPerPage) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        return;
    }

    var currentIndex = 0;

    function getPageHeight(page) {
        var start = page * itemsPerPage;
        var end = Math.min(start + itemsPerPage, items.length);
        var h = 0;
        for (var i = start; i < end; i++) {
            h += items[i].offsetHeight;
            if (i < end - 1) h += 4;
        }
        return h;
    }

    function updateCarousel() {
        var offset = 0;
        for (var p = 0; p < currentIndex; p++) {
            offset += getPageHeight(p) + 4;
        }
        workList.style.transform = 'translateY(-' + offset + 'px)';

        var ch = getPageHeight(currentIndex);
        if (ch > 0) {
            workContainer.style.height = ch + 'px';
            workContainer.style.maxHeight = ch + 'px';
        }
        workContainer.style.overflow = 'hidden';

        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= totalPages - 1;
    }

    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) { currentIndex--; updateCarousel(); }
    });

    nextBtn.addEventListener('click', function() {
        if (currentIndex < totalPages - 1) { currentIndex++; updateCarousel(); }
    });

    setTimeout(updateCarousel, 300);

    var resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(updateCarousel, 150);
    });
}

function initContactModal() {
    var modal = document.getElementById('contact-modal');
    var openBtn = document.getElementById('inquire-open');
    var closeBtn = document.getElementById('contact-close');
    var form = document.getElementById('contact-form');
    var status = document.getElementById('contact-status');
    var submitBtn = document.getElementById('contact-submit');
    if (!modal || !form) return;

    var ak = document.getElementById('contact-ak');
    if (ak) ak.value = ['99899ae5','a70f','426c','b17e','9625cee0faa6'].join('-');

    function openModal() {
        modal.classList.add('open');
    }

    function closeModal() {
        modal.classList.remove('open');
        status.textContent = '';
        status.className = 'contact-status';
    }

    if (openBtn) openBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    document.querySelectorAll('.contact-modal-trigger').forEach(function(el) {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            openModal();
        });
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        status.textContent = '';
        status.className = 'contact-status';

        var formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData
        })
        .then(function(res) { return res.json(); })
        .then(function(data) {
            if (data.success) {
                status.textContent = 'Message sent! I\'ll get back to you soon.';
                status.className = 'contact-status success';
                form.reset();
                setTimeout(closeModal, 2500);
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
            submitBtn.textContent = 'Send Message';
        });
    });
}

document.addEventListener('DOMContentLoaded', initContactModal);
