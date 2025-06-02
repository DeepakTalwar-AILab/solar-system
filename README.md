# 🌌 3D Solar System

An interactive 3D solar system built with modern web technologies. Explore planets, watch orbital mechanics, and learn about our solar system in an immersive 3D environment.

## 🚀 Tech Stack

**Simple & Powerful:**
- **HTML5** - Structure and Canvas
- **CSS3** - Styling and animations
- **JavaScript (ES6+)** - Core logic and interactions
- **Three.js** - 3D graphics and WebGL rendering
- **Vite** - Fast development server and build tool

**Why this stack?**
- ✅ Beginner-friendly
- ✅ No complex frameworks to learn
- ✅ Runs in any modern browser
- ✅ Fast development with hot reload
- ✅ Professional 3D capabilities with Three.js

## 📋 Prerequisites

- **Node.js** (v16 or higher) & **npm** - These are required to install project dependencies and run the Vite development server.
  - *If you don't have admin rights to install Node.js system-wide, you can download the Windows binary (.zip) from [nodejs.org](https://nodejs.org/) and run `node.exe` and `npm.cmd` directly from the extracted folder.*
- **Modern web browser** (Chrome, Firefox, Safari, Edge)
- **Basic knowledge of JavaScript** (helpful but not required)

## 🛠️ Quick Start

1.  **Set up Node.js & npm**:
    *   Ensure Node.js and npm are installed and accessible in your terminal, OR
    *   If using a portable Node.js binary, make sure you know the path to `npm.cmd`.
2.  **Clone or download this project**.
3.  **Navigate to the project directory** in your terminal:
    ```bash
    cd 3d-solar-system
    ```
4.  **Install dependencies**:
    *   If npm is in your PATH:
        ```bash
        npm install
        ```
    *   If using a portable Node.js (replace `C:\path\to\your\NodeJS` with your actual path):
        ```bash
        C:\path\to\your\NodeJS\npm.cmd install
        ```
5.  **Start the development server**:
    *   If npm is in your PATH:
        ```bash
        npm run dev
        ```
    *   If using a portable Node.js (replace `C:\path\to\your\NodeJS` with your actual path):
        ```bash
        C:\path\to\your\NodeJS\npm.cmd run dev
        ```
6.  **Open your browser** and navigate to the local URL provided by Vite (usually `http://localhost:5173` or similar).

## 🎯 Project Milestones

### 🌟 Milestone 1: Solar System Overview (Week 1)
**Goal**: Render the Sun and all major planets (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune) as basic spheres in 3D space. Set up a basic Three.js scene with camera, lighting, and controls.

**Deliverables**:
- [x] Set up Three.js scene with camera, lights, and renderer
- [x] Create a 3D sphere for the Sun
- [x] Implement basic controls (mouse orbit, zoom)
- [x] Add starfield background
- [x] Sun rotation animation
- [ ] Create simple sphere representations for all 8 major planets
- [ ] Position planets at approximate distances from the Sun in the 3D scene
- [ ] (Optional) Assign basic distinct colors to each planet sphere

**Key Files to be Modified/Created**:
- `index.html` - Main HTML structure (no changes expected)
- `src/main.js` - Three.js scene setup, planet creation and positioning
- `src/objects/Sun.js` - Sun object class (no changes expected)
- `src/objects/Planet.js` - New: Generic planet object class/function
- `src/data/planetData.js` - New: Basic data for planets (size, initial position, color)
- `src/utils/scene.js` - Scene utilities (no changes expected)

**Learning Focus**: Three.js scene population, basic object creation and positioning, data management for objects.

---

### 🪐 Milestone 2: Realism & Basic Dynamics (Week 2-3)
**Goal**: Add realism and initial dynamic behavior to the solar system.

**Deliverables**:
- [ ] Apply realistic textures to the Sun and all planets
- [ ] Implement basic orbital paths for all planets around the Sun
- [ ] Implement planet rotation on their own axes
- [ ] Add Earth's moon with its orbit around Earth
- [ ] Refine visual scaling for sizes and distances
- [ ] Enhance `Planet.js` for textures and individual properties
- [ ] (Optional) Basic UI displaying planet names upon interaction

**Key Files to be Modified/Created**:
- `src/main.js` - Orbital mechanics implementation, animation updates
- `src/objects/Planet.js` - Texture loading, individual rotation logic
- `src/objects/Moon.js` - New: Moon object class/function
- `src/data/planetData.js` - Add texture paths, orbital parameters
- `src/ui/PlanetInfo.js` - New: Basic UI component for planet names

**Learning Focus**: Texture mapping, object-oriented programming for 3D objects, basic animation of orbital paths, parent-child relationships in 3D (for moons).

---

### 🌌 Milestone 3: Advanced Features & Interactions (Week 4-5)
**Goal**: Enhance the solar system with more details, interactions, and advanced features.

**Deliverables**:
- [ ] Add other major moons for planets like Jupiter, Saturn, etc.
- [ ] Implement Saturn's ring system
- [ ] Create interactive features: planet selection, camera focusing/following
- [ ] Implement time controls (speed up, slow down, pause simulation)
- [ ] Display detailed planet information panels
- [ ] Visualize the asteroid belt
- [ ] Performance optimizations
- [ ] Mobile responsiveness

**Key Files to be Modified/Created**:
- `src/main.js` - Advanced interaction logic, time controls
- `src/objects/RingSystem.js` - New: Saturn's rings
- `src/objects/AsteroidBelt.js` - New: Asteroid field visualization
- `src/ui/Controls.js` - New: UI for time and view controls
- `src/ui/PlanetInfo.js` - Enhance for detailed information
- `src/utils/cameraControls.js` - New: Advanced camera logic
- `src/utils/performance.js` - New: Optimization utilities

**Learning Focus**: Advanced Three.js techniques, complex scene management, UI/UX for 3D applications, performance profiling and optimization, event handling for interactions.

## 🗂️ Project Structure

```
3d-solar-system/
├── index.html              # Main HTML file
├── package.json             # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── src/
│   ├── main.js             # Entry point
│   ├── styles/
│   │   └── main.css        # Global styles
│   ├── objects/            # 3D object classes
│   │   ├── Sun.js
│   │   ├── Planet.js
│   │   ├── Moon.js
│   │   └── RingSystem.js
│   ├── data/               # Planet data and constants
│   │   └── planetData.js
│   ├── ui/                 # User interface components
│   │   ├── Controls.js
│   │   └── PlanetInfo.js
│   ├── utils/              # Utility functions
│   │   ├── scene.js
│   │   └── math.js
│   └── assets/             # Textures and models
│       ├── textures/
│       └── sounds/
└── dist/                   # Built files (generated)
```

## 🎨 Assets Needed

**Planet Textures** (2048x1024 recommended):
- sun.jpg, mercury.jpg, venus.jpg, earth.jpg, mars.jpg
- jupiter.jpg, saturn.jpg, uranus.jpg, neptune.jpg
- moon.jpg, saturn-rings.png

**Free texture sources**:
- [Solar System Scope](https://www.solarsystemscope.com/textures/)
- [NASA Images](https://images.nasa.gov/)
- [Planet Pixel Emporium](https://planetpixelemporium.com/planets.html)

## 🎮 Features Roadmap

**Core Features**:
- ✅ Realistic planet sizes and distances (scaled for visibility)
- ✅ Accurate orbital periods (time-compressed)
- ✅ Planet rotation and axial tilt
- ✅ Interactive camera controls
- ✅ Planet information display

**Advanced Features**:
- 🔄 Asteroid belt
- 🔄 Comet trajectories
- 🔄 Space missions and spacecraft
- 🔄 Real-time solar system data
- 🔄 VR/AR support

## 🎯 Learning Outcomes

By the end of this project, you'll have learned:
- **3D Graphics**: Three.js fundamentals, lighting, materials, textures
- **Math**: 3D coordinate systems, orbital mechanics, trigonometry
- **Programming**: Object-oriented JavaScript, modular code organization
- **Web Development**: Modern build tools, responsive design, performance optimization
- **Astronomy**: Solar system facts, planetary characteristics, orbital dynamics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📚 Resources

**Three.js Learning**:
- [Three.js Documentation](https://threejs.org/docs/)
- [Three.js Examples](https://threejs.org/examples/)
- [Bruno Simon's Three.js Journey](https://threejs-journey.com/)

**Astronomy Data**:
- [NASA Solar System Exploration](https://solarsystem.nasa.gov/)
- [JPL Small-Body Database](https://ssd.jpl.nasa.gov/sbdb.cgi)

**Math & Physics**:
- [Orbital Mechanics](https://en.wikipedia.org/wiki/Orbital_mechanics)
- [Kepler's Laws](https://en.wikipedia.org/wiki/Kepler%27s_laws_of_planetary_motion)

## 📄 License

MIT License - Feel free to use this project for learning and personal projects!

---

**Happy Coding! 🚀** 

*"The cosmos is within us. We are made of star-stuff."* - Carl Sagan 