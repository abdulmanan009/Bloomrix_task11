# Personal Profile - Dynamic JavaScript Project

## Overview
This project is a dynamic personal profile page built with HTML, CSS, and vanilla JavaScript. It demonstrates core JavaScript concepts including objects, arrays, functions, arrow functions, callbacks, array methods (map, filter, find, reduce), template literals, destructuring, spread syntax, try/catch error handling, and DOM manipulation.

## How to Run
1. Download or clone the project files (`index.html`, `app.js`, `README.md`).
2. Open `index.html` directly in any modern web browser (Chrome, Firefox, Edge, Safari).
3. No build step or server is required — the page runs entirely client-side.

## Features
- Dynamically renders profile information from a JavaScript object.
- Displays skills, experience, projects, education, and contact details.
- Skill search/filter feature with case-insensitive matching.
- Average skill score calculation with conditional feedback messages.
- Friendly error handling using try/catch.
- Clean separation between data (`profileData`) and UI rendering functions.

## JavaScript Concepts Demonstrated
- `const`/`let` and strict mode (`'use strict'`)
- Objects, nested objects, arrays of objects
- Functions with parameters and return values
- Arrow functions and callbacks
- `map`, `filter`, `reduce`
- Template literals
- Destructuring (object and array)
- Spread syntax (used in `filterSkills` via `[...skills]`)
- `try/catch` error handling
- Conditional logic (`if/else if/else`, ternary)
- DOM manipulation and event listeners

## Limitations
- This is a static, client-side-only project. No backend or database is included.
- The profile data is hardcoded in `app.js`; there is no form to edit it.
- No automated tests are included. The project was not run in a browser as part of this generation; manual testing is recommended.
- The `safeParseJSON` function is demonstrated with a hardcoded JSON string; it is not connected to user input.

## File Structure
- `index.html` — Page structure and styles.
- `app.js` — All JavaScript logic (data, utilities, rendering, events).
- `README.md` — This file.