import * as THREE from 'three';

// Create texture loader
const textureLoader = new THREE.TextureLoader();

export function createSun() {
    const geometry = new THREE.SphereGeometry(1, 64, 64); // Radius 1, increased segments
    
    // Create material with emissive properties
    const material = new THREE.MeshStandardMaterial({
        color: 0xffff00,       // Yellow color (fallback)
        emissive: 0xffaa00,    // Orange-yellow emissive glow
        emissiveIntensity: 0.8   // Reduced intensity when using texture
    });
    
    // Load Sun texture
    textureLoader.load(
        `${import.meta.env.BASE_URL}textures/2k_sun.jpg`,
        (texture) => {
            // Success callback - apply texture
            material.map = texture;
            material.emissiveMap = texture; // Use same texture for emissive glow
            material.needsUpdate = true;
            console.log("✅ Loaded Sun texture");
        },
        (progress) => {
            console.log(`Loading Sun texture: ${Math.round(progress.loaded / progress.total * 100)}%`);
        },
        (error) => {
            // Error callback - fallback to solid emissive color
            console.warn("❌ Failed to load Sun texture:", error);
            console.log("🌞 Using fallback emissive material for Sun");
            // Increase emissive intensity for fallback
            material.emissiveIntensity = 1.5;
        }
    );
    
    const sunMesh = new THREE.Mesh(geometry, material);
    sunMesh.name = "Sun"; // Useful for debugging

    return sunMesh;
} 