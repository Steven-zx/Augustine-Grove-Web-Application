Augustine Grove Web Application

## Project Overview

The Augustine Grove Web Application is a modern, responsive platform designed to enhance community living in Augustine Grove, Iloilo City. 
It serves as a central hub for residents to access important announcements, explore community amenities, generate visitor QR passes, view an interactive community map, 
and browse a rich image gallery. Built with a focus on user experience and ease of access, the application aims to streamline communication and provide valuable resources 
for the community.

## Features

This application includes the following key functionalities:

* Responsive Navigation Bar: A sticky navigation bar that adapts to different screen sizes (desktop and mobile with a slide-in menu).
* Dynamic Hero Section: A carousel of background images with engaging welcome text and calls to action.
* Community Overview: A section highlighting the key benefits and features of Augustine Grove (Secure, Peaceful, Convenient).
* Latest Announcements: A dynamic carousel displaying recent community updates, fetched from a database (Supabase), with "Read More" links to detailed announcement pages.
* Amenities Showcase: Dedicated sections for various community amenities (Clubhouse, Swimming Pool, Basketball Court, Security, Park & Playground) with short descriptions.
* Visitor QR Pass Generator:
    * A modal interface allowing residents to generate unique QR codes for visitors.
    * Captures visitor details (name, resident name, visit date, purpose, etc.).
    * Generates a printable QR code.
    * Saves visitor pass data to a Supabase database.
      
* Interactive Community Map:
    * Displays the Augustine Grove community map.
    * Fullscreen Viewer: Clicking the map opens it in a dedicated fullscreen modal.
    * Zoom & Pan: In fullscreen mode, users can zoom in/out using dedicated buttons (+, -, Reset) or the mouse wheel, and pan (drag) the map when zoomed in.
      
* Image Gallery:
    * A categorized image gallery showcasing various aspects of Augustine Grove.
    * Tab Filtering: Users can filter images by categories (e.g., "All", "Pool", "Clubhouse", "Basketball", "Others").
    * Fullscreen Viewer: Clicking any gallery image opens it in a fullscreen modal.
    * Image Download: A "Save" button in the fullscreen gallery allows users to download the displayed image.

## Deployment

The Augustine Grove web application is deployed using Netlify, leveraging a continuous integration and continuous deployment (CI/CD) pipeline directly from its GitHub 
repository.

* Deployment Pipeline:
    * GitHub (main branch): All production-ready code changes are pushed to the main branch of this repository.
    * Netlify (Production): Netlify is configured to monitor the main branch. Any new commit or merge to this branch automatically triggers a new build and deployment of
      the application to the live production URL.
    * There are no separate explicit staging or testing environments in this current pipeline setup; the main branch serves as the source for immediate production releases.

* Tools Used:
    * GitHub: For version control and hosting the source code.
    * Netlify: For automated continuous deployment, static site hosting, and build automation (automatically detecting project configuration).

* Deployment Schedule/Frequency:
    Deployments are continuous and automated. A new version of the application is deployed to production automatically upon every successful push to the main branch.

* Version History and Release Notes:
    * Version 1.1 (Initial Release): The foundational release, establishing the basic website structure and initial content.
    * Version 1.2 (Current Release): This release represents a significant update, introducing all the interactive features listed above, along with UI/UX refinements,
      bug fixes, and performance optimizations.

## Getting Started

To set up and run the project locally, follow these steps:

### Prerequisites

* Node.js and npm (Node Package Manager) installed.
* A GitHub account.
* A Supabase project with your visitors and announcements tables configured, and your Supabase URL and Public API Key ready.

### Installation

1.  Clone the repository:
    git clone https://github.com/your-username/Augustine-Grove-Web-Application.git
    cd Augustine-Grove-Web-Application
2.  Install dependencies:
    This project uses Tailwind CSS. You'll need to install its dependencies.
    npm install
3.  Configure Supabase:
    Open your main JavaScript file (likely index.html if your scripts are inline, or a separate .js file).
    Find the lines for Supabase configuration and replace the placeholders with your actual Supabase project details:
    window.supabaseUrl = 'https://your-supabase-url.supabase.co'; // Replace with your Supabase URL
    window.supabaseKey = 'YOUR_SUPABASE_PUBLIC_ANON_KEY'; // Replace with your Supabase Public API Key
    window.supabase = supabase.createClient(window.supabaseUrl, window.supabaseKey);

### Running Locally

1.  Start the Tailwind CSS build process:
    This command will watch for changes in your HTML and recompile your Tailwind CSS into ../dist/output.css.
    npm run dev
    # or npx tailwindcss -i ./input.css -o ./dist/output.css --watch
    (Adjust the input/output paths if your tailwind.config.js specifies different ones).
2.  Open the index.html file:
    Simply open the index.html file in your web browser. You can drag and drop it into the browser window, or use a local server extension (like Live Server for VS Code)
    for better development experience.

## Usage

* Navigation: Use the top navigation bar or the mobile sidebar to navigate between sections.
* QR Pass: Click the "Generate QR" button in the Amenities section to open the modal. Fill in the details and click "Generate QR Code".
* Interactive Map: Click the "Augustine Community Map" image to open it in fullscreen. Use the +, -, and Reset buttons, or your mouse wheel, to zoom. Click and drag the
  map when zoomed in to pan.
* Gallery: Navigate to the Gallery page. Click the category tabs to filter images. Click any image to view it in fullscreen. Use the "Save" button to download the image.

## Testing

This section outlines the manual testing process performed on the Augustine Grove Web Application.

### Testing Methodology

* Manual Testing: Direct interaction with the application's user interface to verify functionality, responsiveness, and user experience.
* Exploratory Testing: Ad-hoc testing to discover unexpected behaviors and edge cases.

### Test Environment

* Deployment URL: augustinegrove.netlify.app
* Browsers Tested: Google Chrome (latest), Mozilla Firefox (latest), Microsoft Edge (latest).
* Devices Tested: Desktop (various resolutions), Tablet (portrait/landscape), Mobile Phone (portrait/landscape).
