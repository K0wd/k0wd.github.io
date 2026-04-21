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

    // Start demo animation
    setTimeout(initPipelineDemo, 1500);
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
        const color = edu.logoColor || '#4f8ff7';
        const initial = getInitial(edu.institution);
        return `
        <li class="item-list-item edu-item">
            <a href="${edu.url}">
                <div class="edu-logo" style="background: ${color}">
                    <span class="logo-initial">${initial}</span>
                </div>
                <div class="edu-info">
                    <span class="item-title">${edu.institution}</span>
                    <span class="item-description">${edu.degree}</span>
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
        lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'
    };
    return icons[icon] || icons.shield;
}

function renderCertifications() {
    const certificationsList = document.getElementById('certifications-list');
    if (!certificationsList || !portfolioData.certifications) return;

    certificationsList.innerHTML = portfolioData.certifications.map(cert => `
        <li class="cert-tile">
            <div class="cert-icon" style="background: ${cert.color}">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${getCertIcon(cert.icon)}</svg>
            </div>
            <span class="cert-label">${cert.title}</span>
        </li>
    `).join('');
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

// Work Carousel Functionality
function initWorkCarousel() {
    const workList = document.getElementById('work-list');
    const workContainer = workList?.closest('.work-container');
    const prevBtn = document.getElementById('work-prev');
    const nextBtn = document.getElementById('work-next');
    
    if (!workList || !workContainer || !prevBtn || !nextBtn) return;
    
    const items = workList.querySelectorAll('.work-item');
    const itemsPerPage = 5;
    const totalPages = Math.ceil(items.length / itemsPerPage);
    
    if (items.length <= itemsPerPage) {
        // Hide navigation if 5 or fewer items
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        return;
    }
    
    let currentIndex = 0;
    
    function calculateContainerHeight() {
        if (items.length === 0) return 0;
        
        // Calculate height of first 5 items
        let totalHeight = 0;
        const visibleItems = Math.min(itemsPerPage, items.length);
        
        for (let i = 0; i < visibleItems; i++) {
            if (items[i]) {
                const item = items[i];
                const itemHeight = item.offsetHeight || item.getBoundingClientRect().height;
                totalHeight += itemHeight;
                
                // Add gap between items (except for last item)
                if (i < visibleItems - 1) {
                    totalHeight += 4; // --spacing-xs
                }
            }
        }
        
        return totalHeight;
    }
    
    function getItemHeight() {
        if (items.length === 0) return 0;
        
        // Get average height of items
        let totalHeight = 0;
        const sampleSize = Math.min(5, items.length);
        
        for (let i = 0; i < sampleSize; i++) {
            totalHeight += items[i].offsetHeight;
        }
        
        const avgHeight = totalHeight / sampleSize;
        const gap = 4; // --spacing-xs from CSS
        return avgHeight + gap;
    }
    
    function updateCarousel() {
        const itemHeight = getItemHeight();
        const translateY = -currentIndex * itemHeight * itemsPerPage;
        workList.style.transform = `translateY(${translateY}px)`;
        
        // Set container height to show exactly 5 items
        const containerHeight = calculateContainerHeight();
        if (containerHeight > 0) {
            workContainer.style.height = `${containerHeight}px`;
            workContainer.style.maxHeight = `${containerHeight}px`;
        }
        workContainer.style.overflow = 'hidden';
        
        // Update button states
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= totalPages - 1;
    }
    
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalPages - 1) {
            currentIndex++;
            updateCarousel();
        }
    });
    
    // Initialize after items are rendered
    setTimeout(() => {
        // Calculate and set container height to show exactly 5 items
        let totalHeight = 0;
        const visibleItems = Math.min(itemsPerPage, items.length);
        
        for (let i = 0; i < visibleItems; i++) {
            if (items[i]) {
                const item = items[i];
                const itemHeight = item.offsetHeight || item.getBoundingClientRect().height;
                totalHeight += itemHeight;
                if (i < visibleItems - 1) {
                    totalHeight += 4; // gap
                }
            }
        }
        
        if (totalHeight > 0) {
            workContainer.style.height = `${totalHeight}px`;
            workContainer.style.maxHeight = `${totalHeight}px`;
            workContainer.style.overflow = 'hidden';
        }
        
        updateCarousel();
    }, 500);
    
    // Recalculate on window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            updateCarousel();
        }, 150);
    });
}
