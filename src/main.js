import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { createSun } from './objects/Sun';
import { createStarfield } from './utils/scene';
import { planetData } from './data/planetData'; // Import planet data
import { createPlanet } from './objects/Planet'; // Import planet creation function
import { createMoon } from './objects/Moon'; // Import moon creation function

let camera, scene, renderer;
let sun;
const planets = []; // Array to hold planet objects
let earth; // Reference to Earth for moon positioning
let moon;  // Reference to the Moon

function init() {
    // Scene
    scene = new THREE.Scene();

    // Camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.z = 25; // Moved back a bit more to see orbital motion
    camera.position.y = 10;

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('app').appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2); // Further reduced ambient light
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 300, 0, 1); // Light emulating the sun
    scene.add(pointLight);

    // Sun
    sun = createSun();
    scene.add(sun);
    pointLight.position.set(0, 0, 0); // Position point light at the sun's center

    // Planets
    planetData.forEach(data => {
        const planet = createPlanet(data);
        
        // Initial positioning based on orbital angle
        const angle = planet.userData.orbitalAngle;
        planet.position.x = Math.cos(angle) * data.distance;
        planet.position.z = Math.sin(angle) * data.distance;
        planet.position.y = 0;
        
        scene.add(planet);
        planets.push(planet); // Store for potential future animations/interactions
        
        // Store reference to Earth for moon positioning
        if (data.name === "Earth") {
            earth = planet;
        }
    });

    // Earth's Moon
    moon = createMoon();
    scene.add(moon);

    // Starfield
    const starfield = createStarfield();
    scene.add(starfield);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 3;
    controls.maxDistance = 200; // Increased for better orbital viewing

    // Handle window resize
    window.addEventListener('resize', onWindowResize, false);

    animate();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    // Sun animation
    if (sun) {
        sun.rotation.y += 0.001; // Slow rotation
    }

    // Planet orbital motion and individual rotation
    planets.forEach(planet => {
        const data = planet.userData.planetData;
        
        // Update orbital angle
        planet.userData.orbitalAngle += data.orbitalSpeed;
        
        // Calculate new orbital position
        const angle = planet.userData.orbitalAngle;
        planet.position.x = Math.cos(angle) * data.distance;
        planet.position.z = Math.sin(angle) * data.distance;
        
        // Individual planet rotation
        planet.rotation.y += data.rotationSpeed;
    });

    // Moon orbital motion around Earth
    if (earth && moon) {
        // Update moon's orbital angle
        moon.userData.orbitalAngle += moon.userData.orbitalSpeed;
        
        // Position moon relative to Earth
        const moonAngle = moon.userData.orbitalAngle;
        moon.position.x = earth.position.x + Math.cos(moonAngle) * moon.userData.orbitalRadius;
        moon.position.z = earth.position.z + Math.sin(moonAngle) * moon.userData.orbitalRadius;
        moon.position.y = earth.position.y;
        
        // Moon rotation
        moon.rotation.y += moon.userData.rotationSpeed;
    }

    renderer.render(scene, camera);
}

init(); 