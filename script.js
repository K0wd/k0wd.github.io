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

function renderWork() {
    const workList = document.getElementById('work-list');
    if (!workList || !portfolioData.work) return;
    
    workList.innerHTML = portfolioData.work.map(job => {
        const topSkills = job.skills ? job.skills.slice(0, 4) : [];
        const skillsTags = topSkills.map(skill => 
            `<span class="work-skill-tag">${skill}</span>`
        ).join('');
        
        return `
        <li class="work-item">
            <a href="${job.url}" target="_blank" rel="noopener noreferrer">
                ${job.logo ? `<img src="${job.logo}" alt="${job.company}" class="work-logo">` : '<div class="work-logo"></div>'}
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
    
    educationList.innerHTML = portfolioData.education.map(edu => `
        <li class="item-list-item">
            <a href="${edu.url}">
                <span class="item-title">${edu.institution}</span>
                <span class="item-description">${edu.degree}</span>
                <span class="item-meta">${edu.date}</span>
            </a>
        </li>
    `).join('');
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

function renderCertifications() {
    const certificationsList = document.getElementById('certifications-list');
    if (!certificationsList || !portfolioData.certifications) return;
    
    if (portfolioData.certifications.length === 0) {
        certificationsList.innerHTML = '<li class="item-list-item"><p style="color: var(--text-tertiary);">No certifications listed yet.</p></li>';
        return;
    }
    
    certificationsList.innerHTML = portfolioData.certifications.map(cert => `
        <li class="item-list-item">
            <a href="${cert.url}">
                <span class="item-title">
                    ${cert.title}
                    <svg class="external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </span>
                <span class="item-description">${cert.description}</span>
                <span class="item-meta">${cert.issuer} • ${cert.date}</span>
            </a>
        </li>
    `).join('');
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
