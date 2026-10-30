'use strict';

// ============================================================
// DATA LAYER - Profile information kept separate from UI logic
// ============================================================

const profileData = {
  name: 'Alex Johnson',
  role: 'Frontend Developer',
  bio: 'Passionate about building accessible and performant web applications. I enjoy turning complex problems into simple, beautiful interfaces.',
  skills: [
    { name: 'HTML5', level: 9 },
    { name: 'CSS3', level: 8 },
    { name: 'JavaScript', level: 8 },
    { name: 'React', level: 7 },
    { name: 'Node.js', level: 6 },
    { name: 'Git', level: 8 },
    { name: 'TypeScript', level: 6 },
    { name: 'Accessibility', level: 7 }
  ],
  experience: [
    { company: 'TechCorp', role: 'Frontend Developer', years: 3 },
    { company: 'WebSolutions', role: 'Junior Developer', years: 2 },
    { company: 'StartupHub', role: 'Intern', years: 1 }
  ],
  projects: [
    { title: 'Portfolio Website', description: 'A responsive personal portfolio built with HTML, CSS, and vanilla JavaScript.', year: 2024 },
    { title: 'Task Manager App', description: 'A CRUD task management application using React and localStorage.', year: 2023 },
    { title: 'Weather Dashboard', description: 'A weather app that fetches data from a public API and displays forecasts.', year: 2023 }
  ],
  education: [
    { degree: 'B.Sc. Computer Science', institution: 'University of Technology', year: 2020 },
    { degree: 'Full-Stack Web Development Bootcamp', institution: 'Code Academy', year: 2021 }
  ],
  contact: {
    email: 'alex.johnson@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    linkedin: 'linkedin.com/in/alexjohnson'
  }
};

// ============================================================
// UTILITY FUNCTIONS - Pure functions with parameters/returns
// ============================================================

/**
 * Calculate the average skill level from an array of skill objects.
 * @param {Array} skills - Array of { name, level } objects.
 * @returns {number} Average level rounded to 1 decimal place.
 */
function calculateAverageSkill(skills) {
  if (!Array.isArray(skills) || skills.length === 0) {
    throw new Error('No skills provided to calculate average.');
  }
  const total = skills.reduce((sum, skill) => sum + skill.level, 0);
  return Math.round((total / skills.length) * 10) / 10;
}

/**
 * Filter skills by a search term (case-insensitive).
 * @param {Array} skills - Array of skill objects.
 * @param {string} term - Search term.
 * @returns {Array} Filtered skills.
 */
function filterSkills(skills, term) {
  if (!term || term.trim() === '') return skills;
  const lowerTerm = term.toLowerCase().trim();
  return skills.filter(skill => skill.name.toLowerCase().includes(lowerTerm));
}

/**
 * Get a friendly message based on the average skill score.
 * @param {number} score - Average skill score.
 * @returns {string} Message.
 */
function getScoreMessage(score) {
  if (score >= 8) return 'Expert level - highly skilled!';
  if (score >= 6) return 'Proficient level - solid skills.';
  if (score >= 4) return 'Intermediate level - growing skills.';
  return 'Beginner level - keep learning!';
}

/**
 * Format a project card as an HTML string using template literals.
 * @param {Object} project - Project object.
 * @returns {string} HTML string.
 */
function formatProjectCard(project) {
  const { title, description, year } = project;
  return `
    <div class="project-card">
      <h3>${title} <small>(${year})</small></h3>
      <p>${description}</p>
    </div>
  `;
}

/**
 * Format an experience item as an HTML string.
 * @param {Object} exp - Experience object.
 * @returns {string} HTML string.
 */
function formatExperienceItem(exp) {
  const { company, role, years } = exp;
  return `<p><strong>${role}</strong> at ${company} — ${years} year${years > 1 ? 's' : ''}</p>`;
}

/**
 * Format an education item as an HTML string.
 * @param {Object} edu - Education object.
 * @returns {string} HTML string.
 */
function formatEducationItem(edu) {
  const { degree, institution, year } = edu;
  return `<p><strong>${degree}</strong> — ${institution} (${year})</p>`;
}

/**
 * Safely parse a JSON string (demonstrates try/catch).
 * @param {string} jsonString - JSON string to parse.
 * @returns {Object|null} Parsed object or null on failure.
 */
function safeParseJSON(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Failed to parse JSON:', error.message);
    return null;
  }
}

// ============================================================
// UI RENDERING FUNCTIONS
// ============================================================

/**
 * Render the profile header (name, role, bio).
 */
function renderHeader() {
  const { name, role, bio } = profileData;
  document.getElementById('profile-name').textContent = name;
  document.getElementById('profile-role').textContent = role;
  document.getElementById('profile-bio').textContent = bio;
}

/**
 * Render the skills list.
 * @param {Array} skills - Array of skill objects to display.
 */
function renderSkills(skills) {
  const skillsList = document.getElementById('skills-list');
  const noResults = document.getElementById('no-results');

  if (skills.length === 0) {
    skillsList.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }

  noResults.style.display = 'none';
  skillsList.innerHTML = skills
    .map(skill => `<li>${skill.name} (${skill.level}/10)</li>`)
    .join('');
}

/**
 * Render the skill score display.
 */
function renderSkillScore() {
  const scoreDisplay = document.getElementById('skill-score');
  try {
    const avg = calculateAverageSkill(profileData.skills);
    const message = getScoreMessage(avg);
    scoreDisplay.textContent = `Average Skill Score: ${avg}/10 — ${message}`;
  } catch (error) {
    scoreDisplay.textContent = 'Unable to calculate skill score.';
    showError(error.message);
  }
}

/**
 * Render experience section.
 */
function renderExperience() {
  const container = document.getElementById('experience-list');
  container.innerHTML = profileData.experience
    .map(formatExperienceItem)
    .join('');
}

/**
 * Render projects section.
 */
function renderProjects() {
  const container = document.getElementById('projects-list');
  container.innerHTML = profileData.projects
    .map(formatProjectCard)
    .join('');
}

/**
 * Render education section.
 */
function renderEducation() {
  const container = document.getElementById('education-list');
  container.innerHTML = profileData.education
    .map(formatEducationItem)
    .join('');
}

/**
 * Render contact information.
 */
function renderContact() {
  const container = document.getElementById('contact-info');
  const { email, phone, location, linkedin } = profileData.contact;
  container.innerHTML = `
    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Location:</strong> ${location}</p>
    <p><strong>LinkedIn:</strong> <a href="https://${linkedin}" target="_blank" rel="noopener">${linkedin}</a></p>
  `;
}

/**
 * Show a friendly error message.
 * @param {string} message - Error message to display.
 */
function showError(message) {
  const errorEl = document.getElementById('error-message');
  errorEl.textContent = `Something went wrong: ${message}`;
  errorEl.style.display = 'block';
  setTimeout(() => {
    errorEl.style.display = 'none';
  }, 5000);
}

// ============================================================
// EVENT HANDLERS
// ============================================================

/**
 * Handle skill search.
 */
function handleSearch() {
  const term = document.getElementById('skill-search').value;
  const filtered = filterSkills(profileData.skills, term);
  renderSkills(filtered);
}

/**
 * Handle clear search.
 */
function handleClear() {
  document.getElementById('skill-search').value = '';
  renderSkills(profileData.skills);
}

// ============================================================
// INITIALIZATION
// ============================================================

/**
 * Initialize the application.
 */
function init() {
  renderHeader();
  renderSkills(profileData.skills);
  renderSkillScore();
  renderExperience();
  renderProjects();
  renderEducation();
  renderContact();

  // Attach event listeners
  document.getElementById('search-btn').addEventListener('click', handleSearch);
  document.getElementById('clear-btn').addEventListener('click', handleClear);
  document.getElementById('skill-search').addEventListener('keyup', (event) => {
    if (event.key === 'Enter') handleSearch();
  });

  // Demonstrate safeParseJSON with a callback
  const demoJSON = '{"status":"ok"}';
  const parsed = safeParseJSON(demoJSON);
  if (parsed) {
    console.log('JSON parsed successfully:', parsed);
  }
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', init);