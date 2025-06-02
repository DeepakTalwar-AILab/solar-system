import * as THREE from 'three';

// Create texture loader
const textureLoader = new THREE.TextureLoader();

export function createMoon() {
    const geometry = new THREE.SphereGeometry(0.1, 32, 32); // Small moon
    const material = new THREE.MeshStandardMaterial({ 
        color: 0xcccccc, // Light grey (fallback)
        roughness: 0.8
    });
    
    // Load Moon texture
    textureLoader.load(
        "./textures/2k_moon.jpg",
        (texture) => {
            // Success callback - apply texture
            material.map = texture;
            material.needsUpdate = true;
            console.log("✅ Loaded Moon texture");
        },
        (progress) => {
            console.log(`Loading Moon texture: ${Math.round(progress.loaded / progress.total * 100)}%`);
        },
        (error) => {
            // Error callback - fallback to solid color
            console.warn("❌ Failed to load Moon texture:", error);
            console.log("🌙 Using fallback color for Moon");
        }
    );
    
    const moonMesh = new THREE.Mesh(geometry, material);
    moonMesh.name = "Moon";
    
    // Store moon data
    moonMesh.userData = {
        orbitalAngle: 0,
        orbitalRadius: 1.0,    // Distance from Earth
        orbitalSpeed: 0.05,    // Speed around Earth (faster than planets around Sun)
        rotationSpeed: 0.02    // Moon's rotation
    };
    
    return moonMesh;
} 