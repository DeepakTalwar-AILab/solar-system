// Approximate data for planets - scaled for visualization
// Distances and radii are not to actual scale relative to each other but chosen for a good scene layout.
// Orbital and rotation speeds are scaled for visual appeal, not astronomical accuracy.

export const planetData = [
    {
        name: "Mercury",
        color: 0xaaaaaa, // Grey (fallback if texture fails)
        radius: 0.2,     // Scaled radius
        distance: 3,     // Scaled distance from Sun (orbital radius)
        orbitalSpeed: 0.02,  // Speed of orbit around Sun
        rotationSpeed: 0.01, // Speed of rotation on own axis
        texture: "/textures/2k_mercury.jpg"
    },
    {
        name: "Venus",
        color: 0xe8d8a0, // Yellowish-white
        radius: 0.3,
        distance: 5,
        orbitalSpeed: 0.015,
        rotationSpeed: 0.008,
        texture: "/textures/2k_venus_surface.jpg"
    },
    {
        name: "Earth",
        color: 0x6699cc, // Blue
        radius: 0.35,
        distance: 7.5,
        orbitalSpeed: 0.01,
        rotationSpeed: 0.02,
        texture: "/textures/2k_earth_daymap.jpg"
    },
    {
        name: "Mars",
        color: 0xff7f50, // Reddish-orange (Coral)
        radius: 0.25,
        distance: 10.5,
        orbitalSpeed: 0.008,
        rotationSpeed: 0.018,
        texture: "/textures/2k_mars.jpg"
    },
    {
        name: "Jupiter",
        color: 0xffd700, // Gold/Orange-ish
        radius: 0.8,
        distance: 16,
        orbitalSpeed: 0.005,
        rotationSpeed: 0.04, // Jupiter rotates very fast
        texture: "/textures/2k_jupiter.jpg"
    },
    {
        name: "Saturn",
        color: 0xf0e68c, // Khaki/Pale yellow
        radius: 0.7,
        distance: 22,
        orbitalSpeed: 0.003,
        rotationSpeed: 0.035,
        texture: "/textures/2k_saturn.jpg"
    },
    {
        name: "Uranus",
        color: 0xadd8e6, // Light blue
        radius: 0.5,
        distance: 28,
        orbitalSpeed: 0.002,
        rotationSpeed: 0.025,
        texture: "/textures/2k_uranus.jpg"
    },
    {
        name: "Neptune",
        color: 0x4169e1, // Royal blue
        radius: 0.48,
        distance: 34,
        orbitalSpeed: 0.001,
        rotationSpeed: 0.022,
        texture: "/textures/2k_neptune.jpg"
    }
]; 