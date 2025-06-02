import * as THREE from 'three';

// Create a single texture loader instance for efficiency
const textureLoader = new THREE.TextureLoader();

// Function to create a generic planet mesh
export function createPlanet(data) {
    const geometry = new THREE.SphereGeometry(data.radius, 64, 64);
    
    // Create material with base color (fallback)
    const material = new THREE.MeshStandardMaterial({ 
        color: data.color,
        roughness: 0.7
    });
    
    // Load texture if available
    if (data.texture) {
        textureLoader.load(
            data.texture,
            (texture) => {
                // Success callback - apply texture
                material.map = texture;
                material.needsUpdate = true;
                console.log(`✅ Loaded texture for ${data.name}`);
            },
            (progress) => {
                // Progress callback (optional)
                console.log(`Loading texture for ${data.name}: ${Math.round(progress.loaded / progress.total * 100)}%`);
            },
            (error) => {
                // Error callback - fallback to solid color
                console.warn(`❌ Failed to load texture for ${data.name}:`, error);
                console.log(`🎨 Using fallback color for ${data.name}`);
            }
        );
    }
    
    const planetMesh = new THREE.Mesh(geometry, material);
    planetMesh.name = data.name;
    
    // Store planet data as properties on the mesh for easy access
    planetMesh.userData = {
        planetData: data,
        orbitalAngle: Math.random() * Math.PI * 2, // Random starting orbital position
        orbitalRadius: data.distance
    };
    
    return planetMesh;
} 