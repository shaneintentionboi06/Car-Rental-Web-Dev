🏎️ Lumina Motors - Luxury Car Rental InterfaceExperience the Thrill of the Drive. > A high-performance, interactive car rental platform built with pure HTML, CSS, and Vanilla JavaScript.(Note: Replace hero-car.jpg with a screenshot of your actual site once you have it!)📖 About the ProjectLumina Motors is a concept car rental website designed to showcase high-end vehicles with a cinematic user experience.The project focuses on "Sick UI" principles:Immersive 3D Video Hero: A full-screen rendered sequence (created in Blender) that interacts with user input.Glassmorphism: Premium frosted-glass overlays for text and UI elements.Snap Scrolling: A presentation-style layout where each section snaps into full view.Interactive Fleet Grid: Cards that reveal details and booking options on hover.🛠️ Tech StackFrontend: HTML5, CSS3, JavaScript (Vanilla - ES6+)Assets: Blender (Cycles/Eevee Renders), 3D ModelsDesign: Custom Dark Mode Theme with "Lumina Orange" accents.📂 Project StructureBased on the current development environment:Lumina-Motors/
│
├── index.html          # Main structure (Hero, Fleet, Features)
├── style.css           # All styling (Variables, Grid, Animations)
├── script.js           # Logic (Hamburger Menu, Video Interaction)
│
├── images/             # Exported renders and static assets
│   ├── hero-car.jpg
│   ├── fleet/
│   └── icons/
│
├── model/              # (Ignored by Git) Raw Blender files & Textures
│
└── README.md           # Project Documentation
✨ Key Features (Implemented & Planned)1. Interactive Hero SectionFull Viewport Video: Plays an intro sequence on load.Interactive State: User presses a button to continue the cinematic sequence.Mute Toggle: Custom UI control for audio experience.2. Navigation & UIResponsive Hamburger Menu: Custom animated icon (turns into 'X') with a blurred backdrop overlay.Profile Dummy: A placeholder login/profile dropdown for future backend integration.3. The FleetTop Picks Section: A CSS Grid layout showcasing the best cars.Hover Effects: Cards expand to show "Book Now" button.